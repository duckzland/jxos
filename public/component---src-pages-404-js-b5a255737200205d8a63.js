(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{327:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),s=a(72),i=(a(332),a(45),a(73)),c=a(333);var l=function(e){var t,a;function n(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).onStart=function(){t.secuenceElement.exit()},t}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.root},r.a.createElement("main",{className:t.main},r.a.createElement(i.a,{ref:function(t){return e.secuenceElement=t}},r.a.createElement(c.a,{className:t.container,classes:t,type:"frame_a",audio:{silent:!1},linkText:"Go to Start",linkUrl:"/",onLink:this.onStart},r.a.createElement("h1",null,r.a.createElement(s.a,null,"Not found")),r.a.createElement("p",null,r.a.createElement(s.a,null,"The location you are looking for was not found in the system."))))))},n}(r.a.PureComponent);t.default=Object(o.a)(function(e){return{root:{flex:1,display:"flex"},container:{minHeight:300,display:"flex",alignItems:"center",position:"relative"},frame:{position:"absolute",width:"100%",height:"100%"},inner:{width:200,margin:[0,"auto",54]},main:{margin:"auto",textAlign:"center",width:400}}})(l)},332:function(e,t,a){"use strict";var n=a(9),r=a(19),o=a(29),s=(a(6),a(5),a(2),a(8),a(4),a(0)),i=a.n(s),c=a(10),l=a.n(c),m=a(3),p=a(72),u=a(15);var g=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.enter=function(){var e=this.props.energy,t=this.svgElement.querySelectorAll("path");m.a.set(t,{opacity:1,strokeDasharray:u.a}),m.a.set(this.backgroundElement,{opacity:1}),Object(m.a)({targets:t,strokeDashoffset:[u.a,0],easing:"linear",duration:e.duration.enter}),Object(m.a)({targets:this.backgroundElement,easing:"linear",opacity:[0,1],duration:e.duration.enter})},r.exit=function(){var e=this.props.energy,t=this.svgElement.querySelectorAll("path");Object(m.a)({targets:t,strokeDashoffset:[0,u.a],easing:"linear",duration:e.duration.exit}),Object(m.a)({targets:this.backgroundElement,easing:"linear",opacity:[1,0],duration:e.duration.enter})},r.render=function(){var e=this,t=this.props,a=(t.theme,t.classes),n=t.energy,r=t.audio,o=t.sounds,s=t.className,c=t.children,m=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(t,["theme","classes","energy","audio","sounds","className","children"]);return i.a.createElement("button",Object.assign({className:l()(a.root,s)},m),i.a.createElement("div",{className:a.background,ref:function(t){return e.backgroundElement=t}}),i.a.createElement("div",{className:a.frame},i.a.createElement("svg",{className:a.svg,ref:function(t){return e.svgElement=t},viewBox:"0 0 100 100",preserveAspectRatio:"none",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{className:a.path,d:"M0,0 L100,0 L100,100"}),i.a.createElement("path",{className:a.path,d:"M100,100 L0,100 L0,0"}))),i.a.createElement("div",{className:a.main,onMouseEnter:function(){return o.hover&&o.hover.play()}},i.a.createElement(p.a,{audio:r,animation:{animate:n.animate}},c)))},n}(i.a.Component);g.displayName="Button";var d=a(43);a.d(t,"a",function(){return h});var h=Object(r.a)()(Object(n.a)(function(e){return{root:{position:"relative",display:"inline-block",margin:0,border:"none",outline:"none",padding:0,textTransform:"uppercase",textAlign:"center",lineHeight:1,fontSize:14,color:e.color.secondary.main,background:"transparent",cursor:"pointer",transition:"color 250ms ease-out","&:hover, &:focus":{color:e.color.tertiary.main,"& $background":{backgroundColor:Object(d.b)(e.color.tertiary.main,.125)},"& $path":{stroke:Object(d.b)(e.color.tertiary.dark,.5)}}},background:{position:"absolute",width:"100%",height:"100%",backgroundColor:Object(d.b)(e.color.secondary.main,.125),transition:"background 250ms ease-out",opacity:function(e){return e.energy.animate?0:1}},frame:{position:"absolute",width:"100%",height:"100%"},svg:{display:"block",width:"100%",height:"100%"},path:{fill:"none",stroke:Object(d.b)(e.color.secondary.dark,.5),strokeWidth:2,vectorEffect:"non-scaling-stroke",transition:"stroke 250ms ease-out",opacity:function(e){return e.energy.animate?0:1}},main:{position:"relative",padding:[8,32]}}})(Object(o.a)()(g)))},333:function(e,t,a){"use strict";var n=a(9),r=a(19),o=a(29),s=(a(6),a(5),a(2),a(8),a(4),a(55),a(0)),i=a.n(s),c=a(10),l=a.n(c),m=a(3),p=a(45),u=a(150),g=a(72),d=a(332),h=a(73),f=a(15);var v=function(e){var t,a;function n(){return e.apply(this,arguments)||this}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var r=n.prototype;return r.enter=function(){var e=this.props.energy,t=!!this.svgElement&&this.svgElement.querySelectorAll("path");t&&(m.a.set(t,{strokeDasharray:f.a,opacity:1}),Object(m.a)({targets:t,strokeDashoffset:[f.a,0],easing:"easeOutCubic",duration:5*e.duration.enter}))},r.exit=function(){var e=this.props.energy,t=!!this.svgElement&&this.svgElement.querySelectorAll("path");t&&Object(m.a)({targets:t,opacity:0,strokeDashoffset:[0,f.a],easing:"easeOutCubic",duration:e.duration.exit})},r.getFrame=function(e){var t=this,a=this.props.classes;switch(e){case"frame_a":return i.a.createElement("svg",{className:a["svg_"+e],ref:function(e){return t.svgElement=e},viewBox:"0 0 103.842 73.233",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"},i.a.createElement("path",{className:a[e],d:"M93.576 8.688l10.001 4.48-.142 43.113c-3.888 1.907-6.873 3.43-9.859 4.953"}),i.a.createElement("path",{className:a[e],d:"M16.727 54.134l6.178 15.47 59.348-.01 6.388-13.868 7.99-2.654-.188-21.507"}),i.a.createElement("path",{className:a[e],d:"M14.168 10.46L.266 14.808l.201 42.177 14.507 3.913"}),i.a.createElement("path",{className:a[e],d:"M92.01 15.495l6.517 2.277v9.895l-6.008 2.199M7.975 38.303V18.144l8.463-2.688L22.08 4.033l62.853.009 7.077 11.453"}),i.a.createElement("path",{className:a[e],d:"M16.438 37.553L5.155 40.806v11.552l9.873 1.93"}),i.a.createElement("path",{className:a[e],d:"M57.34 72.969H86.11l2.26-4.47"}),i.a.createElement("path",{className:a[e],d:"M47.467 .265 L18.7 .265 16.438 4.83"}));case"frame_b":return i.a.createElement("svg",{className:a["svg_"+e],ref:function(e){return t.svgElement=e},viewBox:"0 0 100 40",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"},i.a.createElement("path",{className:a[e],d:"M0,10 L0,0 L10,0"}),i.a.createElement("path",{className:a[e],d:"M90,0 L100,0 L100,10"}),i.a.createElement("path",{className:a[e],d:"M10,40 L0,40 L0,30"}),i.a.createElement("path",{className:a[e],d:"M100,30 L100,40 L90,40"}));case"frame_c":return i.a.createElement("svg",{className:a["svg_"+e],ref:function(e){return t.svgElement=e},viewBox:"0 0 181.429 8.462",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"},i.a.createElement("path",{className:a[e],d:"M181.25 8.267l-7.3-6.635-165.842.05-7.94 6.554"}),i.a.createElement("path",{className:a[e],d:"M2.458 4.535L7.562.325l7.256-.06"}),i.a.createElement("path",{className:a[e],d:"M166.701 3.042l6.617-.032 5.457 5.01"}));case"frame_d":return i.a.createElement("svg",{className:a["svg_"+e],ref:function(e){return t.svgElement=e},viewBox:"0 0 181.429 8.462",xmlns:"http://www.w3.org/2000/svg",preserveAspectRatio:"none"},i.a.createElement("path",{className:a[e],d:"M181.25.196l-7.3 6.634L8.107 6.78.168.227"}),i.a.createElement("path",{className:a[e],d:"M2.458 3.927l5.104 4.21 7.256.06"}),i.a.createElement("path",{className:a[e],d:"M166.701 5.42l6.617.033 5.457-5.011"}))}},r.render=function(){var e=this.props,t=(e.theme,e.classes),a=e.energy,n=e.audio,r=(e.sounds,e.className),o=e.message,s=e.option,c=e.onOption,m=e.logo,f=e.type,v=e.children,E=e.linkText,y=e.linkUrl,k=e.onLink,b=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["theme","classes","energy","audio","sounds","className","message","option","onOption","logo","type","children","linkText","linkUrl","onLink"]),w=m||o.length>0||s.length>0||v&&v.length>0||E.length>0||y.length>0,N=this.getFrame(f);return i.a.createElement("div",Object.assign({className:l()(t.root,r)},b),i.a.createElement("div",{className:t.frame},N),w&&i.a.createElement("div",{className:t.main},i.a.createElement(h.a,null,m&&i.a.createElement(u.a,{className:t.logo,classes:t}),o&&i.a.createElement("div",{className:t.message},i.a.createElement(g.a,{audio:n,animation:{animate:a.animate}},o)),v&&i.a.createElement("div",{className:t.inner},v),s&&i.a.createElement("div",{className:t.options},i.a.createElement(d.a,{className:t.option,audio:n,animation:{animate:a.animate},onClick:c},s)),E&&y&&i.a.createElement("div",{className:t.link},i.a.createElement(p.a,{href:y},i.a.createElement(d.a,{onClick:k},E))))))},n}(i.a.Component);v.displayName="Frame",v.defaultProps={logo:!1,option:"",message:"",linkText:"",linkUrl:""};a(43);a.d(t,"a",function(){return E});var E=Object(r.a)()(Object(n.a)(function(e){return{logo:{display:"block",width:"69%",height:"69%",paddingLeft:"20px",paddingRight:"20px",marginBottom:"20px",marginLeft:"auto",marginRight:"auto"},root:{position:"relative",display:"inline-block",userSelect:"none"},frame:{position:"absolute",width:"100%",height:"100%"},svg_frame_a:{display:"block",width:"100%",height:"calc(100% + 69px)",marginTop:"-37px",shapeRendering:"geometricPrecision"},svg_frame_b:{display:"block",width:"100%",height:"100%",shapeRendering:"geometricPrecision"},svg_frame_c:{display:"block",width:"100%",height:"100%",shapeRendering:"geometricPrecision"},svg_frame_d:{display:"block",width:"100%",height:"100%",shapeRendering:"geometricPrecision"},frame_a:{opacity:0,fill:"none",stroke:e.color.gradient.orange_one,strokeWidth:1.4,vectorEffect:"non-scaling-stroke"},frame_b:{opacity:0,fill:"none",stroke:e.color.gradient.orange_one,strokeWidth:1.4,vectorEffect:"non-scaling-stroke"},frame_c:{opacity:0,fill:"none",stroke:e.color.gradient.orange_one,strokeWidth:1.4,vectorEffect:"non-scaling-stroke"},frame_d:{opacity:0,fill:"none",stroke:e.color.gradient.orange_one,strokeWidth:1.4,vectorEffect:"non-scaling-stroke"},main:{position:"relative",padding:20},inner:{marginBottom:20,color:e.color.text.main},message:{marginBottom:20,color:e.color.text.main,textAlign:"center"},link:{textAlign:"center"},options:{textAlign:"center"},option:{display:"inline-block"},"@media screen and (min-width: 480px)":{main:{position:"relative",padding:[20,40]}}}})(Object(o.a)()(v)))}}]);
//# sourceMappingURL=component---src-pages-404-js-b5a255737200205d8a63.js.map