(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{143:function(e,t,n){"use strict";n.r(t);n(78);var a=n(7),r=n.n(a),l=n(0),i=n.n(l),o=n(152),c=n.n(o),s=n(221),d=n.n(s),u=n(149),m=n(148),f=function(e){var t=e.icon,n=e.className,a=e.to,r=e.onClick;return i.a.createElement("button",{type:"button",onClick:r,className:"button button--text button--icon "+n,"aria-label":a,style:{zIndex:"10",color:"white",fontSize:"3em"}},i.a.createElement("i",{className:""+t}))};n(237);n.d(t,"GalleryImages",function(){return g});var p=function(e){function t(){return e.apply(this,arguments)||this}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){this.props.data.allFile.edges.forEach(function(e){var t=e.node,n="url('"+t.childImageSharp.fluid.src+"')";document.getElementById(""+t.id).firstChild.firstChild.style.backgroundImage=n,document.getElementById(""+t.id).firstChild.firstChild.style.filter="blur(20px) brightness(50%)"})},n.render=function(){var e=this.props.data,t={accessibility:!1,arrows:!0,adaptiveHeight:!0,dots:!1,infinite:!0,autoplay:!0,speed:1e3,slidesToShow:1,slidesToScroll:1,prevArrow:i.a.createElement(f,{to:"prev",icon:"fas fa-angle-left"}),nextArrow:i.a.createElement(f,{to:"next",icon:"fas fa-angle-right"})};return i.a.createElement(i.a.Fragment,null,i.a.createElement(m.a,{title:"Gallery",keywords:["reflexons","calcutta university","coding competition","games","counter strike","gallery"]}),i.a.createElement(u.a,null,i.a.createElement("div",{className:"Gallery"},i.a.createElement(d.a,t,e.allFile.edges.map(function(e){var t=e.node;return i.a.createElement("div",{key:t.id,id:t.id},i.a.createElement(c.a,{fluid:t.childImageSharp.fluid,style:{background:"black"}}))})))))},t}(l.Component),g=(t.default=p,"1636082854")},237:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-gallery-js-8f100409223f4c607c6f.js.map