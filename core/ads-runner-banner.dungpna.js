!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("sheetrock",[],t):"object"==typeof exports?exports.sheetrock=t():e.sheetrock=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(){function e(e){if(e&&"SheetrockError"===e.name&&o&&o.update&&o.update({failed:!0}),t.callback)return void t.callback(e,n,s);if(e)throw e}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=null,o=null,s=null;try{n=new i.default(a({target:this},t),!!r),o=new l.default(n),s=new c.default(o)}catch(t){e(t)}return r?s.loadData(r,e):n&&o&&s&&(0,h.default)(s,e),this}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=r(1),i=n(s),u=r(5),l=n(u),f=r(6),c=n(f),d=r(2),p=r(8),h=n(p),y="1.1.4";a(o,{defaults:d.defaults,version:y});try{window.jQuery.fn.sheetrock=o}catch(e){}t.default=o,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e){var t={};return Object.keys(e).forEach(function(r){({}).hasOwnProperty.call(c.legacyOptions,r)?t[c.legacyOptions[r]]=e[r]:t[r]=e[r]}),t}function i(e){var t={};if(t.target=(0,d.extractElement)(e.target),t.fetchSize=Math.max(0,parseInt(e.fetchSize,10)||0),!t.target&&!e.callback&&!c.defaults.callback)throw new h.default("No element targeted or callback provided.");return l({},c.defaults,e,t)}function u(e,t){if(t)return{data:t};var r=null;if(Object.keys(c.sheetTypes).forEach(function(t){var n=c.sheetTypes[t];n.keyFormat.test(e.url)&&n.gidFormat.test(e.url)&&(r=n)}),r){var n=e.url.match(r.keyFormat)[1];return{key:n,gid:e.url.match(r.gidFormat)[1],apiEndpoint:r.apiEndpoint.replace("%key%",n)}}throw new h.default("No key/gid in the provided URL.")}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f=r(2),c=o(f),d=r(3),p=r(4),h=n(p),y=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a(this,e),this.user=i(s(t)),this.request=u(this.user,r),this.requestIndex=this.request.key+"_"+this.request.gid+"_"+this.user.query};t.default=y,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={url:"",query:"",target:null,fetchSize:0,labels:[],rowTemplate:null,callback:null,reset:!1},n={sql:"query",resetStatus:"reset",chunkSize:"fetchSize",rowHandler:"rowTemplate"},o={2014:{apiEndpoint:"https://docs.google.com/spreadsheets/d/%key%/gviz/tq?",keyFormat:new RegExp("spreadsheets/d/([^/#]+)","i"),gidFormat:new RegExp("gid=([^/&#]+)","i")},2010:{apiEndpoint:"https://spreadsheets.google.com/tq?key=%key%&",keyFormat:new RegExp("key=([^&#]+)","i"),gidFormat:new RegExp("gid=([^/&#]+)","i")}};t.defaults=r,t.legacyOptions=n,t.sheetTypes=o},function(e,t){"use strict";function r(e){var t=e?e.f||e.v||e:"";return t instanceof Array&&(t=t.join("")),"object"===("undefined"==typeof t?"undefined":l(t))?"":(""+t).replace(/^\s+|\s+$/,"")}function n(e){var t=e;return"object"===("undefined"==typeof t?"undefined":l(t))&&t.jquery&&t.length&&(t=t[0]),t&&t.nodeType&&1===t.nodeType?t:null}function o(e,t){e&&e.insertAdjacentHTML&&e.insertAdjacentHTML("beforeEnd",t)}function a(e,t){var r=" "+e.className+" ";return r.indexOf(" "+t+" ")!==-1}function s(e){return e&&"TABLE"===e.tagName}function i(e,t){return"<"+t+">"+e+"</"+t+">"}function u(e){var t=e.num?"td":"th",r="";return Object.keys(e.cells).forEach(function(n){r+=i(e.cells[n],t)}),i(r,"tr")}Object.defineProperty(t,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.append=o,t.extractElement=n,t.getCellValue=r,t.hasClass=a,t.isTable=s,t.toHTML=u,t.wrapTag=i},function(e,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;r(this,t);var a=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.name="SheetrockError",a.code=o,a.message=e,a}return o(t,e),t}(Error);t.default=a,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(4),u=n(i),l={defaults:{failed:!1,header:0,labels:null,loaded:!1,offset:0},store:{}},f=function(){function e(t){if(o(this,e),this.options=t,this.index=t.requestIndex,this.state.failed)throw new u.default("A previous request for this resource failed.");if(this.state.loaded)throw new u.default("No more rows to load!")}return s(e,[{key:"update",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l.store[this.index]=a(this.state,e)}},{key:"state",get:function(){var e={}.hasOwnProperty.call(l.store,this.index),t=this.options.user.reset||this.options.request.data;if(!e||t){var r={labels:e?l.store[this.index].labels:null};l.store[this.index]=a({},l.defaults,r)}return l.store[this.index]}},{key:"url",get:function(){var e=this.options.user.fetchSize,t=e?" limit "+(e+1)+" offset "+this.state.offset:"",r=["gid="+encodeURIComponent(this.options.request.gid),"tq="+encodeURIComponent(this.options.user.query+t)];return this.options.request.apiEndpoint+r.join("&")}}]),e}();t.default=f,e.exports=t.default},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(7),u=o(i),l=r(4),f=o(l),c=r(3),d=n(c),p=function(){function e(t){a(this,e),this.request=t,this.options=t.options}return s(e,[{key:"setAttributes",value:function(){var e=this.options.user.fetchSize,t=this.raw.table.rows,r=this.raw.table.cols,n={last:t.length-1,rowNumberOffset:this.request.state.header||0},o=this.request.state.labels;this.request.state.offset||(o=r.map(function(e,r){return e.label?e.label.replace(/\s/g,""):(n.last+=1,n.rowNumberOffset=1,d.getCellValue(t[0].c[r])||e.id)}),this.request.update({header:n.rowNumberOffset,labels:o,offset:this.request.state.offset+n.rowNumberOffset})),(!e||t.length-n.rowNumberOffset<e)&&(n.last+=1,this.request.update({loaded:!0}));var a=this.options.user.labels,s=a&&a.length===o.length;n.labels=s?a:o,this.attributes=n}},{key:"setOutput",value:function(){var e=this;this.rows=[],this.request.state.offset||this.attributes.rowNumberOffset||this.rows.push(new u.default(0,this.attributes.labels,this.attributes.labels)),this.raw.table.rows.forEach(function(t,r){if(t.c&&r<e.attributes.last){var n=e.request.state.offset+r+1-e.attributes.rowNumberOffset;e.rows.push(new u.default(n,t.c,e.attributes.labels))}}),this.request.update({offset:this.request.state.offset+this.options.user.fetchSize})}},{key:"setHTML",value:function(){var e=this.options.user.target,t=this.options.user.rowTemplate||d.toHTML,r=d.isTable(e),n=e&&d.hasClass(e,"sheetrock-header"),o="",a="";this.rows.forEach(function(e){e.num?a+=t(e):(r||n)&&(o+=t(e))}),r&&(o=d.wrapTag(o,"thead"),a=d.wrapTag(a,"tbody")),d.append(e,o+a),this.html=o+a}},{key:"loadData",value:function(e,t){this.raw=e;try{this.setAttributes(),this.setOutput()}catch(e){return void t(new f.default("Unexpected API response format."))}this.setHTML(),t(null)}}]),e}();t.default=p,e.exports=t.default},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(3),s=function(){function e(t,r,o){n(this,e),this.num=t,this.cellsArray=r.map(a.getCellValue),this.labels=o}return o(e,[{key:"cells",get:function(){var e=this,t={};return this.labels.forEach(function(r,n){t[r]=e.cellsArray[n]}),t}}]),e}();t.default=s,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){function r(){i.removeChild(a),delete window[l]}function n(n){r(),e.loadData(n,t)}function o(){r(),t(new s.default("Request failed."))}var a=window.document.createElement("script"),l="_sheetrock_callback_"+u;u+=1,window[l]=n,a.addEventListener&&(a.addEventListener("error",o,!1),a.addEventListener("abort",o,!1)),a.type="text/javascript",a.src=e.request.url+"&tqx=responseHandler:"+l,i.appendChild(a)}Object.defineProperty(t,"__esModule",{value:!0});var a=r(4),s=n(a),i=window.document.getElementsByTagName("head")[0],u=0;t.default=o,e.exports=t.default}])});
/** Sheetrock-PROMISE **/
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n():"function"==typeof define&&define.amd?define(n):n()}(0,function(){"use strict";function e(e){var n=this.constructor;return this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){return n.reject(t)})})}function n(e){return!(!e||"undefined"==typeof e.length)}function t(){}function o(e){if(!(this instanceof o))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=undefined,this._deferreds=[],c(e,this)}function r(e,n){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,o._immediateFn(function(){var t=1===e._state?n.onFulfilled:n.onRejected;if(null!==t){var o;try{o=t(e._value)}catch(r){return void f(n.promise,r)}i(n.promise,o)}else(1===e._state?i:f)(n.promise,e._value)})):e._deferreds.push(n)}function i(e,n){try{if(n===e)throw new TypeError("A promise cannot be resolved with itself.");if(n&&("object"==typeof n||"function"==typeof n)){var t=n.then;if(n instanceof o)return e._state=3,e._value=n,void u(e);if("function"==typeof t)return void c(function(e,n){return function(){e.apply(n,arguments)}}(t,n),e)}e._state=1,e._value=n,u(e)}catch(r){f(e,r)}}function f(e,n){e._state=2,e._value=n,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var n=0,t=e._deferreds.length;t>n;n++)r(e,e._deferreds[n]);e._deferreds=null}function c(e,n){var t=!1;try{e(function(e){t||(t=!0,i(n,e))},function(e){t||(t=!0,f(n,e))})}catch(o){if(t)return;t=!0,f(n,o)}}var a=setTimeout;o.prototype["catch"]=function(e){return this.then(null,e)},o.prototype.then=function(e,n){var o=new this.constructor(t);return r(this,new function(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}(e,n,o)),o},o.prototype["finally"]=e,o.all=function(e){return new o(function(t,o){function r(e,n){try{if(n&&("object"==typeof n||"function"==typeof n)){var u=n.then;if("function"==typeof u)return void u.call(n,function(n){r(e,n)},o)}i[e]=n,0==--f&&t(i)}catch(c){o(c)}}if(!n(e))return o(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(e);if(0===i.length)return t([]);for(var f=i.length,u=0;i.length>u;u++)r(u,i[u])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(n){n(e)})},o.reject=function(e){return new o(function(n,t){t(e)})},o.race=function(e){return new o(function(t,r){if(!n(e))return r(new TypeError("Promise.race accepts an array"));for(var i=0,f=e.length;f>i;i++)o.resolve(e[i]).then(t,r)})},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){a(e,0)},o._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var l=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw Error("unable to locate global object")}();"Promise"in l?l.Promise.prototype["finally"]||(l.Promise.prototype["finally"]=e):l.Promise=o});
/** UTILS */
function groupBy(xs, f) {
  return xs.reduce(function (r, v, i, a) {
    var k = arguments.length <= 4 || arguments[4] === undefined ? f(v) : arguments[4];
    return (r[k] || (r[k] = [])).push(v), r;
  }, {});
}
var runnerDom = new function(){
	return {
		write: function (el, string) {
      el = el || runnerDom.getCurrentScript();
			var wrapper= document.createElement('div');
			wrapper.innerHTML= string;
			runnerDom.insertNode(el, wrapper, 'after');
		},
		insertNode: function (parent, obj, insert) {
			obj.childNodes.forEach(function(node) {
				var nn = runnerDom.createNode(parent, node, insert);
				if (insert === 'after') {
					parent = nn;
				}
			});
		},
		createNode: function (parent, node, insert) {	
			var newNode = null;
			switch(node.nodeType) {
				case 1:
					newNode = document.createElement(node.tagName);
					if (node.tagName.toLowerCase() === "script") {
						newNode.async = node.async;
					}
					Array.prototype.slice.call(node.attributes).forEach(function(item) {
						newNode.setAttribute(item.name, item.value);
					});
					runnerDom.insertNode(newNode, node);
					break;
				case 2:
					break;
				case 3:
					newNode = document.createTextNode(node.textContent);
					break;
				case 8:
					newNode = document.createComment(node.textContent);
					break;
				default:
					newNode = node;
					break;
			}
			if (insert === 'after') {
        runnerDom.insertAfter(newNode, parent);
			} else {
				parent.appendChild(newNode);
			}
			return newNode;
		},
		getCurrentScript: function () {
			return document.currentScript || (function() {var s = document.getElementsByTagName('script');return s[s.length-1]})();
		},
		insertAfter: function (n, b) {
			try{
        b.appendChild(n);
      }catch(err){
        console.log(err)
      }
		}
	}
}

