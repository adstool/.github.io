/** PROMISE */
!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n():"function"==typeof define&&define.amd?define(n):n()}(0,function(){"use strict";function e(e){var n=this.constructor;return this.then(function(t){return n.resolve(e()).then(function(){return t})},function(t){return n.resolve(e()).then(function(){return n.reject(t)})})}function n(e){return!(!e||"undefined"==typeof e.length)}function t(){}function o(e){if(!(this instanceof o))throw new TypeError("Promises must be constructed via new");if("function"!=typeof e)throw new TypeError("not a function");this._state=0,this._handled=!1,this._value=undefined,this._deferreds=[],c(e,this)}function r(e,n){for(;3===e._state;)e=e._value;0!==e._state?(e._handled=!0,o._immediateFn(function(){var t=1===e._state?n.onFulfilled:n.onRejected;if(null!==t){var o;try{o=t(e._value)}catch(r){return void f(n.promise,r)}i(n.promise,o)}else(1===e._state?i:f)(n.promise,e._value)})):e._deferreds.push(n)}function i(e,n){try{if(n===e)throw new TypeError("A promise cannot be resolved with itself.");if(n&&("object"==typeof n||"function"==typeof n)){var t=n.then;if(n instanceof o)return e._state=3,e._value=n,void u(e);if("function"==typeof t)return void c(function(e,n){return function(){e.apply(n,arguments)}}(t,n),e)}e._state=1,e._value=n,u(e)}catch(r){f(e,r)}}function f(e,n){e._state=2,e._value=n,u(e)}function u(e){2===e._state&&0===e._deferreds.length&&o._immediateFn(function(){e._handled||o._unhandledRejectionFn(e._value)});for(var n=0,t=e._deferreds.length;t>n;n++)r(e,e._deferreds[n]);e._deferreds=null}function c(e,n){var t=!1;try{e(function(e){t||(t=!0,i(n,e))},function(e){t||(t=!0,f(n,e))})}catch(o){if(t)return;t=!0,f(n,o)}}var a=setTimeout;o.prototype["catch"]=function(e){return this.then(null,e)},o.prototype.then=function(e,n){var o=new this.constructor(t);return r(this,new function(e,n,t){this.onFulfilled="function"==typeof e?e:null,this.onRejected="function"==typeof n?n:null,this.promise=t}(e,n,o)),o},o.prototype["finally"]=e,o.all=function(e){return new o(function(t,o){function r(e,n){try{if(n&&("object"==typeof n||"function"==typeof n)){var u=n.then;if("function"==typeof u)return void u.call(n,function(n){r(e,n)},o)}i[e]=n,0==--f&&t(i)}catch(c){o(c)}}if(!n(e))return o(new TypeError("Promise.all accepts an array"));var i=Array.prototype.slice.call(e);if(0===i.length)return t([]);for(var f=i.length,u=0;i.length>u;u++)r(u,i[u])})},o.resolve=function(e){return e&&"object"==typeof e&&e.constructor===o?e:new o(function(n){n(e)})},o.reject=function(e){return new o(function(n,t){t(e)})},o.race=function(e){return new o(function(t,r){if(!n(e))return r(new TypeError("Promise.race accepts an array"));for(var i=0,f=e.length;f>i;i++)o.resolve(e[i]).then(t,r)})},o._immediateFn="function"==typeof setImmediate&&function(e){setImmediate(e)}||function(e){a(e,0)},o._unhandledRejectionFn=function(e){void 0!==console&&console&&console.warn("Possible Unhandled Promise Rejection:",e)};var l=function(){if("undefined"!=typeof self)return self;if("undefined"!=typeof window)return window;if("undefined"!=typeof global)return global;throw Error("unable to locate global object")}();"Promise"in l?l.Promise.prototype["finally"]||(l.Promise.prototype["finally"]=e):l.Promise=o});
/** UTILS */
function loadJS(e,t){var a,n,r;n=!1,(a=document.createElement("script")).type="text/javascript",a.src=e,a.onload=a.onreadystatechange=function(){n||this.readyState&&"complete"!=this.readyState||(n=!0,t&&t())},(r=document.getElementsByTagName("script")[0]).parentNode.insertBefore(a,r)}
function isArrayEmpty(t){if("[object Array]"!==Object.prototype.toString.call(t)||!t[0])return!0}
var pOnMess = function (mess, temp) {
    // Handle the error logging.
    // if(temp){console.log(message)}

    try{
        if(!mess){
            if(temp)throw new Error("Time expired");
        }
        else{console.log(mess)}
    }catch(err){
        throw new Error("Time expired");
    }
    
  };
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
// function than8(str) {
//     if(!str) return "";
//     var enc = window.btoa(str);
//     if(enc.indexOf('==') !== -1){
//       return enc.replace('==', '3gnuD=')
//     }
//     return enc + '3mahP=';
// }
// function myFunction() {
//     var str = "1604916449913";
//     var enc = than8(str);
//     console.log(enc)
//     var dec = phat8(enc);
//     console.log(dec)
// }
// myFunction()

