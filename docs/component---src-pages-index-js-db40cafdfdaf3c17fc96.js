(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{LyGV:function(e,t,a){"use strict";a("2Spj"),a("/SS/"),a("hHhE"),a("V+eJ"),a("91GP"),a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},o=function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}}(),r=a("q1tI"),n=h(r),c=h(a("TSYQ")),l=h(a("17x9")),s=h(a("z7Wo")),u=h(a("lZVL")),d=a("fdH9");function h(e){return e&&e.__esModule?e:{default:e}}var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.handleClick=a.handleClick.bind(a),a.handleTouchStart=a.handleTouchStart.bind(a),a.handleTouchMove=a.handleTouchMove.bind(a),a.handleTouchEnd=a.handleTouchEnd.bind(a),a.handleFocus=a.handleFocus.bind(a),a.handleBlur=a.handleBlur.bind(a),a.previouslyChecked=!(!e.checked&&!e.defaultChecked),a.state={checked:!(!e.checked&&!e.defaultChecked),hasFocus:!1},a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidUpdate",value:function(e){e.checked!==this.props.checked&&this.setState({checked:!!this.props.checked})}},{key:"handleClick",value:function(e){var t=this.input;if(e.target!==t&&!this.moved)return this.previouslyChecked=t.checked,e.preventDefault(),t.focus(),void t.click();var a=this.props.hasOwnProperty("checked")?this.props.checked:t.checked;this.setState({checked:a})}},{key:"handleTouchStart",value:function(e){this.startX=(0,d.pointerCoord)(e).x,this.activated=!0}},{key:"handleTouchMove",value:function(e){if(this.activated&&(this.moved=!0,this.startX)){var t=(0,d.pointerCoord)(e).x;this.state.checked&&t+15<this.startX?(this.setState({checked:!1}),this.startX=t,this.activated=!0):t-15>this.startX&&(this.setState({checked:!0}),this.startX=t,this.activated=t<this.startX+5)}}},{key:"handleTouchEnd",value:function(e){if(this.moved){var t=this.input;if(e.preventDefault(),this.startX){var a=(0,d.pointerCoord)(e).x;!0===this.previouslyChecked&&this.startX+4>a?this.previouslyChecked!==this.state.checked&&(this.setState({checked:!1}),this.previouslyChecked=this.state.checked,t.click()):this.startX-4<a&&this.previouslyChecked!==this.state.checked&&(this.setState({checked:!0}),this.previouslyChecked=this.state.checked,t.click()),this.activated=!1,this.startX=null,this.moved=!1}}}},{key:"handleFocus",value:function(e){var t=this.props.onFocus;t&&t(e),this.setState({hasFocus:!0})}},{key:"handleBlur",value:function(e){var t=this.props.onBlur;t&&t(e),this.setState({hasFocus:!1})}},{key:"getIcon",value:function(e){var a=this.props.icons;return a?void 0===a[e]?t.defaultProps.icons[e]:a[e]:null}},{key:"render",value:function(){var e=this,t=this.props,a=t.className,o=(t.icons,function(e,t){var a={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(a[i]=e[i]);return a}(t,["className","icons"])),r=(0,c.default)("react-toggle",{"react-toggle--checked":this.state.checked,"react-toggle--focus":this.state.hasFocus,"react-toggle--disabled":this.props.disabled},a);return n.default.createElement("div",{className:r,onClick:this.handleClick,onTouchStart:this.handleTouchStart,onTouchMove:this.handleTouchMove,onTouchEnd:this.handleTouchEnd},n.default.createElement("div",{className:"react-toggle-track"},n.default.createElement("div",{className:"react-toggle-track-check"},this.getIcon("checked")),n.default.createElement("div",{className:"react-toggle-track-x"},this.getIcon("unchecked"))),n.default.createElement("div",{className:"react-toggle-thumb"}),n.default.createElement("input",i({},o,{ref:function(t){e.input=t},onFocus:this.handleFocus,onBlur:this.handleBlur,className:"react-toggle-screenreader-only",type:"checkbox"})))}}]),t}(r.PureComponent);t.default=p,p.displayName="Toggle",p.defaultProps={icons:{checked:n.default.createElement(s.default,null),unchecked:n.default.createElement(u.default,null)}},p.propTypes={checked:l.default.bool,disabled:l.default.bool,defaultChecked:l.default.bool,onChange:l.default.func,onFocus:l.default.func,onBlur:l.default.func,className:l.default.string,name:l.default.string,value:l.default.string,id:l.default.string,"aria-labelledby":l.default.string,"aria-label":l.default.string,icons:l.default.oneOfType([l.default.bool,l.default.shape({checked:l.default.node,unchecked:l.default.node})])}},RXBc:function(e,t,a){"use strict";a.r(t);var i=a("txSG"),o=a("q1tI"),r=a.n(o),n=a("Bl7J"),c=a("vrFN"),l=(a("LyGV"),a("91GP"),a("XZER")),s=a.n(l),u=a("9yeO");function d(e){var t=e.title,a=e.date,o=e.url,r=e.type,n=e.description,c=new Date(a).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return Object(i.e)("div",{sx:{my:[4,5],"& aside":{transition:"color 0.25s"},"&:hover aside":{color:["none","#fff"]}}},Object(i.e)(u.a,{main:Object(i.e)("a",{href:o,sx:{textDecoration:"none",color:"inherit"}},Object(i.e)(i.b.h3,{sx:{my:[1,0]}},t),n&&Object(i.e)("p",{sx:{fontSize:"16px",opacity:.8,m:0,pt:[0,1]}},n)),aside:Object(i.e)("div",{sx:{verticalAlign:"bottom",opacity:[.8,1],pt:[0,1]}},Object(i.e)(i.b.h4,{sx:{textTransform:"uppercase",m:0,fontSize:[1,2],fontWeight:[700,900],display:["inline","block"]}},r),Object(i.e)("small",{sx:{ml:[2,0]}},c))}))}var h=function(){return Object(i.e)(r.a.Fragment,null,s.a.map((function(e,t){return Object(i.e)(d,Object.assign({key:t},e))})))},p=(a("0mN4"),a("ovr8"));function A(e){var t=e.url,a=e.title,o=e.children,r=e.size,n=void 0===r?24:r;return Object(i.e)("a",{href:t,sx:{color:"inherit"}},Object(i.e)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 "+n+" "+n,height:"28",width:"28",fill:"currentColor"},Object(i.e)("title",null,a),o))}function f(){return Object(i.e)(A,{url:"https://twitter.com/pomber",title:"Twitter"},Object(i.e)("path",{d:"M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"}))}function b(){return Object(i.e)(A,{url:"https://github.com/pomber",title:"GitHub"},Object(i.e)("path",{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}))}function m(){return Object(i.e)(A,{url:"https://medium.com/@pomber",title:"Medium"},Object(i.e)("path",{d:"M0 0v24h24V0H0zm19.938 5.686L18.651 6.92a.376.376 0 0 0-.143.362v9.067a.376.376 0 0 0 .143.361l1.257 1.234v.271h-6.322v-.27l1.302-1.265c.128-.128.128-.165.128-.36V8.99l-3.62 9.195h-.49L6.69 8.99v6.163a.85.85 0 0 0 .233.707l1.694 2.054v.271H3.815v-.27L5.51 15.86a.82.82 0 0 0 .218-.707V8.027a.624.624 0 0 0-.203-.527L4.019 5.686v-.27h4.674l3.613 7.923 3.176-7.924h4.456v.271z"})," ")}function g(){return Object(i.e)(A,{url:"/rss.xml",title:"RSS",size:"16"},Object(i.e)("path",{d:"m7,16c0,-3.86599 -3.13401,-7 -7,-7l0,-3c5.52285,0 10,4.47715 10,10l-3,0zm-5,0c-1.10457,0 -2,-0.89543 -2,-2c0,-1.10457 0.89543,-2 2,-2c1.10457,0 2,0.89543 2,2c0,1.10457 -0.89543,2 -2,2zm11,0c0,-7.1797 -5.8203,-13 -13,-13l0,-3c8.83656,0 16,7.16344 16,16l-3,0zm0,0"}))}var y=a("9eSz"),v=a.n(y);var j=function(){var e=p.data;return Object(i.e)("div",{sx:{mb:[4,0]}},Object(i.e)(v.a,{fixed:e.file.childImageSharp.fixed,style:{borderRadius:"50%",display:"block",margin:"5px auto"},alt:"Rodrigo Pombo"}),Object(i.e)("div",{sx:{pt:2,mx:["auto",0],textAlign:"center","& > :not(:last-child)":{pr:3}}},Object(i.e)(f,null),Object(i.e)(b,null),Object(i.e)(m,null),Object(i.e)(g,null)))};var k=function(){return Object(i.e)(u.a,{stx:{pb:[3,5]},main:Object(i.e)(r.a.Fragment,null,Object(i.e)(i.b.h1,null,"I'm Rodrigo Pombo"),Object(i.e)(i.b.p,null,"Also known as pombo, pomber, pombus, pombex, pomberman, or any"," ",Object(i.e)(i.b.inlineCode,{sx:{whiteSpace:"pre"}},"/pomb[a-z]+/")," ","match."),Object(i.e)(i.b.p,null,"I write code, write about writing code, sometimes talk about it, usually tweet about it.")),aside:Object(i.e)(j,null)})};t.default=function(e){e.data;return Object(i.e)(n.a,null,Object(i.e)(c.a,null),Object(i.e)(k,null),Object(i.e)(h,null))}},TSYQ:function(e,t,a){var i;a("LK8F"),function(){"use strict";var a={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var i=arguments[t];if(i){var r=typeof i;if("string"===r||"number"===r)e.push(i);else if(Array.isArray(i)&&i.length){var n=o.apply(null,i);n&&e.push(n)}else if("object"===r)for(var c in i)a.call(i,c)&&i[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(i=function(){return o}.apply(t,[]))||(e.exports=i)}()},XZER:function(e,t){e.exports=[{type:"project",title:"Code Surfer v3",description:"Rad code slides",date:"2019/12/10",url:"https://codesurfer.pomb.us"},{type:"blog post",title:"Build your own React",description:"We are going to rewrite React from scratch. Step by step. Following the architecture from the real React code...",date:"2019/11/13",url:"/build-your-own-react"},{type:"project",title:"Hitchcock",description:"A debugging tool for React Suspense",date:"2019/10/27",url:"https://github.com/pomber/hitchcock"},{type:"project",title:"Codem Ipsum",description:"Lorem ipsum but for code",date:"2019/09/27",url:"https://codemipsum.pomb.us"},{type:"project",title:"use-spring",description:"Minimal React hook for spring animations",date:"2019/09/24",url:"https://github.com/pomber/use-spring"},{type:"project",title:"Spring Editor",description:"Stiffness? Damping? Mass? Spring Editor",date:"2019/09/22",url:"https://springs.pomb.us"},{type:"project",title:"Gatsby Waves",description:"Bring scrollytelling to your MDX",date:"2019/08/01",url:"https://waves.pomb.us/"},{type:"talk",title:"Build your own React",description:"— at jsday 2019",date:"2019/05/09",url:"https://youtu.be/8Kc2REHdwnQ"},{type:"blog post",title:"About React Suspense and Concurrent Mode",date:"2019/04/13",url:"https://dev.to/pomber/about-react-suspense-and-concurrent-mode-21aj"},{type:"talk",title:"And the rest is Git History",description:"— at React Amsterdam 2019",date:"2019/04/12",url:"https://youtu.be/Hax7TRy-l4g?t=1259"},{type:"project",title:"Git History",description:"Quickly browse the history of a file from any git repository",date:"2019/03/19",url:"https://githistory.xyz/"},{type:"project",title:"Write Code Online",date:"2019/02/28",description:"A minimalist online code editor",url:"https://writecode.pomb.us/"},{type:"blog post",title:"React Hooks TL;DR",description:"React hooks for people in a hurry",date:"2018/12/14",url:"https://medium.com/@pomber/react-hooks-tl-dr-a5bfdd9189cb"},{type:"blog post",title:"Lazy loading (and preloading) components in React 16.6",date:"2018/11/26",url:"https://medium.com/hackernoon/lazy-loading-and-preloading-components-in-react-16-6-804de091c82d"},{type:"blog post",title:"Classes? Where we’re going, we don’t need classes — React 16.6",date:"2018/10/24",url:"https://blog.usejournal.com/classes-where-were-going-we-don-t-need-classes-react-16-6-e643ffc8c38d"},{type:"talk",title:"¿Se puede hacer eso con JSX?",description:"— at Meetup.js Argentina",date:"2018/09/04",url:"https://youtu.be/O7nErTuuSLw"},{type:"project",title:"Forkbox",description:"Fork, dev, test, and merge PRs online",date:"2018/08/23",url:"https://github.com/pomber/forkbox"},{type:"blog post",title:"JSX can do that?",description:"Let's implement merge sort with JSX",date:"2018/05/06",url:"https://engineering.hexacta.com/jsx-can-do-that-1b2666c23a32"},{type:"project",title:"Escher Bot",description:"Bot trying to tweet a self-linked tweet",date:"2018/05/01",url:"https://twitter.com/mauritscorneIis"},{type:"blog post",title:"Didact Fiber: Incremental reconciliation",description:"Build your own React, this time with fibers",date:"2017/10/19",url:"https://engineering.hexacta.com/didact-fiber-incremental-reconciliation-b2fe028dcaec"},{type:"blog post",title:"Why aren't you using Prettier?",description:"How Prettier made me a 10% happier programmer",date:"2017/06/30",url:"https://engineering.hexacta.com/why-arent-you-using-prettier-4fe0a77713e8"},{type:"blog post",title:"Didact: Components and State",description:"Build your own React series",date:"2017/05/24",url:"https://engineering.hexacta.com/didact-components-and-state-53ab4c900e37"},{type:"blog post",title:"Didact: Instances, reconciliation and virtual DOM",description:"Build your own React series",date:"2017/05/09",url:"https://engineering.hexacta.com/didact-instances-reconciliation-and-virtual-dom-9316d650f1d0"},{type:"blog post",title:"Didact: Element creation and JSX",description:"Build your own React series",date:"2017/05/02",url:"https://engineering.hexacta.com/didact-element-creation-and-jsx-d05171c55c56"},{type:"blog post",title:"Didact: Rendering DOM elements",description:"Build your own React series",date:"2017/05/02",url:"https://engineering.hexacta.com/didact-rendering-dom-elements-91c9aa08323b"},{type:"blog post",title:"Didact: a DIY guide to build your own React",description:"Build your own React series",date:"2017/04/30",url:"https://engineering.hexacta.com/didact-learning-how-react-works-by-building-it-from-scratch-51007984e5c5"}]},fdH9:function(e,t,a){"use strict";a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0}),t.pointerCoord=function(e){if(e){var t=e.changedTouches;if(t&&t.length>0){var a=t[0];return{x:a.clientX,y:a.clientY}}var i=e.pageX;if(void 0!==i)return{x:i,y:e.pageY}}return{x:0,y:0}}},lZVL:function(e,t,a){"use strict";a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var i,o=a("q1tI"),r=(i=o)&&i.__esModule?i:{default:i};t.default=function(){return r.default.createElement("svg",{width:"10",height:"10",viewBox:"0 0 10 10"},r.default.createElement("title",null,"switch-x"),r.default.createElement("path",{d:"M9.9 2.12L7.78 0 4.95 2.828 2.12 0 0 2.12l2.83 2.83L0 7.776 2.123 9.9 4.95 7.07 7.78 9.9 9.9 7.776 7.072 4.95 9.9 2.12",fill:"#fff",fillRule:"evenodd"}))}},ovr8:function(e){e.exports=JSON.parse('{"data":{"file":{"childImageSharp":{"fixed":{"base64":"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAGAABAAMBAAAAAAAAAAAAAAAAAAEEBQP/xAAVAQEBAAAAAAAAAAAAAAAAAAABAv/aAAwDAQACEAMQAAABt8LWXLpiiMwGgKn/xAAbEAABBQEBAAAAAAAAAAAAAAABAAIDERIhIv/aAAgBAQABBQK6Re4qM7aOo1lnhhNRXiETyBf/xAAWEQEBAQAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8BDYT/xAAXEQEBAQEAAAAAAAAAAAAAAAABEBEx/9oACAECAQE/AVyPJ//EABsQAQEBAAIDAAAAAAAAAAAAAAEAEQIxITJR/9oACAEBAAY/Aru2byusBck7yXDft7X/xAAaEAEBAQEBAQEAAAAAAAAAAAABEQAxIWFx/9oACAEBAAE/IUGov5kKQb6LmKBLTHrPKOhNQO5m0CjvLtcruGg5v//aAAwDAQACAAMAAAAQr8g9/8QAFxEAAwEAAAAAAAAAAAAAAAAAAAEQMf/aAAgBAwEBPxATRuf/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAIAQIBAT8QKVJkf//EABwQAQEAAwADAQAAAAAAAAAAAAERACFBMWFx8P/aAAgBAQABPxA8gfAMWu5BowCc2qGlwChIAunWVaVSe+fuYZmB9rjSEwccCJRwrH25HPVkNfM//9k=","width":150,"height":150,"src":"/static/21fa95ff24aaea4398fa96d31036e210/aabdf/profile.jpg","srcSet":"/static/21fa95ff24aaea4398fa96d31036e210/aabdf/profile.jpg 1x,\\n/static/21fa95ff24aaea4398fa96d31036e210/07ab6/profile.jpg 1.5x,\\n/static/21fa95ff24aaea4398fa96d31036e210/9dc27/profile.jpg 2x"}}}}}')},z7Wo:function(e,t,a){"use strict";a("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var i,o=a("q1tI"),r=(i=o)&&i.__esModule?i:{default:i};t.default=function(){return r.default.createElement("svg",{width:"14",height:"11",viewBox:"0 0 14 11"},r.default.createElement("title",null,"switch-check"),r.default.createElement("path",{d:"M11.264 0L5.26 6.004 2.103 2.847 0 4.95l5.26 5.26 8.108-8.107L11.264 0",fill:"#fff",fillRule:"evenodd"}))}}}]);
//# sourceMappingURL=component---src-pages-index-js-db40cafdfdaf3c17fc96.js.map