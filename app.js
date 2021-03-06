'use strict';

/**
 * Module dependencies
 */
var express = require('express');
var async = require('async');
var ical = require('ical');
var icalGeneratorModule = require('ical-generator');

var config = require('./config/config.js');

var modules = [].concat(
    config.modules.common.classes,
    config.modules.common.td,
    config.modules.common.other,
    config.modules.projets,
    config.modules.seminaires.insa,
    config.modules.seminaires.huma,
    config.modules.seminaires.entreprises,
    config.modules.seminaires.etrangers,
    config.modules.seminaires.facultatifs
);


var app = express();

app.set('port', process.env.PORT || 3000);

app.use(express.static(__dirname + '/public'));

app.get('/lessons', function(req, res) {
    res.json(config.modules);
    res.end();
});

app.get('/calendar', function(req, res) {
    var icalGenerator = icalGeneratorModule();

    icalGenerator.setName(config.name);
    icalGenerator.setDomain(config.domain);
    icalGenerator.setProdID(config.prodID);

    var patterns = [];

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
                        async.eachSeries(config.replace, function(replace, cb) {
                            ev.summary = ev.summary.replace(replace.match, replace.replacement);
                            cb();
                        }, function() {
                            icalGenerator.addEvent(ev);
                            callback();
                        });
                    } else {
                        callback();
                    }
                });
            }, function() {
                res.send(icalGenerator.toString());
                res.end();
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