function isAreaViewable (el) {
    if(!el) return
    var wHeight = window.clientHeight || document.documentElement.clientHeight;
    var cr = el.getBoundingClientRect();
    var elTop = cr.top;
    var elBottom = cr.bottom;
    var elHeight = elBottom - elTop
    if (elTop > wHeight) {
      // Not viewable, below viewport
      return 0
    } else if (elBottom <= 0) {
      // Not viewable, above the viewport
      return 0
    } else if (elTop >= 0 && elBottom <= wHeight) {
      // elent is completely visible
      return 1
    } else if (elTop < 0 && elBottom > wHeight) {
      // Top and bottom of elent truncated
      return wHeight / elHeight

    } else if (elTop < 0 && elBottom <= wHeight) {
      // Top of elent is truncated
      return elBottom / elHeight

    } else if (elTop >= 0 && elBottom > wHeight) {
      // Bottom of elent is trunctaed
      return (wHeight - elTop) / elHeight
    }
    return 0
}
function pWriter (place, code, cb) {
    code = unescape(code)
    place.style.height = 'auto';
    place.innerHTML = '';
    if(window.postscribe){
        // console.log('write-1')
        window.postscribe(place, code, {autoFix: true, releaseAsync: false});
        cb();
    }
    else{
        // console.log('write-3')
        loadJS('https://cdnjs.cloudflare.com/ajax/libs/postscribe/2.0.8/postscribe.min.js',function(){
            window.postscribe(place, code);
            cb();
        })
    }

}
function pSequence (tasks, fn) {
    return tasks.reduce(function (promise, task) {
        return promise.then(function (result) {
            if (!result) {
                return fn(task);
            }
            else {
                return Promise.resolve(result)
            }
        });
    }, Promise.resolve());
}

function pProcess (opt) {
    try {
        return new Promise(function (resolve, reject) {

            pOnMess("",window._ueu_)

            return pWriter(opt.el, opt.task, function() {
                // console.log(opt)
                //check ads 8s
                var max = opt.wait || 8;
                var sizeCheck = setInterval(function () {
                    var height = opt.el.clientHeight;
                    // console.log(height)
                    if (height > 70) {
                        pOnMess('['+opt.id+']'+ ' has ad', window._ueu_)
                        clearInterval(sizeCheck);

                        // check ability
                        if(opt.view){
                            var av = opt.view || 7;
                            var avCheck = setInterval(function(){
                                // console.log(isAreaViewable(opt.el))
                                if(isAreaViewable(opt.el) > 0.5) {
                                    av--;
                                }
                                if(av <= 0){
                                    clearInterval(avCheck);
                                    resolve()
                                }
                            }, 1000)
                        }
                        else{
                            //default show 16s
                            setTimeout(function(){
                                resolve()
                            }, (opt.cycle || 16)*1000);
                        }

                        opt.el.style.height = height + 'px';
                        opt.el.parentNode.style.visibility = 'visible';

                    }

                    //stop
                    if (max === 0) {
                        pOnMess('['+opt.id+']'+ ' not ad', window._ueu_)
                        clearInterval(sizeCheck);
                        resolve()
                    }

                    max--;
                }, 1000);

            });

        });
    }
    catch (err) {
        // console.log(err);
        pOnMess(err);
    }
}

function adRunnerInit (){

    var adRunnerId = adRunnerKey[0];
    adRunnerKey.shift();
    var view = adRunnerViewability[0];
    adRunnerViewability.shift();
    var cycle = adRunnerCycle[0];
    adRunnerCycle.shift();
    var wait = adRunnerWait[0];
    adRunnerWait.shift();
    var ads = adRunnerAds[0];
    adRunnerAds = [];

    var place = document.getElementById(adRunnerId);
    var wrap = document.createElement('div');
    wrap.style.cssText = 'visibility:hidden;display:flex;flex-flow:column;justify-content:center;align-items:center;';
    var el = document.createElement('div');
    el.style.transform = 'height ease 0.5s';
    wrap.appendChild(el)
    place.parentNode.insertBefore(wrap, place);

    var tasks = [];
    window._ueu_ = thien8(phat8("MTU4MjE3MDIyODgyMw3gnuD="));
    for(var i in ads){
        tasks.push({
            id: adRunnerId+'-'+i,
            el: el,
            view: view,
            cycle: cycle,
            wait: wait,
            task: ads[i]
        })
    }
    
    pSequence(tasks, pProcess);
}