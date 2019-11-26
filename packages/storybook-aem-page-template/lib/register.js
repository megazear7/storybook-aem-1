module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=15)}([function(e,t){e.exports=require("react")},function(e,t,n){"use strict";n.d(t,"d",(function(){return r})),n.d(t,"a",(function(){return o})),n.d(t,"c",(function(){return a})),n.d(t,"b",(function(){return l}));var r="pageTemplate",o="storybookjs/".concat(r),a="".concat(o,"/panel"),l=("".concat(o,"/reset"),"".concat(o,"/set"),"".concat(o,"/change"));"".concat(o,"/set-options"),"".concat(o,"/click")},function(e,t){e.exports=require("@storybook/components")},function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},function(e,t){e.exports=require("@storybook/addons")},function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},function(e,t,n){var r=n(11),o=n(3);e.exports=function(e,t){return!t||"object"!==r(t)&&"function"!=typeof t?o(e):t}},function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},function(e,t,n){var r=n(12);e.exports=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&r(e,t)}},function(e,t){e.exports=require("@storybook/core-events")},function(e,t){function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(t){return"function"==typeof Symbol&&"symbol"===n(Symbol.iterator)?e.exports=r=function(e){return n(e)}:e.exports=r=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":n(e)},r(t)}e.exports=r},function(e,t){function n(t,r){return e.exports=n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},n(t,r)}e.exports=n},function(e,t){e.exports=require("@storybook/api")},,function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(4),l=n.n(a),u=n(13),i=n(2),c=n(5),s=n.n(c),p=n(6),f=n.n(p),m=n(7),y=n.n(m),d=n(8),b=n.n(d),h=n(3),g=n.n(h),v=n(9),x=n.n(v),T=n(10),E=n(1),O=function(e){function t(e){var n;return s()(this,t),(n=y()(this,b()(t).call(this,e))).api=e.api,n.channel=n.api.getChannel(),n.channel.on(T.STORY_CHANGED,n.storyChangedHandler.bind(g()(n))),n.state={templates:e.parameters.templates||[],defaultTemplate:e.parameters.defaultTemplate||null,currentTemplateLabel:e.parameters.defaultTemplate.label||null},n}return x()(t,e),f()(t,[{key:"storyChangedHandler",value:function(e){var t=this.state.currentTemplateLabel;this.props.parameters.defaultTemplate&&this.props.parameters.defaultTemplate!==this.state.defaultTemplate&&(t=this.props.parameters.defaultTemplate,this.setState({defaultTemplate:this.props.parameters.defaultTemplate})),this.channel.emit(E.b,t),this.channel.emit(T.FORCE_RE_RENDER)}},{key:"handleChange",value:function(e){this.setState({currentTemplateLabel:e.target.value}),this.channel.emit(E.b,e.target.value),this.channel.emit(T.FORCE_RE_RENDER,"testing")}},{key:"render",value:function(){return 0===this.state.templates.length?o.a.createElement(i.Placeholder,null,"Panel, No Page Templates settings found"):o.a.createElement(i.ScrollArea,null,o.a.createElement(i.Form,null,o.a.createElement(i.Form.Field,{label:"Page Template"},o.a.createElement(i.Form.Select,{defaultValue:this.state.defaultTemplate,onChange:this.handleChange.bind(this)},this.state.templates.map((function(e,t){return o.a.createElement("option",{key:t,value:e.label},e.label)}))))))}}]),t}(r.Component);l.a.register(E.a,(function(e){l.a.addPanel(E.c,{title:"Page Template",paramKey:E.d,render:function(t){var n=t.active,r=t.key,a=Object(u.useParameter)(E.d,null);return a?o.a.createElement(i.AddonPanel,{active:n,key:r},o.a.createElement(O,{api:e,parameters:a})):o.a.createElement(i.AddonPanel,{active:n,key:r},o.a.createElement(i.Placeholder,null,"No Page Templates settings found"))}})}))}]);