(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{2167:function(e,t,r){"use strict";var n=r(3848);t.default=void 0;var o,a=(o=r(7294))&&o.__esModule?o:{default:o},c=r(1063),i=r(4651),l=r(7426);var s={};function u(e,t,r,n){if(e&&c.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;s[t+"%"+r+(o?"%"+o:"")]=!0}}var f=function(e){var t,r=!1!==e.prefetch,o=i.useRouter(),f=a.default.useMemo((function(){var t=c.resolveHref(o,e.href,!0),r=n(t,2),a=r[0],i=r[1];return{href:a,as:e.as?c.resolveHref(o,e.as):i||a}}),[o,e.href,e.as]),d=f.href,p=f.as,v=e.children,h=e.replace,b=e.shallow,y=e.scroll,m=e.locale;"string"===typeof v&&(v=a.default.createElement("a",null,v));var g=(t=a.default.Children.only(v))&&"object"===typeof t&&t.ref,x=l.useIntersection({rootMargin:"200px"}),j=n(x,2),O=j[0],w=j[1],_=a.default.useCallback((function(e){O(e),g&&("function"===typeof g?g(e):"object"===typeof g&&(g.current=e))}),[g,O]);a.default.useEffect((function(){var e=w&&r&&c.isLocalURL(d),t="undefined"!==typeof m?m:o&&o.locale,n=s[d+"%"+p+(t?"%"+t:"")];e&&!n&&u(o,d,p,{locale:t})}),[p,d,w,m,r,o]);var E={ref:_,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,i,l){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(r))&&(e.preventDefault(),null==i&&n.indexOf("#")>=0&&(i=!1),t[o?"replace":"push"](r,n,{shallow:a,locale:l,scroll:i}))}(e,o,d,p,h,b,y,m)},onMouseEnter:function(e){c.isLocalURL(d)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),u(o,d,p,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var N="undefined"!==typeof m?m:o&&o.locale,P=o&&o.isLocaleDomain&&c.getDomainLocale(p,N,o&&o.locales,o&&o.domainLocales);E.href=P||c.addBasePath(c.addLocale(p,N,o&&o.defaultLocale))}return a.default.cloneElement(t,E)};t.default=f},7426:function(e,t,r){"use strict";var n=r(3848);Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootMargin,r=e.disabled||!c,l=o.useRef(),s=o.useState(!1),u=n(s,2),f=u[0],d=u[1],p=o.useCallback((function(e){l.current&&(l.current(),l.current=void 0),r||f||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t=e.rootMargin||"",r=i.get(t);if(r)return r;var n=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=n.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return i.set(t,r={id:t,observer:o,elements:n}),r}(r),o=n.id,a=n.observer,c=n.elements;return c.set(e,t),a.observe(e),function(){c.delete(e),a.unobserve(e),0===c.size&&(a.disconnect(),i.delete(o))}}(e,(function(e){return e&&d(e)}),{rootMargin:t}))}),[r,t,f]);return o.useEffect((function(){if(!c&&!f){var e=a.requestIdleCallback((function(){return d(!0)}));return function(){return a.cancelIdleCallback(e)}}}),[f]),[p,f]};var o=r(7294),a=r(3447),c="undefined"!==typeof IntersectionObserver;var i=new Map},234:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return s}});var n=r(5893);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var a=r(1664);function c(){return(0,n.jsx)("header",{children:(0,n.jsxs)("div",{className:"flex py-1.5 items-center",children:[(0,n.jsx)(a.default,{href:"/",as:"/blog/",children:(0,n.jsx)("a",{className:"mr-auto hover:bg-gray-700 hover:no-underline p-3 hover:text-white py-1.5 rounded transition duration-200",children:(0,n.jsx)("h1",{className:"text-2xl mb-0",children:"Douglas Greyling"})})}),(0,n.jsx)(a.default,{href:"/posts",as:"/blog/posts",children:(0,n.jsx)("a",{className:"button",children:"All Posts"})})]})})}r(5210);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=function(e){var t=e.Component,r=e.pageProps;return(0,n.jsxs)("div",{className:"h-full flex flex-col",children:[(0,n.jsx)("div",{className:"sticky top-0 shadow-md bg-gray-800 text-white",children:(0,n.jsx)("div",{className:"container mx-auto md:px-52 px-10",children:(0,n.jsx)(c,{})})}),(0,n.jsx)("main",{className:"bg-gray-100 pt-10 flex-auto",children:(0,n.jsx)("div",{className:"container mx-auto md:px-52 px-10 overflow-hidden",children:(0,n.jsx)(t,l({},r))})})]})}},1780:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(234)}])},5210:function(){},1664:function(e,t,r){e.exports=r(2167)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1780),t(4651)}));var r=e.O();_N_E=r}]);