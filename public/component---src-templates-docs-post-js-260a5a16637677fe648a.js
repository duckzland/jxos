(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{328:function(e,t,a){"use strict";a.r(t),a.d(t,"docQuery",function(){return d});var n=a(0),r=a.n(n),o=a(335),i=a(9),s=(a(45),a(337)),c=a(72),l=a(336),m=a(73);a(10);var p=function(e){var t,a;function n(){return e.apply(this,arguments)||this}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this.props.classes,t=this.props.data.markdownRemark;return r.a.createElement(s.a,{className:e.root},r.a.createElement("article",null,r.a.createElement(m.a,{stagger:!0},r.a.createElement("header",{className:e.header},r.a.createElement("h1",null,r.a.createElement(c.a,null,t.frontmatter.title))),r.a.createElement(l.a,{className:e.main},r.a.createElement(o.a,{type:"frame_c",className:e.frame,classes:e}),r.a.createElement("div",{className:e.inner,dangerouslySetInnerHTML:{__html:t.html}}),r.a.createElement(o.a,{type:"frame_d",className:e.frame,classes:e})))))},n}(r.a.Component);t.default=Object(i.a)(function(e){return{root:{},header:{textAlign:"center"},main:{position:"relative",display:"block",margin:[60,0]},frame:{position:"relative",width:"100%",height:"100%"},inner:{padding:[20,50]},svg_frame_c:{display:"block",width:"100%",height:"100%",shapeRendering:"geometricPrecision"},svg_frame_d:{display:"block",width:"100%",height:"100%",shapeRendering:"geometricPrecision"}}})(p);var d="1758286717"},334:function(e,t,a){"use strict";var n=a(9),r=a(19),o=a(29),i=(a(6),a(5),a(2),a(8),a(4),a(0)),s=a.n(i),c=a(10),l=a.n(c),m=a(3),p=a(72),d=a(15);var u=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.enter=function(){var e=this.props.energy,t=this.svgElement.querySelectorAll("path");m.a.set(t,{opacity:1,strokeDasharray:d.a}),m.a.set(this.backgroundElement,{opacity:1}),Object(m.a)({targets:t,strokeDashoffset:[d.a,0],easing:"linear",duration:e.duration.enter}),Object(m.a)({targets:this.backgroundElement,easing:"linear",opacity:[0,1],duration:e.duration.enter})},r.exit=function(){var e=this.props.energy,t=this.svgElement.querySelectorAll("path");Object(m.a)({targets:t,strokeDashoffset:[0,d.a],easing:"linear",duration:e.duration.exit}),Object(m.a)({targets:this.backgroundElement,easing:"linear",opacity:[1,0],duration:e.duration.enter})},r.render=function(){var e=this,t=this.props,a=(t.theme,t.classes),n=t.energy,r=t.audio,o=t.sounds,i=t.className,c=t.children,m=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(t,["theme","classes","energy","audio","sounds","className","children"]);return s.a.createElement("button",Object.assign({className:l()(a.root,i)},m),s.a.createElement("div",{className:a.background,ref:function(t){return e.backgroundElement=t}}),s.a.createElement("div",{className:a.frame},s.a.createElement("svg",{className:a.svg,ref:function(t){return e.svgElement=t},viewBox:"0 0 100 100",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{className:a.path,d:"M0,0 L100,0 L100,100"}),s.a.createElement("path",{className:a.path,d:"M100,100 L0,100 L0,0"}))),s.a.createElement("div",{className:a.main,onMouseEnter:function(){return o.hover&&o.hover.play()}},s.a.createElement(p.a,{audio:r,animation:{animate:n.animate}},c)))},n}(s.a.Component);u.displayName="Button";var h=a(43);a.d(t,"a",function(){return g});var g=Object(r.a)()(Object(n.a)(function(e){return{root:{position:"relative",display:"inline-block",margin:0,border:"none",outline:"none",padding:0,textTransform:"uppercase",textAlign:"center",lineHeight:1,fontSize:14,color:e.color.secondary.main,background:"transparent",cursor:"pointer",transition:"color 250ms ease-out","&:hover, &:focus":{color:e.color.tertiary.main,"& $background":{backgroundColor:Object(h.b)(e.color.tertiary.main,.125)},"& $path":{stroke:Object(h.b)(e.color.tertiary.dark,.5)}}},background:{position:"absolute",width:"100%",height:"100%",backgroundColor:Object(h.b)(e.color.secondary.main,.125),transition:"background 250ms ease-out",opacity:function(e){return e.energy.animate?0:1}},frame:{position:"absolute",width:"100%",height:"100%"},svg:{display:"block",width:"100%",height:"100%"},path:{fill:"none",stroke:Object(h.b)(e.color.secondary.dark,.5),strokeWidth:2,vectorEffect:"non-scaling-stroke",transition:"stroke 250ms ease-out",opacity:function(e){return e.energy.animate?0:1}},main:{position:"relative",padding:[8,32]}}})(Object(o.a)()(u)))},335:function(e,t,a){"use strict";var n=a(9),r=a(19),o=a(29),i=(a(6),a(5),a(2),a(8),a(4),a(55),a(0)),s=a.n(i),c=a(10),l=a.n(c),m=a(3),p=a(45),d=a(150),u=a(72),h=a(334),g=a(73),f=a(15);var v=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.enter=function(){var e=this.props.energy,t=!!this.svgElement&&this.svgElement.querySelectorAll("path");t&&(m.a.set(t,{strokeDasharray:f.a,opacity:1}),Object(m.a)({targets:t,strokeDashoffset:[f.a,0],easing:"easeOutCubic",duration:5*e.duration.enter}))},r.exit=function(){var e=this.props.energy,t=!!this.svgElement&&this.svgElement.querySelectorAll("path");t&&Object(m.a)({targets:t,opacity:0,strokeDashoffset:[0,f.a],easing:"easeOutCubic",duration:e.duration.exit})},r.getFrame=function(e){var t=this,a=this.props.classes;switch(e){case"frame_a":return s.a.createElement("svg",{className:a["svg_"+e],ref:function(e){return t.svgElement=e},viewBox:"0 0 103.842 73.233",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"},s.a.createElement("path",{className:a[e],d:"M93.576 8.688l10.001 4.48-.142 43.113c-3.888 1.907-6.873 3.43-9.859 4.953"}),s.a.createElement("path",{className:a[e],d:"M16.727 54.134l6.178 15.47 59.348-.01 6.388-13.868 7.99-2.654-.188-21.507"}),s.a.createElement("path",{className:a[e],d:"M14.168 10.46L.266 14.808l.201 42.177 14.507 3.913"}),s.a.createElement("path",{className:a[e],d:"M92.01 15.495l6.517 2.277v9.895l-6.008 2.199M7.975 38.303V18.144l8.463-2.688L22.08 4.033l62.853.009 7.077 11.453"}),s.a.createElement("path",{className:a[e],d:"M16.438 37.553L5.155 40.806v11.552l9.873 1.93"}),s.a.createElement("path",{className:a[e],d:"M57.34 72.969H86.11l2.26-4.47"}),s.a.createElement("path",{className:a[e],d:"M47.467 .265 L18.7 .265 16.438 4.83"}));case"frame_b":return s.a.createElement("svg",{className:a["svg_"+e],ref:function(e){return t.svgElement=e},viewBox:"0 0 100 40",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"},s.a.createElement("path",{className:a[e],d:"M0,10 L0,0 L10,0"}),s.a.createElement("path",{className:a[e],d:"M90,0 L100,0 L100,10"}),s.a.createElement("path",{className:a[e],d:"M10,40 L0,40 L0,30"}),s.a.createElement("path",{className:a[e],d:"M100,30 L100,40 L90,40"}));case"frame_c":return s.a.createElement("svg",{className:a["svg_"+e],ref:function(e){return t.svgElement=e},viewBox:"0 0 181.429 8.462",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"},s.a.createElement("path",{className:a[e],d:"M181.25 8.267l-7.3-6.635-165.842.05-7.94 6.554"}),s.a.createElement("path",{className:a[e],d:"M2.458 4.535L7.562.325l7.256-.06"}),s.a.createElement("path",{className:a[e],d:"M166.701 3.042l6.617-.032 5.457 5.01"}));case"frame_d":return s.a.createElement("svg",{className:a["svg_"+e],ref:function(e){return t.svgElement=e},viewBox:"0 0 181.429 8.462",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"},s.a.createElement("path",{className:a[e],d:"M181.25.196l-7.3 6.634L8.107 6.78.168.227"}),s.a.createElement("path",{className:a[e],d:"M2.458 3.927l5.104 4.21 7.256.06"}),s.a.createElement("path",{className:a[e],d:"M166.701 5.42l6.617.033 5.457-5.011"}))}},r.render=function(){var e=this.props,t=(e.theme,e.classes),a=e.energy,n=e.audio,r=(e.sounds,e.className),o=e.message,i=e.option,c=e.onOption,m=e.logo,f=e.type,v=e.children,y=e.linkText,b=e.linkUrl,E=e.onLink,k=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["theme","classes","energy","audio","sounds","className","message","option","onOption","logo","type","children","linkText","linkUrl","onLink"]),N=m||o.length>0||i.length>0||v&&v.length>0||y.length>0||b.length>0,w=this.getFrame(f);return s.a.createElement("div",Object.assign({className:l()(t.root,r)},k),s.a.createElement("div",{className:t.frame},w),N&&s.a.createElement("div",{className:t.main},s.a.createElement(g.a,null,m&&s.a.createElement(d.a,{className:t.logo,classes:t}),o&&s.a.createElement("div",{className:t.message},s.a.createElement(u.a,{audio:n,animation:{animate:a.animate}},o)),v&&s.a.createElement("div",{className:t.inner},v),i&&s.a.createElement("div",{className:t.options},s.a.createElement(h.a,{className:t.option,audio:n,animation:{animate:a.animate},onClick:c},i)),y&&b&&s.a.createElement("div",{className:t.link},s.a.createElement(p.a,{href:b},s.a.createElement(h.a,{onClick:E},y))))))},n}(s.a.Component);v.displayName="Frame",v.defaultProps={logo:!1,option:"",message:"",linkText:"",linkUrl:""};a(43);a.d(t,"a",function(){return y});var y=Object(r.a)()(Object(n.a)(function(e){return{logo:{display:"block",width:"69%",height:"69%",paddingLeft:"20px",paddingRight:"20px",marginBottom:"20px",marginLeft:"auto",marginRight:"auto"},root:{position:"relative",display:"inline-block",userSelect:"none"},frame:{position:"absolute",width:"100%",height:"100%"},svg_frame_a:{display:"block",width:"100%",height:"calc(100% + 69px)",marginTop:"-37px",shapeRendering:"geometricPrecision"},svg_frame_b:{display:"block",width:"100%",height:"100%",shapeRendering:"geometricPrecision"},svg_frame_c:{display:"block",width:"100%",height:"100%",shapeRendering:"geometricPrecision"},svg_frame_d:{display:"block",width:"100%",height:"100%",shapeRendering:"geometricPrecision"},frame_a:{opacity:0,fill:"none",stroke:e.color.gradient.orange_one,strokeWidth:1.4,vectorEffect:"non-scaling-stroke"},frame_b:{opacity:0,fill:"none",stroke:e.color.gradient.orange_one,strokeWidth:1.4,vectorEffect:"non-scaling-stroke"},frame_c:{opacity:0,fill:"none",stroke:e.color.gradient.orange_one,strokeWidth:1.4,vectorEffect:"non-scaling-stroke"},frame_d:{opacity:0,fill:"none",stroke:e.color.gradient.orange_one,strokeWidth:1.4,vectorEffect:"non-scaling-stroke"},main:{position:"relative",padding:20},inner:{marginBottom:20,color:e.color.text.main},message:{marginBottom:20,color:e.color.text.main,textAlign:"center"},link:{textAlign:"center"},options:{textAlign:"center"},option:{display:"inline-block"},"@media screen and (min-width: 480px)":{main:{position:"relative",padding:[20,40]}}}})(Object(o.a)()(v)))},336:function(e,t,a){"use strict";var n=a(9),r=a(19),o=a(29),i=(a(6),a(5),a(2),a(8),a(4),a(0)),s=a.n(i),c=a(10),l=a.n(c),m=a(3);var p=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.componentWillUnmount=function(){var e=this.props.sounds;this.unanimate(),e.fade&&e.fade.stop()},r.enter=function(){var e=this.props,t=e.energy,a=e.sounds,n=t.duration.enter;a.fade&&a.fade.play(),this.animate({keyframes:[{opacity:1,duration:n/3},{opacity:0,duration:n/5},{opacity:1,duration:n/2}]})},r.exit=function(){var e=this.props,t=e.energy,a=e.sounds,n=t.duration.exit;a.fade&&a.fade.play(),this.animate({keyframes:[{opacity:0,duration:n/3},{opacity:1,duration:n/5},{opacity:0,duration:n/2}]})},r.animate=function(e){this.unanimate(),Object(m.a)(Object.assign({targets:this.element,easing:"easeOutCubic"},e))},r.unanimate=function(){m.a.remove(this.element)},r.render=function(){var e=this,t=this.props,a=(t.theme,t.classes),n=(t.energy,t.audio,t.sounds,t.className),r=t.children,o=t.node,i=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(t,["theme","classes","energy","audio","sounds","className","children","node"]);return s.a.createElement(o,Object.assign({ref:function(t){return e.element=t},className:l()(a.root,n)},i),r)},n}(s.a.PureComponent);p.displayName="Fader",p.defaultProps={node:"span"};a.d(t,"a",function(){return d});var d=Object(r.a)()(Object(n.a)(function(e){return{root:{display:"inline-block",opacity:0}}})(Object(o.a)()(p)))},337:function(e,t,a){"use strict";var n=a(9),r=(a(6),a(5),a(2),a(8),a(4),a(0)),o=a.n(r),i=a(10),s=a.n(i),c=a(336);var l=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).onRouteChangeStart=function(e){e.detail.isInternal&&t.element.exit()},t}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.componentDidMount=function(){window.addEventListener("route-change-start",this.onRouteChangeStart)},r.componentWillUnmount=function(){window.removeEventListener("route-change-start",this.onRouteChangeStart)},r.render=function(){var e=this,t=this.props,a=(t.theme,t.classes),n=t.className,r=t.children,i=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(t,["theme","classes","className","children"]);return o.a.createElement(c.a,Object.assign({className:s()(a.root,n),node:"main",ref:function(t){return e.element=t}},i),o.a.createElement("div",{className:a.frame}),o.a.createElement("div",{className:a.content},r))},n}(o.a.Component);l.displayName="Main";var m=a(43);a.d(t,"a",function(){return p});var p=Object(n.a)(function(e){return{root:{flex:1,position:"relative",display:"flex",margin:[0,"auto"],maxWidth:1e3,width:"100%"},frame:{position:"absolute",zIndex:1,left:10,right:10,top:0,bottom:0,outline:"2px solid "+e.color.background.dark,outlineOffset:2,backgroundColor:Object(m.b)(e.color.background.dark,e.color.alpha)},content:{position:"relative",zIndex:2,flex:1,margin:[10,10,10,20],padding:[0,10,0,0],maxWidth:"calc(100% - 30px)","& > *:last-child, & > article > *:last-child":{marginBottom:0}},"@media screen and (min-width: 768px)":{root:{minHeight:1},frame:{left:20,right:20,top:0,bottom:0},content:{overflowX:"hidden",overflowY:"auto",margin:[30,40,30,50],padding:[0,10,0,0],"& img":{maxWidth:"80%"}}},"@media screen and (min-width: 1025px)":{content:{margin:[50,60,50,70],padding:[0,40,0,0]}}}})(l)}}]);
//# sourceMappingURL=component---src-templates-docs-post-js-260a5a16637677fe648a.js.map