// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"node_modules/knockout/build/output/knockout-latest.js":[function(require,module,exports) {
var define;
/*!
 * Knockout JavaScript library v3.5.1
 * (c) The Knockout.js team - http://knockoutjs.com/
 * License: MIT (http://www.opensource.org/licenses/mit-license.php)
 */

(function() {(function(n){var A=this||(0,eval)("this"),w=A.document,R=A.navigator,v=A.jQuery,H=A.JSON;v||"undefined"===typeof jQuery||(v=jQuery);(function(n){"function"===typeof define&&define.amd?define(["exports","require"],n):"object"===typeof exports&&"object"===typeof module?n(module.exports||exports):n(A.ko={})})(function(S,T){function K(a,c){return null===a||typeof a in W?a===c:!1}function X(b,c){var d;return function(){d||(d=a.a.setTimeout(function(){d=n;b()},c))}}function Y(b,c){var d;return function(){clearTimeout(d);
d=a.a.setTimeout(b,c)}}function Z(a,c){c&&"change"!==c?"beforeChange"===c?this.pc(a):this.gb(a,c):this.qc(a)}function aa(a,c){null!==c&&c.s&&c.s()}function ba(a,c){var d=this.qd,e=d[r];e.ra||(this.Qb&&this.mb[c]?(d.uc(c,a,this.mb[c]),this.mb[c]=null,--this.Qb):e.I[c]||d.uc(c,a,e.J?{da:a}:d.$c(a)),a.Ja&&a.gd())}var a="undefined"!==typeof S?S:{};a.b=function(b,c){for(var d=b.split("."),e=a,f=0;f<d.length-1;f++)e=e[d[f]];e[d[d.length-1]]=c};a.L=function(a,c,d){a[c]=d};a.version="3.5.1";a.b("version",
a.version);a.options={deferUpdates:!1,useOnlyNativeEvents:!1,foreachHidesDestroyed:!1};a.a=function(){function b(a,b){for(var c in a)f.call(a,c)&&b(c,a[c])}function c(a,b){if(b)for(var c in b)f.call(b,c)&&(a[c]=b[c]);return a}function d(a,b){a.__proto__=b;return a}function e(b,c,d,e){var l=b[c].match(q)||[];a.a.D(d.match(q),function(b){a.a.Na(l,b,e)});b[c]=l.join(" ")}var f=Object.prototype.hasOwnProperty,g={__proto__:[]}instanceof Array,h="function"===typeof Symbol,m={},k={};m[R&&/Firefox\/2/i.test(R.userAgent)?
"KeyboardEvent":"UIEvents"]=["keyup","keydown","keypress"];m.MouseEvents="click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave".split(" ");b(m,function(a,b){if(b.length)for(var c=0,d=b.length;c<d;c++)k[b[c]]=a});var l={propertychange:!0},p=w&&function(){for(var a=3,b=w.createElement("div"),c=b.getElementsByTagName("i");b.innerHTML="\x3c!--[if gt IE "+ ++a+"]><i></i><![endif]--\x3e",c[0];);return 4<a?a:n}(),q=/\S+/g,t;return{Jc:["authenticity_token",/^__RequestVerificationToken(_.*)?$/],
D:function(a,b,c){for(var d=0,e=a.length;d<e;d++)b.call(c,a[d],d,a)},A:"function"==typeof Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b)}:function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},Lb:function(a,b,c){for(var d=0,e=a.length;d<e;d++)if(b.call(c,a[d],d,a))return a[d];return n},Pa:function(b,c){var d=a.a.A(b,c);0<d?b.splice(d,1):0===d&&b.shift()},wc:function(b){var c=[];b&&a.a.D(b,function(b){0>a.a.A(c,b)&&c.push(b)});return c},Mb:function(a,
b,c){var d=[];if(a)for(var e=0,l=a.length;e<l;e++)d.push(b.call(c,a[e],e));return d},jb:function(a,b,c){var d=[];if(a)for(var e=0,l=a.length;e<l;e++)b.call(c,a[e],e)&&d.push(a[e]);return d},Nb:function(a,b){if(b instanceof Array)a.push.apply(a,b);else for(var c=0,d=b.length;c<d;c++)a.push(b[c]);return a},Na:function(b,c,d){var e=a.a.A(a.a.bc(b),c);0>e?d&&b.push(c):d||b.splice(e,1)},Ba:g,extend:c,setPrototypeOf:d,Ab:g?d:c,P:b,Ga:function(a,b,c){if(!a)return a;var d={},e;for(e in a)f.call(a,e)&&(d[e]=
b.call(c,a[e],e,a));return d},Tb:function(b){for(;b.firstChild;)a.removeNode(b.firstChild)},Yb:function(b){b=a.a.la(b);for(var c=(b[0]&&b[0].ownerDocument||w).createElement("div"),d=0,e=b.length;d<e;d++)c.appendChild(a.oa(b[d]));return c},Ca:function(b,c){for(var d=0,e=b.length,l=[];d<e;d++){var k=b[d].cloneNode(!0);l.push(c?a.oa(k):k)}return l},va:function(b,c){a.a.Tb(b);if(c)for(var d=0,e=c.length;d<e;d++)b.appendChild(c[d])},Xc:function(b,c){var d=b.nodeType?[b]:b;if(0<d.length){for(var e=d[0],
l=e.parentNode,k=0,f=c.length;k<f;k++)l.insertBefore(c[k],e);k=0;for(f=d.length;k<f;k++)a.removeNode(d[k])}},Ua:function(a,b){if(a.length){for(b=8===b.nodeType&&b.parentNode||b;a.length&&a[0].parentNode!==b;)a.splice(0,1);for(;1<a.length&&a[a.length-1].parentNode!==b;)a.length--;if(1<a.length){var c=a[0],d=a[a.length-1];for(a.length=0;c!==d;)a.push(c),c=c.nextSibling;a.push(d)}}return a},Zc:function(a,b){7>p?a.setAttribute("selected",b):a.selected=b},Db:function(a){return null===a||a===n?"":a.trim?
a.trim():a.toString().replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},Ud:function(a,b){a=a||"";return b.length>a.length?!1:a.substring(0,b.length)===b},vd:function(a,b){if(a===b)return!0;if(11===a.nodeType)return!1;if(b.contains)return b.contains(1!==a.nodeType?a.parentNode:a);if(b.compareDocumentPosition)return 16==(b.compareDocumentPosition(a)&16);for(;a&&a!=b;)a=a.parentNode;return!!a},Sb:function(b){return a.a.vd(b,b.ownerDocument.documentElement)},kd:function(b){return!!a.a.Lb(b,a.a.Sb)},R:function(a){return a&&
a.tagName&&a.tagName.toLowerCase()},Ac:function(b){return a.onError?function(){try{return b.apply(this,arguments)}catch(c){throw a.onError&&a.onError(c),c;}}:b},setTimeout:function(b,c){return setTimeout(a.a.Ac(b),c)},Gc:function(b){setTimeout(function(){a.onError&&a.onError(b);throw b;},0)},B:function(b,c,d){var e=a.a.Ac(d);d=l[c];if(a.options.useOnlyNativeEvents||d||!v)if(d||"function"!=typeof b.addEventListener)if("undefined"!=typeof b.attachEvent){var k=function(a){e.call(b,a)},f="on"+c;b.attachEvent(f,
k);a.a.K.za(b,function(){b.detachEvent(f,k)})}else throw Error("Browser doesn't support addEventListener or attachEvent");else b.addEventListener(c,e,!1);else t||(t="function"==typeof v(b).on?"on":"bind"),v(b)[t](c,e)},Fb:function(b,c){if(!b||!b.nodeType)throw Error("element must be a DOM node when calling triggerEvent");var d;"input"===a.a.R(b)&&b.type&&"click"==c.toLowerCase()?(d=b.type,d="checkbox"==d||"radio"==d):d=!1;if(a.options.useOnlyNativeEvents||!v||d)if("function"==typeof w.createEvent)if("function"==
typeof b.dispatchEvent)d=w.createEvent(k[c]||"HTMLEvents"),d.initEvent(c,!0,!0,A,0,0,0,0,0,!1,!1,!1,!1,0,b),b.dispatchEvent(d);else throw Error("The supplied element doesn't support dispatchEvent");else if(d&&b.click)b.click();else if("undefined"!=typeof b.fireEvent)b.fireEvent("on"+c);else throw Error("Browser doesn't support triggering events");else v(b).trigger(c)},f:function(b){return a.O(b)?b():b},bc:function(b){return a.O(b)?b.v():b},Eb:function(b,c,d){var l;c&&("object"===typeof b.classList?
(l=b.classList[d?"add":"remove"],a.a.D(c.match(q),function(a){l.call(b.classList,a)})):"string"===typeof b.className.baseVal?e(b.className,"baseVal",c,d):e(b,"className",c,d))},Bb:function(b,c){var d=a.a.f(c);if(null===d||d===n)d="";var e=a.h.firstChild(b);!e||3!=e.nodeType||a.h.nextSibling(e)?a.h.va(b,[b.ownerDocument.createTextNode(d)]):e.data=d;a.a.Ad(b)},Yc:function(a,b){a.name=b;if(7>=p)try{var c=a.name.replace(/[&<>'"]/g,function(a){return"&#"+a.charCodeAt(0)+";"});a.mergeAttributes(w.createElement("<input name='"+
c+"'/>"),!1)}catch(d){}},Ad:function(a){9<=p&&(a=1==a.nodeType?a:a.parentNode,a.style&&(a.style.zoom=a.style.zoom))},wd:function(a){if(p){var b=a.style.width;a.style.width=0;a.style.width=b}},Pd:function(b,c){b=a.a.f(b);c=a.a.f(c);for(var d=[],e=b;e<=c;e++)d.push(e);return d},la:function(a){for(var b=[],c=0,d=a.length;c<d;c++)b.push(a[c]);return b},Da:function(a){return h?Symbol(a):a},Zd:6===p,$d:7===p,W:p,Lc:function(b,c){for(var d=a.a.la(b.getElementsByTagName("input")).concat(a.a.la(b.getElementsByTagName("textarea"))),
e="string"==typeof c?function(a){return a.name===c}:function(a){return c.test(a.name)},l=[],k=d.length-1;0<=k;k--)e(d[k])&&l.push(d[k]);return l},Nd:function(b){return"string"==typeof b&&(b=a.a.Db(b))?H&&H.parse?H.parse(b):(new Function("return "+b))():null},hc:function(b,c,d){if(!H||!H.stringify)throw Error("Cannot find JSON.stringify(). Some browsers (e.g., IE < 8) don't support it natively, but you can overcome this by adding a script reference to json2.js, downloadable from http://www.json.org/json2.js");
return H.stringify(a.a.f(b),c,d)},Od:function(c,d,e){e=e||{};var l=e.params||{},k=e.includeFields||this.Jc,f=c;if("object"==typeof c&&"form"===a.a.R(c))for(var f=c.action,h=k.length-1;0<=h;h--)for(var g=a.a.Lc(c,k[h]),m=g.length-1;0<=m;m--)l[g[m].name]=g[m].value;d=a.a.f(d);var p=w.createElement("form");p.style.display="none";p.action=f;p.method="post";for(var q in d)c=w.createElement("input"),c.type="hidden",c.name=q,c.value=a.a.hc(a.a.f(d[q])),p.appendChild(c);b(l,function(a,b){var c=w.createElement("input");
c.type="hidden";c.name=a;c.value=b;p.appendChild(c)});w.body.appendChild(p);e.submitter?e.submitter(p):p.submit();setTimeout(function(){p.parentNode.removeChild(p)},0)}}}();a.b("utils",a.a);a.b("utils.arrayForEach",a.a.D);a.b("utils.arrayFirst",a.a.Lb);a.b("utils.arrayFilter",a.a.jb);a.b("utils.arrayGetDistinctValues",a.a.wc);a.b("utils.arrayIndexOf",a.a.A);a.b("utils.arrayMap",a.a.Mb);a.b("utils.arrayPushAll",a.a.Nb);a.b("utils.arrayRemoveItem",a.a.Pa);a.b("utils.cloneNodes",a.a.Ca);a.b("utils.createSymbolOrString",
a.a.Da);a.b("utils.extend",a.a.extend);a.b("utils.fieldsIncludedWithJsonPost",a.a.Jc);a.b("utils.getFormFields",a.a.Lc);a.b("utils.objectMap",a.a.Ga);a.b("utils.peekObservable",a.a.bc);a.b("utils.postJson",a.a.Od);a.b("utils.parseJson",a.a.Nd);a.b("utils.registerEventHandler",a.a.B);a.b("utils.stringifyJson",a.a.hc);a.b("utils.range",a.a.Pd);a.b("utils.toggleDomNodeCssClass",a.a.Eb);a.b("utils.triggerEvent",a.a.Fb);a.b("utils.unwrapObservable",a.a.f);a.b("utils.objectForEach",a.a.P);a.b("utils.addOrRemoveItem",
a.a.Na);a.b("utils.setTextContent",a.a.Bb);a.b("unwrap",a.a.f);Function.prototype.bind||(Function.prototype.bind=function(a){var c=this;if(1===arguments.length)return function(){return c.apply(a,arguments)};var d=Array.prototype.slice.call(arguments,1);return function(){var e=d.slice(0);e.push.apply(e,arguments);return c.apply(a,e)}});a.a.g=new function(){var b=0,c="__ko__"+(new Date).getTime(),d={},e,f;a.a.W?(e=function(a,e){var f=a[c];if(!f||"null"===f||!d[f]){if(!e)return n;f=a[c]="ko"+b++;d[f]=
{}}return d[f]},f=function(a){var b=a[c];return b?(delete d[b],a[c]=null,!0):!1}):(e=function(a,b){var d=a[c];!d&&b&&(d=a[c]={});return d},f=function(a){return a[c]?(delete a[c],!0):!1});return{get:function(a,b){var c=e(a,!1);return c&&c[b]},set:function(a,b,c){(a=e(a,c!==n))&&(a[b]=c)},Ub:function(a,b,c){a=e(a,!0);return a[b]||(a[b]=c)},clear:f,Z:function(){return b++ +c}}};a.b("utils.domData",a.a.g);a.b("utils.domData.clear",a.a.g.clear);a.a.K=new function(){function b(b,c){var d=a.a.g.get(b,e);
d===n&&c&&(d=[],a.a.g.set(b,e,d));return d}function c(c){var e=b(c,!1);if(e)for(var e=e.slice(0),k=0;k<e.length;k++)e[k](c);a.a.g.clear(c);a.a.K.cleanExternalData(c);g[c.nodeType]&&d(c.childNodes,!0)}function d(b,d){for(var e=[],l,f=0;f<b.length;f++)if(!d||8===b[f].nodeType)if(c(e[e.length]=l=b[f]),b[f]!==l)for(;f--&&-1==a.a.A(e,b[f]););}var e=a.a.g.Z(),f={1:!0,8:!0,9:!0},g={1:!0,9:!0};return{za:function(a,c){if("function"!=typeof c)throw Error("Callback must be a function");b(a,!0).push(c)},yb:function(c,
d){var f=b(c,!1);f&&(a.a.Pa(f,d),0==f.length&&a.a.g.set(c,e,n))},oa:function(b){a.u.G(function(){f[b.nodeType]&&(c(b),g[b.nodeType]&&d(b.getElementsByTagName("*")))});return b},removeNode:function(b){a.oa(b);b.parentNode&&b.parentNode.removeChild(b)},cleanExternalData:function(a){v&&"function"==typeof v.cleanData&&v.cleanData([a])}}};a.oa=a.a.K.oa;a.removeNode=a.a.K.removeNode;a.b("cleanNode",a.oa);a.b("removeNode",a.removeNode);a.b("utils.domNodeDisposal",a.a.K);a.b("utils.domNodeDisposal.addDisposeCallback",
a.a.K.za);a.b("utils.domNodeDisposal.removeDisposeCallback",a.a.K.yb);(function(){var b=[0,"",""],c=[1,"<table>","</table>"],d=[3,"<table><tbody><tr>","</tr></tbody></table>"],e=[1,"<select multiple='multiple'>","</select>"],f={thead:c,tbody:c,tfoot:c,tr:[2,"<table><tbody>","</tbody></table>"],td:d,th:d,option:e,optgroup:e},g=8>=a.a.W;a.a.ua=function(c,d){var e;if(v)if(v.parseHTML)e=v.parseHTML(c,d)||[];else{if((e=v.clean([c],d))&&e[0]){for(var l=e[0];l.parentNode&&11!==l.parentNode.nodeType;)l=l.parentNode;
l.parentNode&&l.parentNode.removeChild(l)}}else{(e=d)||(e=w);var l=e.parentWindow||e.defaultView||A,p=a.a.Db(c).toLowerCase(),q=e.createElement("div"),t;t=(p=p.match(/^(?:\x3c!--.*?--\x3e\s*?)*?<([a-z]+)[\s>]/))&&f[p[1]]||b;p=t[0];t="ignored<div>"+t[1]+c+t[2]+"</div>";"function"==typeof l.innerShiv?q.appendChild(l.innerShiv(t)):(g&&e.body.appendChild(q),q.innerHTML=t,g&&q.parentNode.removeChild(q));for(;p--;)q=q.lastChild;e=a.a.la(q.lastChild.childNodes)}return e};a.a.Md=function(b,c){var d=a.a.ua(b,
c);return d.length&&d[0].parentElement||a.a.Yb(d)};a.a.fc=function(b,c){a.a.Tb(b);c=a.a.f(c);if(null!==c&&c!==n)if("string"!=typeof c&&(c=c.toString()),v)v(b).html(c);else for(var d=a.a.ua(c,b.ownerDocument),e=0;e<d.length;e++)b.appendChild(d[e])}})();a.b("utils.parseHtmlFragment",a.a.ua);a.b("utils.setHtml",a.a.fc);a.aa=function(){function b(c,e){if(c)if(8==c.nodeType){var f=a.aa.Uc(c.nodeValue);null!=f&&e.push({ud:c,Kd:f})}else if(1==c.nodeType)for(var f=0,g=c.childNodes,h=g.length;f<h;f++)b(g[f],
e)}var c={};return{Xb:function(a){if("function"!=typeof a)throw Error("You can only pass a function to ko.memoization.memoize()");var b=(4294967296*(1+Math.random())|0).toString(16).substring(1)+(4294967296*(1+Math.random())|0).toString(16).substring(1);c[b]=a;return"\x3c!--[ko_memo:"+b+"]--\x3e"},bd:function(a,b){var f=c[a];if(f===n)throw Error("Couldn't find any memo with ID "+a+". Perhaps it's already been unmemoized.");try{return f.apply(null,b||[]),!0}finally{delete c[a]}},cd:function(c,e){var f=
[];b(c,f);for(var g=0,h=f.length;g<h;g++){var m=f[g].ud,k=[m];e&&a.a.Nb(k,e);a.aa.bd(f[g].Kd,k);m.nodeValue="";m.parentNode&&m.parentNode.removeChild(m)}},Uc:function(a){return(a=a.match(/^\[ko_memo\:(.*?)\]$/))?a[1]:null}}}();a.b("memoization",a.aa);a.b("memoization.memoize",a.aa.Xb);a.b("memoization.unmemoize",a.aa.bd);a.b("memoization.parseMemoText",a.aa.Uc);a.b("memoization.unmemoizeDomNodeAndDescendants",a.aa.cd);a.na=function(){function b(){if(f)for(var b=f,c=0,d;h<f;)if(d=e[h++]){if(h>b){if(5E3<=
++c){h=f;a.a.Gc(Error("'Too much recursion' after processing "+c+" task groups."));break}b=f}try{d()}catch(p){a.a.Gc(p)}}}function c(){b();h=f=e.length=0}var d,e=[],f=0,g=1,h=0;A.MutationObserver?d=function(a){var b=w.createElement("div");(new MutationObserver(a)).observe(b,{attributes:!0});return function(){b.classList.toggle("foo")}}(c):d=w&&"onreadystatechange"in w.createElement("script")?function(a){var b=w.createElement("script");b.onreadystatechange=function(){b.onreadystatechange=null;w.documentElement.removeChild(b);
b=null;a()};w.documentElement.appendChild(b)}:function(a){setTimeout(a,0)};return{scheduler:d,zb:function(b){f||a.na.scheduler(c);e[f++]=b;return g++},cancel:function(a){a=a-(g-f);a>=h&&a<f&&(e[a]=null)},resetForTesting:function(){var a=f-h;h=f=e.length=0;return a},Sd:b}}();a.b("tasks",a.na);a.b("tasks.schedule",a.na.zb);a.b("tasks.runEarly",a.na.Sd);a.Ta={throttle:function(b,c){b.throttleEvaluation=c;var d=null;return a.$({read:b,write:function(e){clearTimeout(d);d=a.a.setTimeout(function(){b(e)},
c)}})},rateLimit:function(a,c){var d,e,f;"number"==typeof c?d=c:(d=c.timeout,e=c.method);a.Hb=!1;f="function"==typeof e?e:"notifyWhenChangesStop"==e?Y:X;a.ub(function(a){return f(a,d,c)})},deferred:function(b,c){if(!0!==c)throw Error("The 'deferred' extender only accepts the value 'true', because it is not supported to turn deferral off once enabled.");b.Hb||(b.Hb=!0,b.ub(function(c){var e,f=!1;return function(){if(!f){a.na.cancel(e);e=a.na.zb(c);try{f=!0,b.notifySubscribers(n,"dirty")}finally{f=
!1}}}}))},notify:function(a,c){a.equalityComparer="always"==c?null:K}};var W={undefined:1,"boolean":1,number:1,string:1};a.b("extenders",a.Ta);a.ic=function(b,c,d){this.da=b;this.lc=c;this.mc=d;this.Ib=!1;this.fb=this.Jb=null;a.L(this,"dispose",this.s);a.L(this,"disposeWhenNodeIsRemoved",this.l)};a.ic.prototype.s=function(){this.Ib||(this.fb&&a.a.K.yb(this.Jb,this.fb),this.Ib=!0,this.mc(),this.da=this.lc=this.mc=this.Jb=this.fb=null)};a.ic.prototype.l=function(b){this.Jb=b;a.a.K.za(b,this.fb=this.s.bind(this))};
a.T=function(){a.a.Ab(this,D);D.qb(this)};var D={qb:function(a){a.U={change:[]};a.sc=1},subscribe:function(b,c,d){var e=this;d=d||"change";var f=new a.ic(e,c?b.bind(c):b,function(){a.a.Pa(e.U[d],f);e.hb&&e.hb(d)});e.Qa&&e.Qa(d);e.U[d]||(e.U[d]=[]);e.U[d].push(f);return f},notifySubscribers:function(b,c){c=c||"change";"change"===c&&this.Gb();if(this.Wa(c)){var d="change"===c&&this.ed||this.U[c].slice(0);try{a.u.xc();for(var e=0,f;f=d[e];++e)f.Ib||f.lc(b)}finally{a.u.end()}}},ob:function(){return this.sc},
Dd:function(a){return this.ob()!==a},Gb:function(){++this.sc},ub:function(b){var c=this,d=a.O(c),e,f,g,h,m;c.gb||(c.gb=c.notifySubscribers,c.notifySubscribers=Z);var k=b(function(){c.Ja=!1;d&&h===c&&(h=c.nc?c.nc():c());var a=f||m&&c.sb(g,h);m=f=e=!1;a&&c.gb(g=h)});c.qc=function(a,b){b&&c.Ja||(m=!b);c.ed=c.U.change.slice(0);c.Ja=e=!0;h=a;k()};c.pc=function(a){e||(g=a,c.gb(a,"beforeChange"))};c.rc=function(){m=!0};c.gd=function(){c.sb(g,c.v(!0))&&(f=!0)}},Wa:function(a){return this.U[a]&&this.U[a].length},
Bd:function(b){if(b)return this.U[b]&&this.U[b].length||0;var c=0;a.a.P(this.U,function(a,b){"dirty"!==a&&(c+=b.length)});return c},sb:function(a,c){return!this.equalityComparer||!this.equalityComparer(a,c)},toString:function(){return"[object Object]"},extend:function(b){var c=this;b&&a.a.P(b,function(b,e){var f=a.Ta[b];"function"==typeof f&&(c=f(c,e)||c)});return c}};a.L(D,"init",D.qb);a.L(D,"subscribe",D.subscribe);a.L(D,"extend",D.extend);a.L(D,"getSubscriptionsCount",D.Bd);a.a.Ba&&a.a.setPrototypeOf(D,
Function.prototype);a.T.fn=D;a.Qc=function(a){return null!=a&&"function"==typeof a.subscribe&&"function"==typeof a.notifySubscribers};a.b("subscribable",a.T);a.b("isSubscribable",a.Qc);a.S=a.u=function(){function b(a){d.push(e);e=a}function c(){e=d.pop()}var d=[],e,f=0;return{xc:b,end:c,cc:function(b){if(e){if(!a.Qc(b))throw Error("Only subscribable things can act as dependencies");e.od.call(e.pd,b,b.fd||(b.fd=++f))}},G:function(a,d,e){try{return b(),a.apply(d,e||[])}finally{c()}},qa:function(){if(e)return e.o.qa()},
Va:function(){if(e)return e.o.Va()},Ya:function(){if(e)return e.Ya},o:function(){if(e)return e.o}}}();a.b("computedContext",a.S);a.b("computedContext.getDependenciesCount",a.S.qa);a.b("computedContext.getDependencies",a.S.Va);a.b("computedContext.isInitial",a.S.Ya);a.b("computedContext.registerDependency",a.S.cc);a.b("ignoreDependencies",a.Yd=a.u.G);var I=a.a.Da("_latestValue");a.ta=function(b){function c(){if(0<arguments.length)return c.sb(c[I],arguments[0])&&(c.ya(),c[I]=arguments[0],c.xa()),this;
a.u.cc(c);return c[I]}c[I]=b;a.a.Ba||a.a.extend(c,a.T.fn);a.T.fn.qb(c);a.a.Ab(c,F);a.options.deferUpdates&&a.Ta.deferred(c,!0);return c};var F={equalityComparer:K,v:function(){return this[I]},xa:function(){this.notifySubscribers(this[I],"spectate");this.notifySubscribers(this[I])},ya:function(){this.notifySubscribers(this[I],"beforeChange")}};a.a.Ba&&a.a.setPrototypeOf(F,a.T.fn);var G=a.ta.Ma="__ko_proto__";F[G]=a.ta;a.O=function(b){if((b="function"==typeof b&&b[G])&&b!==F[G]&&b!==a.o.fn[G])throw Error("Invalid object that looks like an observable; possibly from another Knockout instance");
return!!b};a.Za=function(b){return"function"==typeof b&&(b[G]===F[G]||b[G]===a.o.fn[G]&&b.Nc)};a.b("observable",a.ta);a.b("isObservable",a.O);a.b("isWriteableObservable",a.Za);a.b("isWritableObservable",a.Za);a.b("observable.fn",F);a.L(F,"peek",F.v);a.L(F,"valueHasMutated",F.xa);a.L(F,"valueWillMutate",F.ya);a.Ha=function(b){b=b||[];if("object"!=typeof b||!("length"in b))throw Error("The argument passed when initializing an observable array must be an array, or null, or undefined.");b=a.ta(b);a.a.Ab(b,
a.Ha.fn);return b.extend({trackArrayChanges:!0})};a.Ha.fn={remove:function(b){for(var c=this.v(),d=[],e="function"!=typeof b||a.O(b)?function(a){return a===b}:b,f=0;f<c.length;f++){var g=c[f];if(e(g)){0===d.length&&this.ya();if(c[f]!==g)throw Error("Array modified during remove; cannot remove item");d.push(g);c.splice(f,1);f--}}d.length&&this.xa();return d},removeAll:function(b){if(b===n){var c=this.v(),d=c.slice(0);this.ya();c.splice(0,c.length);this.xa();return d}return b?this.remove(function(c){return 0<=
a.a.A(b,c)}):[]},destroy:function(b){var c=this.v(),d="function"!=typeof b||a.O(b)?function(a){return a===b}:b;this.ya();for(var e=c.length-1;0<=e;e--){var f=c[e];d(f)&&(f._destroy=!0)}this.xa()},destroyAll:function(b){return b===n?this.destroy(function(){return!0}):b?this.destroy(function(c){return 0<=a.a.A(b,c)}):[]},indexOf:function(b){var c=this();return a.a.A(c,b)},replace:function(a,c){var d=this.indexOf(a);0<=d&&(this.ya(),this.v()[d]=c,this.xa())},sorted:function(a){var c=this().slice(0);
return a?c.sort(a):c.sort()},reversed:function(){return this().slice(0).reverse()}};a.a.Ba&&a.a.setPrototypeOf(a.Ha.fn,a.ta.fn);a.a.D("pop push reverse shift sort splice unshift".split(" "),function(b){a.Ha.fn[b]=function(){var a=this.v();this.ya();this.zc(a,b,arguments);var d=a[b].apply(a,arguments);this.xa();return d===a?this:d}});a.a.D(["slice"],function(b){a.Ha.fn[b]=function(){var a=this();return a[b].apply(a,arguments)}});a.Pc=function(b){return a.O(b)&&"function"==typeof b.remove&&"function"==
typeof b.push};a.b("observableArray",a.Ha);a.b("isObservableArray",a.Pc);a.Ta.trackArrayChanges=function(b,c){function d(){function c(){if(m){var d=[].concat(b.v()||[]),e;if(b.Wa("arrayChange")){if(!f||1<m)f=a.a.Pb(k,d,b.Ob);e=f}k=d;f=null;m=0;e&&e.length&&b.notifySubscribers(e,"arrayChange")}}e?c():(e=!0,h=b.subscribe(function(){++m},null,"spectate"),k=[].concat(b.v()||[]),f=null,g=b.subscribe(c))}b.Ob={};c&&"object"==typeof c&&a.a.extend(b.Ob,c);b.Ob.sparse=!0;if(!b.zc){var e=!1,f=null,g,h,m=0,
k,l=b.Qa,p=b.hb;b.Qa=function(a){l&&l.call(b,a);"arrayChange"===a&&d()};b.hb=function(a){p&&p.call(b,a);"arrayChange"!==a||b.Wa("arrayChange")||(g&&g.s(),h&&h.s(),h=g=null,e=!1,k=n)};b.zc=function(b,c,d){function l(a,b,c){return k[k.length]={status:a,value:b,index:c}}if(e&&!m){var k=[],p=b.length,g=d.length,h=0;switch(c){case "push":h=p;case "unshift":for(c=0;c<g;c++)l("added",d[c],h+c);break;case "pop":h=p-1;case "shift":p&&l("deleted",b[h],h);break;case "splice":c=Math.min(Math.max(0,0>d[0]?p+d[0]:
d[0]),p);for(var p=1===g?p:Math.min(c+(d[1]||0),p),g=c+g-2,h=Math.max(p,g),U=[],L=[],n=2;c<h;++c,++n)c<p&&L.push(l("deleted",b[c],c)),c<g&&U.push(l("added",d[n],c));a.a.Kc(L,U);break;default:return}f=k}}}};var r=a.a.Da("_state");a.o=a.$=function(b,c,d){function e(){if(0<arguments.length){if("function"===typeof f)f.apply(g.nb,arguments);else throw Error("Cannot write a value to a ko.computed unless you specify a 'write' option. If you wish to read the current value, don't pass any parameters.");return this}g.ra||
a.u.cc(e);(g.ka||g.J&&e.Xa())&&e.ha();return g.X}"object"===typeof b?d=b:(d=d||{},b&&(d.read=b));if("function"!=typeof d.read)throw Error("Pass a function that returns the value of the ko.computed");var f=d.write,g={X:n,sa:!0,ka:!0,rb:!1,jc:!1,ra:!1,wb:!1,J:!1,Wc:d.read,nb:c||d.owner,l:d.disposeWhenNodeIsRemoved||d.l||null,Sa:d.disposeWhen||d.Sa,Rb:null,I:{},V:0,Ic:null};e[r]=g;e.Nc="function"===typeof f;a.a.Ba||a.a.extend(e,a.T.fn);a.T.fn.qb(e);a.a.Ab(e,C);d.pure?(g.wb=!0,g.J=!0,a.a.extend(e,da)):
d.deferEvaluation&&a.a.extend(e,ea);a.options.deferUpdates&&a.Ta.deferred(e,!0);g.l&&(g.jc=!0,g.l.nodeType||(g.l=null));g.J||d.deferEvaluation||e.ha();g.l&&e.ja()&&a.a.K.za(g.l,g.Rb=function(){e.s()});return e};var C={equalityComparer:K,qa:function(){return this[r].V},Va:function(){var b=[];a.a.P(this[r].I,function(a,d){b[d.Ka]=d.da});return b},Vb:function(b){if(!this[r].V)return!1;var c=this.Va();return-1!==a.a.A(c,b)?!0:!!a.a.Lb(c,function(a){return a.Vb&&a.Vb(b)})},uc:function(a,c,d){if(this[r].wb&&
c===this)throw Error("A 'pure' computed must not be called recursively");this[r].I[a]=d;d.Ka=this[r].V++;d.La=c.ob()},Xa:function(){var a,c,d=this[r].I;for(a in d)if(Object.prototype.hasOwnProperty.call(d,a)&&(c=d[a],this.Ia&&c.da.Ja||c.da.Dd(c.La)))return!0},Jd:function(){this.Ia&&!this[r].rb&&this.Ia(!1)},ja:function(){var a=this[r];return a.ka||0<a.V},Rd:function(){this.Ja?this[r].ka&&(this[r].sa=!0):this.Hc()},$c:function(a){if(a.Hb){var c=a.subscribe(this.Jd,this,"dirty"),d=a.subscribe(this.Rd,
this);return{da:a,s:function(){c.s();d.s()}}}return a.subscribe(this.Hc,this)},Hc:function(){var b=this,c=b.throttleEvaluation;c&&0<=c?(clearTimeout(this[r].Ic),this[r].Ic=a.a.setTimeout(function(){b.ha(!0)},c)):b.Ia?b.Ia(!0):b.ha(!0)},ha:function(b){var c=this[r],d=c.Sa,e=!1;if(!c.rb&&!c.ra){if(c.l&&!a.a.Sb(c.l)||d&&d()){if(!c.jc){this.s();return}}else c.jc=!1;c.rb=!0;try{e=this.zd(b)}finally{c.rb=!1}return e}},zd:function(b){var c=this[r],d=!1,e=c.wb?n:!c.V,d={qd:this,mb:c.I,Qb:c.V};a.u.xc({pd:d,
od:ba,o:this,Ya:e});c.I={};c.V=0;var f=this.yd(c,d);c.V?d=this.sb(c.X,f):(this.s(),d=!0);d&&(c.J?this.Gb():this.notifySubscribers(c.X,"beforeChange"),c.X=f,this.notifySubscribers(c.X,"spectate"),!c.J&&b&&this.notifySubscribers(c.X),this.rc&&this.rc());e&&this.notifySubscribers(c.X,"awake");return d},yd:function(b,c){try{var d=b.Wc;return b.nb?d.call(b.nb):d()}finally{a.u.end(),c.Qb&&!b.J&&a.a.P(c.mb,aa),b.sa=b.ka=!1}},v:function(a){var c=this[r];(c.ka&&(a||!c.V)||c.J&&this.Xa())&&this.ha();return c.X},
ub:function(b){a.T.fn.ub.call(this,b);this.nc=function(){this[r].J||(this[r].sa?this.ha():this[r].ka=!1);return this[r].X};this.Ia=function(a){this.pc(this[r].X);this[r].ka=!0;a&&(this[r].sa=!0);this.qc(this,!a)}},s:function(){var b=this[r];!b.J&&b.I&&a.a.P(b.I,function(a,b){b.s&&b.s()});b.l&&b.Rb&&a.a.K.yb(b.l,b.Rb);b.I=n;b.V=0;b.ra=!0;b.sa=!1;b.ka=!1;b.J=!1;b.l=n;b.Sa=n;b.Wc=n;this.Nc||(b.nb=n)}},da={Qa:function(b){var c=this,d=c[r];if(!d.ra&&d.J&&"change"==b){d.J=!1;if(d.sa||c.Xa())d.I=null,d.V=
0,c.ha()&&c.Gb();else{var e=[];a.a.P(d.I,function(a,b){e[b.Ka]=a});a.a.D(e,function(a,b){var e=d.I[a],m=c.$c(e.da);m.Ka=b;m.La=e.La;d.I[a]=m});c.Xa()&&c.ha()&&c.Gb()}d.ra||c.notifySubscribers(d.X,"awake")}},hb:function(b){var c=this[r];c.ra||"change"!=b||this.Wa("change")||(a.a.P(c.I,function(a,b){b.s&&(c.I[a]={da:b.da,Ka:b.Ka,La:b.La},b.s())}),c.J=!0,this.notifySubscribers(n,"asleep"))},ob:function(){var b=this[r];b.J&&(b.sa||this.Xa())&&this.ha();return a.T.fn.ob.call(this)}},ea={Qa:function(a){"change"!=
a&&"beforeChange"!=a||this.v()}};a.a.Ba&&a.a.setPrototypeOf(C,a.T.fn);var N=a.ta.Ma;C[N]=a.o;a.Oc=function(a){return"function"==typeof a&&a[N]===C[N]};a.Fd=function(b){return a.Oc(b)&&b[r]&&b[r].wb};a.b("computed",a.o);a.b("dependentObservable",a.o);a.b("isComputed",a.Oc);a.b("isPureComputed",a.Fd);a.b("computed.fn",C);a.L(C,"peek",C.v);a.L(C,"dispose",C.s);a.L(C,"isActive",C.ja);a.L(C,"getDependenciesCount",C.qa);a.L(C,"getDependencies",C.Va);a.xb=function(b,c){if("function"===typeof b)return a.o(b,
c,{pure:!0});b=a.a.extend({},b);b.pure=!0;return a.o(b,c)};a.b("pureComputed",a.xb);(function(){function b(a,f,g){g=g||new d;a=f(a);if("object"!=typeof a||null===a||a===n||a instanceof RegExp||a instanceof Date||a instanceof String||a instanceof Number||a instanceof Boolean)return a;var h=a instanceof Array?[]:{};g.save(a,h);c(a,function(c){var d=f(a[c]);switch(typeof d){case "boolean":case "number":case "string":case "function":h[c]=d;break;case "object":case "undefined":var l=g.get(d);h[c]=l!==
n?l:b(d,f,g)}});return h}function c(a,b){if(a instanceof Array){for(var c=0;c<a.length;c++)b(c);"function"==typeof a.toJSON&&b("toJSON")}else for(c in a)b(c)}function d(){this.keys=[];this.values=[]}a.ad=function(c){if(0==arguments.length)throw Error("When calling ko.toJS, pass the object you want to convert.");return b(c,function(b){for(var c=0;a.O(b)&&10>c;c++)b=b();return b})};a.toJSON=function(b,c,d){b=a.ad(b);return a.a.hc(b,c,d)};d.prototype={constructor:d,save:function(b,c){var d=a.a.A(this.keys,
b);0<=d?this.values[d]=c:(this.keys.push(b),this.values.push(c))},get:function(b){b=a.a.A(this.keys,b);return 0<=b?this.values[b]:n}}})();a.b("toJS",a.ad);a.b("toJSON",a.toJSON);a.Wd=function(b,c,d){function e(c){var e=a.xb(b,d).extend({ma:"always"}),h=e.subscribe(function(a){a&&(h.s(),c(a))});e.notifySubscribers(e.v());return h}return"function"!==typeof Promise||c?e(c.bind(d)):new Promise(e)};a.b("when",a.Wd);(function(){a.w={M:function(b){switch(a.a.R(b)){case "option":return!0===b.__ko__hasDomDataOptionValue__?
a.a.g.get(b,a.c.options.$b):7>=a.a.W?b.getAttributeNode("value")&&b.getAttributeNode("value").specified?b.value:b.text:b.value;case "select":return 0<=b.selectedIndex?a.w.M(b.options[b.selectedIndex]):n;default:return b.value}},cb:function(b,c,d){switch(a.a.R(b)){case "option":"string"===typeof c?(a.a.g.set(b,a.c.options.$b,n),"__ko__hasDomDataOptionValue__"in b&&delete b.__ko__hasDomDataOptionValue__,b.value=c):(a.a.g.set(b,a.c.options.$b,c),b.__ko__hasDomDataOptionValue__=!0,b.value="number"===
typeof c?c:"");break;case "select":if(""===c||null===c)c=n;for(var e=-1,f=0,g=b.options.length,h;f<g;++f)if(h=a.w.M(b.options[f]),h==c||""===h&&c===n){e=f;break}if(d||0<=e||c===n&&1<b.size)b.selectedIndex=e,6===a.a.W&&a.a.setTimeout(function(){b.selectedIndex=e},0);break;default:if(null===c||c===n)c="";b.value=c}}}})();a.b("selectExtensions",a.w);a.b("selectExtensions.readValue",a.w.M);a.b("selectExtensions.writeValue",a.w.cb);a.m=function(){function b(b){b=a.a.Db(b);123===b.charCodeAt(0)&&(b=b.slice(1,
-1));b+="\n,";var c=[],d=b.match(e),p,q=[],h=0;if(1<d.length){for(var x=0,B;B=d[x];++x){var u=B.charCodeAt(0);if(44===u){if(0>=h){c.push(p&&q.length?{key:p,value:q.join("")}:{unknown:p||q.join("")});p=h=0;q=[];continue}}else if(58===u){if(!h&&!p&&1===q.length){p=q.pop();continue}}else if(47===u&&1<B.length&&(47===B.charCodeAt(1)||42===B.charCodeAt(1)))continue;else 47===u&&x&&1<B.length?(u=d[x-1].match(f))&&!g[u[0]]&&(b=b.substr(b.indexOf(B)+1),d=b.match(e),x=-1,B="/"):40===u||123===u||91===u?++h:
41===u||125===u||93===u?--h:p||q.length||34!==u&&39!==u||(B=B.slice(1,-1));q.push(B)}if(0<h)throw Error("Unbalanced parentheses, braces, or brackets");}return c}var c=["true","false","null","undefined"],d=/^(?:[$_a-z][$\w]*|(.+)(\.\s*[$_a-z][$\w]*|\[.+\]))$/i,e=RegExp("\"(?:\\\\.|[^\"])*\"|'(?:\\\\.|[^'])*'|`(?:\\\\.|[^`])*`|/\\*(?:[^*]|\\*+[^*/])*\\*+/|//.*\n|/(?:\\\\.|[^/])+/w*|[^\\s:,/][^,\"'`{}()/:[\\]]*[^\\s,\"'`{}()/:[\\]]|[^\\s]","g"),f=/[\])"'A-Za-z0-9_$]+$/,g={"in":1,"return":1,"typeof":1},
h={};return{Ra:[],wa:h,ac:b,vb:function(e,f){function l(b,e){var f;if(!x){var k=a.getBindingHandler(b);if(k&&k.preprocess&&!(e=k.preprocess(e,b,l)))return;if(k=h[b])f=e,0<=a.a.A(c,f)?f=!1:(k=f.match(d),f=null===k?!1:k[1]?"Object("+k[1]+")"+k[2]:f),k=f;k&&q.push("'"+("string"==typeof h[b]?h[b]:b)+"':function(_z){"+f+"=_z}")}g&&(e="function(){return "+e+" }");p.push("'"+b+"':"+e)}f=f||{};var p=[],q=[],g=f.valueAccessors,x=f.bindingParams,B="string"===typeof e?b(e):e;a.a.D(B,function(a){l(a.key||a.unknown,
a.value)});q.length&&l("_ko_property_writers","{"+q.join(",")+" }");return p.join(",")},Id:function(a,b){for(var c=0;c<a.length;c++)if(a[c].key==b)return!0;return!1},eb:function(b,c,d,e,f){if(b&&a.O(b))!a.Za(b)||f&&b.v()===e||b(e);else if((b=c.get("_ko_property_writers"))&&b[d])b[d](e)}}}();a.b("expressionRewriting",a.m);a.b("expressionRewriting.bindingRewriteValidators",a.m.Ra);a.b("expressionRewriting.parseObjectLiteral",a.m.ac);a.b("expressionRewriting.preProcessBindings",a.m.vb);a.b("expressionRewriting._twoWayBindings",
a.m.wa);a.b("jsonExpressionRewriting",a.m);a.b("jsonExpressionRewriting.insertPropertyAccessorsIntoJson",a.m.vb);(function(){function b(a){return 8==a.nodeType&&g.test(f?a.text:a.nodeValue)}function c(a){return 8==a.nodeType&&h.test(f?a.text:a.nodeValue)}function d(d,e){for(var f=d,h=1,g=[];f=f.nextSibling;){if(c(f)&&(a.a.g.set(f,k,!0),h--,0===h))return g;g.push(f);b(f)&&h++}if(!e)throw Error("Cannot find closing comment tag to match: "+d.nodeValue);return null}function e(a,b){var c=d(a,b);return c?
0<c.length?c[c.length-1].nextSibling:a.nextSibling:null}var f=w&&"\x3c!--test--\x3e"===w.createComment("test").text,g=f?/^\x3c!--\s*ko(?:\s+([\s\S]+))?\s*--\x3e$/:/^\s*ko(?:\s+([\s\S]+))?\s*$/,h=f?/^\x3c!--\s*\/ko\s*--\x3e$/:/^\s*\/ko\s*$/,m={ul:!0,ol:!0},k="__ko_matchedEndComment__";a.h={ea:{},childNodes:function(a){return b(a)?d(a):a.childNodes},Ea:function(c){if(b(c)){c=a.h.childNodes(c);for(var d=0,e=c.length;d<e;d++)a.removeNode(c[d])}else a.a.Tb(c)},va:function(c,d){if(b(c)){a.h.Ea(c);for(var e=
c.nextSibling,f=0,k=d.length;f<k;f++)e.parentNode.insertBefore(d[f],e)}else a.a.va(c,d)},Vc:function(a,c){var d;b(a)?(d=a.nextSibling,a=a.parentNode):d=a.firstChild;d?c!==d&&a.insertBefore(c,d):a.appendChild(c)},Wb:function(c,d,e){e?(e=e.nextSibling,b(c)&&(c=c.parentNode),e?d!==e&&c.insertBefore(d,e):c.appendChild(d)):a.h.Vc(c,d)},firstChild:function(a){if(b(a))return!a.nextSibling||c(a.nextSibling)?null:a.nextSibling;if(a.firstChild&&c(a.firstChild))throw Error("Found invalid end comment, as the first child of "+
a);return a.firstChild},nextSibling:function(d){b(d)&&(d=e(d));if(d.nextSibling&&c(d.nextSibling)){var f=d.nextSibling;if(c(f)&&!a.a.g.get(f,k))throw Error("Found end comment without a matching opening comment, as child of "+d);return null}return d.nextSibling},Cd:b,Vd:function(a){return(a=(f?a.text:a.nodeValue).match(g))?a[1]:null},Sc:function(d){if(m[a.a.R(d)]){var f=d.firstChild;if(f){do if(1===f.nodeType){var k;k=f.firstChild;var h=null;if(k){do if(h)h.push(k);else if(b(k)){var g=e(k,!0);g?k=
g:h=[k]}else c(k)&&(h=[k]);while(k=k.nextSibling)}if(k=h)for(h=f.nextSibling,g=0;g<k.length;g++)h?d.insertBefore(k[g],h):d.appendChild(k[g])}while(f=f.nextSibling)}}}}})();a.b("virtualElements",a.h);a.b("virtualElements.allowedBindings",a.h.ea);a.b("virtualElements.emptyNode",a.h.Ea);a.b("virtualElements.insertAfter",a.h.Wb);a.b("virtualElements.prepend",a.h.Vc);a.b("virtualElements.setDomNodeChildren",a.h.va);(function(){a.ga=function(){this.nd={}};a.a.extend(a.ga.prototype,{nodeHasBindings:function(b){switch(b.nodeType){case 1:return null!=
b.getAttribute("data-bind")||a.j.getComponentNameForNode(b);case 8:return a.h.Cd(b);default:return!1}},getBindings:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b):null;return a.j.tc(d,b,c,!1)},getBindingAccessors:function(b,c){var d=this.getBindingsString(b,c),d=d?this.parseBindingsString(d,c,b,{valueAccessors:!0}):null;return a.j.tc(d,b,c,!0)},getBindingsString:function(b){switch(b.nodeType){case 1:return b.getAttribute("data-bind");case 8:return a.h.Vd(b);default:return null}},
parseBindingsString:function(b,c,d,e){try{var f=this.nd,g=b+(e&&e.valueAccessors||""),h;if(!(h=f[g])){var m,k="with($context){with($data||{}){return{"+a.m.vb(b,e)+"}}}";m=new Function("$context","$element",k);h=f[g]=m}return h(c,d)}catch(l){throw l.message="Unable to parse bindings.\nBindings value: "+b+"\nMessage: "+l.message,l;}}});a.ga.instance=new a.ga})();a.b("bindingProvider",a.ga);(function(){function b(b){var c=(b=a.a.g.get(b,z))&&b.N;c&&(b.N=null,c.Tc())}function c(c,d,e){this.node=c;this.yc=
d;this.kb=[];this.H=!1;d.N||a.a.K.za(c,b);e&&e.N&&(e.N.kb.push(c),this.Kb=e)}function d(a){return function(){return a}}function e(a){return a()}function f(b){return a.a.Ga(a.u.G(b),function(a,c){return function(){return b()[c]}})}function g(b,c,e){return"function"===typeof b?f(b.bind(null,c,e)):a.a.Ga(b,d)}function h(a,b){return f(this.getBindings.bind(this,a,b))}function m(b,c){var d=a.h.firstChild(c);if(d){var e,f=a.ga.instance,l=f.preprocessNode;if(l){for(;e=d;)d=a.h.nextSibling(e),l.call(f,e);
d=a.h.firstChild(c)}for(;e=d;)d=a.h.nextSibling(e),k(b,e)}a.i.ma(c,a.i.H)}function k(b,c){var d=b,e=1===c.nodeType;e&&a.h.Sc(c);if(e||a.ga.instance.nodeHasBindings(c))d=p(c,null,b).bindingContextForDescendants;d&&!u[a.a.R(c)]&&m(d,c)}function l(b){var c=[],d={},e=[];a.a.P(b,function ca(f){if(!d[f]){var k=a.getBindingHandler(f);k&&(k.after&&(e.push(f),a.a.D(k.after,function(c){if(b[c]){if(-1!==a.a.A(e,c))throw Error("Cannot combine the following bindings, because they have a cyclic dependency: "+e.join(", "));
ca(c)}}),e.length--),c.push({key:f,Mc:k}));d[f]=!0}});return c}function p(b,c,d){var f=a.a.g.Ub(b,z,{}),k=f.hd;if(!c){if(k)throw Error("You cannot apply bindings multiple times to the same element.");f.hd=!0}k||(f.context=d);f.Zb||(f.Zb={});var g;if(c&&"function"!==typeof c)g=c;else{var p=a.ga.instance,q=p.getBindingAccessors||h,m=a.$(function(){if(g=c?c(d,b):q.call(p,b,d)){if(d[t])d[t]();if(d[B])d[B]()}return g},null,{l:b});g&&m.ja()||(m=null)}var x=d,u;if(g){var J=function(){return a.a.Ga(m?m():
g,e)},r=m?function(a){return function(){return e(m()[a])}}:function(a){return g[a]};J.get=function(a){return g[a]&&e(r(a))};J.has=function(a){return a in g};a.i.H in g&&a.i.subscribe(b,a.i.H,function(){var c=(0,g[a.i.H])();if(c){var d=a.h.childNodes(b);d.length&&c(d,a.Ec(d[0]))}});a.i.pa in g&&(x=a.i.Cb(b,d),a.i.subscribe(b,a.i.pa,function(){var c=(0,g[a.i.pa])();c&&a.h.firstChild(b)&&c(b)}));f=l(g);a.a.D(f,function(c){var d=c.Mc.init,e=c.Mc.update,f=c.key;if(8===b.nodeType&&!a.h.ea[f])throw Error("The binding '"+
f+"' cannot be used with virtual elements");try{"function"==typeof d&&a.u.G(function(){var a=d(b,r(f),J,x.$data,x);if(a&&a.controlsDescendantBindings){if(u!==n)throw Error("Multiple bindings ("+u+" and "+f+") are trying to control descendant bindings of the same element. You cannot use these bindings together on the same element.");u=f}}),"function"==typeof e&&a.$(function(){e(b,r(f),J,x.$data,x)},null,{l:b})}catch(k){throw k.message='Unable to process binding "'+f+": "+g[f]+'"\nMessage: '+k.message,
k;}})}f=u===n;return{shouldBindDescendants:f,bindingContextForDescendants:f&&x}}function q(b,c){return b&&b instanceof a.fa?b:new a.fa(b,n,n,c)}var t=a.a.Da("_subscribable"),x=a.a.Da("_ancestorBindingInfo"),B=a.a.Da("_dataDependency");a.c={};var u={script:!0,textarea:!0,template:!0};a.getBindingHandler=function(b){return a.c[b]};var J={};a.fa=function(b,c,d,e,f){function k(){var b=p?h():h,f=a.a.f(b);c?(a.a.extend(l,c),x in c&&(l[x]=c[x])):(l.$parents=[],l.$root=f,l.ko=a);l[t]=q;g?f=l.$data:(l.$rawData=
b,l.$data=f);d&&(l[d]=f);e&&e(l,c,f);if(c&&c[t]&&!a.S.o().Vb(c[t]))c[t]();m&&(l[B]=m);return l.$data}var l=this,g=b===J,h=g?n:b,p="function"==typeof h&&!a.O(h),q,m=f&&f.dataDependency;f&&f.exportDependencies?k():(q=a.xb(k),q.v(),q.ja()?q.equalityComparer=null:l[t]=n)};a.fa.prototype.createChildContext=function(b,c,d,e){!e&&c&&"object"==typeof c&&(e=c,c=e.as,d=e.extend);if(c&&e&&e.noChildContext){var f="function"==typeof b&&!a.O(b);return new a.fa(J,this,null,function(a){d&&d(a);a[c]=f?b():b},e)}return new a.fa(b,
this,c,function(a,b){a.$parentContext=b;a.$parent=b.$data;a.$parents=(b.$parents||[]).slice(0);a.$parents.unshift(a.$parent);d&&d(a)},e)};a.fa.prototype.extend=function(b,c){return new a.fa(J,this,null,function(c){a.a.extend(c,"function"==typeof b?b(c):b)},c)};var z=a.a.g.Z();c.prototype.Tc=function(){this.Kb&&this.Kb.N&&this.Kb.N.sd(this.node)};c.prototype.sd=function(b){a.a.Pa(this.kb,b);!this.kb.length&&this.H&&this.Cc()};c.prototype.Cc=function(){this.H=!0;this.yc.N&&!this.kb.length&&(this.yc.N=
null,a.a.K.yb(this.node,b),a.i.ma(this.node,a.i.pa),this.Tc())};a.i={H:"childrenComplete",pa:"descendantsComplete",subscribe:function(b,c,d,e,f){var k=a.a.g.Ub(b,z,{});k.Fa||(k.Fa=new a.T);f&&f.notifyImmediately&&k.Zb[c]&&a.u.G(d,e,[b]);return k.Fa.subscribe(d,e,c)},ma:function(b,c){var d=a.a.g.get(b,z);if(d&&(d.Zb[c]=!0,d.Fa&&d.Fa.notifySubscribers(b,c),c==a.i.H))if(d.N)d.N.Cc();else if(d.N===n&&d.Fa&&d.Fa.Wa(a.i.pa))throw Error("descendantsComplete event not supported for bindings on this node");
},Cb:function(b,d){var e=a.a.g.Ub(b,z,{});e.N||(e.N=new c(b,e,d[x]));return d[x]==e?d:d.extend(function(a){a[x]=e})}};a.Td=function(b){return(b=a.a.g.get(b,z))&&b.context};a.ib=function(b,c,d){1===b.nodeType&&a.h.Sc(b);return p(b,c,q(d))};a.ld=function(b,c,d){d=q(d);return a.ib(b,g(c,d,b),d)};a.Oa=function(a,b){1!==b.nodeType&&8!==b.nodeType||m(q(a),b)};a.vc=function(a,b,c){!v&&A.jQuery&&(v=A.jQuery);if(2>arguments.length){if(b=w.body,!b)throw Error("ko.applyBindings: could not find document.body; has the document been loaded?");
}else if(!b||1!==b.nodeType&&8!==b.nodeType)throw Error("ko.applyBindings: first parameter should be your view model; second parameter should be a DOM node");k(q(a,c),b)};a.Dc=function(b){return!b||1!==b.nodeType&&8!==b.nodeType?n:a.Td(b)};a.Ec=function(b){return(b=a.Dc(b))?b.$data:n};a.b("bindingHandlers",a.c);a.b("bindingEvent",a.i);a.b("bindingEvent.subscribe",a.i.subscribe);a.b("bindingEvent.startPossiblyAsyncContentBinding",a.i.Cb);a.b("applyBindings",a.vc);a.b("applyBindingsToDescendants",a.Oa);
a.b("applyBindingAccessorsToNode",a.ib);a.b("applyBindingsToNode",a.ld);a.b("contextFor",a.Dc);a.b("dataFor",a.Ec)})();(function(b){function c(c,e){var k=Object.prototype.hasOwnProperty.call(f,c)?f[c]:b,l;k?k.subscribe(e):(k=f[c]=new a.T,k.subscribe(e),d(c,function(b,d){var e=!(!d||!d.synchronous);g[c]={definition:b,Gd:e};delete f[c];l||e?k.notifySubscribers(b):a.na.zb(function(){k.notifySubscribers(b)})}),l=!0)}function d(a,b){e("getConfig",[a],function(c){c?e("loadComponent",[a,c],function(a){b(a,
c)}):b(null,null)})}function e(c,d,f,l){l||(l=a.j.loaders.slice(0));var g=l.shift();if(g){var q=g[c];if(q){var t=!1;if(q.apply(g,d.concat(function(a){t?f(null):null!==a?f(a):e(c,d,f,l)}))!==b&&(t=!0,!g.suppressLoaderExceptions))throw Error("Component loaders must supply values by invoking the callback, not by returning values synchronously.");}else e(c,d,f,l)}else f(null)}var f={},g={};a.j={get:function(d,e){var f=Object.prototype.hasOwnProperty.call(g,d)?g[d]:b;f?f.Gd?a.u.G(function(){e(f.definition)}):
a.na.zb(function(){e(f.definition)}):c(d,e)},Bc:function(a){delete g[a]},oc:e};a.j.loaders=[];a.b("components",a.j);a.b("components.get",a.j.get);a.b("components.clearCachedDefinition",a.j.Bc)})();(function(){function b(b,c,d,e){function g(){0===--B&&e(h)}var h={},B=2,u=d.template;d=d.viewModel;u?f(c,u,function(c){a.j.oc("loadTemplate",[b,c],function(a){h.template=a;g()})}):g();d?f(c,d,function(c){a.j.oc("loadViewModel",[b,c],function(a){h[m]=a;g()})}):g()}function c(a,b,d){if("function"===typeof b)d(function(a){return new b(a)});
else if("function"===typeof b[m])d(b[m]);else if("instance"in b){var e=b.instance;d(function(){return e})}else"viewModel"in b?c(a,b.viewModel,d):a("Unknown viewModel value: "+b)}function d(b){switch(a.a.R(b)){case "script":return a.a.ua(b.text);case "textarea":return a.a.ua(b.value);case "template":if(e(b.content))return a.a.Ca(b.content.childNodes)}return a.a.Ca(b.childNodes)}function e(a){return A.DocumentFragment?a instanceof DocumentFragment:a&&11===a.nodeType}function f(a,b,c){"string"===typeof b.require?
T||A.require?(T||A.require)([b.require],function(a){a&&"object"===typeof a&&a.Xd&&a["default"]&&(a=a["default"]);c(a)}):a("Uses require, but no AMD loader is present"):c(b)}function g(a){return function(b){throw Error("Component '"+a+"': "+b);}}var h={};a.j.register=function(b,c){if(!c)throw Error("Invalid configuration for "+b);if(a.j.tb(b))throw Error("Component "+b+" is already registered");h[b]=c};a.j.tb=function(a){return Object.prototype.hasOwnProperty.call(h,a)};a.j.unregister=function(b){delete h[b];
a.j.Bc(b)};a.j.Fc={getConfig:function(b,c){c(a.j.tb(b)?h[b]:null)},loadComponent:function(a,c,d){var e=g(a);f(e,c,function(c){b(a,e,c,d)})},loadTemplate:function(b,c,f){b=g(b);if("string"===typeof c)f(a.a.ua(c));else if(c instanceof Array)f(c);else if(e(c))f(a.a.la(c.childNodes));else if(c.element)if(c=c.element,A.HTMLElement?c instanceof HTMLElement:c&&c.tagName&&1===c.nodeType)f(d(c));else if("string"===typeof c){var h=w.getElementById(c);h?f(d(h)):b("Cannot find element with ID "+c)}else b("Unknown element type: "+
c);else b("Unknown template value: "+c)},loadViewModel:function(a,b,d){c(g(a),b,d)}};var m="createViewModel";a.b("components.register",a.j.register);a.b("components.isRegistered",a.j.tb);a.b("components.unregister",a.j.unregister);a.b("components.defaultLoader",a.j.Fc);a.j.loaders.push(a.j.Fc);a.j.dd=h})();(function(){function b(b,e){var f=b.getAttribute("params");if(f){var f=c.parseBindingsString(f,e,b,{valueAccessors:!0,bindingParams:!0}),f=a.a.Ga(f,function(c){return a.o(c,null,{l:b})}),g=a.a.Ga(f,
function(c){var e=c.v();return c.ja()?a.o({read:function(){return a.a.f(c())},write:a.Za(e)&&function(a){c()(a)},l:b}):e});Object.prototype.hasOwnProperty.call(g,"$raw")||(g.$raw=f);return g}return{$raw:{}}}a.j.getComponentNameForNode=function(b){var c=a.a.R(b);if(a.j.tb(c)&&(-1!=c.indexOf("-")||"[object HTMLUnknownElement]"==""+b||8>=a.a.W&&b.tagName===c))return c};a.j.tc=function(c,e,f,g){if(1===e.nodeType){var h=a.j.getComponentNameForNode(e);if(h){c=c||{};if(c.component)throw Error('Cannot use the "component" binding on a custom element matching a component');
var m={name:h,params:b(e,f)};c.component=g?function(){return m}:m}}return c};var c=new a.ga;9>a.a.W&&(a.j.register=function(a){return function(b){return a.apply(this,arguments)}}(a.j.register),w.createDocumentFragment=function(b){return function(){var c=b(),f=a.j.dd,g;for(g in f);return c}}(w.createDocumentFragment))})();(function(){function b(b,c,d){c=c.template;if(!c)throw Error("Component '"+b+"' has no template");b=a.a.Ca(c);a.h.va(d,b)}function c(a,b,c){var d=a.createViewModel;return d?d.call(a,
b,c):b}var d=0;a.c.component={init:function(e,f,g,h,m){function k(){var a=l&&l.dispose;"function"===typeof a&&a.call(l);q&&q.s();p=l=q=null}var l,p,q,t=a.a.la(a.h.childNodes(e));a.h.Ea(e);a.a.K.za(e,k);a.o(function(){var g=a.a.f(f()),h,u;"string"===typeof g?h=g:(h=a.a.f(g.name),u=a.a.f(g.params));if(!h)throw Error("No component name specified");var n=a.i.Cb(e,m),z=p=++d;a.j.get(h,function(d){if(p===z){k();if(!d)throw Error("Unknown component '"+h+"'");b(h,d,e);var f=c(d,u,{element:e,templateNodes:t});
d=n.createChildContext(f,{extend:function(a){a.$component=f;a.$componentTemplateNodes=t}});f&&f.koDescendantsComplete&&(q=a.i.subscribe(e,a.i.pa,f.koDescendantsComplete,f));l=f;a.Oa(d,e)}})},null,{l:e});return{controlsDescendantBindings:!0}}};a.h.ea.component=!0})();var V={"class":"className","for":"htmlFor"};a.c.attr={update:function(b,c){var d=a.a.f(c())||{};a.a.P(d,function(c,d){d=a.a.f(d);var g=c.indexOf(":"),g="lookupNamespaceURI"in b&&0<g&&b.lookupNamespaceURI(c.substr(0,g)),h=!1===d||null===
d||d===n;h?g?b.removeAttributeNS(g,c):b.removeAttribute(c):d=d.toString();8>=a.a.W&&c in V?(c=V[c],h?b.removeAttribute(c):b[c]=d):h||(g?b.setAttributeNS(g,c,d):b.setAttribute(c,d));"name"===c&&a.a.Yc(b,h?"":d)})}};(function(){a.c.checked={after:["value","attr"],init:function(b,c,d){function e(){var e=b.checked,f=g();if(!a.S.Ya()&&(e||!m&&!a.S.qa())){var k=a.u.G(c);if(l){var q=p?k.v():k,z=t;t=f;z!==f?e&&(a.a.Na(q,f,!0),a.a.Na(q,z,!1)):a.a.Na(q,f,e);p&&a.Za(k)&&k(q)}else h&&(f===n?f=e:e||(f=n)),a.m.eb(k,
d,"checked",f,!0)}}function f(){var d=a.a.f(c()),e=g();l?(b.checked=0<=a.a.A(d,e),t=e):b.checked=h&&e===n?!!d:g()===d}var g=a.xb(function(){if(d.has("checkedValue"))return a.a.f(d.get("checkedValue"));if(q)return d.has("value")?a.a.f(d.get("value")):b.value}),h="checkbox"==b.type,m="radio"==b.type;if(h||m){var k=c(),l=h&&a.a.f(k)instanceof Array,p=!(l&&k.push&&k.splice),q=m||l,t=l?g():n;m&&!b.name&&a.c.uniqueName.init(b,function(){return!0});a.o(e,null,{l:b});a.a.B(b,"click",e);a.o(f,null,{l:b});
k=n}}};a.m.wa.checked=!0;a.c.checkedValue={update:function(b,c){b.value=a.a.f(c())}}})();a.c["class"]={update:function(b,c){var d=a.a.Db(a.a.f(c()));a.a.Eb(b,b.__ko__cssValue,!1);b.__ko__cssValue=d;a.a.Eb(b,d,!0)}};a.c.css={update:function(b,c){var d=a.a.f(c());null!==d&&"object"==typeof d?a.a.P(d,function(c,d){d=a.a.f(d);a.a.Eb(b,c,d)}):a.c["class"].update(b,c)}};a.c.enable={update:function(b,c){var d=a.a.f(c());d&&b.disabled?b.removeAttribute("disabled"):d||b.disabled||(b.disabled=!0)}};a.c.disable=
{update:function(b,c){a.c.enable.update(b,function(){return!a.a.f(c())})}};a.c.event={init:function(b,c,d,e,f){var g=c()||{};a.a.P(g,function(g){"string"==typeof g&&a.a.B(b,g,function(b){var k,l=c()[g];if(l){try{var p=a.a.la(arguments);e=f.$data;p.unshift(e);k=l.apply(e,p)}finally{!0!==k&&(b.preventDefault?b.preventDefault():b.returnValue=!1)}!1===d.get(g+"Bubble")&&(b.cancelBubble=!0,b.stopPropagation&&b.stopPropagation())}})})}};a.c.foreach={Rc:function(b){return function(){var c=b(),d=a.a.bc(c);
if(!d||"number"==typeof d.length)return{foreach:c,templateEngine:a.ba.Ma};a.a.f(c);return{foreach:d.data,as:d.as,noChildContext:d.noChildContext,includeDestroyed:d.includeDestroyed,afterAdd:d.afterAdd,beforeRemove:d.beforeRemove,afterRender:d.afterRender,beforeMove:d.beforeMove,afterMove:d.afterMove,templateEngine:a.ba.Ma}}},init:function(b,c){return a.c.template.init(b,a.c.foreach.Rc(c))},update:function(b,c,d,e,f){return a.c.template.update(b,a.c.foreach.Rc(c),d,e,f)}};a.m.Ra.foreach=!1;a.h.ea.foreach=
!0;a.c.hasfocus={init:function(b,c,d){function e(e){b.__ko_hasfocusUpdating=!0;var f=b.ownerDocument;if("activeElement"in f){var g;try{g=f.activeElement}catch(l){g=f.body}e=g===b}f=c();a.m.eb(f,d,"hasfocus",e,!0);b.__ko_hasfocusLastValue=e;b.__ko_hasfocusUpdating=!1}var f=e.bind(null,!0),g=e.bind(null,!1);a.a.B(b,"focus",f);a.a.B(b,"focusin",f);a.a.B(b,"blur",g);a.a.B(b,"focusout",g);b.__ko_hasfocusLastValue=!1},update:function(b,c){var d=!!a.a.f(c());b.__ko_hasfocusUpdating||b.__ko_hasfocusLastValue===
d||(d?b.focus():b.blur(),!d&&b.__ko_hasfocusLastValue&&b.ownerDocument.body.focus(),a.u.G(a.a.Fb,null,[b,d?"focusin":"focusout"]))}};a.m.wa.hasfocus=!0;a.c.hasFocus=a.c.hasfocus;a.m.wa.hasFocus="hasfocus";a.c.html={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.fc(b,c())}};(function(){function b(b,d,e){a.c[b]={init:function(b,c,h,m,k){var l,p,q={},t,x,n;if(d){m=h.get("as");var u=h.get("noChildContext");n=!(m&&u);q={as:m,noChildContext:u,exportDependencies:n}}x=(t=
"render"==h.get("completeOn"))||h.has(a.i.pa);a.o(function(){var h=a.a.f(c()),m=!e!==!h,u=!p,r;if(n||m!==l){x&&(k=a.i.Cb(b,k));if(m){if(!d||n)q.dataDependency=a.S.o();r=d?k.createChildContext("function"==typeof h?h:c,q):a.S.qa()?k.extend(null,q):k}u&&a.S.qa()&&(p=a.a.Ca(a.h.childNodes(b),!0));m?(u||a.h.va(b,a.a.Ca(p)),a.Oa(r,b)):(a.h.Ea(b),t||a.i.ma(b,a.i.H));l=m}},null,{l:b});return{controlsDescendantBindings:!0}}};a.m.Ra[b]=!1;a.h.ea[b]=!0}b("if");b("ifnot",!1,!0);b("with",!0)})();a.c.let={init:function(b,
c,d,e,f){c=f.extend(c);a.Oa(c,b);return{controlsDescendantBindings:!0}}};a.h.ea.let=!0;var Q={};a.c.options={init:function(b){if("select"!==a.a.R(b))throw Error("options binding applies only to SELECT elements");for(;0<b.length;)b.remove(0);return{controlsDescendantBindings:!0}},update:function(b,c,d){function e(){return a.a.jb(b.options,function(a){return a.selected})}function f(a,b,c){var d=typeof b;return"function"==d?b(a):"string"==d?a[b]:c}function g(c,d){if(x&&l)a.i.ma(b,a.i.H);else if(t.length){var e=
0<=a.a.A(t,a.w.M(d[0]));a.a.Zc(d[0],e);x&&!e&&a.u.G(a.a.Fb,null,[b,"change"])}}var h=b.multiple,m=0!=b.length&&h?b.scrollTop:null,k=a.a.f(c()),l=d.get("valueAllowUnset")&&d.has("value"),p=d.get("optionsIncludeDestroyed");c={};var q,t=[];l||(h?t=a.a.Mb(e(),a.w.M):0<=b.selectedIndex&&t.push(a.w.M(b.options[b.selectedIndex])));k&&("undefined"==typeof k.length&&(k=[k]),q=a.a.jb(k,function(b){return p||b===n||null===b||!a.a.f(b._destroy)}),d.has("optionsCaption")&&(k=a.a.f(d.get("optionsCaption")),null!==
k&&k!==n&&q.unshift(Q)));var x=!1;c.beforeRemove=function(a){b.removeChild(a)};k=g;d.has("optionsAfterRender")&&"function"==typeof d.get("optionsAfterRender")&&(k=function(b,c){g(0,c);a.u.G(d.get("optionsAfterRender"),null,[c[0],b!==Q?b:n])});a.a.ec(b,q,function(c,e,g){g.length&&(t=!l&&g[0].selected?[a.w.M(g[0])]:[],x=!0);e=b.ownerDocument.createElement("option");c===Q?(a.a.Bb(e,d.get("optionsCaption")),a.w.cb(e,n)):(g=f(c,d.get("optionsValue"),c),a.w.cb(e,a.a.f(g)),c=f(c,d.get("optionsText"),g),
a.a.Bb(e,c));return[e]},c,k);if(!l){var B;h?B=t.length&&e().length<t.length:B=t.length&&0<=b.selectedIndex?a.w.M(b.options[b.selectedIndex])!==t[0]:t.length||0<=b.selectedIndex;B&&a.u.G(a.a.Fb,null,[b,"change"])}(l||a.S.Ya())&&a.i.ma(b,a.i.H);a.a.wd(b);m&&20<Math.abs(m-b.scrollTop)&&(b.scrollTop=m)}};a.c.options.$b=a.a.g.Z();a.c.selectedOptions={init:function(b,c,d){function e(){var e=c(),f=[];a.a.D(b.getElementsByTagName("option"),function(b){b.selected&&f.push(a.w.M(b))});a.m.eb(e,d,"selectedOptions",
f)}function f(){var d=a.a.f(c()),e=b.scrollTop;d&&"number"==typeof d.length&&a.a.D(b.getElementsByTagName("option"),function(b){var c=0<=a.a.A(d,a.w.M(b));b.selected!=c&&a.a.Zc(b,c)});b.scrollTop=e}if("select"!=a.a.R(b))throw Error("selectedOptions binding applies only to SELECT elements");var g;a.i.subscribe(b,a.i.H,function(){g?e():(a.a.B(b,"change",e),g=a.o(f,null,{l:b}))},null,{notifyImmediately:!0})},update:function(){}};a.m.wa.selectedOptions=!0;a.c.style={update:function(b,c){var d=a.a.f(c()||
{});a.a.P(d,function(c,d){d=a.a.f(d);if(null===d||d===n||!1===d)d="";if(v)v(b).css(c,d);else if(/^--/.test(c))b.style.setProperty(c,d);else{c=c.replace(/-(\w)/g,function(a,b){return b.toUpperCase()});var g=b.style[c];b.style[c]=d;d===g||b.style[c]!=g||isNaN(d)||(b.style[c]=d+"px")}})}};a.c.submit={init:function(b,c,d,e,f){if("function"!=typeof c())throw Error("The value for a submit binding must be a function");a.a.B(b,"submit",function(a){var d,e=c();try{d=e.call(f.$data,b)}finally{!0!==d&&(a.preventDefault?
a.preventDefault():a.returnValue=!1)}})}};a.c.text={init:function(){return{controlsDescendantBindings:!0}},update:function(b,c){a.a.Bb(b,c())}};a.h.ea.text=!0;(function(){if(A&&A.navigator){var b=function(a){if(a)return parseFloat(a[1])},c=A.navigator.userAgent,d,e,f,g,h;(d=A.opera&&A.opera.version&&parseInt(A.opera.version()))||(h=b(c.match(/Edge\/([^ ]+)$/)))||b(c.match(/Chrome\/([^ ]+)/))||(e=b(c.match(/Version\/([^ ]+) Safari/)))||(f=b(c.match(/Firefox\/([^ ]+)/)))||(g=a.a.W||b(c.match(/MSIE ([^ ]+)/)))||
(g=b(c.match(/rv:([^ )]+)/)))}if(8<=g&&10>g)var m=a.a.g.Z(),k=a.a.g.Z(),l=function(b){var c=this.activeElement;(c=c&&a.a.g.get(c,k))&&c(b)},p=function(b,c){var d=b.ownerDocument;a.a.g.get(d,m)||(a.a.g.set(d,m,!0),a.a.B(d,"selectionchange",l));a.a.g.set(b,k,c)};a.c.textInput={init:function(b,c,k){function l(c,d){a.a.B(b,c,d)}function m(){var d=a.a.f(c());if(null===d||d===n)d="";L!==n&&d===L?a.a.setTimeout(m,4):b.value!==d&&(y=!0,b.value=d,y=!1,v=b.value)}function r(){w||(L=b.value,w=a.a.setTimeout(z,
4))}function z(){clearTimeout(w);L=w=n;var d=b.value;v!==d&&(v=d,a.m.eb(c(),k,"textInput",d))}var v=b.value,w,L,A=9==a.a.W?r:z,y=!1;g&&l("keypress",z);11>g&&l("propertychange",function(a){y||"value"!==a.propertyName||A(a)});8==g&&(l("keyup",z),l("keydown",z));p&&(p(b,A),l("dragend",r));(!g||9<=g)&&l("input",A);5>e&&"textarea"===a.a.R(b)?(l("keydown",r),l("paste",r),l("cut",r)):11>d?l("keydown",r):4>f?(l("DOMAutoComplete",z),l("dragdrop",z),l("drop",z)):h&&"number"===b.type&&l("keydown",r);l("change",
z);l("blur",z);a.o(m,null,{l:b})}};a.m.wa.textInput=!0;a.c.textinput={preprocess:function(a,b,c){c("textInput",a)}}})();a.c.uniqueName={init:function(b,c){if(c()){var d="ko_unique_"+ ++a.c.uniqueName.rd;a.a.Yc(b,d)}}};a.c.uniqueName.rd=0;a.c.using={init:function(b,c,d,e,f){var g;d.has("as")&&(g={as:d.get("as"),noChildContext:d.get("noChildContext")});c=f.createChildContext(c,g);a.Oa(c,b);return{controlsDescendantBindings:!0}}};a.h.ea.using=!0;a.c.value={init:function(b,c,d){var e=a.a.R(b),f="input"==
e;if(!f||"checkbox"!=b.type&&"radio"!=b.type){var g=[],h=d.get("valueUpdate"),m=!1,k=null;h&&("string"==typeof h?g=[h]:g=a.a.wc(h),a.a.Pa(g,"change"));var l=function(){k=null;m=!1;var e=c(),f=a.w.M(b);a.m.eb(e,d,"value",f)};!a.a.W||!f||"text"!=b.type||"off"==b.autocomplete||b.form&&"off"==b.form.autocomplete||-1!=a.a.A(g,"propertychange")||(a.a.B(b,"propertychange",function(){m=!0}),a.a.B(b,"focus",function(){m=!1}),a.a.B(b,"blur",function(){m&&l()}));a.a.D(g,function(c){var d=l;a.a.Ud(c,"after")&&
(d=function(){k=a.w.M(b);a.a.setTimeout(l,0)},c=c.substring(5));a.a.B(b,c,d)});var p;p=f&&"file"==b.type?function(){var d=a.a.f(c());null===d||d===n||""===d?b.value="":a.u.G(l)}:function(){var f=a.a.f(c()),g=a.w.M(b);if(null!==k&&f===k)a.a.setTimeout(p,0);else if(f!==g||g===n)"select"===e?(g=d.get("valueAllowUnset"),a.w.cb(b,f,g),g||f===a.w.M(b)||a.u.G(l)):a.w.cb(b,f)};if("select"===e){var q;a.i.subscribe(b,a.i.H,function(){q?d.get("valueAllowUnset")?p():l():(a.a.B(b,"change",l),q=a.o(p,null,{l:b}))},
null,{notifyImmediately:!0})}else a.a.B(b,"change",l),a.o(p,null,{l:b})}else a.ib(b,{checkedValue:c})},update:function(){}};a.m.wa.value=!0;a.c.visible={update:function(b,c){var d=a.a.f(c()),e="none"!=b.style.display;d&&!e?b.style.display="":!d&&e&&(b.style.display="none")}};a.c.hidden={update:function(b,c){a.c.visible.update(b,function(){return!a.a.f(c())})}};(function(b){a.c[b]={init:function(c,d,e,f,g){return a.c.event.init.call(this,c,function(){var a={};a[b]=d();return a},e,f,g)}}})("click");
a.ca=function(){};a.ca.prototype.renderTemplateSource=function(){throw Error("Override renderTemplateSource");};a.ca.prototype.createJavaScriptEvaluatorBlock=function(){throw Error("Override createJavaScriptEvaluatorBlock");};a.ca.prototype.makeTemplateSource=function(b,c){if("string"==typeof b){c=c||w;var d=c.getElementById(b);if(!d)throw Error("Cannot find template with ID "+b);return new a.C.F(d)}if(1==b.nodeType||8==b.nodeType)return new a.C.ia(b);throw Error("Unknown template type: "+b);};a.ca.prototype.renderTemplate=
function(a,c,d,e){a=this.makeTemplateSource(a,e);return this.renderTemplateSource(a,c,d,e)};a.ca.prototype.isTemplateRewritten=function(a,c){return!1===this.allowTemplateRewriting?!0:this.makeTemplateSource(a,c).data("isRewritten")};a.ca.prototype.rewriteTemplate=function(a,c,d){a=this.makeTemplateSource(a,d);c=c(a.text());a.text(c);a.data("isRewritten",!0)};a.b("templateEngine",a.ca);a.kc=function(){function b(b,c,d,h){b=a.m.ac(b);for(var m=a.m.Ra,k=0;k<b.length;k++){var l=b[k].key;if(Object.prototype.hasOwnProperty.call(m,
l)){var p=m[l];if("function"===typeof p){if(l=p(b[k].value))throw Error(l);}else if(!p)throw Error("This template engine does not support the '"+l+"' binding within its templates");}}d="ko.__tr_ambtns(function($context,$element){return(function(){return{ "+a.m.vb(b,{valueAccessors:!0})+" } })()},'"+d.toLowerCase()+"')";return h.createJavaScriptEvaluatorBlock(d)+c}var c=/(<([a-z]+\d*)(?:\s+(?!data-bind\s*=\s*)[a-z0-9\-]+(?:=(?:\"[^\"]*\"|\'[^\']*\'|[^>]*))?)*\s+)data-bind\s*=\s*(["'])([\s\S]*?)\3/gi,
d=/\x3c!--\s*ko\b\s*([\s\S]*?)\s*--\x3e/g;return{xd:function(b,c,d){c.isTemplateRewritten(b,d)||c.rewriteTemplate(b,function(b){return a.kc.Ld(b,c)},d)},Ld:function(a,f){return a.replace(c,function(a,c,d,e,l){return b(l,c,d,f)}).replace(d,function(a,c){return b(c,"\x3c!-- ko --\x3e","#comment",f)})},md:function(b,c){return a.aa.Xb(function(d,h){var m=d.nextSibling;m&&m.nodeName.toLowerCase()===c&&a.ib(m,b,h)})}}}();a.b("__tr_ambtns",a.kc.md);(function(){a.C={};a.C.F=function(b){if(this.F=b){var c=
a.a.R(b);this.ab="script"===c?1:"textarea"===c?2:"template"==c&&b.content&&11===b.content.nodeType?3:4}};a.C.F.prototype.text=function(){var b=1===this.ab?"text":2===this.ab?"value":"innerHTML";if(0==arguments.length)return this.F[b];var c=arguments[0];"innerHTML"===b?a.a.fc(this.F,c):this.F[b]=c};var b=a.a.g.Z()+"_";a.C.F.prototype.data=function(c){if(1===arguments.length)return a.a.g.get(this.F,b+c);a.a.g.set(this.F,b+c,arguments[1])};var c=a.a.g.Z();a.C.F.prototype.nodes=function(){var b=this.F;
if(0==arguments.length){var e=a.a.g.get(b,c)||{},f=e.lb||(3===this.ab?b.content:4===this.ab?b:n);if(!f||e.jd){var g=this.text();g&&g!==e.bb&&(f=a.a.Md(g,b.ownerDocument),a.a.g.set(b,c,{lb:f,bb:g,jd:!0}))}return f}e=arguments[0];this.ab!==n&&this.text("");a.a.g.set(b,c,{lb:e})};a.C.ia=function(a){this.F=a};a.C.ia.prototype=new a.C.F;a.C.ia.prototype.constructor=a.C.ia;a.C.ia.prototype.text=function(){if(0==arguments.length){var b=a.a.g.get(this.F,c)||{};b.bb===n&&b.lb&&(b.bb=b.lb.innerHTML);return b.bb}a.a.g.set(this.F,
c,{bb:arguments[0]})};a.b("templateSources",a.C);a.b("templateSources.domElement",a.C.F);a.b("templateSources.anonymousTemplate",a.C.ia)})();(function(){function b(b,c,d){var e;for(c=a.h.nextSibling(c);b&&(e=b)!==c;)b=a.h.nextSibling(e),d(e,b)}function c(c,d){if(c.length){var e=c[0],f=c[c.length-1],g=e.parentNode,h=a.ga.instance,m=h.preprocessNode;if(m){b(e,f,function(a,b){var c=a.previousSibling,d=m.call(h,a);d&&(a===e&&(e=d[0]||b),a===f&&(f=d[d.length-1]||c))});c.length=0;if(!e)return;e===f?c.push(e):
(c.push(e,f),a.a.Ua(c,g))}b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.vc(d,b)});b(e,f,function(b){1!==b.nodeType&&8!==b.nodeType||a.aa.cd(b,[d])});a.a.Ua(c,g)}}function d(a){return a.nodeType?a:0<a.length?a[0]:null}function e(b,e,f,h,m){m=m||{};var n=(b&&d(b)||f||{}).ownerDocument,B=m.templateEngine||g;a.kc.xd(f,B,n);f=B.renderTemplate(f,h,m,n);if("number"!=typeof f.length||0<f.length&&"number"!=typeof f[0].nodeType)throw Error("Template engine must return an array of DOM nodes");n=!1;switch(e){case "replaceChildren":a.h.va(b,
f);n=!0;break;case "replaceNode":a.a.Xc(b,f);n=!0;break;case "ignoreTargetNode":break;default:throw Error("Unknown renderMode: "+e);}n&&(c(f,h),m.afterRender&&a.u.G(m.afterRender,null,[f,h[m.as||"$data"]]),"replaceChildren"==e&&a.i.ma(b,a.i.H));return f}function f(b,c,d){return a.O(b)?b():"function"===typeof b?b(c,d):b}var g;a.gc=function(b){if(b!=n&&!(b instanceof a.ca))throw Error("templateEngine must inherit from ko.templateEngine");g=b};a.dc=function(b,c,h,m,t){h=h||{};if((h.templateEngine||g)==
n)throw Error("Set a template engine before calling renderTemplate");t=t||"replaceChildren";if(m){var x=d(m);return a.$(function(){var g=c&&c instanceof a.fa?c:new a.fa(c,null,null,null,{exportDependencies:!0}),n=f(b,g.$data,g),g=e(m,t,n,g,h);"replaceNode"==t&&(m=g,x=d(m))},null,{Sa:function(){return!x||!a.a.Sb(x)},l:x&&"replaceNode"==t?x.parentNode:x})}return a.aa.Xb(function(d){a.dc(b,c,h,d,"replaceNode")})};a.Qd=function(b,d,g,h,m){function x(b,c){a.u.G(a.a.ec,null,[h,b,u,g,r,c]);a.i.ma(h,a.i.H)}
function r(a,b){c(b,v);g.afterRender&&g.afterRender(b,a);v=null}function u(a,c){v=m.createChildContext(a,{as:z,noChildContext:g.noChildContext,extend:function(a){a.$index=c;z&&(a[z+"Index"]=c)}});var d=f(b,a,v);return e(h,"ignoreTargetNode",d,v,g)}var v,z=g.as,w=!1===g.includeDestroyed||a.options.foreachHidesDestroyed&&!g.includeDestroyed;if(w||g.beforeRemove||!a.Pc(d))return a.$(function(){var b=a.a.f(d)||[];"undefined"==typeof b.length&&(b=[b]);w&&(b=a.a.jb(b,function(b){return b===n||null===b||
!a.a.f(b._destroy)}));x(b)},null,{l:h});x(d.v());var A=d.subscribe(function(a){x(d(),a)},null,"arrayChange");A.l(h);return A};var h=a.a.g.Z(),m=a.a.g.Z();a.c.template={init:function(b,c){var d=a.a.f(c());if("string"==typeof d||"name"in d)a.h.Ea(b);else if("nodes"in d){d=d.nodes||[];if(a.O(d))throw Error('The "nodes" option must be a plain, non-observable array.');var e=d[0]&&d[0].parentNode;e&&a.a.g.get(e,m)||(e=a.a.Yb(d),a.a.g.set(e,m,!0));(new a.C.ia(b)).nodes(e)}else if(d=a.h.childNodes(b),0<d.length)e=
a.a.Yb(d),(new a.C.ia(b)).nodes(e);else throw Error("Anonymous template defined, but no template content was provided");return{controlsDescendantBindings:!0}},update:function(b,c,d,e,f){var g=c();c=a.a.f(g);d=!0;e=null;"string"==typeof c?c={}:(g="name"in c?c.name:b,"if"in c&&(d=a.a.f(c["if"])),d&&"ifnot"in c&&(d=!a.a.f(c.ifnot)),d&&!g&&(d=!1));"foreach"in c?e=a.Qd(g,d&&c.foreach||[],c,b,f):d?(d=f,"data"in c&&(d=f.createChildContext(c.data,{as:c.as,noChildContext:c.noChildContext,exportDependencies:!0})),
e=a.dc(g,d,c,b)):a.h.Ea(b);f=e;(c=a.a.g.get(b,h))&&"function"==typeof c.s&&c.s();a.a.g.set(b,h,!f||f.ja&&!f.ja()?n:f)}};a.m.Ra.template=function(b){b=a.m.ac(b);return 1==b.length&&b[0].unknown||a.m.Id(b,"name")?null:"This template engine does not support anonymous templates nested within its templates"};a.h.ea.template=!0})();a.b("setTemplateEngine",a.gc);a.b("renderTemplate",a.dc);a.a.Kc=function(a,c,d){if(a.length&&c.length){var e,f,g,h,m;for(e=f=0;(!d||e<d)&&(h=a[f]);++f){for(g=0;m=c[g];++g)if(h.value===
m.value){h.moved=m.index;m.moved=h.index;c.splice(g,1);e=g=0;break}e+=g}}};a.a.Pb=function(){function b(b,d,e,f,g){var h=Math.min,m=Math.max,k=[],l,p=b.length,q,n=d.length,r=n-p||1,v=p+n+1,u,w,z;for(l=0;l<=p;l++)for(w=u,k.push(u=[]),z=h(n,l+r),q=m(0,l-1);q<=z;q++)u[q]=q?l?b[l-1]===d[q-1]?w[q-1]:h(w[q]||v,u[q-1]||v)+1:q+1:l+1;h=[];m=[];r=[];l=p;for(q=n;l||q;)n=k[l][q]-1,q&&n===k[l][q-1]?m.push(h[h.length]={status:e,value:d[--q],index:q}):l&&n===k[l-1][q]?r.push(h[h.length]={status:f,value:b[--l],index:l}):
(--q,--l,g.sparse||h.push({status:"retained",value:d[q]}));a.a.Kc(r,m,!g.dontLimitMoves&&10*p);return h.reverse()}return function(a,d,e){e="boolean"===typeof e?{dontLimitMoves:e}:e||{};a=a||[];d=d||[];return a.length<d.length?b(a,d,"added","deleted",e):b(d,a,"deleted","added",e)}}();a.b("utils.compareArrays",a.a.Pb);(function(){function b(b,c,d,h,m){var k=[],l=a.$(function(){var l=c(d,m,a.a.Ua(k,b))||[];0<k.length&&(a.a.Xc(k,l),h&&a.u.G(h,null,[d,l,m]));k.length=0;a.a.Nb(k,l)},null,{l:b,Sa:function(){return!a.a.kd(k)}});
return{Y:k,$:l.ja()?l:n}}var c=a.a.g.Z(),d=a.a.g.Z();a.a.ec=function(e,f,g,h,m,k){function l(b){y={Aa:b,pb:a.ta(w++)};v.push(y);r||F.push(y)}function p(b){y=t[b];w!==y.pb.v()&&D.push(y);y.pb(w++);a.a.Ua(y.Y,e);v.push(y)}function q(b,c){if(b)for(var d=0,e=c.length;d<e;d++)a.a.D(c[d].Y,function(a){b(a,d,c[d].Aa)})}f=f||[];"undefined"==typeof f.length&&(f=[f]);h=h||{};var t=a.a.g.get(e,c),r=!t,v=[],u=0,w=0,z=[],A=[],C=[],D=[],F=[],y,I=0;if(r)a.a.D(f,l);else{if(!k||t&&t._countWaitingForRemove){var E=
a.a.Mb(t,function(a){return a.Aa});k=a.a.Pb(E,f,{dontLimitMoves:h.dontLimitMoves,sparse:!0})}for(var E=0,G,H,K;G=k[E];E++)switch(H=G.moved,K=G.index,G.status){case "deleted":for(;u<K;)p(u++);H===n&&(y=t[u],y.$&&(y.$.s(),y.$=n),a.a.Ua(y.Y,e).length&&(h.beforeRemove&&(v.push(y),I++,y.Aa===d?y=null:C.push(y)),y&&z.push.apply(z,y.Y)));u++;break;case "added":for(;w<K;)p(u++);H!==n?(A.push(v.length),p(H)):l(G.value)}for(;w<f.length;)p(u++);v._countWaitingForRemove=I}a.a.g.set(e,c,v);q(h.beforeMove,D);a.a.D(z,
h.beforeRemove?a.oa:a.removeNode);var M,O,P;try{P=e.ownerDocument.activeElement}catch(N){}if(A.length)for(;(E=A.shift())!=n;){y=v[E];for(M=n;E;)if((O=v[--E].Y)&&O.length){M=O[O.length-1];break}for(f=0;u=y.Y[f];M=u,f++)a.h.Wb(e,u,M)}for(E=0;y=v[E];E++){y.Y||a.a.extend(y,b(e,g,y.Aa,m,y.pb));for(f=0;u=y.Y[f];M=u,f++)a.h.Wb(e,u,M);!y.Ed&&m&&(m(y.Aa,y.Y,y.pb),y.Ed=!0,M=y.Y[y.Y.length-1])}P&&e.ownerDocument.activeElement!=P&&P.focus();q(h.beforeRemove,C);for(E=0;E<C.length;++E)C[E].Aa=d;q(h.afterMove,D);
q(h.afterAdd,F)}})();a.b("utils.setDomNodeChildrenFromArrayMapping",a.a.ec);a.ba=function(){this.allowTemplateRewriting=!1};a.ba.prototype=new a.ca;a.ba.prototype.constructor=a.ba;a.ba.prototype.renderTemplateSource=function(b,c,d,e){if(c=(9>a.a.W?0:b.nodes)?b.nodes():null)return a.a.la(c.cloneNode(!0).childNodes);b=b.text();return a.a.ua(b,e)};a.ba.Ma=new a.ba;a.gc(a.ba.Ma);a.b("nativeTemplateEngine",a.ba);(function(){a.$a=function(){var a=this.Hd=function(){if(!v||!v.tmpl)return 0;try{if(0<=v.tmpl.tag.tmpl.open.toString().indexOf("__"))return 2}catch(a){}return 1}();
this.renderTemplateSource=function(b,e,f,g){g=g||w;f=f||{};if(2>a)throw Error("Your version of jQuery.tmpl is too old. Please upgrade to jQuery.tmpl 1.0.0pre or later.");var h=b.data("precompiled");h||(h=b.text()||"",h=v.template(null,"{{ko_with $item.koBindingContext}}"+h+"{{/ko_with}}"),b.data("precompiled",h));b=[e.$data];e=v.extend({koBindingContext:e},f.templateOptions);e=v.tmpl(h,b,e);e.appendTo(g.createElement("div"));v.fragments={};return e};this.createJavaScriptEvaluatorBlock=function(a){return"{{ko_code ((function() { return "+
a+" })()) }}"};this.addTemplate=function(a,b){w.write("<script type='text/html' id='"+a+"'>"+b+"\x3c/script>")};0<a&&(v.tmpl.tag.ko_code={open:"__.push($1 || '');"},v.tmpl.tag.ko_with={open:"with($1) {",close:"} "})};a.$a.prototype=new a.ca;a.$a.prototype.constructor=a.$a;var b=new a.$a;0<b.Hd&&a.gc(b);a.b("jqueryTmplTemplateEngine",a.$a)})()})})();})();

},{}],"node_modules/uuid/lib/rng-browser.js":[function(require,module,exports) {
// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection

// getRandomValues needs to be invoked in a context where "this" is a Crypto
// implementation. Also, find the complete implementation of crypto on IE11.
var getRandomValues = (typeof(crypto) != 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto)) ||
                      (typeof(msCrypto) != 'undefined' && typeof window.msCrypto.getRandomValues == 'function' && msCrypto.getRandomValues.bind(msCrypto));

if (getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16); // eslint-disable-line no-undef

  module.exports = function whatwgRNG() {
    getRandomValues(rnds8);
    return rnds8;
  };
} else {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var rnds = new Array(16);

  module.exports = function mathRNG() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

},{}],"node_modules/uuid/lib/bytesToUuid.js":[function(require,module,exports) {
/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  // join used to fix memory issue caused by concatenation: https://bugs.chromium.org/p/v8/issues/detail?id=3175#c4
  return ([
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]], '-',
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]],
    bth[buf[i++]], bth[buf[i++]]
  ]).join('');
}

