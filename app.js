'use strict';

/**
 * Module dependencies
 */
var express = require('express');
var async = require('async');
var ical = require('ical');

var config = require('./config/config.js');

var modules = [].concat(
    config.modules.lessons.letters,
    config.modules.lessons.numbers,
    config.modules.projets,
    config.modules.seminaires.insa,
    config.modules.seminaires.huma,
    config.modules.seminaires.entreprises,
    config.modules.seminaires.etrangers,
    config.modules.seminaires.facultatifs
);


var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/calendar', function(req, res) {
    var icalGenerator = require('ical-generator')();

    icalGenerator.setName(config.name);
    icalGenerator.setDomain(config.domain);
    icalGenerator.setProdID(config.prodID);

    var patterns = config.modules.common;

    async.each(modules, function(module, callback) {
        if (req.param(module.urlParam)) {
            patterns.push(module.pattern);
        }
        callback();
    }, function() {
        ical.fromURL(config.url, {}, function(err, events) {
            // Loop on all events and add only lessons in modules
            async.each(Object.keys(events), function(k, callback) {
                var ev = events[k];
                async.each(patterns, function(pattern, cb) {

                    // Test if the lesson is in modules
                    if (ev.summary.match(pattern) !== null) {
                        cb(true);
                    } else {
                        cb();
                    }
                }, function(result) {
                    if (result) {
                        icalGenerator.addEvent(ev);
                    }
                    callback();
                });
            }, function() {
                icalGenerator.serve(res);
            });
        });
    });
});


/**
 * Start Server
 */
app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
