(window.webpackJsonp=window.webpackJsonp||[]).push([["jkweb-shopware-cookie-accept-plugin"],{"2o6Z":function(e,t,n){"use strict";n.r(t);var o=n("XMol");window.PluginManager.register("JkwebShopwareCookieAcceptPlugin",o.a)},XMol:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return y}));var o=n("FGIj"),i=n("t8WJ"),r=n("5lm9"),a=n("k8s9"),c=n("prSB");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,h,d,y=function(t){function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),l(this,f(n).apply(this,arguments))}var o,s,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(n,t),o=n,(s=[{key:"init",value:function(){document.$emitter.subscribe(i.a,(function(e){var t=e.detail;for(var n in t)t.hasOwnProperty(n)&&void 0!==window.dataLayer&&Array.isArray(window.dataLayer)&&(t[n]?window.dataLayer.push({event:"enableCookie",name:n}):window.dataLayer.push({event:"disableCookie",name:n}))}));var t=this.options,n=t.acceptButtonSelector,o=t.acceptButtonLoadingIndicatorSelector,s=t.cookiePreference,u=this;e(n+":not(.disabled)").on("click",(function(){var t=window.PluginManager.getPluginInstances("CookieConfiguration")[0],n=e(this).find("button");n.addClass("disabled");var i=n.find(o);i.html('<span class="offcanvas-content-container">'.concat(r.a.getTemplate(),"</span>"));var l=window.router["frontend.cookie.offcanvas"];new a.a(window.accessKey,window.contextToken).get(l,(function(o){var r=e("<div>".concat(o,"</div>"));u._setInitialState(r,t);var a=u._getCookies(r,t,"all"),l=[];a.forEach((function(e){var t=e.cookie,n=e.value,o=e.expiration;l.push(t),t&&n&&c.a.setItem(t,n,o)})),c.a.setItem(s,"1","30"),t._handleUpdateListener(l,[]),n.removeClass("disabled"),i.html(""),t._hideCookieBar(),1===window.COOKIE_ACCEPT_RELOAD&&location.reload()}))}))}},{key:"_setInitialState",value:function(t,n){var o=this._getCookies(t,n,"all"),i=[],r=[];o.forEach((function(e){var t=e.cookie,n=e.required;c.a.getItem(t)||n?i.push(t):r.push(t)})),n.lastState={active:i,inactive:r},i.forEach((function(o){var i=e('[data-cookie="'.concat(o,'"]'),t)[0];i.checked=!0,n._childCheckboxEvent(i)}))}},{key:"_getCookies",value:function(t,n){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"all",i=this.options.cookieSelector;return Array.from(e(i,t)).filter((function(e){switch(o){case"all":return!0;case"active":return n._isChecked(e);case"inactive":return!n._isChecked(e);default:return!1}})).map((function(e){var t=e.dataset;return{cookie:t.cookie,value:t.cookieValue,expiration:t.cookieExpiration,required:t.cookieRequired}}))}}])&&u(o.prototype,s),p&&u(o,p),n}(o.a);d={acceptButtonSelector:".js-cookie-accept-button",acceptButtonLoadingIndicatorSelector:".js-cookie-accept-button-loading-indicator",cookieSelector:"[data-cookie]",cookiePreference:"cookie-preference"},(h="options")in(p=y)?Object.defineProperty(p,h,{value:d,enumerable:!0,configurable:!0,writable:!0}):p[h]=d}).call(this,n("UoTJ"))},bK22:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return p}));var o=n("41MI"),i=n("+F6M"),r=n("KeF5"),a=n("ERap");function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function l(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),e}var f=function(){function e(){s(this,e),this.$emitter=new i.a}return l(e,[{key:"open",value:function(e,t,n,o,i,r,a){this._removeExistingOffCanvas();var c=this._createOffCanvas(n,r,a);this.setContent(e,o,i),this._openOffcanvas(c,t)}},{key:"setContent",value:function(e,t,n){var o=this.getOffCanvas();o[0]&&(o[0].innerHTML=e,this._registerEvents(t,n))}},{key:"setAdditionalClassName",value:function(e){this.getOffCanvas()[0].classList.add(e)}},{key:"getOffCanvas",value:function(){return document.querySelectorAll(".".concat("offcanvas"))}},{key:"close",value:function(e){var t=this,n=this.getOffCanvas();a.a.iterate(n,(function(e){return e.classList.remove("is-open")})),setTimeout(this._removeExistingOffCanvas.bind(this),e),r.c.remove(e),setTimeout((function(){t.$emitter.publish("onCloseOffcanvas",{offCanvasContent:n})}),e)}},{key:"exists",value:function(){return this.getOffCanvas().length>0}},{key:"_openOffcanvas",value:function(e,t){setTimeout((function(){r.c.create((function(){e.classList.add("is-open"),"function"==typeof t&&t()}))}),75)}},{key:"_registerEvents",value:function(e,t){var n=this,i=o.a.isTouchDevice()?"touchstart":"click";if(e){document.addEventListener(r.a.ON_CLICK,(function e(){n.close(t),document.removeEventListener(r.a.ON_CLICK,e)}))}var c=document.querySelectorAll(".".concat("js-offcanvas-close"));a.a.iterate(c,(function(e){return e.addEventListener(i,n.close.bind(n,t))}))}},{key:"_removeExistingOffCanvas",value:function(){var e=this.getOffCanvas();return a.a.iterate(e,(function(e){return e.remove()}))}},{key:"_getPositionClass",value:function(e){return"is-".concat(e)}},{key:"_createOffCanvas",value:function(e,t,n){var o=document.createElement("div");if(o.classList.add("offcanvas"),o.classList.add(this._getPositionClass(e)),!0===t&&o.classList.add("is-fullwidth"),n){var i=c(n);if("string"===i)o.classList.add(n);else{if(!Array.isArray(n))throw new Error('The type "'.concat(i,'" is not supported. Please pass an array or a string.'));n.forEach((function(e){o.classList.add(e)}))}}return document.body.appendChild(o),o}}]),e}(),v=Object.freeze(new f),p=function(){function e(){s(this,e)}return l(e,null,[{key:"open",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"left",o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:350,r=arguments.length>5&&void 0!==arguments[5]&&arguments[5],a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:"";v.open(e,t,n,o,i,r,a)}},{key:"setContent",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:350;v.setContent(e,t,n)}},{key:"setAdditionalClassName",value:function(e){v.setAdditionalClassName(e)}},{key:"close",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:350;v.close(e)}},{key:"exists",value:function(){return v.exists()}},{key:"getOffCanvas",value:function(){return v.getOffCanvas()}},{key:"REMOVE_OFF_CANVAS_DELAY",value:function(){return 350}}]),e}()},lpb5:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var o=n("bK22"),i=n("k8s9"),r=n("5lm9");function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function s(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e,t,n){return(u="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var o=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=l(e)););return e}(e,t);if(o){var i=Object.getOwnPropertyDescriptor(o,t);return i.get?i.get.call(n):i.value}})(e,t,n||e)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var v=null,p=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),s(this,l(t).apply(this,arguments))}var n,a,p;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),n=t,p=[{key:"open",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"left",r=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:o.b.REMOVE_OFF_CANVAS_DELAY(),c=arguments.length>6&&void 0!==arguments[6]&&arguments[6],s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:"";if(!e)throw new Error("A url must be given!");o.a._removeExistingOffCanvas();var u=o.a._createOffCanvas(i,c,s);this.setContent(e,t,n,r,a),o.a._openOffcanvas(u)}},{key:"setContent",value:function(e,n,o,a,c){var s=this,f=new i.a;u(l(t),"setContent",this).call(this,'<div class="offcanvas-content-container">'.concat(r.a.getTemplate(),"</div>"),a,c),v&&v.abort();var p=function(e){u(l(t),"setContent",s).call(s,e,a,c),"function"==typeof o&&o(e)};v=n?f.post(e,n,t.executeCallback.bind(this,p)):f.get(e,t.executeCallback.bind(this,p))}},{key:"executeCallback",value:function(e,t){"function"==typeof e&&e(t),window.PluginManager.initializePlugins()}}],(a=null)&&c(n.prototype,a),p&&c(n,p),t}(o.b)},t8WJ:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return k}));var o=n("FGIj"),i=n("prSB"),r=n("41MI"),a=n("lpb5"),c=n("bK22"),s=n("DeZd");function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function f(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function v(e){return(v=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h,d,y,b="CookieConfiguration_Update",k=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),f(this,v(t).apply(this,arguments))}var n,o,r;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(o=[{key:"init",value:function(){this.lastState={active:[],inactive:[]},this.ajaxModalExtension=null,this._registerEvents()}},{key:"_registerEvents",value:function(){var e=this,t=this.options,n=t.submitEvent,o=t.buttonOpenSelector,i=t.customLinkSelector;Array.from(document.querySelectorAll(o)).forEach((function(t){t.addEventListener(n,e.openOffCanvas.bind(e))})),Array.from(document.querySelectorAll(i)).forEach((function(t){t.addEventListener(n,e._handleCustomLink.bind(e))}))}},{key:"_registerOffCanvasEvents",value:function(){var e=this,t=this.options,n=t.submitEvent,o=t.buttonSubmitSelector,i=t.wrapperToggleSelector,r=this._getOffCanvas();if(r){var a=r.querySelector(o),c=Array.from(r.querySelectorAll('input[type="checkbox"]')),s=Array.from(r.querySelectorAll(i));a&&a.addEventListener(n,this._handleSubmit.bind(this)),c.forEach((function(t){t.addEventListener(n,e._handleCheckbox.bind(e))})),s.forEach((function(t){t.addEventListener(n,e._handleWrapperTrigger.bind(e))}))}}},{key:"_handleCustomLink",value:function(e){e.preventDefault(),this.openOffCanvas()}},{key:"_handleUpdateListener",value:function(e,t){var n=this._getUpdatedCookies(e,t);document.$emitter.publish(b,n)}},{key:"_getUpdatedCookies",value:function(e,t){var n=this.lastState,o={};return e.forEach((function(e){n.inactive.includes(e)&&(o[e]=!0)})),t.forEach((function(e){n.active.includes(e)&&(o[e]=!1)})),o}},{key:"openOffCanvas",value:function(e){var t=this.options.offCanvasPosition,n=window.router["frontend.cookie.offcanvas"];this._hideCookieBar(),a.a.open(n,!1,this._onOffCanvasOpened.bind(this,e),t)}},{key:"closeOffCanvas",value:function(e){a.a.close(),this.ajaxModalExtension=null,"function"==typeof e&&e()}},{key:"_onOffCanvasOpened",value:function(e){this._registerOffCanvasEvents(),this.ajaxModalExtension=new s.a(!1),this._setInitialState(),"function"==typeof e&&e()}},{key:"_hideCookieBar",value:function(){var e=PluginManager.getPluginInstances("CookiePermission");e&&e[0]&&(e[0]._hideCookieBar(),e[0]._removeBodyPadding())}},{key:"_setInitialState",value:function(){var e=this,t=this._getOffCanvas(),n=this._getCookies("all"),o=[],r=[];n.forEach((function(e){var t=e.cookie,n=e.required;i.a.getItem(t)||n?o.push(t):r.push(t)})),this.lastState={active:o,inactive:r},o.forEach((function(n){var o=t.querySelector('[data-cookie="'.concat(n,'"]'));o.checked=!0,e._childCheckboxEvent(o)}))}},{key:"_handleWrapperTrigger",value:function(e){e.preventDefault();var t=this.options,n=t.entriesActiveClass,o=t.entriesClass,i=t.groupClass,r=e.target,a=this._findParentEl(r,o,i);a&&(a.classList.contains(n)?a.classList.remove(n):a.classList.add(n))}},{key:"_handleCheckbox",value:function(e){var t=this.options.parentInputClass,n=e.target;(n.classList.contains(t)?this._parentCheckboxEvent:this._childCheckboxEvent).call(this,n)}},{key:"_findParentEl",value:function(e,t){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;e&&!e.classList.contains(n);){if(e.classList.contains(t))return e;e=e.parentElement}return null}},{key:"_isChecked",value:function(e){return!!e.checked}},{key:"_parentCheckboxEvent",value:function(e){var t=this.options.groupClass,n=this._isChecked(e),o=this._findParentEl(e,t);this._toggleWholeGroup(n,o)}},{key:"_childCheckboxEvent",value:function(e){var t=this.options.groupClass,n=this._isChecked(e),o=this._findParentEl(e,t);this._toggleParentCheckbox(n,o)}},{key:"_toggleWholeGroup",value:function(e,t){Array.from(t.querySelectorAll("input")).forEach((function(t){t.checked=e}))}},{key:"_toggleParentCheckbox",value:function(e,t){var n=this.options.parentInputSelector,o=Array.from(t.querySelectorAll("input:not(".concat(n,")"))),i=Array.from(t.querySelectorAll("input:not(".concat(n,"):checked")));if(o.length>0){var r=t.querySelector(n);if(r){var a=i.length>0,c=a&&i.length!==o.length;r.checked=a,r.indeterminate=c}}}},{key:"_handleSubmit",value:function(){var e=this._getCookies("active"),t=this._getCookies("inactive"),n=this.options.cookiePreference,o=[],r=[];t.forEach((function(e){var t=e.cookie;r.push(t),i.a.getItem(t)&&i.a.removeItem(t)})),e.forEach((function(e){var t=e.cookie,n=e.value,r=e.expiration;o.push(t),t&&n&&i.a.setItem(t,n,r)})),i.a.setItem(n,"1","30"),this._handleUpdateListener(o,r),this.closeOffCanvas()}},{key:"_getCookies",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"all",n=this.options.cookieSelector,o=this._getOffCanvas();return Array.from(o.querySelectorAll(n)).filter((function(n){switch(t){case"all":return!0;case"active":return e._isChecked(n);case"inactive":return!e._isChecked(n);default:return!1}})).map((function(e){var t=e.dataset;return{cookie:t.cookie,value:t.cookieValue,expiration:t.cookieExpiration,required:t.cookieRequired}}))}},{key:"_getOffCanvas",value:function(){var e=c.b?c.b.getOffCanvas():[];return!!(e&&e.length>0)&&e[0]}}])&&l(n.prototype,o),r&&l(n,r),t}(o.a);h=k,d="options",y={offCanvasPosition:"left",submitEvent:r.a.isTouchDevice()?"touchstart":"click",cookiePreference:"cookie-preference",cookieSelector:"[data-cookie]",buttonOpenSelector:".js-cookie-configuration-button button",buttonSubmitSelector:".js-offcanvas-cookie-submit",wrapperToggleSelector:".offcanvas-cookie-entries span",parentInputSelector:".offcanvas-cookie-parent-input",customLinkSelector:'[href="'.concat(window.router["frontend.cookie.offcanvas"],'"]'),entriesActiveClass:"offcanvas-cookie-entries--active",entriesClass:"offcanvas-cookie-entries",groupClass:"offcanvas-cookie-group",parentInputClass:"offcanvas-cookie-parent-input"},d in h?Object.defineProperty(h,d,{value:y,enumerable:!0,configurable:!0,writable:!0}):h[d]=y}},[["2o6Z","runtime","vendor-node","vendor-shared"]]]);