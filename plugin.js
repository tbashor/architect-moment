'use strict';

module.exports = function(options, imports, register) {

  var log = imports.debug('plugin:moment');
  log('start');

  var api = {
    moment: require('moment'),
    timezone: require('moment-timezone')
  };

  log('register');
  register(null, api);
};
