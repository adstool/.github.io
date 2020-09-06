if(!window.sheetrock){
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("sheetrock",[],t):"object"==typeof exports?exports.sheetrock=t():e.sheetrock=t()}(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(){function e(e){if(e&&"SheetrockError"===e.name&&o&&o.update&&o.update({failed:!0}),t.callback)return void t.callback(e,n,s);if(e)throw e}var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=null,o=null,s=null;try{n=new i.default(a({target:this},t),!!r),o=new l.default(n),s=new c.default(o)}catch(t){e(t)}return r?s.loadData(r,e):n&&o&&s&&(0,h.default)(s,e),this}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=r(1),i=n(s),u=r(5),l=n(u),f=r(6),c=n(f),d=r(2),p=r(8),h=n(p),y="1.1.4";a(o,{defaults:d.defaults,version:y});try{window.jQuery.fn.sheetrock=o}catch(e){}t.default=o,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e){var t={};return Object.keys(e).forEach(function(r){({}).hasOwnProperty.call(c.legacyOptions,r)?t[c.legacyOptions[r]]=e[r]:t[r]=e[r]}),t}function i(e){var t={};if(t.target=(0,d.extractElement)(e.target),t.fetchSize=Math.max(0,parseInt(e.fetchSize,10)||0),!t.target&&!e.callback&&!c.defaults.callback)throw new h.default("No element targeted or callback provided.");return l({},c.defaults,e,t)}function u(e,t){if(t)return{data:t};var r=null;if(Object.keys(c.sheetTypes).forEach(function(t){var n=c.sheetTypes[t];n.keyFormat.test(e.url)&&n.gidFormat.test(e.url)&&(r=n)}),r){var n=e.url.match(r.keyFormat)[1];return{key:n,gid:e.url.match(r.gidFormat)[1],apiEndpoint:r.apiEndpoint.replace("%key%",n)}}throw new h.default("No key/gid in the provided URL.")}Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},f=r(2),c=o(f),d=r(3),p=r(4),h=n(p),y=function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];a(this,e),this.user=i(s(t)),this.request=u(this.user,r),this.requestIndex=this.request.key+"_"+this.request.gid+"_"+this.user.query};t.default=y,e.exports=t.default},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r={url:"",query:"",target:null,fetchSize:0,labels:[],rowTemplate:null,callback:null,reset:!1},n={sql:"query",resetStatus:"reset",chunkSize:"fetchSize",rowHandler:"rowTemplate"},o={2014:{apiEndpoint:"https://docs.google.com/spreadsheets/d/%key%/gviz/tq?",keyFormat:new RegExp("spreadsheets/d/([^/#]+)","i"),gidFormat:new RegExp("gid=([^/&#]+)","i")},2010:{apiEndpoint:"https://spreadsheets.google.com/tq?key=%key%&",keyFormat:new RegExp("key=([^&#]+)","i"),gidFormat:new RegExp("gid=([^/&#]+)","i")}};t.defaults=r,t.legacyOptions=n,t.sheetTypes=o},function(e,t){"use strict";function r(e){var t=e?e.f||e.v||e:"";return t instanceof Array&&(t=t.join("")),"object"===("undefined"==typeof t?"undefined":l(t))?"":(""+t).replace(/^\s+|\s+$/,"")}function n(e){var t=e;return"object"===("undefined"==typeof t?"undefined":l(t))&&t.jquery&&t.length&&(t=t[0]),t&&t.nodeType&&1===t.nodeType?t:null}function o(e,t){e&&e.insertAdjacentHTML&&e.insertAdjacentHTML("beforeEnd",t)}function a(e,t){var r=" "+e.className+" ";return r.indexOf(" "+t+" ")!==-1}function s(e){return e&&"TABLE"===e.tagName}function i(e,t){return"<"+t+">"+e+"</"+t+">"}function u(e){var t=e.num?"td":"th",r="";return Object.keys(e.cells).forEach(function(n){r+=i(e.cells[n],t)}),i(r,"tr")}Object.defineProperty(t,"__esModule",{value:!0});var l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.append=o,t.extractElement=n,t.getCellValue=r,t.hasClass=a,t.isTable=s,t.toHTML=u,t.wrapTag=i},function(e,t){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var a=function(e){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;r(this,t);var a=n(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return a.name="SheetrockError",a.code=o,a.message=e,a}return o(t,e),t}(Error);t.default=a,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(4),u=n(i),l={defaults:{failed:!1,header:0,labels:null,loaded:!1,offset:0},store:{}},f=function(){function e(t){if(o(this,e),this.options=t,this.index=t.requestIndex,this.state.failed)throw new u.default("A previous request for this resource failed.");if(this.state.loaded)throw new u.default("No more rows to load!")}return s(e,[{key:"update",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l.store[this.index]=a(this.state,e)}},{key:"state",get:function(){var e={}.hasOwnProperty.call(l.store,this.index),t=this.options.user.reset||this.options.request.data;if(!e||t){var r={labels:e?l.store[this.index].labels:null};l.store[this.index]=a({},l.defaults,r)}return l.store[this.index]}},{key:"url",get:function(){var e=this.options.user.fetchSize,t=e?" limit "+(e+1)+" offset "+this.state.offset:"",r=["gid="+encodeURIComponent(this.options.request.gid),"tq="+encodeURIComponent(this.options.user.query+t)];return this.options.request.apiEndpoint+r.join("&")}}]),e}();t.default=f,e.exports=t.default},function(e,t,r){"use strict";function n(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function o(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),i=r(7),u=o(i),l=r(4),f=o(l),c=r(3),d=n(c),p=function(){function e(t){a(this,e),this.request=t,this.options=t.options}return s(e,[{key:"setAttributes",value:function(){var e=this.options.user.fetchSize,t=this.raw.table.rows,r=this.raw.table.cols,n={last:t.length-1,rowNumberOffset:this.request.state.header||0},o=this.request.state.labels;this.request.state.offset||(o=r.map(function(e,r){return e.label?e.label.replace(/\s/g,""):(n.last+=1,n.rowNumberOffset=1,d.getCellValue(t[0].c[r])||e.id)}),this.request.update({header:n.rowNumberOffset,labels:o,offset:this.request.state.offset+n.rowNumberOffset})),(!e||t.length-n.rowNumberOffset<e)&&(n.last+=1,this.request.update({loaded:!0}));var a=this.options.user.labels,s=a&&a.length===o.length;n.labels=s?a:o,this.attributes=n}},{key:"setOutput",value:function(){var e=this;this.rows=[],this.request.state.offset||this.attributes.rowNumberOffset||this.rows.push(new u.default(0,this.attributes.labels,this.attributes.labels)),this.raw.table.rows.forEach(function(t,r){if(t.c&&r<e.attributes.last){var n=e.request.state.offset+r+1-e.attributes.rowNumberOffset;e.rows.push(new u.default(n,t.c,e.attributes.labels))}}),this.request.update({offset:this.request.state.offset+this.options.user.fetchSize})}},{key:"setHTML",value:function(){var e=this.options.user.target,t=this.options.user.rowTemplate||d.toHTML,r=d.isTable(e),n=e&&d.hasClass(e,"sheetrock-header"),o="",a="";this.rows.forEach(function(e){e.num?a+=t(e):(r||n)&&(o+=t(e))}),r&&(o=d.wrapTag(o,"thead"),a=d.wrapTag(a,"tbody")),d.append(e,o+a),this.html=o+a}},{key:"loadData",value:function(e,t){this.raw=e;try{this.setAttributes(),this.setOutput()}catch(e){return void t(new f.default("Unexpected API response format."))}this.setHTML(),t(null)}}]),e}();t.default=p,e.exports=t.default},function(e,t,r){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),a=r(3),s=function(){function e(t,r,o){n(this,e),this.num=t,this.cellsArray=r.map(a.getCellValue),this.labels=o}return o(e,[{key:"cells",get:function(){var e=this,t={};return this.labels.forEach(function(r,n){t[r]=e.cellsArray[n]}),t}}]),e}();t.default=s,e.exports=t.default},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function o(e,t){function r(){i.removeChild(a),delete window[l]}function n(n){r(),e.loadData(n,t)}function o(){r(),t(new s.default("Request failed."))}var a=window.document.createElement("script"),l="_sheetrock_callback_"+u;u+=1,window[l]=n,a.addEventListener&&(a.addEventListener("error",o,!1),a.addEventListener("abort",o,!1)),a.type="text/javascript",a.src=e.request.url+"&tqx=responseHandler:"+l,i.appendChild(a)}Object.defineProperty(t,"__esModule",{value:!0});var a=r(4),s=n(a),i=window.document.getElementsByTagName("head")[0],u=0;t.default=o,e.exports=t.default}])});
}
/** Sheetrock-PROMISE **/
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n():"function"==typeof define&&define.amd?define(n):n()}(0,function(){"use strict";function e(e){var n=this.constructor;return this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){return n.reject(t)})})}function n(e){return!(!e||"undefined"==typeof e.length)}function t(){}function o(e){if(!(this instanceof o))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=undefined,this._deferreds=[],c(e,this)}function r(e,n){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,o._immediateFn(function(){var t=1===e._state?n.onFulfilled:n.onRejected;if(null!==t){var o;try{o=t(e._value)}catch(r){return void f(n.promise,r)}i(n.promise,o)}else(1===e._state?i:f)(n.promise,e._value)})):e._deferreds.push(n)}function i(e,n){try{if(n===e)throw new TypeError("A promise cannot be resolved with itself.");if(n&&("object"==typeof n||"function"==typeof n)){var t=n.then;if(n instanceof o)return e._state=3,e._value=n,void u(e);if("function"==typeof t)return void c(function(e,n){return function(){e.apply(n,arguments)}}(t,n),e)}e._state=1,e._value=n,u(e)}catch(r){f(e,r)}}function f(e,n){e._state=2,e._value=n,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var n=0,t=e._deferreds.length;t>n;n++)r(e,e._deferreds[n]);e._deferreds=null}function c(e,n){var t=!1;try{e(function(e){t||(t=!0,i(n,e))},function(e){t||(t=!0,f(n,e))})}catch(o){if(t)return;t=!0,f(n,o)}}var a=setTimeout;o.prototype["catch"]=function(e){return this.then(null,e)},o.prototype.then=function(e,n){var o=new this.constructor(t);return r(this,new function(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}(e,n,o)),o},o.prototype["finally"]=e,o.all=function(e){return new o(function(t,o){function r(e,n){try{if(n&&("object"==typeof n||"function"==typeof n)){var u=n.then;if("function"==typeof u)return void u.call(n,function(n){r(e,n)},o)}i[e]=n,0==--f&&t(i)}catch(c){o(c)}}if(!n(e))return o(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(e);if(0===i.length)return t([]);for(var f=i.length,u=0;i.length>u;u++)r(u,i[u])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(n){n(e)})},o.reject=function(e){return new o(function(n,t){t(e)})},o.race=function(e){return new o(function(t,r){if(!n(e))return r(new TypeError("Promise.race accepts an array"));for(var i=0,f=e.length;f>i;i++)o.resolve(e[i]).then(t,r)})},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){a(e,0)},o._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var l=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw Error("unable to locate global object")}();"Promise"in l?l.Promise.prototype["finally"]||(l.Promise.prototype["finally"]=e):l.Promise=o});
function groupBy(xs, f) {
  return xs.reduce(function (r, v, i, a) {
    var k = arguments.length <= 4 || arguments[4] === undefined ? f(v) : arguments[4];
    return (r[k] || (r[k] = [])).push(v), r;
  }, {});
};
(function () {
  if ( typeof window.CustomEvent === "function" ) return false;

  function CustomEvent ( event, params ) {
    params = params || { bubbles: false, cancelable: false, detail: undefined };
    var evt = document.createEvent( 'CustomEvent' );
    evt.initCustomEvent( event, params.bubbles, params.cancelable, params.detail );
    return evt;
   }

  CustomEvent.prototype = window.Event.prototype;

  window.CustomEvent = CustomEvent;
})();
function loadJS (src, callback) {
  var s, r, t;
  r = false;
  s = document.createElement('script');
  s.type = 'text/javascript';
  s.src = src;
  s.onload = s.onreadystatechange = function () {
    if (!r && (!this.readyState || this.readyState == 'complete')) {
      r = true;
      if (callback) callback();
    }
  };
  t = document.getElementsByTagName('script')[0];
  t.parentNode.insertBefore(s, t);
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
      return sheetrock({
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
function isEmpty(obj) {
  for(var prop in obj) {
    if(obj.hasOwnProperty(prop)) {
      return false;
    }
  }

  return JSON.stringify(obj) === JSON.stringify({});
}
function isElement(obj) {
  try {
    //Using W3 DOM2 (works for FF, Opera and Chrome)
    return obj instanceof HTMLElement;
  } catch (e) {
    //Browsers not supporting W3 DOM2 don't have HTMLElement and
    //an exception is thrown and we end up here. Testing some
    //properties that all elements have (works on IE7)
    return (typeof obj === "object") &&
      (obj.nodeType === 1) && (typeof obj.style === "object") &&
      (typeof obj.ownerDocument === "object");
  }
}

var progressCircle = function (el, sum) {
  sum = parseInt(sum) + 1;
  var ps = document.createElement('div');
  var cc = '<div style="position:absolute!important;bottom:2px!important;left:2px!important;border-radius:28px;width:28px!important;height:28px!important;background:rgba(0,0,0,0.7);">\
          <svg style="transform:rotate(-90deg)!important" width="28" height="28" viewBox="0 0 120 120">\
              <circle style="fill:none!important;stroke:#fff!important" cx="60" cy="60" r="46" stroke-width="14" />\
              <circle style="fill:none!important;stroke:#fc0!important" class="ps_v" cx="60" cy="60" r="46" stroke-width="14" />\
          </svg>\
          <div class="ps_t" style="color:#fff!important;position:absolute!important;bottom:0!important;left:0!important;width:28px!important;height:28px!important;line-height:28px!important;font-family: Arial;font-size:8pt!important;text-align:center!important"></div>\
      </div>';
  ps.innerHTML = cc;
  el.appendChild(ps);

  var ps_v = el.querySelector('.ps_v');
  var ps_t = el.querySelector('.ps_t');
  var CIRCUMFERENCE = 2 * Math.PI * 46;
  ps_v.style.strokeDasharray = CIRCUMFERENCE;
  var progressValue = function (value) {
    var progress = value / 100;
    var dashoffset = CIRCUMFERENCE * (1 - progress);
    ps_v.style.strokeDashoffset = dashoffset;
  }

  var progressTime = function (num) {
    num = parseInt(num)
    t = num > 99 ? '99+' : num;
    ps_t.textContent = t;
    var full = parseInt(100 - ((sum-num) * 100 / sum));

    if (num <= 1) {
      setTimeout(function(){
        ps.remove()
      },1000) 
    }
    progressValue(full);
    
  }

  return progressTime;
}

function phat8(str) {
  if(!str) return "";
  var dec = "";
  if(str.indexOf('3gnuD=') !== -1){
    dec = str.replace('3gnuD=', '==');
  }
  else{
    dec = str.replace('3mahP=', '');
  }
  return parseInt(window.atob(dec));
}

function thien8(t) {
  var now = new Date().getTime();
  if(now > t) return true;
  return false;
}

// options: an object containing configuration options for the singleton
// e.g var options = { name: "test", pointX: 5};
function AdVideoCore(videoWrap, adVideoActive) {
  // set some properties for our singleton
  var name = "ads_" + new Date().getTime();

  var adContent, videoContent, videoSound, videoProgress; //element
  var _preroll = [];
  var _playing = false;
  var _muted = true;
  var _duration = 0;
  var _intervalTimer = null;
  var _queue = true;

  // console.log(adVideoActive)

  var linearAd = {
    width: 640,
    height: 360
  }

  var adsLoader, adsManager, adDisplayContainer;

  var onAdError = function (adErrorEvent) {
    // Handle the error logging.
    if (adsManager || !adErrorEvent){
      try{
        adsManager.destroy();
      }catch(err){
        console.error('Time expired')
      }
    }
    console.log(adErrorEvent.getError());
    
  };

  var onAdEvent = function (adEvent) {
    // Create a new event
    var event = new CustomEvent(adEvent.type);
    if(adEvent.type === 'loaded') event = new CustomEvent('loaded', { detail: _preroll[0].adTagUrl });
    // Dispatch the event
    adContent.dispatchEvent(event);
    var eleLog = document.getElementById('ads-runner-video');
    if(eleLog){
      var txtEvent = '';
      if(event.type === 'loaded'){
        txtEvent += '--'+event.type+': ' + event.detail;
      }
      else if (event.type === 'complete'){
        txtEvent += '------------complete-------------';
      }
      else{
        txtEvent += '--'+event.type;
      }
      eleLog.innerHTML += '<p>'+txtEvent+'</p>';
    }

    // Retrieve the ad from the event. Some events (e.g. ALL_ADS_COMPLETED)
    // don't have ad object associated.
    // console.log(adEvent.type)
    var ad = adEvent.getAd();
    switch (adEvent.type) {
      case google.ima.AdEvent.Type.LOADED:

      // var adI = adEvent.getAdData()
      //   console.log(adI.adPodInfo.maxDuration)
        
        // This is the first event sent for an ad - it is possible to
        // determine whether the ad is a video ad or an overlay.
        if (!ad.isLinear()) {
          // Position AdDisplayContainer correctly for overlay.
          // Use ad.width and ad.height.
          videoContent.play();
        }
        break;
      case google.ima.AdEvent.Type.STARTED:
        // This event indicates the ad has started - the video player
        // can adjust the UI, for example display a pause button and
        // remaining time.
        if (ad.isLinear()) {
          adContent.style.display = 'block';

          _duration = ad.getDuration();

          function toggleSound(sound, muted) {
            var sicon = muted ? sound_off : sound_on;
            var volume = muted ? 0 : 0.5;
            sound.style.backgroundImage = 'url(' + sicon + ')';
            adsManager.setVolume(volume);
            return;
          }

          videoSound = document.createElement('a');
          videoSound.style.cssText = 'position:absolute;z-index:1;bottom:2px;right:2px;width:28px;height:28px;border-radius:28px;display:block;background-position:center;background-repeat:no-repeat;background-color:rgba(255,255,255,0.5);';
          toggleSound(videoSound, _muted);
          adContent.appendChild(videoSound);

          videoSound.onclick = function () {
            console.log('ads muted', _muted);
            toggleSound(videoSound, !_muted);
            _muted = !_muted;
          }

          setTimeout(function(){
            videoProgress = progressCircle(adContent,adsManager.getRemainingTime());
            
            _intervalTimer = setInterval(function () {
              videoProgress(adsManager.getRemainingTime());
            },1000); // every 300ms

          },480)
          

          
        }
        break;
      case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
        if (videoSound) videoSound.remove();
        if (videoProgress) videoProgress(1,1);
        if (_intervalTimer) clearInterval(_intervalTimer);

        _preroll.shift();
        if(_preroll.length){
          setTimeout(function(){
            _playing = false;
            runAds();
          },966)
        }
        else{
          adContent.style.display = 'none';
        }
        break;
    }
  };

  var onAdsLoader = function () {
    // Create ads loader.
    var adsLoader = new google.ima.AdsLoader(adDisplayContainer);

    // Listen and respond to ads loaded and error events.
    adsLoader.addEventListener(
      google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,
      onAdsManager,
      false);
    adsLoader.addEventListener(
      google.ima.AdErrorEvent.Type.AD_ERROR,
      onAdError,
      false);

    return adsLoader;
  };

  var onAdsManager = function (adsManagerLoadedEvent) {
    // Get the ads manager.
    var adsRenderingSettings = new google.ima.AdsRenderingSettings();
    adsRenderingSettings.restoreCustomPlaybackStateOnAdBreakComplete = true;
    // videoContent should be set to the content video element.
    adsManager = adsManagerLoadedEvent.getAdsManager(
      videoContent, adsRenderingSettings);

    videoContent.load();
    adDisplayContainer.initialize();

    try {
      // Initialize the ads manager. Ad rules playlist will start at this time.
      adsManager.init(640, 360, google.ima.ViewMode.NORMAL);
      // Call play to start showing the ad. Single video and overlay ads will
      // start at this time; the call will be ignored for ad rules.
      adsManager.start();

      // Add listeners to the required events.
      adsManager.addEventListener(
        google.ima.AdErrorEvent.Type.AD_ERROR,
        onAdError);
      adsManager.addEventListener(
        google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED,
        onContentPauseRequested);
      adsManager.addEventListener(
        google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED,
        onContentResumeRequested);


      function onContentPauseRequested() {
        videoContent.pause();
        // This function is where you should setup UI for showing ads (e.g.
        // display ad timer countdown, disable seeking etc.)
        // setupUIForAds();
      }

      function onContentResumeRequested() {
        videoContent.play();
        // This function is where you should ensure that your UI is ready
        // to play content. It is the responsibility of the Publisher to
        // implement this function when necessary.
        // setupUIForContent();

      }

      var events = [
        google.ima.AdEvent.Type.VOLUME_CHANGED,
        google.ima.AdEvent.Type.VOLUME_MUTED,
        google.ima.AdEvent.Type.SKIPPED,
        google.ima.AdEvent.Type.CLICK,
        google.ima.AdEvent.Type.PAUSED,
        google.ima.AdEvent.Type.LOADED,
        google.ima.AdEvent.Type.STARTED,
        google.ima.AdEvent.Type.FIRST_QUARTILE,
        google.ima.AdEvent.Type.MIDPOINT,
        google.ima.AdEvent.Type.THIRD_QUARTILE,
        google.ima.AdEvent.Type.COMPLETE,
        google.ima.AdEvent.Type.ALL_ADS_COMPLETED,
      ];

      for (var index in events) {
        adsManager.addEventListener(events[index], onAdEvent);
      }

    } catch (adError) {
      console.log(adError)
      // An error may be thrown if there was a problem with the VAST response.
      videoContent.play();
    }


    return adsManager;
  };

  var sound_on = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjx0aXRsZT52b2x1bWVfb248L3RpdGxlPjxwYXRoIGQ9Ik0xNC4wMTYgMy4yMzRjNC4wMzEgMC44OTEgNi45ODQgNC41IDYuOTg0IDguNzY2cy0yLjk1MyA3Ljg3NS02Ljk4NCA4Ljc2NnYtMi4wNjNjMi45MDYtMC44NDQgNC45NjktMy41MTYgNC45NjktNi43MDNzLTIuMDYzLTUuODU5LTQuOTY5LTYuNzAzdi0yLjA2M3pNMTYuNSAxMmMwIDEuNzgxLTAuOTg0IDMuMjgxLTIuNDg0IDQuMDMxdi04LjA2M2MxLjUgMC43NSAyLjQ4NCAyLjI1IDIuNDg0IDQuMDMxek0zIDloMy45ODRsNS4wMTYtNS4wMTZ2MTYuMDMxbC01LjAxNi01LjAxNmgtMy45ODR2LTZ6Ij48L3BhdGg+PC9zdmc+';
  var sound_off = 'data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPjx0aXRsZT52b2x1bWVfb2ZmPC90aXRsZT48cGF0aCBkPSJNMTIgMy45ODR2NC4yMTlsLTIuMTA5LTIuMTA5ek00LjI2NiAzbDE2LjczNCAxNi43MzQtMS4yNjYgMS4yNjYtMi4wNjMtMi4wNjNjLTEuMDc4IDAuODQ0LTIuMjk3IDEuNS0zLjY1NiAxLjgyOHYtMi4wNjNjMC44NDQtMC4yMzQgMS41OTQtMC42NTYgMi4yNS0xLjE3MmwtNC4yNjYtNC4yNjZ2Ni43NWwtNS4wMTYtNS4wMTZoLTMuOTg0di02aDQuNzM0bC00LjczNC00LjczNHpNMTguOTg0IDEyYzAtMy4xODgtMi4wNjMtNS44NTktNC45NjktNi43MDN2LTIuMDYzYzQuMDMxIDAuODkxIDYuOTg0IDQuNSA2Ljk4NCA4Ljc2NiAwIDEuNS0wLjM3NSAyLjk1My0xLjAzMSA0LjE3MmwtMS41LTEuNTQ3YzAuMzI4LTAuNzk3IDAuNTE2LTEuNjg4IDAuNTE2LTIuNjI1ek0xNi41IDEyYzAgMC4yMzQgMCAwLjQyMi0wLjA0NyAwLjYwOWwtMi40MzgtMi40Mzh2LTIuMjAzYzEuNSAwLjc1IDIuNDg0IDIuMjUgMi40ODQgNC4wMzF6Ij48L3BhdGg+PC9zdmc+';

  var configAds = function () {
    // Create HTML
    videoWrap = isElement(videoWrap) ? videoWrap : document.querySelector(videoWrap);
    if (!videoWrap) {
      console.log('video wrap is empty');
      return;
    }
    // linearAd.width = videoWrap.clientWidth;
    // linearAd.height = videoWrap.clientHeight;
    var ratio = videoWrap.clientWidth / linearAd.width;

    videoContent = videoWrap.querySelector('video');
    if (videoContent) {
      videoContent.pause();
    }
    else{
      videoContent = document.createElement('video');
      videoContent.style.cssText = 'display:block;width:1px;heigh:1px';
      videoWrap.appendChild(videoContent);
      videoSource = document.createElement('source');
      videoSource.setAttribute('src','//adstool.github.io/core/blank.mp4');
      videoSource.setAttribute('type','video/mp4');
      videoContent.appendChild(videoSource);
    }
    videoContent.muted = _muted || true;

    adContent = document.createElement('div');
    adContent.style.cssText = 'z-index:99;position:relative;width:'+linearAd.width+'px;height:'+linearAd.height+'px;margin-top:-'+linearAd.height+'px;transform-origin: left bottom;transform: scale('+ratio+')';

    videoWrap.appendChild(adContent);

    //ttttt
    _queue = thien8(phat8(adVideoActive));

    // Create the ad display container.
    adDisplayContainer = new google.ima.AdDisplayContainer(
      adContent, videoContent);

    //create adsLoader
    adsLoader = onAdsLoader();
    // An event listener to tell the SDK that our content video
    // is completed so the SDK can play any post-roll ads.
    var contentEndedListener = function () {
      adsLoader.contentComplete();
    };
    videoContent.onended = contentEndedListener;
    
    return true;
  };

  var runAds = function () {
    console.log(_preroll)

    if(!_playing) adsLoader.requestAds(_preroll[0]);
    _playing = true;
  }

  if(!configAds()) return;

  return {

    setAdsRequest: function (adTagUrl) {
      // Request video ads.
      if(!adTagUrl) return;
      
      if(_queue) onAdError()

      var adsRequest = new google.ima.AdsRequest();
      adsRequest.adTagUrl = adTagUrl;

      // Specify the linear and nonlinear slot sizes. This helps the SDK to
      // select the correct creative if multiple are returned.
      adsRequest.linearAdSlotWidth = linearAd.height;
      adsRequest.linearAdSlotHeight = linearAd.height;

      adsRequest.nonLinearAdSlotWidth = 640;
      adsRequest.nonLinearAdSlotHeight = 100;
      
      _preroll.push(adsRequest)
    },
    runAds: runAds,
    adContent: adContent,
    name: name
  };

}

function AdRunnerVideo() {
  var urlVideoSite = "https://docs.google.com/spreadsheets/d/1oNpyvAjY00oaKN2WU8FXF3um_T_AiB618OjpPPvnSYI/edit#gid=0",
    urlVideoExcute = "https://script.google.com/macros/s/AKfycbwo-yXWOuH-Rc57ATnkCths4T7VXnnrMzEzbB0fW_uueJ0Q63Y/exec";

  var domain = document.domain;
  // var domain = 'xuhuong.github.io';
  console.log('--> AdsRunner Video For Domain: ' + domain)
  window.AdVideoWrap = {};
  var AdRunnerTags; //khoi tao
  function AdSetup(AdRunnerTags, adVideoActive){
    return loadJS('//imasdk.googleapis.com/js/sdkloader/ima3.js', function(){
      function viewAutoPlay(i){
        var el = document.querySelector('[data-ad-runner="'+i+'"]');
        if(el){
          var avCheck = setInterval(function () {
            var viewer = visibleArea(el);
            if (viewer === 1 || viewer < -0.25 || viewer > 0.25) {
              AdVideoWrap[i].runAds();
              clearInterval(avCheck);
            }
          },1000);
        }
        return;
      }
      for(var i in AdRunnerTags){
        AdVideoWrap[i] = new AdVideoCore('[data-ad-runner="'+i+'"]', adVideoActive);
        if(!isEmpty(AdVideoWrap[i])){
          var AdRunnerReqs = AdRunnerTags[i];
          var autoPlay = false;
          for(var j in AdRunnerReqs){
            AdVideoWrap[i].setAdsRequest(AdRunnerReqs[j].ad_tag);
            if(AdRunnerReqs[j].ad_autoplay){
              autoPlay =  AdRunnerReqs[j].ad_autoplay === 'TRUE' ? true : false;
            }
          }
          
          if(autoPlay){
            viewAutoPlay(i)
          }
        }
      }
    });
  }
  if(localStorage){
    var storeStr = localStorage.getItem('AdRunnerVideo');
    if(storeStr){
      var store = JSON.parse(storeStr);
      if(store.expired > new Date().getTime()){
        AdRunnerTags = store.data; //get local
        window.adVideoActive = store.token;
      }
    }
  }

  if(AdRunnerTags){//neu local co
    // console.log(AdRunnerTags)
    return AdSetup(AdRunnerTags, window.adVideoActive)
  }
  else{
    var cache;
    return pSheetRock(urlVideoSite, 'select * where A = "' + domain + '"', 6)
    .then(function (result) {
      if(!result.length){
        console.log('AdsRunner: No data found from domain name');
        return;
      }
      cache = result.cache || 1;
      var site = result[result.length - 1];
      window.adVideoActive = site.active;
      console.log(window.adVideoActive)
      return pSheetRock(site.link, 'select *', 5);
    })
    .then(function (result) {
      if(!result) return;
      var AdRunnerTags = groupBy(result, function (item) {
        return item.placement
      });

      var store = {expired: new Date().getTime() + parseInt(cache) * 60000, data: AdRunnerTags, token: window.adVideoActive};
      if(localStorage){
        localStorage.setItem('AdRunnerVideo', JSON.stringify(store)); //set local
      }

      return AdSetup(AdRunnerTags, window.adVideoActive)
      
    })
  }
}
AdRunnerVideo()