module.exports = bytesToUuid;

},{}],"node_modules/uuid/v4.js":[function(require,module,exports) {
var rng = require('./lib/rng');
var bytesToUuid = require('./lib/bytesToUuid');

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options === 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;

},{"./lib/rng":"node_modules/uuid/lib/rng-browser.js","./lib/bytesToUuid":"node_modules/uuid/lib/bytesToUuid.js"}],"javascript/modules/module.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Module = Module;

var _knockout = _interopRequireDefault(require("knockout"));

var _v = _interopRequireDefault(require("uuid/v4"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Module(module) {
  var self = this; // Module data

  self.ID = (0, _v.default)(); // ID of the specific individual module in the rack

  self.ModuleID = module.ModuleID; //ID of the module in the metadata

  self.Name = module.Name;
  self.Units = module.Units;
  self.Image = module.Image;
  self.Discontinued = module.Discontinued;
  self.WikiLink = module.WikiLink;
  self.ShopLink = module.ShopLink;
  self.Manufacturer = module.Manufacturer;
  self.Categories = module.Categories;
  self.IsBlank = module.Name === 'BLANK';
  self.Price = module.Price;
  self.PowerConsumption = module.PowerConsumption; // mA

  self.PowerCapacity = module.PowerCapacity; // mA

  self.IsOneThird = module.IsOneThird;
  self.IsOneThirdContainer = module.IsOneThirdContainer;

  if (module.IsOneThirdContainer) {
    self.ContainedModules = _knockout.default.observableArray([null, null, null]);
  } // Interface data


  self.IsDIY = module.IsDIY;
  self.Draggable = !self.IsBlank;
  self.IsDragging = _knockout.default.observable(false);
  self.IsDraggedOver = _knockout.default.observable(false);
  self.DiyTextRotate = module.Name.length > module.Units * 6; // Events

  self.DragStart = function (module, event, source, row, index, dragImageElement) {
    self.IsDragging(true);
    var data = {
      'source': source
    };

    if (row) {
      data.RowId = row.ID;
    }

    if (index) {
      data.index = index();
    }

    event.originalEvent.dataTransfer.setData("text", JSON.stringify(data));
  };

  self.DragEnd = function (module, event) {
    self.IsDragging(false);
  };

  self.DragOver = function (module, event) {
    // prevent default to allow drop
    event.preventDefault();
    event.originalEvent.dataTransfer.dropEffect = 'move';
  };

  self.DragEnter = function (module, event, parentRow, index) {
    // prevent default to allow drop
    event.preventDefault();
  };

  self.DragLeave = function (module, event) {
    self.IsDraggedOver(false);
  };
}
},{"knockout":"node_modules/knockout/build/output/knockout-latest.js","uuid/v4":"node_modules/uuid/v4.js"}],"javascript/data/modules.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modules = exports.BlankModule = void 0;
var BlankModule = {
  ModuleID: 0,
  Name: "BLANK",
  Units: 1,
  Image: 'images/modules/blank.png',
  Discontinued: false
};
exports.BlankModule = BlankModule;
var Modules = [{
  Name: "MASTER",
  ModuleID: 1,
  Units: 2,
  Image: 'images/modules/master.png',
  Discontinued: true,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/MASTER',
  Categories: ['IO'],
  PowerConsumption: 30,
  PowerCapacity: 800,
  Manufacturer: "Tangible Waves"
}, {
  Name: "2OSC/d",
  ModuleID: 2,
  Units: 1,
  Image: 'images/modules/2oscd.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/2OSCD',
  Categories: ['SOUND', 'CV'],
  Price: 38,
  PowerConsumption: 25,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p60/2OSC%2Fd.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "VCO",
  ModuleID: 3,
  Units: 1,
  Image: 'images/modules/vco.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/VCO',
  Categories: ['SOUND', 'CV'],
  Price: 32,
  PowerConsumption: 16,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p6/VCO_.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "NOISE",
  ModuleID: 4,
  Units: 1,
  Image: 'images/modules/noise.png',
  Discontinued: true,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/NOISE',
  Categories: ['SOUND', 'CV'],
  PowerConsumption: 5,
  PowerCapacity: 0,
  Manufacturer: "Tangible Waves"
}, {
  Name: "WAVEFOLDER",
  ModuleID: 5,
  Units: 1,
  Image: 'images/modules/wavefolder.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/WAVEFOLDER',
  Categories: ['EFFECT', 'CV'],
  Price: 26,
  PowerConsumption: 3,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p45/WAVEFOLDER.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "LFO",
  ModuleID: 6,
  Units: 1,
  Image: 'images/modules/lfo.png',
  Discontinued: true,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/LFO',
  Categories: ['CV'],
  Price: 23,
  PowerConsumption: 3,
  PowerCapacity: 0,
  Manufacturer: "Tangible Waves"
}, {
  Name: "2ENV",
  ModuleID: 7,
  Units: 1,
  Image: 'images/modules/2env.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/2ENV',
  Categories: ['CV'],
  Price: 36,
  PowerConsumption: 8,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p59/2ENV.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "FILTER (WASP TYPE)",
  ModuleID: 8,
  Units: 1,
  Image: 'images/modules/wasp.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/FILTERWASP',
  Categories: ['FILTER'],
  Price: 31,
  PowerConsumption: 3,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p9/WASP_FILTER.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "NYLE FILTER (STEINER TYPE)",
  ModuleID: 9,
  Units: 2,
  Image: 'images/modules/nyle.png',
  Discontinued: true,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/NYLEFILTER',
  Categories: ['FILTER'],
  PowerConsumption: 2,
  PowerCapacity: 0,
  Manufacturer: "Tangible Waves"
}, {
  Name: "SVFILTER",
  ModuleID: 10,
  Units: 1,
  Image: 'images/modules/svfilter.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/SVFILTER',
  Categories: ['FILTER'],
  Price: 30,
  PowerConsumption: 2,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p61/SVFILTER_.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "LOPAG (LOWPASS GATE)",
  ModuleID: 11,
  Units: 1,
  Image: 'images/modules/lopag.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/LOPAG',
  Categories: ['FILTER'],
  Price: 28,
  PowerConsumption: 1,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p62/LOPAG_%28lowpass_gate%29.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "2VCA",
  ModuleID: 12,
  Units: 1,
  Image: 'images/modules/2vca.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/2VCA',
  Categories: ['UTILITY'],
  Price: 23,
  PowerConsumption: 5,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p11/2VCA_.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "MIXER 4-4",
  ModuleID: 13,
  Units: 1,
  Image: 'images/modules/mixer4x4.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/MIXER44',
  Categories: ['UTILITY'],
  Price: 21,
  PowerConsumption: 5,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p13/MIXER_4-4.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "2ATT/CV",
  ModuleID: 14,
  Units: 1,
  Image: 'images/modules/2attcv.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/2ATTCV',
  Categories: ['UTILITY'],
  Price: 22,
  PowerConsumption: 4,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p15/2ATT%2FCV_.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "4ATTMIX",
  ModuleID: 15,
  Units: 1,
  Image: 'images/modules/4attmix.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/4ATTMIX',
  Categories: ['UTILITY'],
  Price: 27,
  PowerConsumption: 2,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p53/4ATTMIX.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "SAMPLE & HOLD",
  ModuleID: 16,
  Units: 1,
  Image: 'images/modules/sh.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/SAMPLEHOLD',
  Categories: ['UTILITY', 'CV'],
  Price: 22,
  PowerConsumption: 2,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p18/SAMPLE%26HOLD.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "LOGIC",
  ModuleID: 17,
  Units: 1,
  Image: 'images/modules/logic.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/LOGIC',
  Categories: ['TRIG'],
  Price: 19,
  PowerConsumption: 1,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p16/LOGIC.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "3CVSWITCH",
  ModuleID: 18,
  Units: 1,
  Image: 'images/modules/3vcswitch.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/3VCSWITCH',
  Categories: ['UTILITY'],
  Price: 29,
  PowerConsumption: 4,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p42/3VCSWITCH.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "BEAT DIVIDER",
  ModuleID: 19,
  Units: 1,
  Image: 'images/modules/beatdivider.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/BEATDIVIDER',
  Categories: ['TRIG'],
  Price: 21,
  PowerConsumption: 6,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p12/BEAT_DIVIDER.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "DIVIDER",
  ModuleID: 20,
  Units: 1,
  Image: 'images/modules/divider.png',
  Discontinued: true,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/DIVIDER',
  Categories: ['TRIG'],
  PowerConsumption: null,
  PowerCapacity: 0,
  Manufacturer: "Tangible Waves"
}, {
  Name: "TRIQ164",
  ModuleID: 21,
  Units: 2,
  Image: 'images/modules/triq164.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/TRIQ164',
  Categories: ['TRIG'],
  Price: 45,
  PowerConsumption: 6,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p52/TRIQ164.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "SEQ16",
  ModuleID: 22,
  Units: 4,
  Image: 'images/modules/seq16.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/SEQ16',
  Categories: ['TRIG', 'CV'],
  Price: 74,
  PowerConsumption: 7,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p41/SEQ16.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "DELAY (LOFI)",
  ModuleID: 23,
  Units: 1,
  Image: 'images/modules/delay.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/DELAY',
  Categories: ['EFFECT'],
  Price: 29,
  PowerConsumption: 18,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p17/DELAY_%28LoFi%29_.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "MULTIFX",
  ModuleID: 24,
  Units: 2,
  Image: 'images/modules/multifx.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/MULTIFX',
  Categories: ['EFFECT'],
  Price: 95,
  PowerConsumption: 64,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p51/MULTIFX.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "SPRINGREVERB",
  ModuleID: 25,
  Units: 1,
  Image: 'images/modules/springreverb.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/SPRINGREVERB',
  Categories: ['EFFECT'],
  Price: 33,
  PowerConsumption: 14,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p40/SPRINGREVERB_%28module_only%29.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "HPAMP",
  ModuleID: 26,
  Units: 1,
  Image: 'images/modules/hpamp.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/HPAMP',
  Categories: ['IO'],
  Price: 30,
  PowerConsumption: 15,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p36/HPAMP.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "4I/O",
  ModuleID: 27,
  Units: 1,
  Image: 'images/modules/4io.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/4IO',
  Categories: ['IO'],
  Price: 29,
  PowerConsumption: 0.2,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p46/4I%2FO.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "2SIGNALAMP",
  ModuleID: 28,
  Units: 1,
  Image: 'images/modules/2signalamp.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/2SIGNALAMP',
  Categories: ['UTILITY'],
  Price: 22,
  PowerConsumption: 2,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p43/2SIGNALAMP.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "RACKLINK",
  ModuleID: 29,
  Units: 1,
  Image: 'images/modules/racklink.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/RACKLINK',
  Categories: ['UTILITY'],
  Price: 35,
  PowerConsumption: 0,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p63/RACKLINK_kit_%282_modules___cable%29.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "USBPOWER",
  ModuleID: 30,
  Units: 1,
  Image: 'images/modules/usbpower.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/USBPOWER',
  Categories: ['UTILITY'],
  Price: 17,
  PowerConsumption: 0,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p44/USBPOWER.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "OR2x4",
  ModuleID: 31,
  Units: 1,
  Image: 'images/modules/or2x4.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/OR2x4',
  Categories: ['TRIGGER'],
  Price: 22,
  PowerConsumption: 2,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p70/OR2x4.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "STEP10",
  ModuleID: 32,
  Units: 1,
  Image: 'images/modules/step10.png',
  Discontinued: true,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/STEP10',
  Categories: ['TRIGGER'],
  PowerConsumption: null,
  PowerCapacity: 0,
  Manufacturer: "Tangible Waves"
}, {
  Name: "ENV",
  ModuleID: 33,
  Units: 1,
  Image: 'images/modules/env.png',
  Discontinued: true,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/ENV',
  Categories: ['CV'],
  PowerConsumption: null,
  PowerCapacity: 0,
  Manufacturer: "Tangible Waves"
}, {
  Name: "2OSC",
  ModuleID: 34,
  Units: 1,
  Image: 'images/modules/2osc.png',
  Discontinued: true,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/2OSC',
  Categories: ['SOUND', 'CV'],
  PowerConsumption: null,
  PowerCapacity: 0,
  Manufacturer: "Tangible Waves"
}, {
  Name: "KICK",
  ModuleID: 35,
  Units: 1,
  Image: 'images/modules/kick.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/KICK',
  Categories: ['SOUND'],
  Price: 29,
  PowerConsumption: 3,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p73/KICK.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "DRUMKIT 010",
  ModuleID: 36,
  Units: 1,
  Image: 'images/modules/drumkit010.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/DRUMKIT010',
  Categories: ['SOUND'],
  Price: 49,
  PowerConsumption: 3,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p75/DRUMKIT_010.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "TOPOGRAF",
  ModuleID: 37,
  Units: 2,
  Image: 'images/modules/topograf.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/TOPOGRAF',
  Categories: ['TRIGGER'],
  Price: 65,
  PowerConsumption: 20,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p76/TOPOGRAF.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "NOISE v2",
  ModuleID: 38,
  Units: 1,
  Image: 'images/modules/noisev2.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/NOISE',
  Categories: ['SOUND', 'CV'],
  Price: 20,
  PowerConsumption: 5,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p7/NOISE.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "SLEW/EDGE",
  ModuleID: 39,
  Units: 1,
  Image: 'images/modules/slewedge.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/SLEWEDGE',
  Categories: ['CV'],
  Price: 27,
  PowerConsumption: 5,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p84/SLEW%2FEDGE.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "MM-DIV",
  ModuleID: 40,
  Units: 1,
  Image: 'images/modules/mm-div.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/MM-DIV',
  Categories: ['TRIGGER'],
  Price: 29,
  PowerConsumption: 10,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p83/MM-DIVIDER_.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "NYLE FILTER (STEINER TYPE) v2",
  ModuleID: 41,
  Units: 2,
  Image: 'images/modules/nyle-v2.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/NYLEFILTER',
  Categories: ['FILTER'],
  Price: 44,
  PowerConsumption: 2,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p47/NYLE_FILTER_%28Steiner_type%29.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "MASTER v4",
  ModuleID: 42,
  Units: 2,
  Image: 'images/modules/masterv4.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/MASTER',
  Categories: ['IO'],
  Price: 49,
  PowerConsumption: 30,
  PowerCapacity: 800,
  ShopLink: "https://www.tangiblewaves.com/store/p4/MASTER.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "POWER",
  ModuleID: 43,
  Units: 1,
  Image: 'images/modules/power.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/POWER',
  Categories: ['IO'],
  Price: 29,
  PowerConsumption: 0,
  PowerCapacity: 800,
  ShopLink: "https://www.tangiblewaves.com/store/p85/POWER.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "GRAINS",
  ModuleID: 44,
  Units: 1,
  Image: 'images/modules/grains.png',
  Discontinued: true,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/GRAINS',
  Categories: ['SOUND'],
  Price: 37,
  PowerConsumption: 12,
  PowerCapacity: 0,
  Manufacturer: "Tangible Waves"
}, {
  Name: "MS20 FILTER",
  ModuleID: 45,
  Units: 1,
  Image: 'images/modules/ms20filter.png',
  Discontinued: true,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/MS20FILTER',
  Categories: ['FILTER'],
  Price: 33,
  PowerConsumption: 3,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p87/MS20_FILTER.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "SOLINA",
  ModuleID: 46,
  Units: 2,
  Image: 'images/modules/solina.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/SOLINA',
  Categories: ['SOUND'],
  Price: 67,
  PowerConsumption: 11,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p88/SOLINA.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "2LFO",
  ModuleID: 47,
  Units: 1,
  Image: 'images/modules/2lfo.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/2LFO',
  Categories: ['CV'],
  Price: 32,
  PowerConsumption: 5,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p89/2LFO.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "ALGODRONE",
  ModuleID: 48,
  Units: 2,
  Image: 'images/modules/algodrone.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/ALGODRONE',
  Categories: ['SOUND'],
  Price: 72,
  PowerConsumption: 14,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p90/ALGODRONE.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "DIY",
  ModuleID: 49,
  Units: 1,
  Image: 'images/modules/diy.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/DIY',
  Categories: ['UTILITY'],
  Price: 19,
  PowerConsumption: 0,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p91/DIY_kit.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "BRAEDBOARD",
  ModuleID: 50,
  Units: 2,
  Image: 'images/modules/braedboard.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/BRAEDBOARD',
  Categories: ['UTILITY'],
  Price: 27,
  PowerConsumption: 0,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p92/BRAEDBOARD.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "2CVTOOL",
  ModuleID: 51,
  Units: 1,
  Image: 'images/modules/2cvtool.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/2CVTOOL',
  Categories: ['UTILITY'],
  Price: 29,
  PowerConsumption: 2,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p93/2CVTOOL.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "POLAMIX",
  ModuleID: 52,
  Units: 1,
  Image: 'images/modules/polamix.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/POLAMIX',
  Categories: ['UTILITY'],
  Price: 29,
  PowerConsumption: 2,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p94/POLAMIX.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "4BUFFER",
  ModuleID: 53,
  Units: 1,
  Image: 'images/modules/4buffer.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/4BUFFER',
  Categories: ['UTILITY'],
  Price: 19,
  PowerConsumption: 1,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p95/4BUFFER.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "ADSR",
  ModuleID: 54,
  Units: 1,
  Image: 'images/modules/adsr.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/ADSR',
  Categories: ['CV'],
  Price: 36,
  PowerConsumption: 10,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p96/ADSR.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "FMOS",
  ModuleID: 55,
  Units: 1,
  Image: 'images/modules/fmos.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/FMOS',
  Categories: ['SOUND'],
  Price: 38,
  PowerConsumption: 30,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p97/FMOS.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "SAWVOX",
  ModuleID: 56,
  Units: 1,
  Image: 'images/modules/sawvox.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/SAWVOX',
  Categories: ['SOUND'],
  Price: 38,
  PowerConsumption: 30,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p98/SAWVOX.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "QUANTIZER",
  ModuleID: 57,
  Units: 1,
  Image: 'images/modules/quantizer.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/QUANTIZER',
  Categories: ['CV'],
  Price: 52,
  PowerConsumption: 15,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p99/QUANTIZER.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "SEQ8",
  ModuleID: 58,
  Units: 2,
  Image: 'images/modules/seq8.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/SEQ8',
  Categories: ['CV'],
  Price: 45,
  PowerConsumption: 7,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p100/SEQ8.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "MS20 FILTER v2",
  ModuleID: 59,
  Units: 1,
  Image: 'images/modules/ms20filterv2.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/MS20FILTER',
  Categories: ['FILTER'],
  Price: 33,
  PowerConsumption: 3,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p87/MS20_FILTER.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "GRAINS v2",
  ModuleID: 60,
  Units: 1,
  Image: 'images/modules/grainsv2.png',
  Discontinued: false,
  WikiLink: 'https:////wiki.aemodular.com/pmwiki.php/AeManual/GRAINS',
  Categories: ['SOUND'],
  Price: 37,
  PowerConsumption: 12,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p86/GRAINS.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "WAVETABLES",
  ModuleID: 61,
  Units: 2,
  Image: 'images/modules/wavetables.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/WAVETABLES',
  Categories: ['SOUND'],
  Price: 87,
  PowerConsumption: 40,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p105/WAVETABLES.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "MM33",
  ModuleID: 62,
  Units: 2,
  Image: 'images/modules/mm33.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/WonkyStuffmm33',
  Categories: ['UTILITY'],
  Price: 62,
  PowerConsumption: 1,
  PowerCapacity: 0,
  ShopLink: "https://wonkystuff.net/product/mm33/",
  Manufacturer: "Wonkystuff"
}, {
  Name: "RBSS",
  ModuleID: 63,
  Units: 1,
  Image: 'images/modules/rbss.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/WonkyStuffRBSS',
  Categories: ['CV'],
  Price: 39,
  PowerConsumption: 16,
  PowerCapacity: 0,
  ShopLink: "https://wonkystuff.net/product/rbss3/",
  Manufacturer: "Wonkystuff"
}, {
  Name: "RBSS (yellow)",
  ModuleID: 64,
  Units: 1,
  Image: 'images/modules/rbss-yellow.png',
  Discontinued: true,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/WonkyStuffRBSS',
  Categories: ['CV'],
  Price: 39,
  PowerConsumption: 16,
  PowerCapacity: 0,
  Manufacturer: "Wonkystuff"
}, {
  Name: "METER",
  ModuleID: 65,
  Units: 2,
  Image: 'images/modules/meter.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/METER',
  Categories: ['UTILITY'],
  Price: 48,
  PowerConsumption: 20,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p106/METER.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "PHASER",
  ModuleID: 66,
  Units: 2,
  Image: 'images/modules/phaser.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/PHASER',
  Categories: ['EFFECT'],
  Price: 49,
  PowerConsumption: 4,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p111/PHASER.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "MIXCONSOLE",
  ModuleID: 67,
  Units: 4,
  Image: 'images/modules/mixconsole.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/MIXCONSOLE',
  Categories: ['IO'],
  Price: 75,
  PowerConsumption: 28,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p108/MIXCONSOLE.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "MIXCONSOLE/3CH",
  ModuleID: 68,
  Units: 2,
  Image: 'images/modules/mixconsole3ch.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/MIXCONSOLE3CH',
  Categories: ['IO'],
  Price: 48,
  PowerConsumption: 15,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p109/MIXCONSOLE_-_3CH.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "4ATTMIX FADER",
  ModuleID: 69,
  Units: 2,
  Image: 'images/modules/4attmixfdr.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/4ATTMIXFADER',
  Categories: ['UTILITY', 'CV'],
  Price: 34,
  PowerConsumption: 2,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p107/4ATTMIX_FADER.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "DRONE38",
  ModuleID: 70,
  Units: 4,
  Image: 'images/modules/drone38.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/DRONE38',
  Categories: ['SOUND'],
  Price: 59,
  PowerConsumption: 6,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p119/DRONE38.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "DRONX",
  ModuleID: 71,
  Units: 4,
  Image: 'images/modules/dronx.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/DRONX',
  Categories: ['UTILITY', 'EFFECT'],
  Price: 70,
  PowerConsumption: 40,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p120/DRONX.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "TRIP",
  ModuleID: 72,
  Units: 1,
  Image: 'images/modules/trip.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/TRIP',
  Categories: ['TRIGGER'],
  Price: 35,
  PowerConsumption: 8,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p121/TRIP.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "QVCA (black)",
  ModuleID: 73,
  Units: 1,
  Image: 'images/modules/qvca-black.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/WonkyStuffQVCA',
  Categories: ['UTILITY'],
  Price: 45,
  PowerConsumption: 3,
  PowerCapacity: 0,
  ShopLink: "https://wonkystuff.net/product/qvca-black/",
  Manufacturer: "WonkyStuff"
}, {
  Name: "QVCA (red)",
  ModuleID: 74,
  Units: 1,
  Image: 'images/modules/qvca-red.png',
  Discontinued: true,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/WonkyStuffQVCA',
  Categories: ['UTILITY'],
  Price: 45,
  PowerConsumption: 3,
  PowerCapacity: 0,
  Manufacturer: "WonkyStuff"
}, {
  Name: "JOYSTICK",
  ModuleID: 75,
  Units: 1,
  Image: 'images/modules/joystick.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/JOYSTICK',
  Categories: ['UTILITY', 'CV'],
  Price: 0,
  PowerConsumption: 12,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p130/JOYSTICK.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "MIXCON JACKOUT",
  ModuleID: 76,
  Units: 2,
  Image: 'images/modules/mixcon-jackout.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/MIXCONJACKOUT',
  Categories: ['IO'],
  Price: 0,
  PowerConsumption: 0,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p131/MIXCONSOLE_JACKOUT.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "MIXCON XLROUT",
  ModuleID: 77,
  Units: 2,
  Image: 'images/modules/mixcon-xlrout.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/MIXCONXLROUT',
  Categories: ['IO'],
  Price: 0,
  PowerConsumption: 2,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p132/MIXCONSOLE_XLROUT.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "DEAD BAND",
  ModuleID: 78,
  Units: 1,
  Image: 'images/modules/deadband.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/KeuerslagerkurtDeadBand',
  Categories: ['EFFECT', 'CV'],
  Price: 40,
  PowerConsumption: 0,
  PowerCapacity: 0,
  ShopLink: "https://www.tindie.com/products/keurslagerkurt/kurts-dead-band/",
  Manufacturer: "Keurslager Kurt"
}, {
  Name: "QUAD BOOST",
  ModuleID: 79,
  Units: 1,
  Image: 'images/modules/quadboost.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/KeuerslagerkurtQuadBoost',
  Categories: ['EFFECT', 'CV'],
  Price: 35,
  PowerConsumption: 0,
  PowerCapacity: 0,
  ShopLink: "https://www.tindie.com/products/keurslagerkurt/kurts-quad-boost/",
  Manufacturer: "Keurslager Kurt"
}, {
  Name: "4VCA",
  ModuleID: 80,
  Units: 1,
  Image: 'images/modules/4vca.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/4VCA',
  Categories: ['UTILITY'],
  Price: 36,
  PowerConsumption: 8,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p136/4VCA.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "2TONE",
  ModuleID: 81,
  Units: 1,
  Image: 'images/modules/2tone.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/2TONE',
  Categories: ['EFFECT', 'UTILITY'],
  Price: 28,
  PowerConsumption: 1,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p133/2TONE.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "SWITCHMATRIX 4x4",
  ModuleID: 82,
  Units: 2,
  Image: 'images/modules/switchmatrix4x4.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/SWITCHMATRIX4x4',
  Categories: ['UTILITY'],
  Price: 60,
  PowerConsumption: 12,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p135/SWITCHMATRIX_4x4.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "VMBRIDGE",
  ModuleID: 83,
  Units: 1,
  Image: 'images/modules/vmbridge.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/VMBRIDGE',
  Categories: ['IO'],
  Price: 38,
  PowerConsumption: 3,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p134/VMBRIDGE.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "BIOT",
  ModuleID: 84,
  Units: 1,
  Image: 'images/modules/biot.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/BioT',
  Categories: ['UTILITY'],
  Price: 20,
  PowerConsumption: 0,
  PowerCapacity: 0,
  ShopLink: "https://wonkystuff.net/product/biot-kit/",
  Manufacturer: "WonkyStuff"
}, {
  Name: "2CVADD-HQ",
  ModuleID: 85,
  Units: 1,
  Image: 'images/modules/2cvadd-hq.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/2CVADD-HQ',
  Categories: ['CV'],
  Price: 33,
  PowerConsumption: 3,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p138/2CVADD-HQ.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "6MUTE",
  ModuleID: 86,
  Units: 1,
  Image: 'images/modules/6mute.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/6MUTE',
  Categories: ['UTILITY'],
  Price: 46,
  PowerConsumption: 8,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p139/6MUTE.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "CVADDER-HQ",
  ModuleID: 87,
  Units: 1,
  Image: 'images/modules/cvadder-hq.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/CVADDER-HQ',
  Categories: ['CV'],
  Price: 37,
  PowerConsumption: 8,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p137/CVADDER-HQ.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "CIRRUS",
  ModuleID: 88,
  Units: 3,
  Image: 'images/modules/cirrus.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/CIRRUS',
  Categories: ['SOUND', 'EFFECT'],
  Price: 142,
  PowerConsumption: 90,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p142/CIRRUS.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "STOMP I/O",
  ModuleID: 89,
  Units: 1,
  Image: 'images/modules/stomp-io.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/STOMPIO',
  Categories: ['IO'],
  Price: 32,
  PowerConsumption: 4,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p140/STOMP-IO.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "TUBE-VU",
  ModuleID: 90,
  Units: 3,
  Image: 'images/modules/tube-vu.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/TUBEVU',
  Categories: ['UTILITY'],
  Price: 69,
  PowerConsumption: 0,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p141/TUBE-VU.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "EUCLID GRID",
  ModuleID: 91,
  Units: 2,
  Image: 'images/modules/euclidgrid.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/KyaaEuclid',
  Categories: ['TRIGGER'],
  Price: 100,
  PowerConsumption: 2.5,
  PowerCapacity: 0,
  ShopLink: "https://kyaa.co/product/euclid-grid",
  Manufacturer: "Kyaa"
}, {
  Name: "FIVE STEPS",
  ModuleID: 92,
  Units: 1,
  Image: 'images/modules/kk_5steps.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/KeuerslagerkurtFivesteps',
  Categories: ['CV'],
  Price: 40,
  PowerConsumption: 0,
  PowerCapacity: 0,
  ShopLink: "https://www.tindie.com/products/keurslagerkurt/kurts-five-steps-arpeggiator-for-ae-modular/",
  Manufacturer: "Keurslager Kurt"
}, {
  Name: "THE GREAT DIVIDE",
  ModuleID: 93,
  Units: 1,
  Image: 'images/modules/kk_greatdivide.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/KeuerslagerkurtGreatDivide',
  Categories: ['UTILITY'],
  Price: 30,
  PowerConsumption: 0,
  PowerCapacity: 0,
  ShopLink: "https://www.tindie.com/products/keurslagerkurt/the-great-divide-2-x-r2r-module-diy-kit/",
  Manufacturer: "Keurslager Kurt"
}, {
  Name: "MOCO",
  ModuleID: 94,
  Units: 1,
  Image: 'images/modules/moco.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/WonkyStuffMoco',
  Categories: ['UTILITY'],
  Price: 40,
  PowerConsumption: 0,
  PowerCapacity: 0,
  ShopLink: "https://wonkystuff.net/product/moco-1st-edition/",
  Manufacturer: "Wonkystuff"
}, {
  Name: "CORE1.AE",
  ModuleID: 95,
  Units: 1,
  Image: 'images/modules/core1_ae.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/WonkyStuffCore1ae',
  Categories: ['UTILITY', 'SOUND', 'EFFECT'],
  Price: 40,
  PowerConsumption: 0,
  PowerCapacity: 0,
  ShopLink: "https://wonkystuff.net/product/core1-ae-v1-2-black/",
  Manufacturer: "Wonkystuff"
}, {
  Name: "TBD",
  ModuleID: 96,
  Units: 2,
  Image: 'images/modules/tbd.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/TBD',
  Categories: ['UTILITY', 'SOUND', 'EFFECT'],
  Price: 95,
  PowerConsumption: 80,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p149/TBD.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "CVSHIFTER",
  ModuleID: 97,
  Units: 1,
  Image: 'images/modules/cvshifter.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/CVSHIFTER',
  Categories: ['CV'],
  Price: 36,
  PowerConsumption: 12,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p148/CVSHIFTER.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "ENVFOLLOWER/EXT.IN",
  ModuleID: 98,
  Units: 1,
  Image: 'images/modules/envfollower.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/ENVFOLLOWER',
  Categories: ['CV', 'IO'],
  Price: 39,
  PowerConsumption: 7,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p147/ENVFOLLOWER%2FEXT.IN.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "MODULATORS",
  ModuleID: 99,
  Units: 1,
  Image: 'images/modules/modulators.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/MODULATORS',
  Categories: ['CV'],
  Price: 37,
  PowerConsumption: 13,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p152/MODULATORS.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "DIODE FILTER",
  ModuleID: 100,
  Units: 1,
  Image: 'images/modules/diode-filter.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/DIODEFILTER',
  Categories: ['NEW', 'FILTER'],
  Price: 36,
  PowerConsumption: 3,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p151/DIODEFILTER.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "XMIX",
  ModuleID: 101,
  Units: 1,
  Image: 'images/modules/xmix.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/XMIX',
  Categories: ['NEW', 'UTILITY'],
  Price: 32,
  PowerConsumption: 5,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p153/XMIX.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "ORNAMENT & CRIME",
  ModuleID: 102,
  Units: 2,
  Image: 'images/modules/ornament-crime.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/ORNAMENTCRIME',
  Categories: ['NEW', 'SOUND', 'FILTER', 'UTILITY', 'EFFECT'],
  Price: 86,
  PowerConsumption: 60,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p154/ORNAMENT_%26_CRIME.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "COMPACT MIXER",
  ModuleID: 103,
  Units: 8,
  Image: 'images/modules/compactmixer.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/COMPACTMIXER',
  Categories: ['NEW', 'UTILITY', 'IO'],
  Price: 118,
  PowerConsumption: 18,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p156/COMPACTMIXER.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "HEARTBEAT",
  ModuleID: 104,
  Units: 1,
  Image: 'images/modules/heartbeat.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/HEARTBEAT',
  Categories: ['NEW', 'TRIGGER'],
  Price: 55,
  PowerConsumption: 14,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p157/HEARTBEAT.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "HEARTBEAT EXTENDER",
  ModuleID: 105,
  Units: 1,
  Image: 'images/modules/heartbeat-extender.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/HEARTBEATEXTENDER',
  Categories: ['NEW', 'TRIGGER'],
  Price: 37,
  PowerConsumption: 7,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p158/HEARTBEAT_EXTENDER.html",
  Manufacturer: "Tangible Waves"
}, {
  Name: "KUZMIN FILTER",
  ModuleID: 106,
  Units: 1,
  Image: 'images/modules/kuzminfilter.png',
  Discontinued: false,
  WikiLink: 'https://wiki.aemodular.com/pmwiki.php/AeManual/KUZMINFILTER',
  Categories: ['NEW', 'FILTER'],
  Price: 43,
  PowerConsumption: 2,
  PowerCapacity: 0,
  ShopLink: "https://www.tangiblewaves.com/store/p164/KUZMIN_FILTER.html",
  Manufacturer: "Tangible Waves"
}];
exports.Modules = Modules;
},{}],"node_modules/file-saver/dist/FileSaver.min.js":[function(require,module,exports) {
var define;
var global = arguments[3];
(function(a,b){if("function"==typeof define&&define.amd)define([],b);else if("undefined"!=typeof exports)b();else{b(),a.FileSaver={exports:{}}.exports}})(this,function(){"use strict";function b(a,b){return"undefined"==typeof b?b={autoBom:!1}:"object"!=typeof b&&(console.warn("Deprecated: Expected third argument to be a object"),b={autoBom:!b}),b.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(a.type)?new Blob(["\uFEFF",a],{type:a.type}):a}function c(a,b,c){var d=new XMLHttpRequest;d.open("GET",a),d.responseType="blob",d.onload=function(){g(d.response,b,c)},d.onerror=function(){console.error("could not download file")},d.send()}function d(a){var b=new XMLHttpRequest;b.open("HEAD",a,!1);try{b.send()}catch(a){}return 200<=b.status&&299>=b.status}function e(a){try{a.dispatchEvent(new MouseEvent("click"))}catch(c){var b=document.createEvent("MouseEvents");b.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),a.dispatchEvent(b)}}var f="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof global&&global.global===global?global:void 0,a=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),g=f.saveAs||("object"!=typeof window||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!a?function(b,g,h){var i=f.URL||f.webkitURL,j=document.createElement("a");g=g||b.name||"download",j.download=g,j.rel="noopener","string"==typeof b?(j.href=b,j.origin===location.origin?e(j):d(j.href)?c(b,g,h):e(j,j.target="_blank")):(j.href=i.createObjectURL(b),setTimeout(function(){i.revokeObjectURL(j.href)},4E4),setTimeout(function(){e(j)},0))}:"msSaveOrOpenBlob"in navigator?function(f,g,h){if(g=g||f.name||"download","string"!=typeof f)navigator.msSaveOrOpenBlob(b(f,h),g);else if(d(f))c(f,g,h);else{var i=document.createElement("a");i.href=f,i.target="_blank",setTimeout(function(){e(i)})}}:function(b,d,e,g){if(g=g||open("","_blank"),g&&(g.document.title=g.document.body.innerText="downloading..."),"string"==typeof b)return c(b,d,e);var h="application/octet-stream"===b.type,i=/constructor/i.test(f.HTMLElement)||f.safari,j=/CriOS\/[\d]+/.test(navigator.userAgent);if((j||h&&i||a)&&"undefined"!=typeof FileReader){var k=new FileReader;k.onloadend=function(){var a=k.result;a=j?a:a.replace(/^data:[^;]*;/,"data:attachment/file;"),g?g.location.href=a:location=a,g=null},k.readAsDataURL(b)}else{var l=f.URL||f.webkitURL,m=l.createObjectURL(b);g?g.location=m:location.href=m,g=null,setTimeout(function(){l.revokeObjectURL(m)},4E4)}});f.saveAs=g.saveAs=g,"undefined"!=typeof module&&(module.exports=g)});


},{}],"javascript/modules/utilities.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AEMUtilities = void 0;

var _knockout = _interopRequireDefault(require("knockout"));

var _module = require("./module");

var _modules = require("../data/modules");

var _fileSaver = _interopRequireDefault(require("file-saver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AEMUtilities = {};
exports.AEMUtilities = AEMUtilities;

AEMUtilities.GetBlankModule = function () {
  return new _module.Module(_modules.BlankModule);
};

AEMUtilities.GetDIYModule = function (units, text) {
  var DIYModule = {
    ID: 0,
    Name: text,
    Units: units,
    IsDIY: true,
    Image: 'images/modules/blank' + units + '.png',
    Discontinued: false
  };
  return new _module.Module(DIYModule);
};

AEMUtilities.GetBlankModules = function (number) {
  var blanks = [];

  for (var i = 0; i < number; i++) {
    blanks.push(AEMUtilities.GetBlankModule());
  }

  return blanks;
};

AEMUtilities.Download = function (data, filename, type) {
  var file = new Blob([data], {
    type: type
  });
  (0, _fileSaver.default)(file, filename);
};

AEMUtilities.IsIOS = function () {
  return /(iPad|iPhone|iPod)/g.test(navigator.userAgent);
};
},{"knockout":"node_modules/knockout/build/output/knockout-latest.js","./module":"javascript/modules/module.mjs","../data/modules":"javascript/data/modules.mjs","file-saver":"node_modules/file-saver/dist/FileSaver.min.js"}],"javascript/modules/caserow.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CaseRow = CaseRow;

var _knockout = _interopRequireDefault(require("knockout"));

var _v = _interopRequireDefault(require("uuid/v4"));

var _utilities = require("./utilities");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function CaseRow(aemcase) {
  var self = this;
  self.ID = (0, _v.default)();
  self.Units = aemcase.Units;
  self.Modules = _knockout.default.observableArray(_utilities.AEMUtilities.GetBlankModules(aemcase.Units));

  self.ModuleFits = function (module, index) {
    var availableUnits = 0;

    for (var i = index; i < self.Modules().length; i++) {
      availableUnits += self.Modules()[i].Units;
    }

    return module.Units <= availableUnits;
  };

  self.ReplaceModuleWithBlanks = function (module) {
    var index = self.Modules.indexOf(module);

    var blanks = _utilities.AEMUtilities.GetBlankModules(module.Units);

    var args = [index, 1].concat(blanks);
    self.Modules.splice.apply(self.Modules, args);
  };

  self.MoveModule = function (oldIndex, newIndex) {
    var moduleToMove = self.Modules.splice(oldIndex, 1);
    self.Modules.splice(newIndex, 0, moduleToMove[0]);
  };

  self.DeleteModulesAt = function (index, number) {
    self.Modules.splice(index, number);
  };

  self.InsertModulesAt = function (index, modules) {
    var args = [index, 0].concat(modules);
    self.Modules.splice.apply(self.Modules, args);
  };

  self.GetUnitCount = function () {
    return self.Modules().reduce(function (a, b) {
      return a + b;
    }, 0);
  };

  self.IsValid = function () {
    return self.GetUnitCount() === self.Units;
  };

  self.ToNameArray = function () {
    return self.Modules().map(function (m) {
      if (m.IsOneThirdContainer) {
        return m.Name + JSON.stringify(m.ContainedModules().map(function (m2) {
          return m2 ? m2.Name : 'NULL';
        }));
      } else {
        return m.Name;
      }
    });
  };
}
},{"knockout":"node_modules/knockout/build/output/knockout-latest.js","uuid/v4":"node_modules/uuid/v4.js","./utilities":"javascript/modules/utilities.mjs"}],"javascript/modules/aemcase.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AEMCase = AEMCase;
exports.CaseMaterial = void 0;