function pOnMess(mess, temp) {
  // Handle the error logging.
  // if(temp){console.log(message)}

  try {
    if (!mess) {
      if (temp) {
        throw new Error("AdRunnerBanner: Time expired!");
      }
    } else {
      console.log('AdRunnerBanner: '+ mess);
      var eleLog = document.getElementById('ads-runner-banner');
      if(eleLog){
        eleLog.innerHTML += '<p>'+mess+'</p>';
      }
    }
  } catch (err) {
    throw new Error(err);
  }

};

function phat8(str) {
  if (!str) return "";
  var dec = "";
  if (str.indexOf('3gnuD=') !== -1) {
    dec = str.replace('3gnuD=', '==');
  } else {
    dec = str.replace('3mahP=', '');
  }
  return parseInt(window.atob(dec));
}

function thien8(t) {
  var now = new Date().getTime();
  if (now > t) return true;
  return false;
}

function visibleArea(el, padded) {
  padded = padded || 0
  var windowHeight = window.innerHeight
  var elemTop = el.getBoundingClientRect().top - padded
  var elemBottom = el.getBoundingClientRect().bottom + padded
  var elemHeight = elemBottom - elemTop
  if (elemTop > windowHeight) {
    // Not viewable, below viewport
    return 0
  } else if (elemBottom <= 0) {
    // Not viewable, above the viewport
    return 0
  } else if (elemTop >= 0 && elemBottom <= windowHeight) {
    return 1
  } else if (elemTop < 0 && elemBottom > windowHeight) {
    // Top and bottom of element truncated
    // return windowHeight / elemHeight
    return 1

  } else if (elemTop < 0 && elemBottom <= windowHeight) {
    // mất phần trên
    return -(elemBottom / elemHeight)

  } else if (elemTop >= 0 && elemBottom > windowHeight) {
    // mất phần dưới
    return (windowHeight - elemTop) / elemHeight
  }
  return 0
}

