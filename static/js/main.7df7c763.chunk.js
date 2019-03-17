(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(t,e,n){t.exports=n(199)},194:function(t,e,n){},198:function(t,e,n){},199:function(t,e,n){"use strict";n.r(e);var r={};n.r(r),n.d(r,"BLUETOOTH_CONNECTING",function(){return T}),n.d(r,"BLUETOOTH_CONNECTED",function(){return l}),n.d(r,"BLUETOOTH_DISCONNECTING",function(){return N}),n.d(r,"BLUETOOTH_DISCONNECTED",function(){return d}),n.d(r,"BLUETOOTH_ERROR",function(){return O}),n.d(r,"BLUETOOTH_READ",function(){return C}),n.d(r,"BLUETOOTH_SYNC",function(){return f}),n.d(r,"BLUETOOTH_SEND",function(){return h}),n.d(r,"BLUETOOTH_CONNECT_REQUEST",function(){return p}),n.d(r,"BLUETOOTH_DISCONNECT_REQUEST",function(){return S}),n.d(r,"BLUETOOTH_SEND_REQUEST",function(){return _}),n.d(r,"BLUETOOTH_SYNC_REQUEST",function(){return v});var c={};n.r(c),n.d(c,"INIT",function(){return D}),n.d(c,"DISCONNECTED",function(){return I}),n.d(c,"DISCONNECTING",function(){return U}),n.d(c,"CONNECTING",function(){return m}),n.d(c,"CONNECTED",function(){return b}),n.d(c,"ERROR",function(){return R});var o={};n.r(o),n.d(o,"status",function(){return q}),n.d(o,"remote",function(){return x});var u={};n.r(u),n.d(u,"INCREMENT",function(){return P}),n.d(u,"DECREMENT",function(){return J});var a=n(4),i=n.n(a),E=n(89),s=n(34),T="@@bluetooth/CONNECTING",l="@@bluetooth/CONNECTED",N="@@bluetooth/DISCONNECTING",d="@@bluetooth/DISCONNECTED",O="@@bluetooth/ERROR",C="@@bluetooth/READ",f="@@bluetooth/SYNC",h="@@bluetooth/SEND",p="@@bluetooth/CONNECT_REQUEST",S="@@bluetooth/DISCONNECT_REQUEST",_="@@bluetooth/SEND_REQUEST",v="@@bluetooth/SYNC_REQUEST",D="INIT",I="DISCONNECTED",U="DISCONNECTING",m="CONNECTING",b="CONNECTED",R="ERROR",g={SERVICE_UUID:"13333333-3333-3333-3333-333333333337",CHARACTERISTIC_UUID:"13333333-3333-3333-3333-333333330001"},y=g;g.SERVICE_UUID.replace(/-/g,""),g.CHARACTERISTIC_UUID.replace(/-/g,"");var w=window,H=w.navigator,L=w.TextDecoder,B=w.TextEncoder;var j=function(t,e){var n=function(t){return{type:e.BLUETOOTH_SYNC,payload:t}},r=function(n){return{type:e.BLUETOOTH_SEND_REQUEST,request:function(){return t.write(n)}}};return{connectStore:function(c){return{type:e.BLUETOOTH_CONNECT_REQUEST,request:function(o){return o({type:e.BLUETOOTH_CONNECTING}),t.connect(c).then(function(){return t.handler(function(t){return o(n(t))})}).then(function(){return o({type:e.BLUETOOTH_CONNECTED})}).then(function(){return o(r({type:e.BLUETOOTH_SEND_REQUEST,request:function(){return t.write({type:e.BLUETOOTH_SYNC_REQUEST})}}))})}}},disconnectStore:function(){return{type:e.BLUETOOTH_DISCONNECT_REQUEST,request:function(n){n({type:e.BLUETOOTH_DISCONNECTING}),t.disconnect(),n({type:e.BLUETOOTH_DISCONNECTED})}}},syncState:n,sendAction:r}}(new function(t,e,n,r){var c=n.encode,o=n.decode,u=r.SERVICE_UUID,a=r.CHARACTERISTIC_UUID,i={server:null,characteristic:null,message:"",configuration:{limit:20},id:t},E=function(){return i.server&&i.server.connected},s=function(t){return function(e){var n=o(e.target.value),r="".concat(i.message).concat(n);if(r.startsWith("[[[")&&r.endsWith("]]]")){var c=JSON.parse(r.slice(3,r.length-3));t(c),i.message=""}else r.startsWith("|||")&&r.endsWith("|||")?i.message="":i.message=r;return i.message}};return{connected:E(),connect:function(t){return e.requestDevice({filters:[{services:[u],name:t}]}).then(function(t){return i.device=t,t.gatt.connect()}).then(function(t){return i.server=t,t.getPrimaryService(u)}).then(function(t){return t.getCharacteristic(a)}).then(function(t){i.characteristic=t})},disconnect:function(){E()&&i.device.gatt.disconnect()},handler:function(t){return i.characteristic.startNotifications().then(function(){var e=s(t);return i.characteristic.addEventListener("characteristicvaluechanged",e),i.configuration})},write:function(t){if(!i.server||!i.server.connected||!i.characteristic)return Promise.reject();var e="[[[".concat(JSON.stringify(t),"]]]"),n=c(e),r=c("".concat(i.id,":")),o=i.configuration.limit-r.length,u=[],a=0;do{var E=a+o,s=Math.min(E,n.length),T=n.slice(a,s),l=new Uint8Array(r.length+T.length);l.set(r,0),l.set(T,r.length),u.push(l),a=E}while(a<n.length);return u.reduce(function(t,e){return t.then(function(){return i.characteristic.writeValue(e)})},Promise.resolve())},listener:s}}("".concat(Date.now()).slice(4,13),H.bluetooth,function(t){var e=t.TextEncoder,n=t.TextDecoder,r=new e("utf-8"),c=new n("utf-8");return{encode:function(t){return r.encode(t)},decode:function(t){return c.decode(t)}}}({TextEncoder:B,TextDecoder:L}),y),r),Q=j.sendAction,A=[p,S,_],G=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return function(e){return function(n){return function(r){if("object"!==typeof r)return n(r);var c=r.type;return A.includes(c)&&r.request(e.dispatch),t.includes(c)&&e.dispatch(Q(r)),n(r)}}}},k={status:D};function q(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k.status;switch((arguments.length>1?arguments[1]:void 0).type){case T:return m;case l:return b;case N:return U;case d:return I;default:return t}}function x(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,e=arguments.length>1?arguments[1]:void 0,n=e.type,r=e.payload;switch(console.log("remote::: ",n,r),n){case f:return r;default:return t}}var V=n(25),Y={connectStore:j.connectStore,disconnectStore:j.disconnectStore},M=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return!0},n=[G(t)],r=[V.a.apply(void 0,n)];return"object"===typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&r.push(window.__REDUX_DEVTOOLS_EXTENSION__()),Object(V.d)(Object(V.b)({status:q,remote:x,local:e}),V.c.apply(void 0,r))},P=(n(194),"INCREMENT"),J="DECREMENT",W=n(98),X=n(55),z=n.n(X);var F=n(95),K=n(96),Z=n(99),$=n(97),tt=n(100),et=n(24),nt=(n(198),function(t){function e(t){var n;return Object(F.a)(this,e),(n=Object(Z.a)(this,Object($.a)(e).call(this,t))).handlerConnect=n.handlerConnect.bind(Object(et.a)(Object(et.a)(n))),n}return Object(tt.a)(e,t),Object(K.a)(e,[{key:"handlerConnect",value:function(){(0,this.props.onConnect)("Counter")}},{key:"render",value:function(){var t=this.props,e=t.counter,n=t.quote,r=t.status,c=t.onIncrement,o=t.onDecrement,u=Number(e),a="app-counter";return u>0&&(a+=" app-counter--positive"),u<0&&(a+=" app-counter--negative"),i.a.createElement("div",{className:"app"},"CONNECTED"===r&&i.a.createElement("div",null,i.a.createElement("span",{className:a},e),i.a.createElement("br",null),i.a.createElement("span",null,"version: 2"),i.a.createElement("br",null),i.a.createElement("span",null,n)),i.a.createElement("div",{className:"app-actions"},"CONNECTED"!==r&&i.a.createElement("button",{className:"app-actions__buton",onClick:this.handlerConnect},"Connect"),"CONNECTED"===r&&i.a.createElement("button",{className:"app-actions__buton",onClick:c},"+"),"CONNECTED"===r&&i.a.createElement("button",{className:"app-actions__buton",onClick:o},"-")))}}]),e}(a.PureComponent));nt.defaultProps={counter:0,quote:"",status:"",onConnect:function(){return!0},onIncrement:function(){return!0},onDecrement:function(){return!0}};var rt={onConnect:Y.connectStore,onIncrement:function(){return{type:P,payload:z.a.random()}},onDecrement:function(){return{type:J,payload:z.a.random()}}},ct=Object(s.b)(function(t){var e=t.status,n=t.store;return Object(W.a)({status:e},n)},rt)(nt),ot=M(Object.keys(u));Object(E.render)(i.a.createElement(s.a,{store:ot},i.a.createElement(ct,null)),document.getElementById("root"))}},[[101,1,2]]]);
//# sourceMappingURL=main.7df7c763.chunk.js.map