var _knockout = _interopRequireDefault(require("knockout"));

var _v = _interopRequireDefault(require("uuid/v4"));

var _caserow = require("./caserow");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AEMCase(aemcase) {
  var self = this;
  self.ID = (0, _v.default)();
  self.Name = aemcase.Name;
  self.Rows = aemcase.Rows;
  self.Units = aemcase.Units;
  self.Price = aemcase.Price;
  self.CablePrice = aemcase.CablePrice;
  self.Material = _knockout.default.observable(aemcase.Material);
  self.Content = _knockout.default.observableArray();
  self.Order = _knockout.default.observable();

  for (var i = 0; i < aemcase.Rows; i++) {
    self.Content.push(new _caserow.CaseRow(aemcase));
  }
}

var CaseMaterial = {
  ACRYLIC_RED: {
    Name: 'Red Acrylic',
    Class: 'acrylic-red'
  },
  ACRYLIC_ORANGE: {
    Name: 'Orange Acrylic',
    Class: 'acrylic-orange'
  },
  ACRYLIC_PINK: {
    Name: 'Pink Acrylic',
    Class: 'acrylic-pink'
  },
  ACRYLIC_BLUE: {
    Name: 'Blue Acrylic',
    Class: 'acrylic-blue'
  },
  ACRYLIC_NEONGREEN: {
    Name: 'Neon Green Acrylic',
    Class: 'acrylic-neongreen'
  },
  ACRYLIC_DARKVIOLETSEMITRANSPARENT: {
    Name: 'Dark Violet (semi-transparent)',
    Class: 'acrylic-darkvioletsemitransparent'
  },
  ACRYLIC_NEONORANGESEMITRANSPARENT: {
    Name: 'Neon Orange (semi-transparent)',
    Class: 'acrylic-neonorangesemitransparent'
  },
  ACRYLIC_VIOLETSEMITRANSPARENT: {
    Name: 'Violet (semi-transparent)',
    Class: 'acrylic-violetsemitransparent'
  },
  ACRYLIC_YELLOW: {
    Name: 'Yellow Acrylic',
    Class: 'acrylic-yellow'
  },
  ACRYLIC_MATTEBLACK: {
    Name: 'Matte Black Acrylic',
    Class: 'acrylic-matteblack'
  },
  BAMBOO: {
    Name: 'Bamboo',
    Class: 'bamboo'
  },
  WALNUT: {
    Name: 'Walnut',
    Class: 'walnut'
  }
};
exports.CaseMaterial = CaseMaterial;
},{"knockout":"node_modules/knockout/build/output/knockout-latest.js","uuid/v4":"node_modules/uuid/v4.js","./caserow":"javascript/modules/caserow.mjs"}],"javascript/modules/modulereserve.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModuleReserve = ModuleReserve;

