var koa = require('koa'),
    router = require('koa-router'),
    ECT = require('ect');

var app = koa();
var renderer = ECT({ root : __dirname + '/views', ext : '.ect' });

app.use(function *(next) {
  this.kong = this.kong || {};
  var isAPI = false;
  if (/^\/api/.test(this.path)) {
    this.path = this.path.slice(4);
    isAPI = true;
  }

  yield next;

  if (isAPI) {
    this.type = 'application/javascript; charset=utf-8';
  } else {
    var data = {
      preloadData: this.body,
      path: this.path
    };
    this.body = renderer.render('index.ect', data);
    this.type = 'text/html; charset=utf-8';
  }

});

app.use(router(app));

app.get('/index', function *(next) {
  this.body = { hoge: 'fuga'};
  yield next;
});

app.listen(3000);
//TODO logger
console.log('start server 3000');
