/**
 * Created by nodefx on 8/28/14.
 */

var http = require('http')
var fs = require('fs')

http.createServer(function(request, response){
    var mp4 = 'SX28_hd.mp4';
    var stat = fs.statSync(mp4);

    response.writeHead(200, {
        'Content-Type': 'video/mp4',
        'Content-Length': stat.size
    })

    var readableStream = fs.createReadStream(mp4);
    readableStream.pipe(response);
}).listen(3000)