var _knockout = _interopRequireDefault(require("knockout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ModuleReserve() {
  var self = this;
  self.IsDraggedOver = _knockout.default.observable(false);
  self.Modules = _knockout.default.observableArray();

  self.AddModule = function (module) {
    self.Modules.push(module);
  };

  self.DeleteModule = function (module) {
    self.Modules.remove(module);
  };

  self.GetModuleById = function (ID) {
    return self.Modules().find(function (m) {
      return m.ID == ID;
    });
  };

  self.DragOver = function (module, event) {
    event.preventDefault();
    event.originalEvent.dataTransfer.dropEffect = 'move';
  };

  self.DragEnter = function (reserve, event) {
    event.preventDefault();
    self.IsDraggedOver(true);
  };

  self.DragLeave = function (reserve, event) {
    self.IsDraggedOver(false);
  };
}
},{"knockout":"node_modules/knockout/build/output/knockout-latest.js"}],"javascript/data/cases.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GetCase = GetCase;
exports.Cases = void 0;

var _aemcase = require("../modules/aemcase");

var Cases = [// 1 row
{
  Name: 'AE modular case 1-Row 12x1 NARROW',
  Rows: 1,
  Units: 12,
  Price: 23,
  CablePrice: 11,
  Material: _aemcase.CaseMaterial.ACRYLIC_RED
}, {
  Name: 'AE modular case 1-Row 16x1 STANDARD',
  Rows: 1,
  Units: 16,
  Price: 26,
  CablePrice: 13,
  Material: _aemcase.CaseMaterial.ACRYLIC_RED
}, {
  Name: 'AE modular case 1-Row 20x1 WIDE',
  Rows: 1,
  Units: 20,
  Price: 31,
  CablePrice: 16,
  Material: _aemcase.CaseMaterial.ACRYLIC_RED
}, // 2 rows
{
  Name: 'AE modular case 2-Row 12x2 NARROW',
  Rows: 2,
  Units: 12,
  Price: 30,
  CablePrice: 22,
  Material: _aemcase.CaseMaterial.ACRYLIC_RED
}, {
  Name: 'AE modular case 2-Row 16x2 STANDARD',
  Rows: 2,
  Units: 16,
  Price: 35,
  CablePrice: 26,
  Material: _aemcase.CaseMaterial.ACRYLIC_RED
}, {
  Name: 'AE modular case 2-Row 20x2 WIDE',
  Rows: 2,
  Units: 20,
  Price: 41,
  CablePrice: 32,
  Material: _aemcase.CaseMaterial.ACRYLIC_RED
}, // 4 Rows 
{
  Name: 'AE modular case 4-Row 20x4 WIDE',
  Rows: 4,
  Units: 20,
  Price: 51,
  CablePrice: 64,
  Material: _aemcase.CaseMaterial.ACRYLIC_RED
}, // Eurorack
{
  Name: 'AE modular Eurorack adapter frame 8U',
  Rows: 1,
  Units: 8,
  Price: 20,
  CablePrice: 11,
  Material: _aemcase.CaseMaterial.ACRYLIC_RED
}, {
  Name: 'AE modular Eurorack adapter frame 12U',
  Rows: 1,
  Units: 12,
  Price: 24,
  CablePrice: 13,
  Material: _aemcase.CaseMaterial.ACRYLIC_RED
}, {
  Name: 'AE modular Eurorack adapter frame 16U',
  Rows: 1,
  Units: 16,
  Price: 28,
  CablePrice: 16,
  Material: _aemcase.CaseMaterial.ACRYLIC_RED
}];
exports.Cases = Cases;

