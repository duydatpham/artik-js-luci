var events = require('events');
var util = require('util');
var artik = require('artik-sdk');

if (!!artik.RemoteCharacteristic) {
    module.exports = artik.GattClient
} else {

    artik.RemoteCharacteristic.prototype.__proto__ = events.EventEmitter.prototype;
    artik.GattClient.prototype.__proto__ = events.EventEmitter.prototype;

    module.exports = artik.GattClient;
}
