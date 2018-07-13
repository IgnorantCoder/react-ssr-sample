!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t){e.exports=require("react")},function(e,t){e.exports=require("react-helmet")},function(e,t){e.exports=require("redux")},function(e,t){e.exports=require("connected-react-router")},function(e,t){e.exports=require("react-router-dom")},function(e,t){e.exports=require("styled-components")},function(e,t){e.exports=require("react-redux")},function(e,t){e.exports=require("react-router")},function(e,t){e.exports=require("express")},function(e,t){e.exports=require("history/createMemoryHistory")},function(e,t){e.exports=require("react-dom/server")},function(e,t,n){"use strict";n.r(t);var r,i=n(8),o=n(0),c=n(6),l=n(3),a=n(10),u=n(1),s=n.n(u),p=n(5),d=n.n(p),m=n(9),f=n.n(m),y=n(7),b=n(4),x=function(){return o.createElement("div",null,o.createElement(s.a,null,o.createElement("title",null,"SSR sample"),o.createElement("meta",{name:"description",content:"There is home."})),"There is home.")},h=function(){return o.createElement("div",null,o.createElement(s.a,null,o.createElement("title",null,"SSR sample"),o.createElement("meta",{name:"description",content:"There is about us."})),"There is about us.")},g=function(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e},v=Object(c.connect)(function(e,t){var n=e.router.location;return null==n?{}:{enabled:t.items.map(function(e){return e.to!==n.pathname})}})(function(e){return o.createElement("ul",{className:e.className},e.items.map(function(t,n){return o.createElement("li",{key:t.to},e.enabled[n]?o.createElement(b.Link,{to:t.to},t.display):o.createElement("span",null,t.display))}))}),E=d()(v)(r||(r=g(["\n    list-style-type: none;\n    margin: 0;\n    padding: 10px 0px;\n    li {\n        display: inline-block;\n        padding: 0px 5px;\n        &+ li {\n            border-left: 1px solid gray;\n        }\n    }\n"],["\n    list-style-type: none;\n    margin: 0;\n    padding: 10px 0px;\n    li {\n        display: inline-block;\n        padding: 0px 5px;\n        &+ li {\n            border-left: 1px solid gray;\n        }\n    }\n"]))),S=function(){return o.createElement("div",null,o.createElement(E,{items:[{display:"Home",to:"/"},{display:"About us",to:"/aboutus"}]}),o.createElement(b.Switch,null,o.createElement(y.Route,{exact:!0,path:"/",component:x}),o.createElement(y.Route,{exact:!0,path:"/aboutus",component:h})))},j=n(2),O=Object(j.combineReducers)({}),w=i();w.use(i.static(__dirname+"/public")),w.get("*",function(e,t){var n=function(e,t){var n=Object(j.applyMiddleware)(Object(l.routerMiddleware)(t));return{store:Object(j.createStore)(Object(l.connectRouter)(t)(O),e,n),history:t}}({},f()({initialEntries:[e.url],initialIndex:0})),r=n.store,i=n.history,u=new p.ServerStyleSheet,d=Object(a.renderToString)(u.collectStyles(o.createElement(c.Provider,{store:r},o.createElement(l.ConnectedRouter,{history:i},o.createElement(S,null)))));t.write(function(e,t,n,r){return'\n        <!DOCTYPE html>\n        <html lang="ja">\n            <head>\n                <meta charset="utf-8">\n                <meta name="viewport" content="width=device-width, initial-scale=1" />\n                '+n.title.toString()+"\n                "+n.meta.toString()+"\n                "+r+'\n            </head>\n            <body>\n                <div id="root">'+e+"</div>\n                <script>\n                    window.INITIAL_STATE = "+JSON.stringify(t)+';\n                <\/script>\n                <script type="text/javascript" charset="utf-8" src="static/js/bundle.js" async><\/script>\n            </body>\n        </html>\n    '}(d,r.getState(),s.a.renderStatic(),u.getStyleTags())),t.end()}),w.listen(3e3,function(){console.log("app listening on port 3000!")})}]);