function GetCase(rows, units) {
  for (var i = 0; i < Cases.length; i++) {
    var aemCase = Cases[i];

    if (aemCase.Rows === rows && aemCase.Units === units) {
      return aemCase;
    }
  }

  return null;
}
},{"../modules/aemcase":"javascript/modules/aemcase.mjs"}],"javascript/modules/rack.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Rack = Rack;

var _knockout = _interopRequireDefault(require("knockout"));

var _utilities = require("./utilities");

var _aemcase = require("./aemcase");

var _caserow = require("./caserow");

var _modulereserve = require("./modulereserve");

var _module = require("./module");

var _modules = require("../data/modules");

var _cases = require("../data/cases");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Rack() {
  var self = this;
  self.Name = _knockout.default.observable('My Rack');
  self.Cases = _knockout.default.observableArray();
  self.ModuleReserve = _knockout.default.observable(new _modulereserve.ModuleReserve());
  self.SerializationVersion = 1;
  self.PriceHasErrors = _knockout.default.observable(false);
  self.TotalPrice = _knockout.default.computed(function () {
    var total = 0;
    self.PriceHasErrors(false);

    for (var i = 0; i < self.Cases().length; i++) {
      var aemcase = self.Cases()[i];

      if (aemcase.Price && aemcase.CablePrice) {
        total += aemcase.Price + aemcase.CablePrice;
      } else {
        var dataCase = (0, _cases.GetCase)(aemcase.Rows, aemcase.Units);

        if (dataCase) {
          aemcase.Price = dataCase.Price;
          aemcase.CablePrice = dataCase.CablePrice;
          total += aemcase.Price + aemcase.CablePrice;
        } else {
          self.PriceHasErrors(true);
        }
      }

      for (var j = 0; j < aemcase.Content().length; j++) {
        var row = aemcase.Content()[j];

        for (var k = 0; k < row.Modules().length; k++) {
          var module = row.Modules()[k];

          if (!module.IsBlank && !module.IsDIY) {
            if (!module.Discontinued && module.Price) {
              total += module.Price;
            } else {
              self.PriceHasErrors(true);
            }
          }
        }
      }
    }

    return total;
  });
  self.PowerHasErrors = _knockout.default.observable(false);
  self.TotalPowerConsumption = _knockout.default.computed(function () {
    var total = 0;
    self.PowerHasErrors(false);

    for (var i = 0; i < self.Cases().length; i++) {
      var aemcase = self.Cases()[i];

      for (var j = 0; j < aemcase.Content().length; j++) {
        var row = aemcase.Content()[j];

        for (var k = 0; k < row.Modules().length; k++) {
          var module = row.Modules()[k];

          if (!module.IsBlank && !module.IsDIY) {
            if (typeof module.PowerConsumption !== 'undefined') {
              total += module.PowerConsumption;
            } else {
              self.PowerHasErrors(true);
            }
          }
        }
      }
    }

    return total;
  });
  self.TotalPowerCapacity = _knockout.default.computed(function () {
    var total = 0;

    for (var i = 0; i < self.Cases().length; i++) {
      var aemcase = self.Cases()[i];

      for (var j = 0; j < aemcase.Content().length; j++) {
        var row = aemcase.Content()[j];

        for (var k = 0; k < row.Modules().length; k++) {
          var module = row.Modules()[k];

          if (!module.IsBlank && !module.IsDIY) {
            if (module.PowerCapacity) {
              total += module.PowerCapacity;
            }
          }
        }
      }
    }

    return total;
  });
  self.PowerCapacityExceeded = _knockout.default.computed(function () {
    return self.TotalPowerConsumption() > self.TotalPowerCapacity();
  });

  self.GetRowById = function (id) {
    for (var i = 0; i < self.Cases().length; i++) {
      var aemcase = self.Cases()[i];

      for (var j = 0; j < aemcase.Content().length; j++) {
        var row = aemcase.Content()[j];

        if (row.ID == id) {
          return row;
        }
      }
    }
  };

  self.AddCase = function (aemcase) {
    var newCase = new _aemcase.AEMCase(aemcase);
    newCase.Order(self.Cases().length);
    self.Cases.push(newCase);
  };

  self.MoveCaseUp = function (currentCase) {
    if (currentCase.Order() > 0) {
      var caseToSwitch = self.Cases()[currentCase.Order() - 1];
      caseToSwitch.Order(caseToSwitch.Order() + 1);
      currentCase.Order(currentCase.Order() - 1);
      self.Cases.splice(currentCase.Order(), 2, currentCase, caseToSwitch);
    }
  };

  self.MoveCaseDown = function (currentCase) {
    if (currentCase.Order() < self.Cases().length - 1) {
      var caseToSwitch = self.Cases()[currentCase.Order() + 1];
      caseToSwitch.Order(caseToSwitch.Order() - 1);
      currentCase.Order(currentCase.Order() + 1);
      self.Cases.splice(caseToSwitch.Order(), 2, caseToSwitch, currentCase);
    }
  };

  self.DeleteCase = function (currentCase) {
    self.Cases.splice(currentCase.Order(), 1);
    self.ResetOrder();
  };

  self.ResetOrder = function () {
    for (var i = 0; i < self.Cases().length; i++) {
      self.Cases()[i].Order(i);
    }
  };

  self.SerializeToJson = function () {
    return _knockout.default.toJSON(self);
  };

  self.ToString = function () {
    var content = [];
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = self.Cases().sort(function (a, b) {
        return a.Order() - b.Order();
      })[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var aemCase = _step.value;
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = aemCase.Content()[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var row = _step2.value;
            content.push(row.ToNameArray());
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return JSON.stringify(content);
  };
}

Rack.DeserializeFromJson = function (json) {
  var jsonRack;

  try {
    jsonRack = JSON.parse(json);
  } catch (e) {
    alert("Error with your file: " + e);
    return;
  }

  var newRack = new Rack();
  var errors = [];
  newRack.Name(jsonRack.Name);
  jsonRack.Cases.forEach(function (aemCase) {
    var newCase = new _aemcase.AEMCase(aemCase);
    newCase.Order(aemCase.Order);
    aemCase.Content.forEach(function (row, rowIndex) {
      var rowContent = [];
      row.Modules.forEach(function (module, moduleIndex) {
        var moduleData;

        if (module.IsBlank) {
          moduleData = _utilities.AEMUtilities.GetBlankModule();
        } else if (module.IsDIY) {
          moduleData = module;
        } else {
          // Finding the module data from its ID only (don't trust the json)
          moduleData = _modules.Modules.find(function (element) {
            return element.ModuleID === module.ModuleID || element.Name == module.Name;
          });
        }

        if (moduleData) {
          rowContent.push(new _module.Module(moduleData));
        } else {
          for (var i = 0; i < module.Units; i++) {
            rowContent.push(new _module.Module(_utilities.AEMUtilities.GetBlankModule()));
          }

          errors.push("Couldn't find module " + module.Name);
        }
      });
      var newRow = new _caserow.CaseRow(aemCase);
      newRow.Modules(rowContent);
      newCase.Content.splice(rowIndex, 1, newRow);
    });
    newRack.Cases.push(newCase);
  });
  newRack.ResetOrder();

  if (jsonRack.ModuleReserve) {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = jsonRack.ModuleReserve.Modules[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var m = _step3.value;
        newRack.ModuleReserve().AddModule(new _module.Module(m));
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  }

  errors.forEach(function (error) {
    console.log(error);
  });
  return newRack;
};
},{"knockout":"node_modules/knockout/build/output/knockout-latest.js","./utilities":"javascript/modules/utilities.mjs","./aemcase":"javascript/modules/aemcase.mjs","./caserow":"javascript/modules/caserow.mjs","./modulereserve":"javascript/modules/modulereserve.mjs","./module":"javascript/modules/module.mjs","../data/modules":"javascript/data/modules.mjs","../data/cases":"javascript/data/cases.mjs"}],"javascript/data/systems.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PresetSystems = void 0;
var PresetSystems = {
  "starterRack1v2": '{"Name":" AE modular STARTER RACK 1","Cases":[{"ID":"74be2249-a8d5-4795-86e9-5479c88ef0ec","Name":"AE modular case 1-Row 16x1 STANDARD","Rows":1,"Units":16,"Price":26,"CablePrice":13,"Content":[{"ID":"c752978e-a4fe-4042-8e5d-43959528a7bb","Units":16,"Modules":[{"ID":"3d72813d-8b24-47d2-bff4-1d9eebefb848","ModuleID":42,"Name":"MASTER v4","Units":2,"Image":"images/modules/masterv4.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/MASTER","Categories":["IO"],"IsBlank":false,"Price":49,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"f7011c8e-8867-4cc0-841b-046efaee038e","ModuleID":2,"Name":"2OSC/d","Units":1,"Image":"images/modules/2oscd.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/2OSCD","Categories":["SOUND","CV"],"IsBlank":false,"Price":38,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"8431402e-44cf-4f3b-aca3-95c09518a100","ModuleID":3,"Name":"VCO","Units":1,"Image":"images/modules/vco.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/VCO","Categories":["SOUND","CV"],"IsBlank":false,"Price":32,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"591d986e-9563-4a8e-91b8-045f4cc9c4a8","ModuleID":38,"Name":"NOISE v2","Units":1,"Image":"images/modules/noisev2.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/NOISE","Categories":["SOUND","CV"],"IsBlank":false,"Price":20,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":true},{"ID":"f80d5280-278b-4313-ba5a-b2988472dea3","ModuleID":47,"Name":"2LFO","Units":1,"Image":"images/modules/2lfo.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/2LFO","Categories":["CV"],"IsBlank":false,"Price":32,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"f3b90014-c7c1-4600-ae02-11d2f105553d","ModuleID":10,"Name":"SVFILTER","Units":1,"Image":"images/modules/svfilter.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/SVFILTER","Categories":["FILTER"],"IsBlank":false,"Price":30,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":true},{"ID":"455e192b-0a23-4e6f-9b75-b37845d50503","ModuleID":7,"Name":"2ENV","Units":1,"Image":"images/modules/2env.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/2ENV","Categories":["CV"],"IsBlank":false,"Price":36,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"98218fdb-83d8-4473-92d3-1947c6abd951","ModuleID":12,"Name":"2VCA","Units":1,"Image":"images/modules/2vca.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/2VCA","Categories":["UTILITY"],"IsBlank":false,"Price":23,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"17e4e8eb-ef73-4519-b8e6-b133154c9349","ModuleID":14,"Name":"2ATT/CV","Units":1,"Image":"images/modules/2attcv.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/2ATTCV","Categories":["UTILITY"],"IsBlank":false,"Price":22,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":true},{"ID":"f0ef763e-cce0-46f6-9f1a-4dac9fd1a530","ModuleID":13,"Name":"MIXER 4-4","Units":1,"Image":"images/modules/mixer4x4.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/MIXER44","Categories":["UTILITY"],"IsBlank":false,"Price":21,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":true},{"ID":"3d89749e-8874-4940-8d9b-15eeecea2406","ModuleID":16,"Name":"SAMPLE & HOLD","Units":1,"Image":"images/modules/sh.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/SAMPLEHOLD","Categories":["UTILITY","CV"],"IsBlank":false,"Price":22,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":true},{"ID":"60aeddbe-e10c-4ce2-81d9-d98a4883f7da","ModuleID":23,"Name":"DELAY (LOFI)","Units":1,"Image":"images/modules/delay.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/DELAY","Categories":["EFFECT"],"IsBlank":false,"Price":29,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":true},{"ID":"040c9fde-dc9f-4de6-a9ed-f810b13a5c2f","ModuleID":0,"Name":"BLANK","Units":1,"Image":"images/modules/blank.png","Discontinued":false,"IsBlank":true,"Draggable":false,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"30c52e1a-2c31-4097-b5c7-3b46298193f2","ModuleID":0,"Name":"BLANK","Units":1,"Image":"images/modules/blank.png","Discontinued":false,"IsBlank":true,"Draggable":false,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"035a1f2c-e71b-43e0-9da3-cf0175561c8a","ModuleID":0,"Name":"BLANK","Units":1,"Image":"images/modules/blank.png","Discontinued":false,"IsBlank":true,"Draggable":false,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false}]}],"Order":0}],"ModuleReserve":{"IsDraggedOver":false,"Modules":[]},"SerializationVersion":1,"PriceHasErrors":false,"TotalPrice":393}',
  "starterRack2v2": '{"Name":" AE modular STARTER RACK 2","Cases":[{"ID":"47f85db6-4666-4f45-9be1-05b7e5af57b8","Name":"AE modular case 2-Row 16x2 STANDARD","Rows":2,"Units":16,"Price":35,"CablePrice":26,"Content":[{"ID":"699bcc55-d1f1-4c63-ab9b-9648d7999175","Units":16,"Modules":[{"ID":"a2f90467-e982-4631-b7cf-3fb59cd6404c","ModuleID":42,"Name":"MASTER v4","Units":2,"Image":"images/modules/masterv4.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/MASTER","Categories":["IO"],"IsBlank":false,"Price":49,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"55e0d1ac-d9ee-46a9-90e8-5d190b59d4b5","ModuleID":2,"Name":"2OSC/d","Units":1,"Image":"images/modules/2oscd.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/2OSCD","Categories":["SOUND","CV"],"IsBlank":false,"Price":38,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"6ffb036f-21f1-4886-9c76-9715b48241d4","ModuleID":"a677865e-970a-48a1-a8ba-6a7aacb03daf","Name":"BLANK","Units":1,"Image":"images/modules/blank.png","Discontinued":false,"IsBlank":true,"Draggable":false,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"24fd5d49-6067-49f5-90ce-a5001b32629a","ModuleID":3,"Name":"VCO","Units":1,"Image":"images/modules/vco.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/VCO","Categories":["SOUND","CV"],"IsBlank":false,"Price":32,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"fd9f06d3-0012-4603-8dc8-0d39c00445b2","ModuleID":38,"Name":"NOISE v2","Units":1,"Image":"images/modules/noisev2.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/NOISE","Categories":["SOUND","CV"],"IsBlank":false,"Price":20,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":true},{"ID":"2a5ceeeb-d93c-4b08-8070-a6782e82e8ca","ModuleID":47,"Name":"2LFO","Units":1,"Image":"images/modules/2lfo.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/2LFO","Categories":["CV"],"IsBlank":false,"Price":32,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"ecc123e6-1e47-4b10-a4de-4d357629db60","ModuleID":0,"Name":"BLANK","Units":1,"Image":"images/modules/blank.png","Discontinued":false,"IsBlank":true,"Draggable":false,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"ae184f23-be82-4332-816b-14533f96d142","ModuleID":8,"Name":"FILTER (WASP TYPE)","Units":1,"Image":"images/modules/wasp.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/FILTERWASP","Categories":["FILTER"],"IsBlank":false,"Price":31,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":true},{"ID":"04febfe3-70a0-4cdb-8f9d-4ac1e4df823e","ModuleID":10,"Name":"SVFILTER","Units":1,"Image":"images/modules/svfilter.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/SVFILTER","Categories":["FILTER"],"IsBlank":false,"Price":30,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":true},{"ID":"282b99c6-c064-40fe-b7b3-05f3aa19eef9","ModuleID":"2d4798dc-66f2-4525-85c0-6f3555dee869","Name":"BLANK","Units":1,"Image":"images/modules/blank.png","Discontinued":false,"IsBlank":true,"Draggable":false,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"855198d2-27f7-477e-a3f6-c08f282d0340","ModuleID":7,"Name":"2ENV","Units":1,"Image":"images/modules/2env.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/2ENV","Categories":["CV"],"IsBlank":false,"Price":36,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"c0504a65-89a7-4803-ab01-6ce7547a988a","ModuleID":12,"Name":"2VCA","Units":1,"Image":"images/modules/2vca.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/2VCA","Categories":["UTILITY"],"IsBlank":false,"Price":23,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"9034b314-b2c7-479f-8864-6c5930a9ae6c","ModuleID":"28ee2fd9-7158-4562-8cd1-ab8565d84dc6","Name":"BLANK","Units":1,"Image":"images/modules/blank.png","Discontinued":false,"IsBlank":true,"Draggable":false,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"c3082b78-4b21-4b10-be55-0d0d677c8d85","ModuleID":"d785ef08-dea6-4b18-a9ea-5ebd01345476","Name":"BLANK","Units":1,"Image":"images/modules/blank.png","Discontinued":false,"IsBlank":true,"Draggable":false,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"fa534505-45ec-4b99-b52e-ef746d550d14","ModuleID":"b145d6c3-e392-4d0b-98d4-1547abe26919","Name":"BLANK","Units":1,"Image":"images/modules/blank.png","Discontinued":false,"IsBlank":true,"Draggable":false,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false}]},{"ID":"1dae964d-5064-4958-beff-d561428e563d","Units":16,"Modules":[{"ID":"bef41a7e-1bdb-4a48-96c4-0dba82e64f13","ModuleID":19,"Name":"BEAT DIVIDER","Units":1,"Image":"images/modules/beatdivider.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/BEATDIVIDER","Categories":["TRIG"],"IsBlank":false,"Price":21,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":true},{"ID":"ab3f7a28-c091-478f-9185-a8f067de3664","ModuleID":58,"Name":"SEQ8","Units":2,"Image":"images/modules/seq8.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/SEQ8","Categories":["CV"],"IsBlank":false,"Price":45,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"03e69050-8d92-41d2-9962-2ce01fd250ef","ModuleID":"8a8b737d-0d7b-48ff-8505-297b21f2ff80","Name":"BLANK","Units":1,"Image":"images/modules/blank.png","Discontinued":false,"IsBlank":true,"Draggable":false,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"366385fa-5b80-441a-af1c-fe7e4e53ae3e","ModuleID":"a7d30650-85d4-41f2-ae05-736830835bfa","Name":"BLANK","Units":1,"Image":"images/modules/blank.png","Discontinued":false,"IsBlank":true,"Draggable":false,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"c320c3cd-5a82-4c55-a3be-b47471eb1cd5","ModuleID":"977e3997-6c39-4a33-98d3-bde9dc5afca2","Name":"BLANK","Units":1,"Image":"images/modules/blank.png","Discontinued":false,"IsBlank":true,"Draggable":false,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"53e3f5ba-59d0-47b3-a761-5c5c3dd329fc","ModuleID":"5b866886-97f9-4028-9c97-9980cfee2541","Name":"BLANK","Units":1,"Image":"images/modules/blank.png","Discontinued":false,"IsBlank":true,"Draggable":false,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"03147de1-d7be-4e4b-b821-b8741384ef48","ModuleID":13,"Name":"MIXER 4-4","Units":1,"Image":"images/modules/mixer4x4.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/MIXER44","Categories":["UTILITY"],"IsBlank":false,"Price":21,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":true},{"ID":"c2265c1d-8210-4c37-b021-c267b2c905c5","ModuleID":17,"Name":"LOGIC","Units":1,"Image":"images/modules/logic.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/LOGIC","Categories":["TRIG"],"IsBlank":false,"Price":19,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"3540e505-8fe4-493e-9935-711fde2475fa","ModuleID":16,"Name":"SAMPLE & HOLD","Units":1,"Image":"images/modules/sh.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/SAMPLEHOLD","Categories":["UTILITY","CV"],"IsBlank":false,"Price":22,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":true},{"ID":"6129f54c-151e-447c-b71d-ecfca07b2da0","ModuleID":14,"Name":"2ATT/CV","Units":1,"Image":"images/modules/2attcv.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/2ATTCV","Categories":["UTILITY"],"IsBlank":false,"Price":22,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":true},{"ID":"b3f46b34-0979-424e-9834-638d5e55f623","ModuleID":23,"Name":"DELAY (LOFI)","Units":1,"Image":"images/modules/delay.png","Discontinued":false,"WikiLink":"https:////wiki.aemodular.com/pmwiki.php/AeManual/DELAY","Categories":["EFFECT"],"IsBlank":false,"Price":29,"Draggable":true,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":true},{"ID":"b41714a1-7731-4dec-b688-99b2ee66d957","ModuleID":"324521d4-c88a-4484-8f28-634c60675b46","Name":"BLANK","Units":1,"Image":"images/modules/blank.png","Discontinued":false,"IsBlank":true,"Draggable":false,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"06603a85-58c7-464f-a9a5-f92f9d2a4550","ModuleID":"0045acee-6dff-45f0-ab2a-ca3cbd42bda1","Name":"BLANK","Units":1,"Image":"images/modules/blank.png","Discontinued":false,"IsBlank":true,"Draggable":false,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"350b559b-a0a7-4ae1-9b51-23094acef4b0","ModuleID":"25b0ec50-2deb-4f84-83e4-d78e035e5670","Name":"BLANK","Units":1,"Image":"images/modules/blank.png","Discontinued":false,"IsBlank":true,"Draggable":false,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false},{"ID":"16498e71-4873-49c3-b92c-ba8ae63b26a5","ModuleID":"a6f62a10-d5cd-4b5c-93db-91e2e90d106c","Name":"BLANK","Units":1,"Image":"images/modules/blank.png","Discontinued":false,"IsBlank":true,"Draggable":false,"IsDragging":false,"IsDraggedOver":false,"DiyTextRotate":false}]}],"Order":0}],"ModuleReserve":{"IsDraggedOver":false,"Modules":[]},"SerializationVersion":1,"PriceHasErrors":false,"TotalPrice":531}'
};
exports.PresetSystems = PresetSystems;
},{}],"javascript/modules/moduleMoverAlgorithm.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModuleMoverAlgorithm = ModuleMoverAlgorithm;

