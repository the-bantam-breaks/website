exports.id=0,exports.modules={"./src/server/index.js":function(r,e,n){"use strict";n.r(e);var t=n("koa"),o=n.n(t),s=n("koa-bodyparser"),a=n.n(s),u=n("koa-logger"),i=n.n(u),c=n("./src/config.js"),v=(n("./src/rethinkdb/index.js"),n("./src/server/routes.js"));function f(r,e,n,t,o,s,a){try{var u=r[s](a),i=u.value}catch(r){return void n(r)}u.done?e(i):Promise.resolve(i).then(t,o)}var d=function(){var r,e=(r=regeneratorRuntime.mark(function r(){var e;return regeneratorRuntime.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return(e=new o.a).use(i()()),e.use(a()()),Object(v.a)(e),e.listen(c.a),console.info("Started server on port ".concat(c.a)),r.abrupt("return",e);case 7:case"end":return r.stop()}},r)}),function(){var e=this,n=arguments;return new Promise(function(t,o){var s=r.apply(e,n);function a(r){f(s,t,o,a,u,"next",r)}function u(r){f(s,t,o,a,u,"throw",r)}a(void 0)})});return function(){return e.apply(this,arguments)}}()();e.default=d}};