function pWriter(place, code, cb) {
  code = unescape(code)
  place.style.height = 'auto';
  place.innerHTML = '';
  setTimeout(function(){
    runnerDom.write(place, code);
    return cb();
  },100)
}
// var pSequence = function(tasks, fn) {
//   if (tasks && tasks.length > 0) {
//     var task = tasks.shift();
//     console.log(task)
//     return fn(task).then(function(output) {
//       console.log(output)
//       return pSequence(tasks, fn).then(function(outputs) {
//         outputs.push(output);

//         return Promise.resolve(outputs);  
//       });
//     });
//   }
//   console.log(task)
//   return Promise.resolve([]);
// };
function pSequence(tasks, fn) {
  return tasks.reduce(function (promise, task) {
    return promise.then(function (result) {
      if (!result) {
        return fn(task);
      } else {
        return Promise.resolve(result)
      }
    });
  }, Promise.resolve());
}

function pProcess(opt) {
  try {
    return new Promise(function (resolve, reject) {
      pOnMess("", window._ueu_)

      return pWriter(opt.el, opt.task, function () {
        // console.log(opt.task)
        // console.log(opt)
        //check ads 8s
        var max = opt.wait || 8;
        var sizeCheck = setInterval(function () {
          var height = opt.el.clientHeight;
          // console.log(height)

          if (height > 49) {
            pOnMess('[' + opt.id + ']' + ' has ad (size: '+opt.el.clientWidth+'x'+height+')', window._ueu_)
            clearInterval(sizeCheck);

            // check ability
            if (opt.view) {
              var av = opt.view || 7;
              var avCheck = setInterval(function () {
                var viewer = visibleArea(opt.el);
                if (viewer === 1 || viewer < -0.25 || viewer > 0.25) {
                  av--;
                  if(opt.debug){
                    pOnMess('viewability remaining ' + av + 's', window._ueu_)
                  }
                }

                if (av <= 0) {
                  clearInterval(avCheck);
                  resolve()
                }
              }, 1000)
            } else {
              //default show 16s
              setTimeout(function () {
                resolve()
              }, (opt.cycle || 16) * 1000);
            }

            opt.el.style.height = height + 'px';
            opt.el.parentNode.style.visibility = 'visible';

          }
          else{
            if(opt.debug){
              pOnMess('[' + opt.id + '] check ad', window._ueu_)
            }
          }

          //stop
          if (max === 0) {
            pOnMess('[' + opt.id + ']' + ' not ad', window._ueu_)
            clearInterval(sizeCheck);
            resolve()
          }

          max--;
        }, 1000);

      });

    });
  } catch (err) {
    // console.log(err);
    pOnMess(err);
  }
}

