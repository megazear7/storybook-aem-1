module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=8)}([function(t,e){t.exports=function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}},function(t,e,r){t.exports=r(9)},function(t,e){t.exports=require("react")},function(t,e){t.exports=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e){function r(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}t.exports=function(t,e,n){return e&&r(t.prototype,e),n&&r(t,n),t}},function(t,e,r){var n=r(10),o=r(0);t.exports=function(t,e){return!e||"object"!==n(e)&&"function"!=typeof e?o(t):e}},function(t,e){function r(e){return t.exports=r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},r(e)}t.exports=r},function(t,e,r){var n=r(11);t.exports=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&n(t,e)}},function(t,e,r){"use strict";r.r(e),r.d(e,"default",(function(){return b}));var n=r(1),o=r.n(n),i=r(3),a=r.n(i),u=r(4),c=r.n(u),s=r(5),f=r.n(s),l=r(6),h=r.n(l),p=r(0),y=r.n(p),d=r(7),v=r.n(d),m=r(2),g=r.n(m),b=function(t){function e(t){var r;return a()(this,e),(r=f()(this,h()(e).call(this))).getMarkup.bind(y()(r)),r.getClasses.bind(y()(r)),r.state={html:t.html||null,classes:r.getClasses(t)},r}return v()(e,t),c()(e,[{key:"getMarkup",value:function(t){return{__html:t}}},{key:"componentDidMount",value:function(){var t,e;return o.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(!this.props.contentPath){r.next=8;break}return r.next=3,o.a.awrap(fetch(this.props.contentPath));case 3:return t=r.sent,r.next=6,o.a.awrap(t.text());case 6:e=r.sent,this.setState({html:e});case 8:this.props.didMountCallback&&"function"==typeof this.props.didMountCallback&&this.props.didMountCallback();case 9:case"end":return r.stop()}}),null,this)}},{key:"getClasses",value:function(t){var e=[];return void 0!==t&&(t.classes&&e.push(t.classes),t.grid&&e.push(t.grid),t.gridTablet&&e.push(t.gridTablet),t.gridPhone&&e.push(t.gridPhone),t.styleSystem&&e.push(t.styleSystem)),e.join(" ")}},{key:"render",value:function(){var t=this.getClasses(this.props);return null===this.state.html?g.a.createElement("div",{className:t},"Loading..."):g.a.createElement("div",{className:t,dangerouslySetInnerHTML:this.getMarkup(this.state.html)})}}]),e}(m.Component)},function(t,e,r){var n=function(t){"use strict";var e,r=Object.prototype,n=r.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function c(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new j(n||[]);return i._invoke=function(t,e,r){var n=f;return function(o,i){if(n===h)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return k()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=O(a,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===f)throw n=p,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=h;var c=s(t,e,r);if("normal"===c.type){if(n=r.done?p:l,c.arg===y)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n=p,r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=c;var f="suspendedStart",l="suspendedYield",h="executing",p="completed",y={};function d(){}function v(){}function m(){}var g={};g[i]=function(){return this};var b=Object.getPrototypeOf,w=b&&b(b(P([])));w&&w!==r&&n.call(w,i)&&(g=w);var x=m.prototype=d.prototype=Object.create(g);function _(t){["next","throw","return"].forEach((function(e){t[e]=function(t){return this._invoke(e,t)}}))}function L(t){var e;this._invoke=function(r,o){function i(){return new Promise((function(e,i){!function e(r,o,i,a){var u=s(t[r],t,o);if("throw"!==u.type){var c=u.arg,f=c.value;return f&&"object"==typeof f&&n.call(f,"__await")?Promise.resolve(f.__await).then((function(t){e("next",t,i,a)}),(function(t){e("throw",t,i,a)})):Promise.resolve(f).then((function(t){c.value=t,i(c)}),(function(t){return e("throw",t,i,a)}))}a(u.arg)}(r,o,e,i)}))}return e=e?e.then(i,i):i()}}function O(t,r){var n=t.iterator[r.method];if(n===e){if(r.delegate=null,"throw"===r.method){if(t.iterator.return&&(r.method="return",r.arg=e,O(t,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=s(n,t.iterator,r.arg);if("throw"===o.type)return r.method="throw",r.arg=o.arg,r.delegate=null,y;var i=o.arg;return i?i.done?(r[t.resultName]=i.value,r.next=t.nextLoc,"return"!==r.method&&(r.method="next",r.arg=e),r.delegate=null,y):i:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function j(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function P(t){if(t){var r=t[i];if(r)return r.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function r(){for(;++o<t.length;)if(n.call(t,o))return r.value=t[o],r.done=!1,r;return r.value=e,r.done=!0,r};return a.next=a}}return{next:k}}function k(){return{value:e,done:!0}}return v.prototype=x.constructor=m,m.constructor=v,m[u]=v.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,m):(t.__proto__=m,u in t||(t[u]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},_(L.prototype),L.prototype[a]=function(){return this},t.AsyncIterator=L,t.async=function(e,r,n,o){var i=new L(c(e,r,n,o));return t.isGeneratorFunction(r)?i:i.next().then((function(t){return t.done?t.value:i.next()}))},_(x),x[u]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=P,j.prototype={constructor:j,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(S),!t)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=e)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var r=this;function o(n,o){return u.type="throw",u.arg=t,r.next=n,o&&(r.method="next",r.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],u=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var c=n.call(a,"catchLoc"),s=n.call(a,"finallyLoc");if(c&&s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),y},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),y}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,r,n){return this.delegate={iterator:P(t),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=e),y}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e){function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function n(e){return"function"==typeof Symbol&&"symbol"===r(Symbol.iterator)?t.exports=n=function(t){return r(t)}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":r(t)},n(e)}t.exports=n},function(t,e){function r(e,n){return t.exports=r=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},r(e,n)}t.exports=r}]);