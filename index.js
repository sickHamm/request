'use strict';

const http = require('http');
const net = require('net');

function request(cltReq, cltRes) {
  let url = 'http://www.baidu.com/img/bd_logo1.png';
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
