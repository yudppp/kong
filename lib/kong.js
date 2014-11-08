module.exports = kong;

var ECT = require('ect');
var renderer = ECT({ root : __dirname + '/views', ext : '.ect' });

var DEFAULT_VIEW_DIRNAME = '/views';
var DEFAULT_VIEW_FILENAME = 'index.ect';
var DEFAULT_TEMPLATE_ENGINE = 'ect';

function kong (opts) {
  //TODO npm-config default
  opts = opts || {};
  opts.view = opts.view || {};
  opts.view.dirname = opts.view.dirname || DEFAULT_VIEW_DIRNAME;
  opts.view.filename = opts.view.filename || DEFAULT_VIEW_FILENAME;

  return function *(next) {

  }
}