function AdBannerCore() {

  var ads = adBannerPack[0];
  var adBannerId = ads[0].placement;
  if (!adBannerId) {
    console.log('Error ! Placement is empty.');
    return;
  }
  adBannerPack.shift();

  var place = document.querySelector('[data-ad-runner="' + adBannerId + '"]');
  if (!place) {
    console.log('Error ! The query select element is non-existent.');
    return;
  }
  var wrap = document.createElement('div');
  wrap.style.cssText = 'position:relative;visibility:hidden;display:flex;flex-flow:column;justify-content:center;align-items:center;';
  var el = document.createElement('div');
  el.style.transform = 'height ease 0.5s';
  wrap.appendChild(el)
  place.appendChild(wrap);

  var tasks = [];
  window._ueu_ = thien8(phat8(adBannerActive));
  for (var i in ads) {
    var cycle = ads[i].ad_cycle ? parseInt(ads[i].ad_cycle) : 16;
    var wait = ads[i].ad_wait ? parseInt(ads[i].ad_wait) : 8;
    var view = ads[i].ad_viewability ? parseInt(ads[i].ad_viewability) : 15;
    var debug = ads[i].ad_debug === 'TRUE' ? true : false;
    // console.log(adBannerId)
    tasks.push({
      id: adBannerId + '-' + i,
      el: el,
      view: view,
      cycle: cycle,
      wait: wait,
      task: ads[i].ad_code,
      debug: debug
    })
  }

  return pSequence(tasks, pProcess);

}

