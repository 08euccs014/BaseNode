let log4js = require('log4js');
let logger = log4js.getLogger('all');

global.MLogger =logger;

global.MPromise = require('bluebird');
require('./middleware')
require('./base/library/errors')
require('./base/library/request')
require('./base/library/response')