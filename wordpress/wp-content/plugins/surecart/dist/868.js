"use strict";(self.webpackChunk_surecart_surecart=self.webpackChunk_surecart_surecart||[]).push([[868],{4805:function(e,t,n){n.d(t,{a:function(){return p},b:function(){return u},g:function(){return d}});var r=n(4467),i=n(296);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return s(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var _n=0,r=function(){};return{s:r,n:function(){return _n>=e.length?{done:!0}:{done:!1,value:e[_n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,a=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return o=e.done,e},e:function(e){a=!0,i=e},f:function(){try{o||null==n.return||n.return()}finally{if(a)throw i}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function u(e){for(var t,n="",r=Object.entries(e);t=r.shift();){var o=t,a=(0,i.A)(o,2),s=a[0],u=a[1];if(Array.isArray(u)||u&&u.constructor===Object){var l,d=c(Object.entries(u).reverse());try{for(d.s();!(l=d.n()).done;){var p=(0,i.A)(l.value,2),h=p[0],f=p[1];r.unshift(["".concat(s,"[").concat(h,"]"),f])}}catch(e){d.e(e)}finally{d.f()}}else void 0!==u&&(null===u&&(u=""),n+="&"+[s,u].map(encodeURIComponent).join("="))}return n.substr(1)}function l(e){try{return decodeURIComponent(e)}catch(t){return e}}function d(e){return(function(e){var t;try{t=new URL(e,"http://example.com").search.substring(1)}catch(e){}if(t)return t}(e)||"").replace(/\+/g,"%20").split("&").reduce((function(e,t){var n=t.split("=").filter(Boolean).map(l),r=(0,i.A)(n,2),o=r[0],c=r[1],s=void 0===c?"":c;return o&&function(e,t,n){for(var r=t.length,i=r-1,o=0;o<r;o++){var c=t[o];!c&&Array.isArray(e)&&(c=e.length.toString()),c=["__proto__","constructor","prototype"].includes(c)?c.toUpperCase():c;var s=!isNaN(Number(t[o+1]));e[c]=o===i?n:e[c]||(s?[]:{}),Array.isArray(e[c])&&!s&&(e[c]=a({},e[c])),e=e[c]}}(e,o.replace(/\]/g,"").split("["),s),e}),Object.create(null))}function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;if(!t||!Object.keys(t).length)return e;var n=e,r=e.indexOf("?");return-1!==r&&(t=Object.assign(d(e),t),n=n.substr(0,r)),n+"?"+u(t)}},488:function(e,t,n){n.d(t,{i:function(){return o},m:function(){return i},z:function(){return r}});var r=["bif","byr","clp","djf","gnf","isk","jpy","kmf","krw","pyg","rwf","ugx","vnd","vuv","xaf","xag","xau","xba","xbb","xbc","xbd","xdr","xof","xpd","xpf","xpt","xts"],i=function(e,t){return o(t)?e:e/100},o=function(e){var t;return r.includes(null===(t=null==e?void 0:e.toLowerCase)||void 0===t?void 0:t.call(e))}},4883:function(e,t,n){n.d(t,{a:function(){return U},h:function(){return B}});var r=n(467),i=n(45),o=n(296),a=n(4467),c=n(9280),s=n.n(c),u=n(4805),l=n(3506),d=["rest_route"],p=["path","url"],h=["url","path","data","parse"];function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,a.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){return void 0!==(0,l.g)(e,t)}function g(e){var t=e.split("?"),n=t[1],r=t[0];return n?r+"?"+n.split("&").map((function(e){return e.split("=")})).map((function(e){return e.map(decodeURIComponent)})).sort((function(e,t){return e[0].localeCompare(t[0])})).map((function(e){return e.map(encodeURIComponent)})).map((function(e){return e.join("=")})).join("&"):r}var w=function(e,t){var n,r,i=e.path;return"string"==typeof e.namespace&&"string"==typeof e.endpoint&&(n=e.namespace.replace(/^\/|\/$/g,""),i=(r=e.endpoint.replace(/^\//,""))?n+"/"+r:n),delete e.namespace,delete e.endpoint,t(v(v({},e),{},{path:i}))};function b(e,t){return Promise.resolve(t?e.body:new window.Response(JSON.stringify(e.body),{status:200,statusText:"OK",headers:e.headers}))}var y=function(e){return e.json?e.json():Promise.reject(e)},_=function(e){return function(e){if(!e)return{};var t=e.match(/<([^>]+)>; rel="next"/);return t?{next:t[1]}:{}}(e.headers.get("link")).next},k=function(e){var t=!!e.path&&-1!==e.path.indexOf("per_page=-1"),n=!!e.url&&-1!==e.url.indexOf("per_page=-1");return t||n},x=function(){var e=(0,r.A)(s().mark((function e(t,n){var r,o,a,c,l,d;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!1!==t.parse){e.next=2;break}return e.abrupt("return",n(t));case 2:if(k(t)){e.next=4;break}return e.abrupt("return",n(t));case 4:return e.next=6,U(v(v({},(h={per_page:100},void 0,void 0,f=(s=t).path,m=s.url,v(v({},(0,i.A)(s,p)),{},{url:m&&(0,u.a)(m,h),path:f&&(0,u.a)(f,h)}))),{},{parse:!1}));case 6:return r=e.sent,e.next=9,y(r);case 9:if(o=e.sent,Array.isArray(o)){e.next=12;break}return e.abrupt("return",o);case 12:if(a=_(r)){e.next=15;break}return e.abrupt("return",o);case 15:c=[].concat(o);case 16:if(!a){e.next=27;break}return e.next=19,U(v(v({},t),{},{path:void 0,url:a,parse:!1}));case 19:return l=e.sent,e.next=22,y(l);case 22:d=e.sent,c=c.concat(d),a=_(l),e.next=16;break;case 27:return e.abrupt("return",c);case 28:case"end":return e.stop()}var s,h,f,m}),e)})));return function(_x,t){return e.apply(this,arguments)}}(),O=new Set(["PATCH","PUT","DELETE"]),P=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return Promise.resolve(function(e){return arguments.length>1&&void 0!==arguments[1]&&!arguments[1]?e:204===e.status?null:e.json?e.json():Promise.reject(e)}(e,t)).catch((function(e){return j(e,t)}))};function j(e){if(arguments.length>1&&void 0!==arguments[1]&&!arguments[1])throw e;return function(e){var t={code:"invalid_json",message:wp.i18n.__("The response is not a valid JSON response.")};if(!e||!e.json)throw t;return e.json().catch((function(){throw t}))}(e).then((function(e){var t={code:"unknown_error",message:wp.i18n.__("An unknown error occurred.")};throw e||t}))}var A,C,S,E,I,D,T,q={Accept:"application/json, */*;q=0.1"},N={credentials:"include"},L=[function(e,t){return"string"!=typeof e.url||m(e.url,"_locale")||(e.url=(0,u.a)(e.url,{_locale:"user"})),"string"!=typeof e.path||m(e.path,"_locale")||(e.path=(0,u.a)(e.path,{_locale:"user"})),t(e)},w,function(e,t){var n=e.method,r=void 0===n?"GET":n;return O.has(r.toUpperCase())&&(e=v(v({},e),{},{headers:v(v({},e.headers),{},{"X-HTTP-Method-Override":r,"Content-Type":"application/json"}),method:"POST"})),t(e)},x],M=function(e){if(e.status>=200&&e.status<300)return e;throw e},R=function(e){var t=e.url,n=e.path,r=e.data,o=e.parse,a=void 0===o||o,c=(0,i.A)(e,h),s=e.body,u=e.headers;return u=v(v({},q),u),r&&(s=JSON.stringify(r),u["Content-Type"]="application/json"),window.fetch(t||n||window.location.href,v(v(v({},N),c),{},{body:s,headers:u})).then((function(e){return Promise.resolve(e).then(M).catch((function(e){return j(e,a)})).then((function(e){return P(e,a)}))}),(function(e){if(e&&"AbortError"===e.name)throw e;throw{code:"fetch_error",message:wp.i18n.__("You are probably offline.")}}))};function U(e){return L.reduceRight((function(e,t){return function(n){return t(n,e)}}),R)(e).catch((function(t){return"rest_cookie_invalid_nonce"!==t.code?Promise.reject(t):window.fetch(U.nonceEndpoint).then(M).then((function(e){return e.text()})).then((function(t){return U.nonceMiddleware.nonce=t,U(e)}))}))}U.use=function(e){L.unshift(e)},U.setFetchHandler=function(e){R=e},U.createNonceMiddleware=function(e){var t=function e(t,n){var r=t.headers,i=void 0===r?{}:r;for(var o in i)if("x-wp-nonce"===o.toLowerCase()&&i[o]===e.nonce)return n(t);return n(v(v({},t),{},{headers:v(v({},i),{},{"X-WP-Nonce":e.nonce})}))};return t.nonce=e,t},U.createPreloadingMiddleware=function(e){var t=Object.fromEntries(Object.entries(e).map((function(e){var t=(0,o.A)(e,2),n=t[0],r=t[1];return[g(n),r]})));return function(e,n){var r=e.parse,o=void 0===r||r,a=e.path;if(!a&&e.url){var c=(0,u.g)(e.url),s=c.rest_route,l=(0,i.A)(c,d);"string"==typeof s&&(a=(0,u.a)(s,l))}if("string"!=typeof a)return n(e);var p=e.method||"GET",h=g(a);if("GET"===p&&t[h]){var f=t[h];return delete t[h],b(f,!!o)}if("OPTIONS"===p&&t[p]&&t[p][h]){var v=t[p][h];return delete t[p][h],b(v,!!o)}return n(e)}},U.createRootURLMiddleware=function(e){return function(t,n){return w(t,(function(t){var r,i=t.url,o=t.path;return"string"==typeof o&&(r=e,-1!==e.indexOf("?")&&(o=o.replace("?","&")),o=o.replace(/^\//,""),"string"==typeof r&&-1!==r.indexOf("?")&&(o=o.replace("?","&")),i=r+o),n(v(v({},t),{},{url:i}))}))}},U.fetchAllMiddleware=x,U.mediaUploadMiddleware=function(e,t){if(!function(e){var t=!!e.method&&"POST"===e.method;return(!!e.path&&-1!==e.path.indexOf("/wp/v2/media")||!!e.url&&-1!==e.url.indexOf("/wp/v2/media"))&&t}(e))return t(e);var n=0,r=function e(r){return n++,t({path:"/wp/v2/media/".concat(r,"/post-process"),method:"POST",data:{action:"create-image-subsizes"},parse:!1}).catch((function(){return n<5?e(r):(t({path:"/wp/v2/media/".concat(r,"?force=true"),method:"DELETE"}),Promise.reject())}))};return t(v(v({},e),{},{parse:!1})).catch((function(t){var n=t.headers.get("x-wp-upload-attachment-id");return t.status>=500&&t.status<600&&n?r(n).catch((function(){return!1!==e.parse?Promise.reject({code:"post_process",message:wp.i18n.__("Media upload failed. If this is a photo or a large image, please scale it down and try again.")}):Promise.reject(t)})):j(t,e.parse)})).then((function(t){return P(t,e.parse)}))},U.createThemePreviewMiddleware=function(e){return function(t,n){if("string"==typeof t.url){var r=(0,l.g)(t.url,"wp_theme_preview");void 0===r?t.url=(0,u.a)(t.url,{wp_theme_preview:e}):""===r&&(t.url=(0,l.r)(t.url,"wp_theme_preview"))}if("string"==typeof t.path){var i=(0,l.g)(t.path,"wp_theme_preview");void 0===i?t.path=(0,u.a)(t.path,{wp_theme_preview:e}):""===i&&(t.path=(0,l.r)(t.path,"wp_theme_preview"))}return n(t)}},U.fetchAllMiddleware=null,U.use(U.createRootURLMiddleware((null===(C=null===(A=null===window||void 0===window?void 0:window.parent)||void 0===A?void 0:A.scData)||void 0===C?void 0:C.root_url)||(null===(S=null===window||void 0===window?void 0:window.scData)||void 0===S?void 0:S.root_url))),(null===(E=null===window||void 0===window?void 0:window.scData)||void 0===E?void 0:E.nonce)&&(U.nonceMiddleware=U.createNonceMiddleware(null===(I=null===window||void 0===window?void 0:window.scData)||void 0===I?void 0:I.nonce),U.use(U.nonceMiddleware)),(null===(D=null===window||void 0===window?void 0:window.scData)||void 0===D?void 0:D.nonce_endpoint)&&(U.nonceEndpoint=null===(T=null===window||void 0===window?void 0:window.scData)||void 0===T?void 0:T.nonce_endpoint),U.use((function(e,t){return e.path=(0,u.a)(e.path,{t:Date.now()}),t(e)})),U.use((function(e,t){var n=t(e);return n.catch((function(e){return"invalid_json"===e.code&&(e.message=wp.i18n.__("The response is not a valid JSON response.","surecart"),e.additional_errors=[{code:"invalid_json",message:wp.i18n.sprintf(/* translators: %s: URL to debug settings page */
wp.i18n.__("Please ensure that your site is not in debug mode as this may interfere with API responses. %s","surecart"),'<a href="'.concat("https://surecart.com/docs/is-not-a-valid-json-response/",'" target="_blank" rel="noopener noreferrer">').concat(wp.i18n.__("More Information","surecart"),"</a>"))}]),Promise.reject(e)})),n}));var z=function(e){var t={code:"invalid_json",message:wp.i18n.__("The response is not a valid JSON response.","surecart")};if((null==e?void 0:e.code)&&(null==e?void 0:e.message))throw e;if(!e||!e.json)throw t;return e.json().catch((function(){throw t}))},B=function(){var e=(0,r.A)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,z(t);case 2:if("rest_cookie_invalid_nonce"===(n=e.sent).code){e.next=5;break}throw n;case 5:return e.abrupt("return",window.fetch(U.nonceEndpoint).then((function(e){if(e.status>=200&&e.status<300)return e;throw e})).then((function(e){return e.text()})).then((function(e){U.nonceMiddleware.nonce=e})));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},7874:function(e,t,n){n.d(t,{t:function(){return r}});var r=function(e,t){((null===window||void 0===window?void 0:window.dataLayer)||(null===window||void 0===window?void 0:window.gtag))&&t&&((null===window||void 0===window?void 0:window.gtag)?window.gtag("event",e,t):(window.dataLayer.push({ecommerce:null}),window.dataLayer.push({event:e,ecommerce:t})))}},6250:function(e,t,n){var r=n(4467),i=n(488),o=n(7874);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}window.addEventListener("scSearched",(function(e){var t;if(null===window||void 0===window?void 0:window.fbq){var n=e.detail;window.fbq("track","Search",c({search_string:n.searchString,content_ids:n.searchResultIds},(null===(t=null==n?void 0:n.searchCollections)||void 0===t?void 0:t.length)?{content_category:n.searchCollections.join(",")}:{}))}})),window.addEventListener("scProductViewed",(function(e){var t,n,r,o,a,c;if(null===window||void 0===window?void 0:window.fbq){var s=e.detail;window.fbq("track","ViewContent",{content_ids:[s.id],content_category:null===(n=null===(t=null==s?void 0:s.product_collections)||void 0===t?void 0:t.data)||void 0===n?void 0:n.map((function(e){return e.name})).join(", "),content_name:(null==s?void 0:s.name)+((null===(r=null==s?void 0:s.variant_options)||void 0===r?void 0:r.length)?" - ".concat(null==s?void 0:s.variant_options.join(" / ")):""),content_type:"product",contents:[{id:s.id,quantity:1}],currency:null===(o=null==s?void 0:s.price)||void 0===o?void 0:o.currency,value:(0,i.m)((null===(a=s.price)||void 0===a?void 0:a.amount)||0,(null===(c=s.price)||void 0===c?void 0:c.currency)||"USD")})}})),window.addEventListener("scSearched",(function(e){var t;(0,o.t)("search",{search_term:null===(t=e.detail)||void 0===t?void 0:t.searchString})})),window.addEventListener("scProductViewed",(function(e){var t,n,r,a,s,u,l,d,p,h,f,v,m=e.detail;(0,o.t)("view_item",{value:(0,i.m)((null===(t=m.price)||void 0===t?void 0:t.amount)||0,(null===(n=m.price)||void 0===n?void 0:n.currency)||"USD"),currency:null===(r=m.price)||void 0===r?void 0:r.currency,items:[c(c({item_id:null==m?void 0:m.id,item_name:null==m?void 0:m.name,currency:null===(a=null==m?void 0:m.price)||void 0===a?void 0:a.currency,discount:(null==m?void 0:m.discount_amount)?(0,i.m)(null==m?void 0:m.discount_amount,null===(s=null==m?void 0:m.price)||void 0===s?void 0:s.currency):0,price:(0,i.m)(null===(u=null==m?void 0:m.price)||void 0===u?void 0:u.amount,null===(l=null==m?void 0:m.price)||void 0===l?void 0:l.currency),quantity:(null==m?void 0:m.quantity)||1},(null===(d=null==m?void 0:m.variant_options)||void 0===d?void 0:d.length)?{item_variant:null==m?void 0:m.variant_options.map((function(e){return e.name})).join(" / ")}:{}),(null===(h=null===(p=null==m?void 0:m.product_collections)||void 0===p?void 0:p.data)||void 0===h?void 0:h.length)?{item_category:null===(v=null===(f=null==m?void 0:m.product_collections)||void 0===f?void 0:f.data)||void 0===v?void 0:v.map((function(e){return e.name})).join(", ")}:{})]})})),window.addEventListener("scProductsViewed",(function(e){var t,n=e.detail;(0,o.t)("view_item_list",c(c({},(null==n?void 0:n.collectionId)?{item_list_id:n.collectionId}:{}),{},{item_list_name:n.pageTitle,items:null===(t=null==n?void 0:n.products)||void 0===t?void 0:t.map((function(e){var t,r,i,o;return c(c(c({item_id:null==e?void 0:e.id,item_name:null==e?void 0:e.name},(null===(r=null===(t=null==e?void 0:e.product_collections)||void 0===t?void 0:t.data)||void 0===r?void 0:r.length)?{item_category:null===(o=null===(i=null==e?void 0:e.product_collections)||void 0===i?void 0:i.data)||void 0===o?void 0:o.map((function(e){return e.name})).join(", ")}:{}),(null==n?void 0:n.collectionId)?{item_list_id:n.collectionId}:{}),{},{item_list_name:n.pageTitle})}))}))}))},6402:function(e,t,n){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"polite",t=document.createElement("div");t.id="a11y-speak-".concat(e),t.className="a11y-speak-region",t.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),t.setAttribute("aria-live",e),t.setAttribute("aria-relevant","additions text"),t.setAttribute("aria-atomic","true");var n=document.body;return n&&n.appendChild(t),t}n.d(t,{s:function(){return a}});var i,o="";function a(e,t){!function(){for(var e=document.getElementsByClassName("a11y-speak-region"),t=document.getElementById("a11y-speak-intro-text"),n=0;n<e.length;n++)e[n].textContent="";t&&t.setAttribute("hidden","hidden")}(),e=function(e){return e=e.replace(/<[^<>]+>/g," "),o===e&&(e+=" "),o=e,e}(e);var n=document.getElementById("a11y-speak-intro-text"),r=document.getElementById("a11y-speak-assertive"),i=document.getElementById("a11y-speak-polite");r&&"assertive"===t?r.textContent=e:i&&(i.textContent=e),n&&n.removeAttribute("hidden")}i=function(){var e=document.getElementById("a11y-speak-intro-text"),t=document.getElementById("a11y-speak-assertive"),n=document.getElementById("a11y-speak-polite");null===e&&function(){var e=document.createElement("p");e.id="a11y-speak-intro-text",e.className="a11y-speak-intro-text",e.textContent=wp.i18n.__("Notifications"),e.setAttribute("style","position: absolute;margin: -1px;padding: 0;height: 1px;width: 1px;overflow: hidden;clip: rect(1px, 1px, 1px, 1px);-webkit-clip-path: inset(50%);clip-path: inset(50%);border: 0;word-wrap: normal !important;"),e.setAttribute("hidden","hidden");var t=document.body;t&&t.appendChild(e)}(),null===t&&r("assertive"),null===n&&r("polite")},"undefined"!=typeof document&&("complete"!==document.readyState&&"interactive"!==document.readyState?document.addEventListener("DOMContentLoaded",i):i())},3506:function(e,t,n){n.d(t,{g:function(){return i},r:function(){return o}});var r=n(4805);function i(e,t){return(0,r.g)(e)[t]}function o(e){var t=e.indexOf("?");if(-1===t)return e;for(var n=(0,r.g)(e),i=e.substr(0,t),o=arguments.length,a=new Array(o>1?o-1:0),c=1;c<o;c++)a[c-1]=arguments[c];a.forEach((function(e){return delete n[e]}));var s=(0,r.b)(n);return s?i+"?"+s:i}},868:function(e,t,n){n.r(t),n.d(t,{sc_product_item_list:function(){return m}});var r=n(4467),i=n(467),o=n(9394),a=n(3029),c=n(2901),s=n(9280),u=n.n(s),l=n(1346),d=n(6402),p=n(4883),h=(n(6250),n(4805));function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.A)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var m=function(){return(0,c.A)((function e(t){(0,a.A)(this,e),(0,l.r)(this,t),this.scSearched=(0,l.c)(this,"scSearched",7),this.scProductsViewed=(0,l.c)(this,"scProductsViewed",7),this.ids=void 0,this.sort="created_at:desc",this.query=void 0,this.searchEnabled=!0,this.sortEnabled=!0,this.collectionEnabled=!0,this.collectionId=void 0,this.pageTitle=void 0,this.featured=!1,this.paginationEnabled=!0,this.ajaxPagination=!0,this.paginationAutoScroll=!0,this.layoutConfig=void 0,this.paginationAlignment="center",this.limit=15,this.page=1,this.products=void 0,this.loading=!1,this.busy=!1,this.error=void 0,this.currentPage=1,this.currentQuery=void 0,this.pagination={total:0,total_pages:0},this.collections=void 0,this.selectedCollections=[]}),[{key:"handleProductsChanged",value:function(e,t){var n,r=new Set([].concat((0,o.A)((t||[]).map((function(e){return e.id}))),(0,o.A)((e||[]).map((function(e){return e.id})))));if((null==e?void 0:e.length)!==(null==t?void 0:t.length)||r.size!==e.length){var i=[this.pageTitle,this.paginationEnabled?wp.i18n.sprintf(wp.i18n.__("Page %d","surecart"),this.currentPage):void 0,this.sort?this.renderSortName():void 0,this.query||(null===(n=this.selectedCollections)||void 0===n?void 0:n.length)?wp.i18n.__("Search results","surecart"):void 0].filter((function(e){return!!e})).join(" - ");this.scProductsViewed.emit({products:this.products,pageTitle:i,collectionId:this.collectionId})}}},{key:"componentWillLoad",value:function(){var e;(null===(e=null==this?void 0:this.products)||void 0===e?void 0:e.length)?this.handleProductsChanged(this.products):this.getProducts(),this.collectionEnabled&&this.getCollections()}},{key:"doPagination",value:function(e){if(this.ajaxPagination)return this.page=e,this.updateProducts(),void(this.paginationAutoScroll&&this.el.scrollIntoView({behavior:"smooth"}));var t=(0,h.a)(location.href,{"product-page":e});window.location.replace(t)}},{key:"getProducts",value:(s=(0,i.A)(u().mark((function e(){var t,n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=(0,h.g)(window.location.href),n=t["product-page"],this.page=this.paginationEnabled&&n?parseInt(n):1,e.prev=2,this.loading=!0,e.next=6,this.fetchProducts();case 6:e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:return e.prev=11,this.loading=!1,e.finish(11);case 14:case"end":return e.stop()}}),e,this,[[2,8,11,14]])}))),function(){return s.apply(this,arguments)})},{key:"getCollections",value:(r=(0,i.A)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,p.a)({path:(0,h.a)("surecart/v1/product_collections/",{per_page:100})});case 3:this.collections=e.sent,e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,this,[[0,6]])}))),function(){return r.apply(this,arguments)})},{key:"handleSortChange",value:(n=(0,i.A)(u().mark((function e(){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.page=1,this.updateProducts();case 2:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"updateProducts",value:(t=(0,i.A)(u().mark((function e(){var t,n,r=arguments;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=r.length>0&&void 0!==r[0]&&r[0],e.prev=1,this.busy=!0,e.next=5,this.fetchProducts();case 5:this.query&&t&&this.scSearched.emit({searchString:this.query,searchResultCount:null===(n=this.products)||void 0===n?void 0:n.length,searchResultIds:this.products.map((function(e){return e.id}))}),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(1),console.log("error"),console.error(e.t0),this.error=e.t0.message||wp.i18n.__("An unknown error occurred.","surecart");case 13:return e.prev=13,this.busy=!1,e.finish(13);case 16:case"end":return e.stop()}}),e,this,[[1,8,13,16]])}))),function(){return t.apply(this,arguments)})},{key:"handleIdsChange",value:function(){var e=this;null!==this.debounce&&(clearTimeout(this.debounce),this.debounce=null),this.debounce=window.setTimeout((function(){e.updateProducts(),e.debounce=null}),200)}},{key:"fetchProducts",value:(e=(0,i.A)(u().mark((function e(){var t,n,r,i,o=this;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=(null===(t=this.selectedCollections)||void 0===t?void 0:t.map((function(e){return e.id})))||[],this.collectionId&&(r=[this.collectionId]),e.prev=2,e.next=5,(0,p.a)({path:(0,h.a)("surecart/v1/products/",v(v(v({expand:["prices","featured_product_media","product_medias","product_media.media","variants"],archived:!1,status:["published"],per_page:this.limit,page:this.page,sort:this.sort,product_collection_ids:r},this.featured?{featured:!0}:{}),(null===(n=this.ids)||void 0===n?void 0:n.length)?{ids:this.ids}:{}),this.query?{query:this.query}:{})),parse:!1});case 5:return i=e.sent,this.currentQuery=this.query,this.pagination={total:parseInt(i.headers.get("X-WP-Total")),total_pages:parseInt(i.headers.get("X-WP-TotalPages"))},e.next=10,i.json();case 10:this.products=e.sent,(r.length||this.query)&&(0,d.s)(wp.i18n.sprintf(wp.i18n.__("%s products found","surecart"),this.pagination.total)),e.next=18;break;case 14:return e.prev=14,e.t0=e.catch(2),e.next=18,(0,p.h)(e.t0).then((function(){return o.fetchProducts()})).catch((function(e){o.error=e.message||wp.i18n.__("An unknown error occurred.","surecart")}));case 18:case"end":return e.stop()}}),e,this,[[2,14]])}))),function(){return e.apply(this,arguments)})},{key:"renderSortName",value:function(){switch(this.sort){case"cataloged_at:desc":return wp.i18n.__("Latest","surecart");case"cataloged_at:asc":return wp.i18n.__("Oldest","surecart");case"name:asc":return wp.i18n.__("Alphabetical, A-Z","surecart");case"name:desc":return wp.i18n.__("Alphabetical, Z-A","surecart");default:return wp.i18n.__("Sort","surecart")}}},{key:"toggleSelectCollection",value:function(e){this.selectedCollections.find((function(t){return t.id===e.id}))?this.selectedCollections=this.selectedCollections.filter((function(t){return t.id!==e.id})):this.selectedCollections=[].concat((0,o.A)(this.selectedCollections),[e])}},{key:"getCollectionsAfterFiltered",value:function(){var e,t=this;return(null!==(e=this.collections)&&void 0!==e?e:[]).filter((function(e){return!t.selectedCollections.some((function(t){return t.id===e.id}))}))}},{key:"isPaginationAvailable",value:function(){var e;return!!(null===(e=this.products)||void 0===e?void 0:e.length)&&this.pagination.total>this.products.length&&this.paginationEnabled}},{key:"render",value:function(){var e,t,n,r,i,a,c=this;return(0,l.h)("div",{key:"6408c64fbd0b59e9aa1b0359b0dfcc490f4a8f2e",class:{"product-item-list__wrapper":!0,"product-item-list__has-search":!!this.query}},this.error&&(0,l.h)("sc-alert",{key:"cb15953f986ef3f1d88f3f837f50d3ce47a3216c",type:"danger",open:!0},this.error),(this.searchEnabled||this.sortEnabled||this.collectionEnabled)&&(0,l.h)("div",{key:"a101ad04a589e86fa9f0c8d093d41c10a40866cd",class:"product-item-list__header"},(0,l.h)("div",{key:"e55564b57eaa31b336b9f70820e8394790529b22",class:"product-item-list__controls"},(0,l.h)("div",{key:"23123b910e85dc008e9d7984ec18a6608c65598c",class:"product-item-list__sort"},this.sortEnabled&&(0,l.h)("sc-dropdown",{key:"83eadbcb43854c20f7bab062471e60e8076cd275",style:{"--panel-width":"15em"}},(0,l.h)("sc-button",{key:"79671e76fb3e790e7938bd48b12dffb8a491efe7",type:"text",caret:!0,slot:"trigger"},(0,l.h)("sc-visually-hidden",{key:"b807aa612abcea288ff2ea851d6e94f6e8e09c22"},wp.i18n.__("Dropdown to sort products.","surecart")," "),this.renderSortName(),(0,l.h)("sc-visually-hidden",{key:"d3f51057f0fb170e8465c5d938551989ef0e335e"}," ",wp.i18n.__("selected.","surecart"))),(0,l.h)("sc-menu",{key:"1748bb7c348d2984a531f3eeaa5b3b17b3687c8c","aria-label":wp.i18n.__("Sort Products","surecart")},(0,l.h)("sc-menu-item",{key:"53f7e6fbfb1e390e19435a4a5ba7fd9c35f05fa9","aria-label":wp.i18n.__("Sort by latest","surecart"),onClick:function(){return c.sort="cataloged_at:desc"}},wp.i18n.__("Latest","surecart")),(0,l.h)("sc-menu-item",{key:"f55715b201942ca079ac51d04887071833c3e9ba","aria-label":wp.i18n.__("Sort by oldest","surecart"),onClick:function(){return c.sort="cataloged_at:asc"}},wp.i18n.__("Oldest","surecart")),(0,l.h)("sc-menu-item",{key:"2ddd3d99ece189731314d33cfea794aa2cb9c80f","aria-label":wp.i18n.__("Sort by name, A to Z","surecart"),onClick:function(){return c.sort="name:asc"}},wp.i18n.__("Alphabetical, A-Z","surecart")),(0,l.h)("sc-menu-item",{key:"4003d5a412b3d0ed9a9607396632d0c37bc0acc4","aria-label":wp.i18n.__("Sort by name, Z to A","surecart"),onClick:function(){return c.sort="name:desc"}},wp.i18n.__("Alphabetical, Z-A","surecart")))),this.collectionEnabled&&(null!==(e=this.collections)&&void 0!==e?e:[]).length>0&&(0,l.h)("sc-dropdown",{key:"5d802aad1f066a874d7712147ed19e1a7089c158",style:{"--panel-width":"15rem"}},(0,l.h)("sc-button",{key:"fcb4357e8da11867435a290fb7b1b177f8536b03",type:"text",caret:!0,slot:"trigger"},(0,l.h)("sc-visually-hidden",{key:"38c5edb5b1dd1424ac47ad7ec110e93e854c696b"},wp.i18n.sprintf(wp.i18n.__("Dropdown to filter products by collection. %s selected.","surecart"),(null===(t=this.selectedCollections)||void 0===t?void 0:t.length)?this.selectedCollections.map((function(e){return null==e?void 0:e.name})).join(","):wp.i18n.__("None","surecart"))),(0,l.h)("span",{key:"5b9bc299add9b062b54a9bc1e8fe706642b0948e","aria-hidden":!0}," ",wp.i18n.__("Filter","surecart"))),(0,l.h)("sc-menu",{key:"1fc5548d30df5fc47ca85c340becbbca97fb9a28","aria-label":wp.i18n.__("Filter products","surecart")},(null!==(n=this.collections)&&void 0!==n?n:[]).map((function(e){return(0,l.h)("sc-menu-item",{checked:c.selectedCollections.some((function(t){return(null==t?void 0:t.id)===(null==e?void 0:e.id)})),onClick:function(){return c.toggleSelectCollection(e)},key:null==e?void 0:e.id,"aria-label":wp.i18n.sprintf(wp.i18n.__("Filter by %s","surecart"),null==e?void 0:e.name)},e.name)}))))),(0,l.h)("div",{key:"a1504c73a5d0c071ab9195b89db82904de4e1da5",class:"product-item-list__search"},this.searchEnabled&&((null===(r=this.query)||void 0===r?void 0:r.length)&&this.query===this.currentQuery?(0,l.h)("div",{class:"product-item-list__search-tag"},(0,l.h)("div",{class:"product-item-list__search-label"},wp.i18n.__("Search Results:","surecart")),(0,l.h)("sc-tag",{clearable:!0,onScClear:function(){c.query="",c.currentQuery="",c.updateProducts()},"aria-label":wp.i18n.sprintf(wp.i18n.__("Searched for %s. Press space to clear search.","surecart"),this.query)},this.query)):(0,l.h)("sc-input",{type:"text",placeholder:wp.i18n.__("Search","surecart"),size:"small",onKeyUp:function(e){"Enter"===e.key&&(c.query=e.target.value,c.updateProducts(!0))},value:this.query,clearable:!0},this.query?(0,l.h)("sc-icon",{class:"clear-button",slot:"prefix",name:"x",onClick:function(){c.query=""}}):(0,l.h)("sc-icon",{slot:"prefix",name:"search"}),(0,l.h)("sc-button",{class:"search-button",type:"link",slot:"suffix",busy:this.busy,onClick:function(){c.updateProducts(!0)}},wp.i18n.__("Search","surecart")))))),this.collectionEnabled&&this.selectedCollections.length>0&&(0,l.h)("div",{key:"03a75bc5384dab3ffad8711a452a6ac24d5ab50a",class:"product-item-list__search-tag"},this.selectedCollections.map((function(e){return(0,l.h)("sc-tag",{key:null==e?void 0:e.id,clearable:!0,onScClear:function(){c.toggleSelectCollection(e)}},null==e?void 0:e.name)})))),!(null===(i=this.products)||void 0===i?void 0:i.length)&&!this.loading&&(0,l.h)("sc-empty",{key:"04bc5a3be8805ed387e9df841e4e34df3f951439",class:"product-item-list__empty",icon:"shopping-bag"},wp.i18n.__("No products found.","surecart")),(0,l.h)("section",{key:"1b11f9a08ae5f231c477799ebd6e3c12b6d2ee45",class:"product-item-list","aria-label":wp.i18n.__("Product list","surecart")},this.loading?(0,o.A)(Array((null===(a=this.products)||void 0===a?void 0:a.length)||this.limit||10)).map((function(e,t){return(0,l.h)("div",{class:"product-item-list__loader",key:t},(c.layoutConfig||[]).map((function(e){var t,n;switch(e.blockName){case"surecart/product-item-title":return(0,l.h)("div",{style:{textAlign:"var(--sc-product-title-align)"}},(0,l.h)("sc-skeleton",{style:{width:"80%",display:"inline-block"}}));case"surecart/product-item-image":return(0,l.h)("sc-skeleton",{style:{width:"100%",minHeight:"90%",aspectRatio:null!==(n=null===(t=e.attributes)||void 0===t?void 0:t.ratio)&&void 0!==n?n:"1/1.4","--sc-border-radius-pill":"12px",display:"inline-block"}});case"surecart/product-item-price":return(0,l.h)("div",{style:{textAlign:"var(--sc-product-price-align)"}},(0,l.h)("sc-skeleton",{style:{width:"40%",display:"inline-block"}}));default:return null}})))})):(this.products||[]).map((function(e,t){return(0,l.h)("sc-product-item",v(v({key:null==e?void 0:e.id},c.products.length-1===t?{"aria-label":wp.i18n.sprintf(wp.i18n.__("You have reached the end of product list. %s","surecart"),c.isPaginationAvailable()?wp.i18n.__("Press tab to browse more products using pagination.","surecart"):wp.i18n.__("No more products to browse.","surecart"))}:{}),{},{exportparts:"title, price, image",product:e,layoutConfig:c.layoutConfig}))}))),this.isPaginationAvailable()&&(0,l.h)("div",{key:"293890b47fc0c00064c9e7c4b480b7e7ccf75b2c",class:{"product-item-list__pagination":!0,"--is-aligned-left":"left"===this.paginationAlignment,"--is-aligned-center":"center"===this.paginationAlignment,"--is-aligned-right":"right"===this.paginationAlignment}},(0,l.h)("sc-pagination",{key:"4c80a73728002f933d48642395cc026d98d39198",page:this.page,perPage:this.limit,total:this.pagination.total,totalPages:this.pagination.total_pages,totalShowing:this.limit,onScNextPage:function(){return c.doPagination(c.page+1)},onScPrevPage:function(){return c.doPagination(c.page-1)}})),(this.busy||this.loading)&&(0,l.h)("sc-block-ui",{key:"ba5a393b08ea081b7dfbcdc873ae42271c28da4b"}))}},{key:"el",get:function(){return(0,l.a)(this)}}],[{key:"watchers",get:function(){return{products:["handleProductsChanged"],sort:["handleSortChange"],selectedCollections:["handleSortChange"],query:["handleSortChange"],ids:["handleIdsChange"],limit:["handleIdsChange"],featured:["handleIdsChange"]}}}]);var e,t,n,r,s}();m.style=":host {\n  display: block;\n}\n\n.product-item-list {\n  display: grid;\n  grid-template-columns: repeat(var(--sc-product-item-list-column), 1fr);\n  gap: var(--sc-product-item-list-gap);\n}\n.product-item-list__wrapper {\n  container-type: inline-size;\n  display: grid;\n  gap: var(--sc-spacing-medium);\n}\n@container (max-width: 576px) {\n  .product-item-list__wrapper .product-item-list {\n    grid-template-columns: 1fr;\n  }\n}\n@container (min-width: 576px) and (max-width: 768px) {\n  .product-item-list__wrapper .product-item-list {\n    grid-template-columns: repeat(3, 1fr);\n  }\n}\n.product-item-list__sort, .product-item-list__empty, .product-item-list__search, .product-item-list__search-tag {\n  font-size: 16px;\n}\n.product-item-list__search, .product-item-list__sort {\n  display: flex;\n  align-items: center;\n  gap: var(--sc-spacing-small);\n}\n.product-item-list__controls {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n}\n.product-item-list__loader {\n  display: grid;\n  gap: 0.88rem;\n  padding-top: var(--sc-product-item-padding-top);\n  padding-bottom: var(--sc-product-item-padding-bottom);\n  padding-left: var(--sc-product-item-padding-left);\n  padding-right: var(--sc-product-item-padding-right);\n  margin-top: var(--sc-product-item-margin-top);\n  margin-bottom: var(--sc-product-item-margin-bottom);\n  margin-left: var(--sc-product-item-margin-left);\n  margin-right: var(--sc-product-item-margin-right);\n  border: solid var(--sc-product-item-border-width) var(--sc-product-item-border-color);\n  border-radius: var(--sc-product-item-border-radius);\n  color: var(--sc-product-title-text-color);\n  background-color: var(--sc-product-item-background-color);\n  line-height: 1;\n}\n.product-item-list__pagination {\n  padding: 40px 0 0;\n  width: 100%;\n  font-size: var(--sc-font-size-small, var(--wp--preset--font-size--x-small));\n}\n.product-item-list__search-tag {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: var(--sc-spacing-small);\n}\n.product-item-list__search-label {\n  font-size: var(--sc-font-size-small, var(--wp--preset--font-size--x-small));\n}\n\n.search-button,\n.clear-button {\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity var(--sc-transition-medium) ease-in-out;\n  cursor: pointer;\n}\n\n.product-item-list__has-search .search-button,\n.product-item-list__has-search .clear-button {\n  opacity: 1;\n  visibility: visible;\n}\n\nsc-product-item::part(image) {\n  aspect-ratio: var(--sc-product-image-aspect-ratio);\n}\n\nsc-dropdown sc-button::part(base):focus-visible {\n  border: 1px dashed var(--sc-product-item-border-color, --sc-color-gray-50);\n}\n\nsc-pagination {\n  font-size: var(--sc-pagination-font-size);\n}"},45:function(e,t,n){n.d(t,{A:function(){return i}});var r=n(8587);function i(e,t){if(null==e)return{};var n,i,o=(0,r.A)(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}},8587:function(e,t,n){function r(e,t){if(null==e)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)>=0)continue;n[r]=e[r]}return n}n.d(t,{A:function(){return r}})}}]);