var _knockout = _interopRequireDefault(require("knockout"));

var _moduleMover = require("./moduleMover");

var _utilities = require("./utilities");

var _modules = require("../data/modules");

var _module = require("./module");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ModuleMoverAlgorithm(rack, moveArguments) {
  var self = this;
  self.Rack = rack;
  self.MoveArguments = moveArguments;
  self.ModulesData = _modules.Modules;
  self.SrcRow = null;
  self.SrcIndex = null;
  self.DestRow = null;
  self.DestIndex = null;
  self.Module = null;

  self.run = function () {
    if (self.MoveArguments.From.Place === _moduleMover.Places.RACK) {
      moveFromRack();
    } else if (self.MoveArguments.From.Place === _moduleMover.Places.RESERVE) {
      moveFromReserve();
    } else if (self.MoveArguments.From.Place === _moduleMover.Places.FINDER) {
      moveFromFinder();
    }
  }; // General "Move From" functions


  function moveFromRack() {
    self.SrcRow = self.Rack.GetRowById(self.MoveArguments.From.RowId);
    self.SrcIndex = self.MoveArguments.From.Index;
    self.Module = self.SrcRow.Modules()[self.SrcIndex];

    if (self.MoveArguments.To.Place === _moduleMover.Places.RACK) {
      self.DestRow = self.Rack.GetRowById(self.MoveArguments.To.RowId);
      self.DestIndex = self.MoveArguments.To.Index;
      moveFromRackToRack();
    } else if (self.MoveArguments.To.Place === _moduleMover.Places.RESERVE) {
      moveFromRackToReserve();
    }
  }

  function moveFromReserve() {
    self.Module = self.Rack.ModuleReserve().GetModuleById(self.MoveArguments.From.ModuleIdInRack);

    if (self.MoveArguments.To.Place === _moduleMover.Places.RACK) {
      self.DestRow = self.Rack.GetRowById(self.MoveArguments.To.RowId);
      self.DestIndex = self.MoveArguments.To.Index;
      moveFromReserveToRack();
    } else if (self.MoveArguments.To.Place === _moduleMover.Places.RESERVE) {
      self.Rack;
    }
  }

  function moveFromFinder() {
    var moduleData = _modules.Modules.find(function (module) {
      return module.ModuleID === self.MoveArguments.From.ModuleId;
    });

    if (moduleData) {
      self.Module = new _module.Module(moduleData);

      if (self.MoveArguments.To.Place === _moduleMover.Places.RACK) {
        self.DestRow = self.Rack.GetRowById(self.MoveArguments.To.RowId);
        self.DestIndex = self.MoveArguments.To.Index;
        moveFromFinderToRack();
      } else if (self.MoveArguments.To.Place === _moduleMover.Places.RESERVE) {
        moveFromFinderToReserve();
      }
    }
  } // Move inside Rack


  function moveFromRackToRack() {
    if (!self.DestRow.ModuleFits(self.Module, self.DestIndex)) {
      return;
    }

    if (self.MoveArguments.From.RowId === self.MoveArguments.To.RowId) {
      moveModuleToSameRow();
    } else {
      moveModuleToDifferentRow();
    }
  }

  function moveModuleToSameRow() {
    if (self.SrcIndex < self.DestIndex) {
      moveModuleToSameRowToTheRight();
    } else {
      moveModuleToSameRowToTheLeft();
    }
  }

  function moveModuleToSameRowToTheRight() {
    var modulesToInsertInDestination = [self.Module];
    var modulesToInsertInSource = [];
    var modulesToInsertInReserve = [];
    var modulesToRemoveFromDestination = [];
    var unitsDisplacedAtDestination = 0;
    var unitsInsertedAtSource = 0;

    for (var i = self.DestIndex; i < self.DestRow.Modules().length; i++) {
      var m = self.DestRow.Modules()[i];
      modulesToRemoveFromDestination.push(m);
      unitsDisplacedAtDestination += m.Units;

      if (unitsDisplacedAtDestination <= self.Module.Units) {
        modulesToInsertInSource.push(m);
        unitsInsertedAtSource += m.Units;
      }

      if (unitsDisplacedAtDestination == self.Module.Units) {
        break;
      } else if (unitsDisplacedAtDestination > self.Module.Units) {
        modulesToInsertInReserve.push(m);
        var extraUnitsInDest = unitsDisplacedAtDestination - self.Module.Units;
        modulesToInsertInDestination = modulesToInsertInDestination.concat(_utilities.AEMUtilities.GetBlankModules(extraUnitsInDest));
        break;
      }
    }

    if (self.Module.Units > unitsInsertedAtSource) {
      modulesToInsertInSource = modulesToInsertInSource.concat(_utilities.AEMUtilities.GetBlankModules(self.Module.Units - unitsInsertedAtSource));
    }

    self.DestRow.DeleteModulesAt(self.DestIndex, modulesToRemoveFromDestination.length);
    self.DestRow.InsertModulesAt(self.DestIndex, modulesToInsertInDestination);
    self.DestRow.DeleteModulesAt(self.SrcIndex, 1);
    self.DestRow.InsertModulesAt(self.SrcIndex, modulesToInsertInSource);

    for (var _i = 0, _modulesToInsertInRes = modulesToInsertInReserve; _i < _modulesToInsertInRes.length; _i++) {
      var _m = _modulesToInsertInRes[_i];

      if (!_m.IsBlank) {
        self.Rack.ModuleReserve().AddModule(_m);
      }
    }
  }

  function moveModuleToSameRowToTheLeft() {
    var modulesToInsertInDestination = [self.Module];
    var modulesToInsertInSource = [];
    var modulesToInsertInReserve = [];
    var modulesToRemoveFromDestination = [];
    var unitsDisplacedAtDestination = 0;
    var unitsInsertedAtSource = 0;

    for (var i = self.DestIndex; i < self.SrcIndex; i++) {
      var m = self.DestRow.Modules()[i];
      modulesToRemoveFromDestination.push(m);
      unitsDisplacedAtDestination += m.Units;

      if (unitsDisplacedAtDestination <= self.Module.Units) {
        modulesToInsertInSource.push(m);
        unitsInsertedAtSource += m.Units;
      }

      if (unitsDisplacedAtDestination == self.Module.Units) {
        break;
      } else if (unitsDisplacedAtDestination > self.Module.Units) {
        modulesToInsertInReserve.push(m);
        var extraUnitsInDest = unitsDisplacedAtDestination - self.Module.Units;
        modulesToInsertInDestination = modulesToInsertInDestination.concat(_utilities.AEMUtilities.GetBlankModules(extraUnitsInDest));
        break;
      }
    }

    var overlaps = unitsDisplacedAtDestination < self.Module.Units;

    if (!overlaps && self.Module.Units > unitsInsertedAtSource) {
      modulesToInsertInSource = modulesToInsertInSource.concat(_utilities.AEMUtilities.GetBlankModules(self.Module.Units - unitsInsertedAtSource));
    }

    self.DestRow.DeleteModulesAt(self.SrcIndex, 1);
    self.DestRow.InsertModulesAt(self.SrcIndex, modulesToInsertInSource);
    self.DestRow.DeleteModulesAt(self.DestIndex, modulesToRemoveFromDestination.length);
    self.DestRow.InsertModulesAt(self.DestIndex, modulesToInsertInDestination);

    for (var _i2 = 0, _modulesToInsertInRes2 = modulesToInsertInReserve; _i2 < _modulesToInsertInRes2.length; _i2++) {
      var _m2 = _modulesToInsertInRes2[_i2];

      if (!_m2.IsBlank) {
        self.Rack.ModuleReserve().AddModule(_m2);
      }
    }
  }

  function moveModuleToDifferentRow() {
    var modulesToInsertInDestination = [self.Module];
    var modulesToInsertInSource = [];
    var modulesToInsertInReserve = [];
    var modulesToRemoveFromDestination = [];
    var unitsDisplacedAtDestination = 0;
    var unitsInsertedAtSource = 0;

    for (var i = self.DestIndex; i < self.DestRow.Modules().length; i++) {
      var m = self.DestRow.Modules()[i];
      modulesToRemoveFromDestination.push(m);
      unitsDisplacedAtDestination += m.Units;

      if (unitsDisplacedAtDestination <= self.Module.Units) {
        modulesToInsertInSource.push(m);
        unitsInsertedAtSource += m.Units;
      }

      if (unitsDisplacedAtDestination == self.Module.Units) {
        break;
      } else if (unitsDisplacedAtDestination > self.Module.Units) {
        modulesToInsertInReserve.push(m);
        var extraUnitsInDest = unitsDisplacedAtDestination - self.Module.Units;
        modulesToInsertInDestination = modulesToInsertInDestination.concat(_utilities.AEMUtilities.GetBlankModules(extraUnitsInDest));
        break;
      }
    }

    if (self.Module.Units > unitsInsertedAtSource) {
      modulesToInsertInSource = modulesToInsertInSource.concat(_utilities.AEMUtilities.GetBlankModules(self.Module.Units - unitsInsertedAtSource));
    }

    self.DestRow.DeleteModulesAt(self.DestIndex, modulesToRemoveFromDestination.length);
    self.DestRow.InsertModulesAt(self.DestIndex, modulesToInsertInDestination);
    self.SrcRow.DeleteModulesAt(self.SrcIndex, 1);
    self.SrcRow.InsertModulesAt(self.SrcIndex, modulesToInsertInSource);

    for (var _i3 = 0, _modulesToInsertInRes3 = modulesToInsertInReserve; _i3 < _modulesToInsertInRes3.length; _i3++) {
      var _m3 = _modulesToInsertInRes3[_i3];

      if (!_m3.IsBlank) {
        self.Rack.ModuleReserve().AddModule(_m3);
      }
    }
  } // Move to Rack from outside


  function moveToRackFromElsewhere() {
    if (!self.DestRow.ModuleFits(self.Module, self.DestIndex)) return false;
    var modulesToInsertInDestRow = [self.Module];
    var modulesToRemoveFromDestRow = [];
    var unitsDisplacedAtDestination = 0;

    for (var i = self.DestIndex; i < self.DestRow.Modules().length; i++) {
      var m = self.DestRow.Modules()[i];
      modulesToRemoveFromDestRow.push(m);
      unitsDisplacedAtDestination += m.Units;

      if (unitsDisplacedAtDestination == self.Module.Units) {
        break;
      } else if (unitsDisplacedAtDestination > self.Module.Units) {
        var extraUnits = unitsDisplacedAtDestination - self.Module.Units;
        modulesToInsertInDestRow = modulesToInsertInDestRow.concat(_utilities.AEMUtilities.GetBlankModules(extraUnits));
        break;
      }
    }

    self.DestRow.DeleteModulesAt(self.DestIndex, modulesToRemoveFromDestRow.length);
    self.DestRow.InsertModulesAt(self.DestIndex, modulesToInsertInDestRow);

    for (var _i4 = 0, _modulesToRemoveFromD = modulesToRemoveFromDestRow; _i4 < _modulesToRemoveFromD.length; _i4++) {
      var _m4 = _modulesToRemoveFromD[_i4];

      if (!_m4.IsBlank) {
        self.Rack.ModuleReserve().AddModule(_m4);
      }
    }

    return true;
  }

  function moveFromFinderToRack() {
    moveToRackFromElsewhere();
  }

  function moveFromReserveToRack() {
    if (moveToRackFromElsewhere()) {
      self.Rack.ModuleReserve().DeleteModule(self.Module);
    }
  } // Move to Reserve


  function moveFromRackToReserve() {
    self.SrcRow.DeleteModulesAt(self.SrcIndex, 1);
    self.SrcRow.InsertModulesAt(self.SrcIndex, _utilities.AEMUtilities.GetBlankModules(self.Module.Units));
    self.Rack.ModuleReserve().AddModule(self.Module);
  }

  function moveFromFinderToReserve() {
    self.Rack.ModuleReserve().AddModule(self.Module);
  }
}
},{"knockout":"node_modules/knockout/build/output/knockout-latest.js","./moduleMover":"javascript/modules/moduleMover.mjs","./utilities":"javascript/modules/utilities.mjs","../data/modules":"javascript/data/modules.mjs","./module":"javascript/modules/module.mjs"}],"javascript/modules/moduleMoverOneThirdAlgorithm.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModuleMoverOneThirdAlgorithm = ModuleMoverOneThirdAlgorithm;

