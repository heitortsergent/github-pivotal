#!/usr/bin/env node
require('source-map-support').install();

//module.exports = require('./lib/src/server');

var Server = require('./lib/src/server');

var server = new Server(3000);

server._port;
//
// server.startServer();

var http = require('http');
var createHandler = require('github-webhook-handler');
var handler = createHandler({ path: '/github-webhook', secret: 'myhashsecret' });

http.createServer(function (req, res) {
  handler(req, res, function (err) {
    res.statusCode = 404;
    res.end('no such location');
  });
}).listen(3001);

handler.on('error', function (err) {
  console.error('Error:', err.message);
});

handler.on('push', function (event) {
  console.log('Received a push event for %s to %s',
    event.payload.repository.name,
    event.payload.ref);
});

handler.on('issues', function (event) {
  console.log('Received an issue event for %s action=%s: #%d %s',
    event.payload.repository.name,
    event.payload.action,
    event.payload.issue.number,
    event.payload.issue.title);
});

handler.on('issue_comment', function (event) {
  console.log('Received an issue event for %s action=%s: #%d %s',
    event.payload.repository.name,
    event.payload.action,
    event.payload.issue.number,
    event.payload.issue.title);
});

handler.on('pull_request', function (event) {
  console.log('Received a pull request event for %s action=%s: #%d %s',
    event.payload.repository.name,
    event.payload.action,
    event.payload.pull_request.number,
    event.payload.pull_request.title);
});

handler.on('pull_request_review_comment', function (event) {
  console.log('Received a pull request event for %s action=%s: #%d %s',
    event.payload.repository.name,
    event.payload.action,
    event.payload.pull_request.number,
    event.payload.pull_request.title);
});