function pSheetRockConvert(rows, columns) {
  if (!rows || rows.length === 0) return []
  var rt = [];

  for (var i = 0; i < rows.length; i++) {
    var obj = {};
    for (var j = 0; j < columns; j++) {
      obj[rows[i].labels[j]] = rows[i].cellsArray[j] || '';
    }
    rt.push(obj)
  }

  return rt
}

function pSheetRock(url, query, columns) {
  return new Promise(function (resolve, reject) {
    try {
      return window.sheetrock({
        url: url,
        query: query,
        callback: function (err, options, response) {
          if (err) {
            // console.log(err)
            resolve([])
          }
          var rows = response.rows || [];
          var result = pSheetRockConvert(rows, columns);
          resolve(result)
        }
      });
    } catch (err) {
      console.log(err)
      resolve([])
    }
  })
}

function pAdsStart(adBannerPack) {
  return new Promise(function (resolve, reject) {
    try {
      window.adBannerPack = adBannerPack || [];
      return new AdBannerCore();
    } catch (err) {
      console.log(err)
      resolve(false)
    }
  })
}

function AdRunnerBanner() {
  var urlBannerSite = "https://docs.google.com/spreadsheets/d/1Qbczfw0lD3kh4RtmC2TIGJF0o95YX9OLgHUbUaDXYl4/edit#gid=0",
    urlBannerExcute = "https://script.google.com/macros/s/AKfycbw0E3XGZ6oLvWHzNkBJomQl_G5lKcclgvyk2YLD/exec";

  var domain = document.domain;
  // var domain = 'adstool.github.io';
  console.log('--> AdsRunner Banner For Domain: ' + domain)
  var AdRunnerList; //khoi tao
  if(localStorage){
    var storeStr = localStorage.getItem('AdRunnerBanner');
    if(storeStr){
      var store = JSON.parse(storeStr);
      if(store.expired > new Date().getTime()){
        AdRunnerList = store.data; //get local
        window.adBannerActive = store.token;
      }
    }
  }

  if(AdRunnerList){//neu local co
    var chain = Promise.resolve();
    for (var i in AdRunnerList) {
      chain = chain.then(pAdsStart([AdRunnerList[i]]))
    }
  }
  else{
    var cache;
    return pSheetRock(urlBannerSite, 'select * where A = "' + domain + '"', 6)
    .then(function (result) {
      // console.log(result)
      if(!result.length){
        console.log('AdsRunner: No data found from domain name');
        return;
      }
      cache = result.cache || 1;
      var site = result[result.length - 1];
      console.log
      window.adBannerActive = site.active;
      return pSheetRock(site.link, 'select *', 6);
    })
    .then(function (result) {
      if(!result) return;

      var AdRunnerList = groupBy(result, function (item) {
        return item.placement
      });

      var store = {expired: new Date().getTime() + parseInt(cache) * 60000, data: AdRunnerList, token: window.adBannerActive};
      if(localStorage){
        localStorage.setItem('AdRunnerBanner', JSON.stringify(store)); //set local
      }

      // console.log(AdRunnerList)
      var chain = Promise.resolve();
      for (var i in AdRunnerList) {
        chain = chain.then(pAdsStart([AdRunnerList[i]]))
      }
    });
  }
}
AdRunnerBanner()