var _knockout = _interopRequireDefault(require("knockout"));

var _moduleMover = require("./moduleMover");

var _utilities = require("./utilities");

var _modules = require("../data/modules");

var _module = require("./module");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ModuleMoverOneThirdAlgorithm(rack, moveArguments) {
  var self = this;
  self.ModulesData = _modules.Modules;
  self.Rack = rack;
  self.MoveArguments = moveArguments;
  self.SrcRow = null;
  self.SrcIndex = null;
  self.SrcModuleContainerIndex = null;
  self.SrcContainerModule = null;
  self.DestRow = null;
  self.DestIndex = null;
  self.DestModuleContainerIndex = null;
  self.DestContainerModule = null;
  self.Module = null;

  self.run = function () {
    if (self.MoveArguments.From.Place === _moduleMover.Places.RACK) {
      moveFromRack();
    } else if (self.MoveArguments.From.Place === _moduleMover.Places.RESERVE) {
      moveFromReserve();
    } else if (self.MoveArguments.From.Place === _moduleMover.Places.FINDER) {
      moveFromFinder();
    }
  }; // General "Move From" functions


  function moveFromRack() {
    self.SrcRow = self.Rack.GetRowById(self.MoveArguments.From.RowId);
    self.SrcIndex = self.MoveArguments.From.Index;
    self.SrcModuleContainerIndex = self.MoveArguments.From.ModuleContainerIndex;
    var srcContainerModule = self.SrcRow.Modules()[self.SrcIndex];

    if (!srcContainerModule.IsOneThirdContainer) {
      return;
    }

    self.SrcContainerModule = srcContainerModule;
    self.Module = self.SrcContainerModule.ContainedModules()[self.SrcModuleContainerIndex];

    if (self.MoveArguments.To.Place === _moduleMover.Places.RACK) {
      self.DestRow = self.Rack.GetRowById(self.MoveArguments.To.RowId);
      self.DestIndex = self.MoveArguments.To.Index;
      self.DestModuleContainerIndex = self.MoveArguments.To.ModuleContainerIndex;
      moveFromRackToRack();
    } else if (self.MoveArguments.To.Place === _moduleMover.Places.RESERVE) {
      moveFromRackToReserve();
    }
  }

  function moveFromReserve() {
    self.Module = self.Rack.ModuleReserve().GetModuleById(self.MoveArguments.From.ModuleIdInRack);

    if (self.MoveArguments.To.Place === _moduleMover.Places.RACK) {
      self.DestRow = self.Rack.GetRowById(self.MoveArguments.To.RowId);
      self.DestIndex = self.MoveArguments.To.Index;
      self.DestModuleContainerIndex = self.MoveArguments.To.ModuleContainerIndex;
      moveFromReserveToRack();
    } else if (self.MoveArguments.To.Place === _moduleMover.Places.RESERVE) {
      self.Rack;
    }
  }

  function moveFromFinder() {
    var moduleData = self.ModulesData.find(function (module) {
      return module.ModuleID === self.MoveArguments.From.ModuleId;
    });

    if (moduleData) {
      self.Module = new _module.Module(moduleData);

      if (self.MoveArguments.To.Place === _moduleMover.Places.RACK) {
        self.DestRow = self.Rack.GetRowById(self.MoveArguments.To.RowId);
        self.DestIndex = self.MoveArguments.To.Index;
        self.DestModuleContainerIndex = self.MoveArguments.To.ModuleContainerIndex;
        moveFromFinderToRack();
      } else if (self.MoveArguments.To.Place === _moduleMover.Places.RESERVE) {
        moveFromFinderToReserve();
      }
    }
  } // Move inside Rack


  function moveFromRackToRack() {
    var destContainerModule = self.DestRow.Modules()[self.DestIndex];

    if (!destContainerModule.IsOneThirdContainer) {
      return;
    }

    var destModule = destContainerModule.ContainedModules()[self.DestModuleContainerIndex];

    if (destModule === null) {
      self.SrcContainerModule.ContainedModules()[self.SrcModuleContainerIndex] = null;
    } else {
      self.SrcContainerModule.ContainedModules()[self.SrcModuleContainerIndex] = destModule;
    }

    destContainerModule.ContainedModules()[self.DestModuleContainerIndex] = self.Module;
  } // Move to Rack from outside


  function moveToRackFromElsewhere() {
    var containerModule = self.DestRow.Modules()[self.DestIndex];

    if (!containerModule.IsOneThirdContainer) {
      return false;
    }

    if (containerModule.ContainedModules()[self.DestModuleContainerIndex]) {
      self.Rack.ModuleReserve().AddModule(containerModule.ContainedModules()[self.DestModuleContainerIndex]);
    }

    containerModule.ContainedModules.splice(self.DestModuleContainerIndex, 1, self.Module);
    return true;
  }

  function moveFromFinderToRack() {
    moveToRackFromElsewhere();
  }

  function moveFromReserveToRack() {
    if (moveToRackFromElsewhere()) {
      self.Rack.ModuleReserve().DeleteModule(self.Module);
    }
  } // Move to Reserve


  function moveFromRackToReserve() {
    self.SrcContainerModule.ContainedModules()[self.SrcModuleContainerIndex] = null;
    self.Rack.ModuleReserve().AddModule(self.Module);
  }

  function moveFromFinderToReserve() {
    self.Rack.ModuleReserve().AddModule(self.Module);
  }
}
},{"knockout":"node_modules/knockout/build/output/knockout-latest.js","./moduleMover":"javascript/modules/moduleMover.mjs","./utilities":"javascript/modules/utilities.mjs","../data/modules":"javascript/data/modules.mjs","./module":"javascript/modules/module.mjs"}],"javascript/modules/moduleMover.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModuleMover = ModuleMover;
exports.Places = void 0;

