/**
 * Created by massi on 30/08/15.
 */
var io=require('socket.io-client');

var socket= io.connect('http://192.168.10.115:3000');

console.log("GET BROWSE SOURCES\n\n");
socket.emit('getBrowseSources');

socket.on('pushBrowseSources',function(data)
{
    console.log(JSON.stringify(data));
});
