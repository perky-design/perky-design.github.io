(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"3nLz":function(e,t,a){"use strict";a("t+fG")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rzGZ"),a("Dq+y"),a("8npG"),a("YbXK"),a("eMsz"),a("3nLz");var r=a("5NKs");t.__esModule=!0,t.default=void 0;var i,n=r(a("v06X")),s=r(a("XEEL")),o=r(a("uDP2")),l=r(a("j8BX")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=E([].concat(t.fluid))),t.fixed&&(t.fixed=E([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},m=Object.create({}),g=function(e){var t=u(e),a=f(t);return m[a]||!1},p="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,v=new WeakMap;function y(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function E(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function k(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var L=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(v.has(e.target)){var t=v.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),v.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),v.set(e,t)),function(){a.unobserve(e),v.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?k(e,!0):"")+k(e)})).join("")+"<img "+d+s+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},I=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(z,(0,l.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},z=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.onClick,f=e.loading,m=e.draggable,g=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","onClick","loading","draggable"]);return d.default.createElement("img",(0,l.default)({sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,onClick:u,ref:t,loading:f,draggable:m,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:c.default.object,onError:c.default.func,onClick:c.default.func,onLoad:c.default.func};var C=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!p&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(p||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=L(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),m[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,p=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,v=e.Tag,E=e.itemProp,k=e.loading,L=e.draggable,C=!1===this.state.fadeIn||this.state.imgLoaded,O=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,l.default)({opacity:C?1:0,transition:O?"opacity "+b+"ms":"none"},o),_="boolean"==typeof h?"lightgray":h,V={transitionDelay:b+"ms"},j=(0,l.default)({opacity:this.state.imgLoaded?0:1},O&&V,{},o,{},f),x={title:t,alt:this.state.isVisible?"":a,style:j,className:m,itemProp:E};if(g){var W=g,T=W[0];return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(T.srcSet)},d.default.createElement(v,{style:{width:"100%",paddingBottom:100/T.aspectRatio+"%"}}),_&&d.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:_,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},O&&V)}),T.base64&&d.default.createElement(I,{src:T.base64,spreadProps:x,imageVariants:W,generateSources:w}),T.tracedSVG&&d.default.createElement(I,{src:T.tracedSVG,spreadProps:x,imageVariants:W,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(W),d.default.createElement(z,{alt:a,title:t,sizes:T.sizes,src:T.src,crossOrigin:this.props.crossOrigin,srcSet:T.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:E,loading:k,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,l.default)({alt:a,title:t,loading:k},T,{imageVariants:W}))}}))}if(p){var q=p,G=q[0],M=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:G.width,height:G.height},n);return"inherit"===n.display&&delete M.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:M,ref:this.handleRef,key:"fixed-"+JSON.stringify(G.srcSet)},_&&d.default.createElement(v,{title:t,style:(0,l.default)({backgroundColor:_,width:G.width,opacity:this.state.imgLoaded?0:1,height:G.height},O&&V)}),G.base64&&d.default.createElement(I,{src:G.base64,spreadProps:x,imageVariants:q,generateSources:w}),G.tracedSVG&&d.default.createElement(I,{src:G.tracedSVG,spreadProps:x,imageVariants:q,generateSources:S}),this.state.isVisible&&d.default.createElement("picture",null,y(q),d.default.createElement(z,{alt:a,title:t,width:G.width,height:G.height,sizes:G.sizes,src:G.src,crossOrigin:this.props.crossOrigin,srcSet:G.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,onClick:this.props.onClick,itemProp:E,loading:k,draggable:L})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,l.default)({alt:a,title:t,loading:k},G,{imageVariants:q}))}}))}return null},t}(d.default.Component);C.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var O=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),R=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});C.propTypes={resolutions:O,sizes:R,fixed:c.default.oneOfType([O,c.default.arrayOf(O)]),fluid:c.default.oneOfType([R,c.default.arrayOf(R)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onClick:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var _=C;t.default=_},Bl7J:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("Wbzz");t.a=function(e){var t=e.title,a=e.children,r=i.a.useState(!1),s=r[0],o=r[1];return i.a.createElement("div",{className:"site-wrapper "+(s?"site-head-open":"")},i.a.createElement("header",{className:"site-head"},i.a.createElement("div",{id:"menu",className:"site-head-container"},i.a.createElement("a",{className:"nav-burger",href:"#menu",onClick:function(){return o(!s)}},i.a.createElement("div",{className:"hamburger hamburger--collapse","aria-label":"Menu",role:"button","aria-controls":"navigation"},i.a.createElement("div",{className:"hamburger-box"},i.a.createElement("div",{className:"hamburger-inner"}))," ",i.a.createElement("div",{className:"hamburger-text-menu-text hidden"},"Menu"))),i.a.createElement("nav",{id:"swup",className:"site-head-left"},i.a.createElement("ul",{className:"nav",role:"menu"},i.a.createElement("li",{className:"nav-home nav-current",role:"menuitem"},i.a.createElement(n.Link,{to:"/"},"Home")),i.a.createElement("li",{className:"nav-about",role:"menuitem"},i.a.createElement(n.Link,{to:"/about"},"About")),i.a.createElement("li",{className:"nav-elements",role:"menuitem"},i.a.createElement(n.Link,{to:"/elements"},"Elements")),i.a.createElement("li",{className:"nav-tags",role:"menuitem"},i.a.createElement(n.Link,{to:"/tags"},"Tags")))),i.a.createElement("div",{className:"site-head-center"},i.a.createElement(n.Link,{className:"site-head-logo",to:"/"},t)),i.a.createElement("div",{className:"site-head-right"},i.a.createElement("div",{className:"social-links"},i.a.createElement("a",{href:"https://www.facebook.com",title:"Facebook",target:"_blank",rel:"noopener noreferrer"},"Facebook"),i.a.createElement("a",{href:"https://twitter.com",title:"Twitter",target:"_blank",rel:"noopener noreferrer"},"Twitter"),i.a.createElement(n.Link,{to:"/rss.xml",title:"RSS",target:"_blank",rel:"noopener noreferrer"},"RSS"),i.a.createElement("a",{href:"https://github.com/jooplaan/gatsby-london-night-and-day",title:"GitHub",target:"_blank",rel:"noopener noreferrer"},"GitHub"))))),i.a.createElement("main",{id:"site-main",className:"site-main"},i.a.createElement("div",{id:"swup",className:"transition-fade"},a)),i.a.createElement("footer",{className:"site-foot"},"© ",(new Date).getFullYear()," ",i.a.createElement(n.Link,{to:"/"},t)," — Built with"," ",i.a.createElement("a",{href:"https://gatsbyjs.org",target:"_blank",rel:"noopener noreferrer"},"Gatsby")))}},SGlo:function(e,t,a){"use strict";var r=a("rj/q"),i=a("N+BI").getWeak,n=a("1a8y"),s=a("BjK0"),o=a("xa9o"),l=a("yde8"),d=a("Wadk"),c=a("qDzq"),u=a("O1i0"),f=d(5),m=d(6),g=0,p=function(e){return e._l||(e._l=new h)},h=function(){this.a=[]},b=function(e,t){return f(e.a,(function(e){return e[0]===t}))};h.prototype={get:function(e){var t=b(this,e);if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var a=b(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=m(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,n){var d=e((function(e,r){o(e,d,t,"_i"),e._t=t,e._i=g++,e._l=void 0,null!=r&&l(r,a,e[n],e)}));return r(d.prototype,{delete:function(e){if(!s(e))return!1;var a=i(e);return!0===a?p(u(this,t)).delete(e):a&&c(a,this._i)&&delete a[this._i]},has:function(e){if(!s(e))return!1;var a=i(e);return!0===a?p(u(this,t)).has(e):a&&c(a,this._i)}}),d},def:function(e,t,a){var r=i(n(t),!0);return!0===r?p(e).set(t,a):r[e._i]=a,e},ufstore:p}},eMsz:function(e,t,a){"use strict";var r,i=a("emib"),n=a("Wadk")(0),s=a("IYdN"),o=a("N+BI"),l=a("k5Iv"),d=a("SGlo"),c=a("BjK0"),u=a("O1i0"),f=a("O1i0"),m=!i.ActiveXObject&&"ActiveXObject"in i,g=o.getWeak,p=Object.isExtensible,h=d.ufstore,b=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},v={get:function(e){if(c(e)){var t=g(e);return!0===t?h(u(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return d.def(u(this,"WeakMap"),e,t)}},y=e.exports=a("94Pd")("WeakMap",b,v,d,!0,!0);f&&m&&(l((r=d.getConstructor(b,"WeakMap")).prototype,v),o.NEED=!0,n(["delete","has","get","set"],(function(e){var t=y.prototype,a=t[e];s(t,e,(function(t,i){if(c(t)&&!p(t)){this._f||(this._f=new r);var n=this._f[e](t,i);return"set"==e?this:n}return a.call(this,t,i)}))})))},"t+fG":function(e,t,a){var r=a("P8UN"),i=a("96qb"),n=a("ap2Z"),s=/"/g,o=function(e,t,a,r){var i=String(n(e)),o="<"+t;return""!==a&&(o+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),o+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(o),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}}}]);
//# sourceMappingURL=0fc6c86f12196c444ea54c4c1c249e097ff3f091-b67946614cef0b5d0e5a.js.map