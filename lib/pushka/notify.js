module.exports = Notifier;

var Pushbullet = require('pushbullet'),
    Promise = require('bluebird');

Promise.promisifyAll(Pushbullet.prototype);

function Notifier(pushbulletApiKey) {
    var pb = new Pushbullet(pushbulletApiKey);
    this.push = Promise.promisify(pb.note, pb);
}

Notifier.prototype.notify = notify;

function notify(title, msg) {
    return this.push(null, title, msg);
}


