module.exports = Pushka;

var process = require('process'),
    Notifier = require('./notify');
    
var argv = process.argv.slice(2),
    env = process.env;

function Pushka() { }

Pushka.prototype.run = run;

function run() {
    var notifier = new Notifier(env.PUSHBULLET_API_KEY);
    notifier.notify(argv[0], argv[1]).done();
}
