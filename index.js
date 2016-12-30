'use strict';

const http = require('http');
const net = require('net');

function request(cltReq, cltRes) {
  let url = 'http://www.google.com/logos/doodles/2016/holidays-2016-day-3-southern-hemisphere-5185011929055232-hp2x.gif';
  let pReq = http.request(url, function(res) {
    cltRes.writeHead(res.statusCode, res.headers);
    res.pipe(cltRes);
  }).on('error', function(e) {
    cltRes.end();
  });
  cltReq.pipe(pReq);
}


http.createServer()
  .on('request', request)
  .listen(8080, '0.0.0.0');
