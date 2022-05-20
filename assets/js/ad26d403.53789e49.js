"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[970],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(t),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return t?r.createElement(m,a(a({ref:n},u),{},{components:t})):r.createElement(m,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=t[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3614:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return p}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={},l=void 0,s={unversionedId:"Connection Lifeycle",id:"Connection Lifeycle",title:"Connection Lifeycle",description:"To connect to the broker, you simply need to invoke connect method",source:"@site/docs/Connection Lifeycle.md",sourceDirName:".",slug:"/Connection Lifeycle",permalink:"/courier-iOS/docs/Connection Lifeycle",draft:!1,editUrl:"https://github.com/gojek/courier-iOS/edit/main/docs/docs/Connection Lifeycle.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Message Adapter",permalink:"/courier-iOS/docs/Message Adapter"},next:{title:"Message QoS",permalink:"/courier-iOS/docs/Message QoS"}},u={},p=[],d={toc:p};function f(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"To connect to the broker, you simply need to invoke ",(0,i.kt)("inlineCode",{parentName:"p"},"connect")," method"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"courierClient.connect()\n")),(0,i.kt)("p",null,"To disconnect, you just need to invoke ",(0,i.kt)("inlineCode",{parentName:"p"},"disconnect")," method"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"courierClient.disconnect()\n")),(0,i.kt)("p",null,"To get the ConnectionState, you can access the CourierSession/connectionState property"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"courierClient.connectionState\n")),(0,i.kt)("p",null,"You can also subscribe the ",(0,i.kt)("inlineCode",{parentName:"p"},"ConnectionState")," publisher using the ",(0,i.kt)("inlineCode",{parentName:"p"},"CourierSession/connectionStatePublisher")," property. The observable API that Courier provide is very similar to ",(0,i.kt)("inlineCode",{parentName:"p"},"Apple Combine")," although it is implemented internally using ",(0,i.kt)("inlineCode",{parentName:"p"},"RxSwift")," so we can support ",(0,i.kt)("inlineCode",{parentName:"p"},"iOS 11"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"courierClient.connectionStatePublisher\n    .sink { [weak self] self?.handleConnectionStateEvent($0) }\n    .store(in: &cancellables)\n")),(0,i.kt)("p",null,"As MQTT supports QoS 1 and QoS 2 message to ensure deliverability when there is no internet connection and user reconnected back to broker, we also persists those message in local cache. To disconnect and remove all of this cache, you can invoke."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-swift"},"courierClient.destroy()\n")),(0,i.kt)("p",null,"There are several things that you need to keep in mind when using Courier:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Courier will always disconnect when the app goes to background as iOS doesn't support long run socket connection in background."),(0,i.kt)("li",{parentName:"ul"},"Courier will always automatically reconnect when the app goes to foreground if there is a topic to subscribe."),(0,i.kt)("li",{parentName:"ul"},"Courier handles reconnection in case of bad/lost internet connection using Reachability framework."),(0,i.kt)("li",{parentName:"ul"},"Courier will persist QoS > 0 messages in case there are no active subscription to Observable/Publisher using configurable TTL.")))}f.isMDXComponent=!0}}]);