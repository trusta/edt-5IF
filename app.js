'use strict';

/**
 * Module dependencies
 */
var express = require('express');
var async = require('async');
var ical = require('ical');
var icalGenerator = require('ical-generator')();

var config = require('./config/config.js');

icalGenerator.setName(config.name);
icalGenerator.setDomain(config.domain);
icalGenerator.setProdID(config.prodID);


var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/calendar', function(req, res) {
    ical.fromURL(config.url, {}, function(err, events) {
        async.each(events, function(ev, callback) {
            console.log('uid :', ev.uid);
            console.log(ev.summary, 'is in', ev.location, 'on the', ev.start.getDate());
            icalGenerator.addEvent(ev);
            callback();
        }, function() {
            icalGenerator.serve(res);
        });
    });
});


/**
 * Start Server
 */
app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});