var _knockout = _interopRequireDefault(require("knockout"));

var _modules = require("../data/modules");

var _moduleMoverAlgorithm = require("./moduleMoverAlgorithm");

var _moduleMoverOneThirdAlgorithm = require("./moduleMoverOneThirdAlgorithm");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Places = {
  RACK: 'rack',
  RESERVE: 'reserve',
  FINDER: 'finder'
};
exports.Places = Places;

function ModuleMover(rack) {
  var self = this;
  self.Rack = rack;
  self.MoveArguments = {
    IsOneThirdMove: false
  };
  self.ModulesData = _modules.Modules;

  self.fromReserve = function (moduleIdInRack) {
    self.MoveArguments.From = {
      Place: Places.RESERVE,
      ModuleIdInRack: moduleIdInRack
    };
    return self;
  };

  self.fromRack = function (srcRowId, srcIndex, moduleContainerIndex) {
    if (arguments.length == 2) {
      return self.fromRackFullHeight(srcRowId, srcIndex);
    } else if (arguments.length == 3) {
      return self.fromRackOneThird(srcRowId, srcIndex, moduleContainerIndex);
    }
  };

  self.fromRackFullHeight = function (srcRowId, srcIndex) {
    self.MoveArguments.From = {
      Place: Places.RACK,
      RowId: srcRowId,
      Index: srcIndex
    };
    return self;
  };

  self.fromRackOneThird = function (srcRowId, srcIndex, moduleContainerIndex) {
    self.MoveArguments.IsOneThirdMove = true;
    self.MoveArguments.From = {
      Place: Places.RACK,
      RowId: srcRowId,
      Index: srcIndex,
      ModuleContainerIndex: moduleContainerIndex
    };
    return self;
  };

  self.fromFinder = function (moduleId) {
    self.MoveArguments.From = {
      Place: Places.FINDER,
      ModuleId: moduleId
    };
    return self;
  };

  self.toReserve = function () {
    self.MoveArguments.To = {
      Place: Places.RESERVE
    };
    return self;
  };

  self.toRack = function (destRowId, destIndex, moduleContainerIndex) {
    if (arguments.length == 2) {
      return self.toRackFullHeight(destRowId, destIndex);
    } else if (arguments.length == 3) {
      return self.toRackOneThird(destRowId, destIndex, moduleContainerIndex);
    }
  };

  self.toRackFullHeight = function (destRowId, destIndex) {
    self.MoveArguments.To = {
      Place: Places.RACK,
      RowId: destRowId,
      Index: destIndex
    };
    return self;
  };

  self.toRackOneThird = function (destRowId, destIndex, moduleContainerIndex) {
    self.MoveArguments.IsOneThirdMove = true;
    self.MoveArguments.To = {
      Place: Places.RACK,
      RowId: destRowId,
      Index: destIndex,
      ModuleContainerIndex: moduleContainerIndex
    };
    return self;
  };

  self.doMove = function () {
    var moduleMoverAlgorithm;

    if (self.MoveArguments.IsOneThirdMove) {
      moduleMoverAlgorithm = new _moduleMoverOneThirdAlgorithm.ModuleMoverOneThirdAlgorithm(self.Rack, self.MoveArguments);
      moduleMoverAlgorithm.ModulesData = self.ModulesData;
    } else {
      moduleMoverAlgorithm = new _moduleMoverAlgorithm.ModuleMoverAlgorithm(self.Rack, self.MoveArguments);
    }

    self.Rack = moduleMoverAlgorithm.run();
  };
}
},{"knockout":"node_modules/knockout/build/output/knockout-latest.js","../data/modules":"javascript/data/modules.mjs","./moduleMoverAlgorithm":"javascript/modules/moduleMoverAlgorithm.mjs","./moduleMoverOneThirdAlgorithm":"javascript/modules/moduleMoverOneThirdAlgorithm.mjs"}],"node_modules/toggle-selection/index.js":[function(require,module,exports) {

module.exports = function () {
  var selection = document.getSelection();
  if (!selection.rangeCount) {
    return function () {};
  }
  var active = document.activeElement;

  var ranges = [];
  for (var i = 0; i < selection.rangeCount; i++) {
    ranges.push(selection.getRangeAt(i));
  }

  switch (active.tagName.toUpperCase()) { // .toUpperCase handles XHTML
    case 'INPUT':
    case 'TEXTAREA':
      active.blur();
      break;

    default:
      active = null;
      break;
  }

  selection.removeAllRanges();
  return function () {
    selection.type === 'Caret' &&
    selection.removeAllRanges();

    if (!selection.rangeCount) {
      ranges.forEach(function(range) {
        selection.addRange(range);
      });
    }

    active &&
    active.focus();
  };
};

},{}],"node_modules/copy-to-clipboard/index.js":[function(require,module,exports) {
"use strict";

var deselectCurrent = require("toggle-selection");

var clipboardToIE11Formatting = {
  "text/plain": "Text",
  "text/html": "Url",
  "default": "Text"
}

var defaultMessage = "Copy to clipboard: #{key}, Enter";

function format(message) {
  var copyKey = (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C";
  return message.replace(/#{\s*key\s*}/g, copyKey);
}

function copy(text, options) {
  var debug,
    message,
    reselectPrevious,
    range,
    selection,
    mark,
    success = false;
  if (!options) {
    options = {};
  }
  debug = options.debug || false;
  try {
    reselectPrevious = deselectCurrent();

    range = document.createRange();
    selection = document.getSelection();

    mark = document.createElement("span");
    mark.textContent = text;
    // reset user styles for span element
    mark.style.all = "unset";
    // prevents scrolling to the end of the page
    mark.style.position = "fixed";
    mark.style.top = 0;
    mark.style.clip = "rect(0, 0, 0, 0)";
    // used to preserve spaces and line breaks
    mark.style.whiteSpace = "pre";
    // do not inherit user-select (it may be `none`)
    mark.style.webkitUserSelect = "text";
    mark.style.MozUserSelect = "text";
    mark.style.msUserSelect = "text";
    mark.style.userSelect = "text";
    mark.addEventListener("copy", function(e) {
      e.stopPropagation();
      if (options.format) {
        e.preventDefault();
        if (typeof e.clipboardData === "undefined") { // IE 11
          debug && console.warn("unable to use e.clipboardData");
          debug && console.warn("trying IE specific stuff");
          window.clipboardData.clearData();
          var format = clipboardToIE11Formatting[options.format] || clipboardToIE11Formatting["default"]
          window.clipboardData.setData(format, text);
        } else { // all other browsers
          e.clipboardData.clearData();
          e.clipboardData.setData(options.format, text);
        }
      }
      if (options.onCopy) {
        e.preventDefault();
        options.onCopy(e.clipboardData);
      }
    });

    document.body.appendChild(mark);

    range.selectNodeContents(mark);
    selection.addRange(range);

    var successful = document.execCommand("copy");
    if (!successful) {
      throw new Error("copy command was unsuccessful");
    }
    success = true;
  } catch (err) {
    debug && console.error("unable to copy using execCommand: ", err);
    debug && console.warn("trying IE specific stuff");
    try {
      window.clipboardData.setData(options.format || "text", text);
      options.onCopy && options.onCopy(window.clipboardData);
      success = true;
    } catch (err) {
      debug && console.error("unable to copy using clipboardData: ", err);
      debug && console.error("falling back to prompt");
      message = format("message" in options ? options.message : defaultMessage);
      window.prompt(message, text);
    }
  } finally {
    if (selection) {
      if (typeof selection.removeRange == "function") {
        selection.removeRange(range);
      } else {
        selection.removeAllRanges();
      }
    }

    if (mark) {
      document.body.removeChild(mark);
    }
    reselectPrevious();
  }

  return success;
}

module.exports = copy;

},{"toggle-selection":"node_modules/toggle-selection/index.js"}],"javascript/modules/aemodularviewmodel.mjs":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AEModularViewModel = AEModularViewModel;

var _knockout = _interopRequireDefault(require("knockout"));

var _rack = require("./rack");

var _utilities = require("./utilities");

var _modules = require("../data/modules");

var _cases = require("../data/cases");

var _aemcase = require("../modules/aemcase");

var _systems = require("../data/systems");

var _module = require("./module");

var _moduleMover = require("./moduleMover");

var _copyToClipboard = _interopRequireDefault(require("copy-to-clipboard"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function AEModularViewModel() {
  var self = this; // Data

  self.cases = _knockout.default.observableArray(_cases.Cases);
  self.caseMaterials = [_aemcase.CaseMaterial.ACRYLIC_RED, _aemcase.CaseMaterial.BAMBOO, _aemcase.CaseMaterial.WALNUT, _aemcase.CaseMaterial.ACRYLIC_ORANGE, _aemcase.CaseMaterial.ACRYLIC_PINK, _aemcase.CaseMaterial.ACRYLIC_BLUE, _aemcase.CaseMaterial.ACRYLIC_NEONGREEN, _aemcase.CaseMaterial.ACRYLIC_DARKVIOLETSEMITRANSPARENT, _aemcase.CaseMaterial.ACRYLIC_NEONORANGESEMITRANSPARENT, _aemcase.CaseMaterial.ACRYLIC_VIOLETSEMITRANSPARENT, _aemcase.CaseMaterial.ACRYLIC_YELLOW, _aemcase.CaseMaterial.ACRYLIC_MATTEBLACK]; // Rack interface

  self.currentRack = _knockout.default.observable(new _rack.Rack());
  self.selectedCase = _knockout.default.observable();
  self.selectedModule = _knockout.default.observable();
  self.draggingModule = _knockout.default.observable();
  self.diyModuleUnits = _knockout.default.observable(1);
  self.diyModuleText = _knockout.default.observable("");
  self.UseCopyPaste = _knockout.default.observable(_utilities.AEMUtilities.IsIOS());
  self.SaveLoadText = _knockout.default.observable(""); // Module finder

  self.showDiscontinued = _knockout.default.observable(false);
  self.ModuleFinderFilter = _knockout.default.observable("NEW");
  self.FilteredModules = _knockout.default.computed(function () {
    var newData = _modules.Modules.filter(function (module) {
      return self.showDiscontinued() || !module.Discontinued;
    }).sort(function (a, b) {
      if (a.Name < b.Name) {
        return -1;
      }

      if (a.Name > b.Name) {
        return 1;
      }

      return 0;
    });

    var newList = [];
    newData.forEach(function (moduleData) {
      newList.push(new _module.Module(moduleData));
    });

    if (self.ModuleFinderFilter() === "ALL") {
      return newList;
    } else {
      return _knockout.default.utils.arrayFilter(newList, function (module) {
        return module.Categories.indexOf(self.ModuleFinderFilter()) !== -1;
      });
    }
  }); // Actions

  self.AddCaseToRack = function () {
    self.currentRack().AddCase(self.selectedCase());
  };

  self.AddModuleToReserve = function (module) {
    self.currentRack().ModuleReserve().AddModule(new _module.Module(module));
    $('#reserve-wrapper').collapse('show');
  };

  self.AddDIYModuleToReserve = function () {
    var module = _utilities.AEMUtilities.GetDIYModule(self.diyModuleUnits(), self.diyModuleText());

    self.currentRack().ModuleReserve().AddModule(module);
    $('#reserve-wrapper').collapse('show');
  }; // One third module placeholder Drag/Drop events


  self.OneThirdModulePlaceholderDragOver = function (module, event) {
    // prevent default to allow drop
    event.preventDefault();
    event.originalEvent.dataTransfer.dropEffect = 'move';
  };

  self.OneThirdModulePlaceholderDragEnter = function (module, event) {
    event.originalEvent.target.parentElement.style.opacity = "0.3";
  };

  self.OneThirdModulePlaceholderDragLeave = function (module, event) {
    event.originalEvent.target.parentElement.style.opacity = "0";
  };

  self.OneThirdModulePlaceholderDrop = function (module, event, parentRow, parentRowIndex, moduleContainerIndex) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    event.originalEvent.target.parentElement.style.opacity = "0"; //alert('parentRow : ' + parentRow.ID + ", parentRowIndex: " + parentRowIndex + ", moduleContainerIndex: " + moduleContainerIndex() );

    var droppedModule = self.draggingModule;
    var sourceData = JSON.parse(event.originalEvent.dataTransfer.getData("text"));
    var moduleMover = new _moduleMover.ModuleMover(self.currentRack());

    if (sourceData.source === _moduleMover.Places.RACK) {
      moduleMover.fromRack(sourceData.RowId, sourceData.index).toRack(parentRow.ID, parentRowIndex, moduleContainerIndex()).doMove();
    } else if (sourceData.source === _moduleMover.Places.RESERVE) {
      moduleMover.fromReserve(droppedModule.ID).toRack(parentRow.ID, parentRowIndex, moduleContainerIndex()).doMove();
    } else if (sourceData.source === _moduleMover.Places.FINDER) {
      moduleMover.fromFinder(droppedModule.ModuleID).toRack(parentRow.ID, parentRowIndex, moduleContainerIndex()).doMove();
    }
  }; // Other Drag & Drop events


  self.ModuleDragStart = function (module, event) {
    $('.module-actions').css('visibility', 'hidden');
    $('.bright-module-overlay').css('visibility', 'hidden');

    if (module.IsOneThird) {
      $('.one-third-container').css('visibility', 'visible');
    }

    self.draggingModule = module;
  };

  self.ModuleDragEnd = function (module, event) {
    self.DragDropEnded();
  };

  self.ModuleDragEnter = function (module, event, parentRow, index) {
    module.IsDraggedOver(parentRow.ModuleFits(self.draggingModule, index()));
  };

  self.MoveModuleToReserve = function (module, event, parentRow, index) {
    var moduleMover = new _moduleMover.ModuleMover(self.currentRack());
    moduleMover.fromRack(parentRow.ID, index()).toReserve().doMove();
    $('#reserve-wrapper').collapse('show');
  };

  self.DropModuleInReserve = function (reserve, event) {
    self.DragDropEnded();
    var droppedModule = self.draggingModule;
    var sourceData = JSON.parse(event.originalEvent.dataTransfer.getData("text"));
    droppedModule.IsDragging(false);
    self.currentRack().ModuleReserve().IsDraggedOver(false);

    try {
      var moduleMover = new _moduleMover.ModuleMover(self.currentRack());

      if (sourceData.source === _moduleMover.Places.RACK) {
        moduleMover.fromRack(sourceData.RowId, sourceData.index).toReserve().doMove();
      } else if (sourceData.source === _moduleMover.Places.FINDER) {
        moduleMover.fromFinder(droppedModule.ModuleID).toReserve().doMove();
      }
    } catch (exception) {
      alert("Couldn't move that module : " + exception.message);
    }
  };

  self.DropModuleInRack = function (targetModule, event, destRow, index) {
    self.DragDropEnded();
    var droppedModule = self.draggingModule;
    var destIndex = index();
    targetModule.IsDraggedOver(false);
    droppedModule.IsDragging(false);

    if (!destRow.ModuleFits(droppedModule, destIndex)) {
      return;
    }

    var sourceData = JSON.parse(event.originalEvent.dataTransfer.getData("text"));

    try {
      var moduleMover = new _moduleMover.ModuleMover(self.currentRack());

      if (sourceData.source === _moduleMover.Places.RACK) {
        moduleMover.fromRack(sourceData.RowId, sourceData.index).toRack(destRow.ID, destIndex).doMove();
      } else if (sourceData.source === _moduleMover.Places.RESERVE) {
        moduleMover.fromReserve(droppedModule.ID).toRack(destRow.ID, destIndex).doMove();
      } else if (sourceData.source === _moduleMover.Places.FINDER) {
        moduleMover.fromFinder(droppedModule.ModuleID).toRack(destRow.ID, destIndex).doMove();
      }
    } catch (exception) {
      alert("Couldn't move that module : " + exception.message);
    }
  };

  self.DragDropEnded = function () {
    $('.module-actions').css('visibility', '');
    $('.bright-module-overlay').css('visibility', '');
    $('.one-third-container').css('visibility', 'hidden');
  }; // Load/Save rack


  self.SaveRack = function () {
    var data = self.currentRack().SerializeToJson();

    _utilities.AEMUtilities.Download(data, self.currentRack().Name() + '.json', 'application/json');
  };

  self.LoadRack = function (file) {
    var reader = new FileReader(file);

    reader.onload = function (event) {
      var newRack = _rack.Rack.DeserializeFromJson(event.target.result);

      self.currentRack(newRack);
    };

    reader.readAsText(file);
  };

  self.LoadPreset = function (name) {
    var system = _rack.Rack.DeserializeFromJson(_systems.PresetSystems[name]);

    self.currentRack(system);
  };

  self.DisplayCopyPaste = function () {
    var data = self.currentRack().SerializeToJson();
    self.SaveLoadText(data);
  };

  self.CopyRackToClipBoard = function () {
    (0, _copyToClipboard.default)(self.SaveLoadText());
  };

  self.LoadRackFromText = function () {
    var newRack = _rack.Rack.DeserializeFromJson(self.SaveLoadText());

    self.currentRack(newRack);
  };
}

;
},{"knockout":"node_modules/knockout/build/output/knockout-latest.js","./rack":"javascript/modules/rack.mjs","./utilities":"javascript/modules/utilities.mjs","../data/modules":"javascript/data/modules.mjs","../data/cases":"javascript/data/cases.mjs","../modules/aemcase":"javascript/modules/aemcase.mjs","../data/systems":"javascript/data/systems.mjs","./module":"javascript/modules/module.mjs","./moduleMover":"javascript/modules/moduleMover.mjs","copy-to-clipboard":"node_modules/copy-to-clipboard/index.js"}],"javascript/scripts/app.js":[function(require,module,exports) {
"use strict";

var _knockout = _interopRequireDefault(require("knockout"));

var _aemodularviewmodel = require("../modules/aemodularviewmodel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

$(document).ready(function () {
  $().dndPageScroll();
  $('[data-toggle="tooltip"]').tooltip();
  var viewModel = new _aemodularviewmodel.AEModularViewModel();

  _knockout.default.applyBindings(viewModel);
});
},{"knockout":"node_modules/knockout/build/output/knockout-latest.js","../modules/aemodularviewmodel":"javascript/modules/aemodularviewmodel.mjs"}],"node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "40023" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel/src/builtins/hmr-runtime.js","javascript/scripts/app.js"], null)
//# sourceMappingURL=/app.cb581e13.js.map