"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[5320],{54707:(e,n,s)=>{s.d(n,{DebugWindowContents:()=>lt});var t=s(59496),r=s(26586),l=s(61527),a=s(77146),i=s(22300),o=s(2522),c=s(36905),d=s(33453);const u=(0,c.v)();window.abba={get:async function(e,n){const s=new o.hH((0,d.G)()),t=(await s.getValues(o.hr.fromPartial({}))).pairs;let r={},l="";if(t.abbaOverrides?l=t.abbaOverrides:t.abbaoverrides&&(l=t.abbaoverrides),l)try{r=JSON.parse(l)}catch(e){console.error(`error parsing value=${l}, error=${e}`)}if(Object.prototype.hasOwnProperty.call(r,e))return console.warn(`Abba: Override for ${e} : ${r[e]}`),void setTimeout((()=>n(null,r[e])),0);u.post("sp://abba/v1/flags",{flags:[e]}).then((s=>{const{flags:t=[]}=s,r=t[0]&&t[0].featureName===e&&t[0].cell;n(null,r||null)})).catch((e=>{n(e)}))},getAll:function(e){console.warn("Abba:getAll should only be used by TA tests for logging purposes."),u.get("sp://abba/v1/all_flags").then((n=>{const{flags:s=[]}=n,t=s.reduce(((e,n)=>(e[n.featureName]=n.cell,e)),{});e(null,JSON.stringify(t,null,2))})).catch((n=>{e(n)}))},getRequestedFlagNames:function(e){u.get("sp://abba/v1/requested_flag_names").then((n=>{e(null,JSON.stringify(n.sort(),null,2))})).catch((n=>{e(n)}))}};var p=s(41730);const h="rh7v8PDNC0ke2OkkyRhk",m="L6pjHHt_x4tfksfQ4Pem",x="H0jIvFjLqNoS1jwvMR82",j="UZcGKrwobJ2tS5Ka06pD";var v=s(4637);const f=()=>{const[e,n]=(0,t.useState)(60),[s,r]=(0,t.useState)("stream"),[l,a]=(0,t.useState)("");return(0,v.jsxs)("div",{className:h,children:[(0,v.jsxs)("div",{className:m,children:[(0,v.jsx)("p",{children:"Stream time (in seconds)"}),(0,v.jsx)("input",{className:x,type:"text",value:e,onChange:e=>{const s=e.target.value;n(parseInt(s,10))}}),(0,v.jsx)("button",{className:j,onClick:()=>{p.N.increaseStreamTime(e)},children:"Add time"}),(0,v.jsx)("button",{className:j,onClick:()=>{p.N.increaseStreamTime(1200)},children:"Add 20 minutes"})]}),(0,v.jsxs)("div",{className:m,children:[(0,v.jsx)("p",{children:"Override Country"}),(0,v.jsxs)("select",{value:l,onBlur:()=>{},onChange:e=>{a(e.target.value)},children:[(0,v.jsx)("option",{value:"US",children:"USA"}),(0,v.jsx)("option",{value:"UK",children:"United Kingdom"}),(0,v.jsx)("option",{value:"JP",children:"Japan"}),(0,v.jsx)("option",{value:"BR",children:"Brasil"}),(0,v.jsx)("option",{value:"AU",children:"Australia"}),(0,v.jsx)("option",{value:"SE",children:"Sweden"}),(0,v.jsx)("option",{value:"",children:"Clear Override"})]}),(0,v.jsx)("button",{className:j,onClick:()=>{p.N.overrideCountry(l)},children:"Override"})]}),(0,v.jsxs)("div",{className:m,children:[(0,v.jsx)("p",{children:"Clear ad in slot"}),(0,v.jsxs)("select",{value:s,onBlur:()=>{},onChange:e=>{r(e.target.value)},children:[(0,v.jsx)("option",{value:"stream",children:"STREAM"}),(0,v.jsx)("option",{value:"billboard",children:"BILLBOARD OVERLAY"}),(0,v.jsx)("option",{value:"promotedsong",children:"PROMOTED SONG"}),(0,v.jsx)("option",{value:"hpto",children:"HPTO"}),(0,v.jsx)("option",{value:"leaderboard",children:"LEADERBOARD"})]}),(0,v.jsx)("button",{className:j,onClick:()=>{p.N.clearSlot(s)},children:"Clear slot"}),(0,v.jsx)("p",{children:"Trigger ad in slot"}),(0,v.jsxs)("select",{value:s,onBlur:()=>{},onChange:e=>{r(e.target.value)},children:[(0,v.jsx)("option",{value:"stream",children:"STREAM"}),(0,v.jsx)("option",{value:"billboard",children:"BILLBOARD OVERLAY"}),(0,v.jsx)("option",{value:"promotedsong",children:"PROMOTED SONG"}),(0,v.jsx)("option",{value:"hpto",children:"HPTO"}),(0,v.jsx)("option",{value:"leaderboard",children:"LEADERBOARD"})]}),(0,v.jsx)("button",{className:j,onClick:()=>{p.N.triggerSlot(s)},children:"Trigger slot"})]}),(0,v.jsx)("button",{className:j,onClick:()=>{p.N.queueVideoAd()},children:"Queue Video Ad"})]})};var g=s(83792),y=s(98484),b=s(48097),N=s(3453);const C="scaF2wOGtuiU5UBKJrGa",S="PjVBb0nlrIUasTrrFgCx",w="MjtdwpkzFFhhmzeyzOy2",O="uVClWczmJLRR5jfAENGP",k=[{label:"Production",value:"prod"},{label:"Development",value:"dev"}],A=()=>{const e=(0,g.I0)(),n=(0,g.v9)((e=>e.inAppMessaging.env)),s=(0,g.v9)((e=>e.inAppMessaging.message)),[r,l]=(0,t.useState)(""),[a,i]=(0,t.useState)(""),[o,c]=(0,t.useState)(!1);(0,t.useEffect)((()=>{s&&o&&c(!1)}),[s,o]);const d=!s&&o;return(0,v.jsx)("div",{className:C,children:(0,v.jsxs)("div",{className:S,children:[(0,v.jsx)("div",{children:(0,v.jsx)("label",{htmlFor:"desktop.settings.inAppMessagingEnv",children:"Mode (endpoint):"})}),(0,v.jsx)(b.v,{dir:"auto",value:n,id:"desktop.settings.inAppMessagingEnv",onSelect:function(n){"prod"!==n&&"dev"!==n||e((0,N.q1)(n))},children:k.map((({label:e,value:n})=>(0,v.jsx)("option",{value:n,children:e},n)))}),(0,v.jsx)("div",{children:(0,v.jsx)("label",{htmlFor:"desktop.settings.inAppMessagingCreativeId",children:"Creative Id:"})}),(0,v.jsx)("div",{children:(0,v.jsx)("input",{className:w,placeholder:"(eg. 12123434)",id:"desktop.settings.inAppMessagingCreativeId",name:"Creative Id",type:"text",value:r,onChange:function(e){l(e.target.value),c(!1)}})}),(0,v.jsx)("div",{children:(0,v.jsx)("label",{htmlFor:"desktop.settings.inAppMessagingAppUri",children:"URI for Dynamic Content (optional):"})}),(0,v.jsx)("div",{children:(0,v.jsx)("input",{className:w,placeholder:"(eg. spotify:artist:123)",id:"desktop.settings.inAppMessagingAppUri",name:"App Uri",type:"text",value:a,onChange:function(e){i(e.target.value),c(!1)}})}),(0,v.jsx)("div",{}),(0,v.jsx)("div",{}),(0,v.jsx)("div",{children:(0,v.jsx)(y.D,{colorSet:"invertedLight",onClick:function(n){n.preventDefault(),e((0,N.XJ)(r,a)),c(!1),window.setTimeout((()=>{c(!0)}),1e3)},children:"Get Preview"})}),d&&(0,v.jsx)("div",{className:O,children:"No Messsage found"})]})})};var R=s(89389),I=s(4008),P=s(20805),D=s(6626),E=s(96635),L=s(96685),T=s(41042),B=s(79192),J=s(39391),F=s(5882),M=s(16523),U=s(56529);const H={panel:"mHtMWLOMN_lZh6Eq1lBe",rowHeader:"Mv_L7HxaPDmHZbvP_wpu",rowName:"Ryr6R2suLwNRYud_tuXs",rowValue:"CB4s_xlu5db24RNOdk9e",rowActions:"rXwi6WM3vPDuyj9fQLw_",rowAction:"rqhyBEi1217s5l9KD42B",rowControl:"iBTuFGgSiKloKOSxiMWs"},V=({name:e,value:n})=>(0,v.jsxs)(L.S,{hover:!0,children:[(0,v.jsx)(T.p,{className:H.rowName,highlight:!0,children:e}),(0,v.jsx)(T.p,{className:H.rowValue,truncate:!0,align:"right",children:n}),(0,v.jsx)(T.p,{className:H.rowActions,children:(0,v.jsx)("button",{className:H.rowAction,onClick:()=>{void 0!==n&&(0,U.v)(n)},children:(0,v.jsx)(B.c,{iconSize:16})})})]}),_=()=>{const e=(0,M.p)(),n=e.token?.accessToken??"Not authorized",s=new Date(e.token?.accessTokenExpirationTimestampMs??0);return(0,v.jsx)("div",{className:H.panel,children:(0,v.jsx)(J.x,{children:(0,v.jsxs)(F.i,{children:[(0,v.jsxs)("colgroup",{children:[(0,v.jsx)("col",{width:"30%"}),(0,v.jsx)("col",{}),(0,v.jsx)("col",{width:"16px"})]}),(0,v.jsxs)("tbody",{children:[(0,v.jsx)(V,{name:"Token",value:n}),(0,v.jsx)(V,{name:"Expires At",value:s.toLocaleString()}),(0,v.jsx)(V,{name:"Retry Attempt",value:e.retryAttempt?.toString()??"N/A"}),(0,v.jsx)(V,{name:"Retry At",value:e.retryAt?.toLocaleString()??"N/A"})]})]})})})};var q=s(44986);const G="WT_NZ6JEU_dK03UPUjQm",K="qiIwEYs34R1jRXwb_sZ8",$="x_Ve8I65cAL4jZHbutKP",z="y_1aE6JElOnrFrvmgpUO",W="rOqbwjYwx0AIWTfoYOQe",Q="w0xpmm3i0WhHooXZt9xC",Y=({name:e,value:n})=>(0,v.jsxs)(L.S,{hover:!0,children:[(0,v.jsx)(T.p,{className:K,highlight:!0,children:e}),(0,v.jsx)(T.p,{className:$,truncate:!0,align:"right",children:n}),(0,v.jsx)(T.p,{className:z,children:(0,v.jsx)("button",{className:W,onClick:()=>{void 0!==n&&(0,U.v)(n)},children:(0,v.jsx)(B.c,{iconSize:16})})})]}),Z=({device:e})=>(0,v.jsxs)(J.x,{children:[(0,v.jsx)("h3",{className:Q,children:e.name}),(0,v.jsxs)(F.i,{children:[(0,v.jsxs)("colgroup",{children:[(0,v.jsx)("col",{width:"30%"}),(0,v.jsx)("col",{}),(0,v.jsx)("col",{width:"16px"})]}),(0,v.jsxs)("tbody",{children:[(0,v.jsx)(Y,{name:"Device",value:e?.name}),(0,v.jsx)(Y,{name:"Identifier",value:e.id}),(0,v.jsx)(Y,{name:"Type",value:e.type}),(0,v.jsx)(Y,{name:"Group",value:e.isGroup.toString()}),(0,v.jsx)(Y,{name:"Local",value:e.isLocal.toString()}),(0,v.jsx)(Y,{name:"Active",value:e.isActive.toString()}),(0,v.jsx)(Y,{name:"Connecting",value:e.isConnecting.toString()}),(0,v.jsx)(Y,{name:"Disabled",value:e.isDisabled.toString()}),(0,v.jsx)(Y,{name:"Volume",value:e.volume.toString()}),(0,v.jsx)(Y,{name:"HiFi",value:e.hifiSupport.deviceSupported.toString()})]})]})]}),X=()=>{const e=(0,q.O)(),n=e.devices;return(0,v.jsxs)("div",{className:G,children:[(0,v.jsx)(J.x,{children:(0,v.jsxs)(F.i,{children:[(0,v.jsxs)("colgroup",{children:[(0,v.jsx)("col",{width:"30%"}),(0,v.jsx)("col",{}),(0,v.jsx)("col",{width:"16px"})]}),(0,v.jsx)("tbody",{children:(0,v.jsx)(Y,{name:"Status",value:e.connectionStatus})})]})}),n.map((e=>(0,v.jsx)(Z,{device:e},e.id)))]})};var ee=s(51697),ne=s(31408),se=s(29919),te=s(73266),re=s(74376),le=s(51833),ae=s(68935),ie=s(60014),oe=s(26833),ce=s(14806),de=s(61233),ue=s(51971),pe=s(87995),he=s(7138),me=s(56363),xe=s(70138),je=s(9401),ve=s(65109);const fe=({view:e,className:n})=>{const s=(0,t.useCallback)((n=>{(0,ue.$1)(e,n.nativeEvent,"search-panel")&&n.preventDefault()}),[e]),r=(0,t.useCallback)((n=>{e.dispatch({effects:oe.ql.of(new oe.Jb({search:n}))})}),[e]),l=(0,t.useCallback)((()=>{(0,oe.N$)(e)}),[e]),a=(0,t.useRef)(null);return(0,t.useEffect)((()=>{e.dispatch({effects:oe.ql.of(new oe.Jb({search:""}))}),a.current?.select()}),[e]),(0,v.jsx)("div",{className:n,children:(0,v.jsx)(me.N,{iconLeading:(0,v.jsx)(xe.j,{}),iconTrailing:(0,v.jsx)(je.k,{onClick:()=>l()}),children:(0,v.jsx)(ve.y,{ref:a,onKeyDown:e=>s(e),onChange:e=>r(e.currentTarget.value)})})})};var ge=s(85780);function ye(e){return"object"==typeof e&&null!==e&&!Array.isArray(e)}function be(e,n,s=[]){let t=0;for(const r of Object.getOwnPropertyNames(e))n(e,r,s)?t++:ye(e[r])&&(t+=be(e[r],n,[r,...s]));return t}function Ne(e,n){return void 0===e[n]&&(e[n]={},!0)}function Ce(e,n){return!(!Array.isArray(e[n])||0!==e[n].length)&&(e[n]=[{}],!0)}function Se(e,n){return!(!Array.isArray(e[n])||1!==e[n].length||!ye(e[n][0])||0!==Object.getOwnPropertyNames(e[n][0]).length)&&(e[n]=[],!0)}function we(e,n){return!(!ye(e[n])||0!==Object.getOwnPropertyNames(e[n]).length)&&(e[n]=void 0,!0)}function Oe(e,n,s){return!(!s.some((e=>/policy/i.test(e)))||!1!==e[n])&&(delete e[n],!0)}function ke(e,n,s={}){let t=0;do{t=be(n=e.fromPartial(n),Ne),t+=be(n,Ce)}while(t>0);return be(n,we),be(n,Se),!0===s.cleanPolicies&&be(n,Oe),n}const Ae=["spotify:artist:5INjqkS1o8h1imAzPqGZBb","spotify:album:79dL7FLiJFOO0EoehUHQBv","spotify:track:6K4t31amVTZDgR3sKmwUJJ","spotify:show:1OLcQdw2PFDPG1jo3s0wbp","spotify:episode:0VpyIy8Srg5IKQdRAbDDH1"],Re=Object.values(ge.TP).filter((e=>"string"==typeof e)).map((e=>({name:e,value:(0,ge.EE)(e)})));function Ie(e,n){let s=0;const t=[];if(n.type.is("["))n.parent();else if(n.type.is("Property")){if(!n.firstChild())return[];t.unshift(e.sliceDoc(n.from+1,n.to-1)),n.parent()}for(;n.parent()&&!n.type.is("JsonText");){if(n.type.is("Array"))t.unshift("[]");else if(n.type.is("Property")){if(!n.firstChild())break;t.unshift(e.sliceDoc(n.from+1,n.to-1)),n.parent()}if(++s>1e4)break}return t}function Pe(e,n){for(const s of n)if("[]"===s){if(!Array.isArray(e)||0===e.length)return null;e=e[0]}else Object.hasOwn(e,s)&&(e=e[s]);return e}function De(e={}){return(0,te.ys)({activateOnTyping:!1,override:[n=>{const s=(0,ae.qz)(n.state).cursorAt(n.pos,-1);if(s.type.is("{")||s.type.is("Object")){const t=Ie(n.state,s),r=function(e,n){return Object.getOwnPropertyNames(Pe(e,n))}(e,t);return{from:n.pos,options:r.map((e=>({type:"text",label:e,apply:`"${e}"`})))}}if(s.type.is("[")||s.type.is("Array")){const t=Ie(n.state,s),r=Pe(e,t);return Array.isArray(r)&&ye(r[0])?{from:n.pos,options:[{type:"text",label:"{ ... }",apply:JSON.stringify(r[0]),boost:1},{type:"text",label:"{}",boost:0}]}:/extension/i.test(t[t.length-1])?{from:n.pos,options:Re.map((({name:e,value:n})=>({type:"constant",label:e,apply:`${n}`})))}:{from:n.pos,options:Ae.map((e=>({type:"text",label:`"${e}"`})))}}if(s.type.is("Property")){const t=Ie(n.state,s),r=function(e,n){const s=Pe(e,n);return void 0===s?"null":Array.isArray(s)?"array":typeof s}(e,t),l=[];if("boolean"===r)l.push({type:"keyword",label:"true",boost:1}),l.push({type:"keyword",label:"false",boost:0});else if("null"===r)l.push({type:"keyword",label:"null",boost:1}),l.push({label:"{}",apply:"{}",boost:0});else if("string"===r){l.push({label:'""'});for(const e of Ae)l.push({label:`"${e}"`})}else if("number"===r)if(/extension/i.test(t[t.length-1]))for(const{name:e,value:n}of Re)l.push({type:"constant",label:e,apply:`${n}`});else l.push({label:"0",apply:"0"}),l.push({label:"10",apply:"10"}),l.push({label:"100",apply:"100"});else"object"===r?l.push({label:"{}",apply:"{}"}):"array"===r&&l.push({label:"[]",apply:"[]"});return{from:n.pos,options:l}}return null}]})}const Ee=[de.vk,(0,ae.nF)(de.VE),(0,ue.Eu)(),(0,ue.ZO)(),(0,ue.HQ)(),(0,ue.Uw)(),ce.yy.allowMultipleSelections.of(!0),ue.$f.of([...re.wQ,...re.f$,...te.B1,...oe.Lp,re.oc]),(0,oe.yC)({top:!0,createPanel:e=>{const n=e.dom.ownerDocument.createElement("div");return pe.render((0,v.jsx)(he.LC,{target:e.dom.ownerDocument.head,children:(0,v.jsx)(fe,{view:e})}),n),{dom:n,top:!0}}}),(0,ae.mi)(),(0,le.AV)()],Le=[...Ee,(0,re.m8)(),(0,ie.ir)((0,le.ap)()),(0,ae.nY)(),(0,ae.n$)(),(0,te.vQ)()],Te=[...Ee,ce.yy.readOnly.of(!0)],Be=new ce.F6,Je=({readOnly:e=!1,onChange:n,onDiagnostics:s,editorRef:r,className:l})=>{const a=(0,t.useRef)(null);return(0,t.useEffect)((()=>{const t=new ue.tk({parent:a.current,extensions:[...e?Te:Le,Be.of(De({})),ue.tk.updateListener.of((e=>{e.docChanged&&n?.(e.state.doc.toString());for(const n of e.transactions)for(const e of n.effects)e.is(ie.lC)&&s?.(e.value)}))]});return void 0!==r&&(r.current=t),()=>{t.destroy()}}),[e,n,s,r]),(0,v.jsx)("div",{className:l,ref:a})};function Fe({readOnly:e,className:n,onChange:s,onDiagnostics:r}){const l=(0,t.useRef)(),a=(0,t.useRef)(s),i=(0,t.useRef)(r);a.current=s,i.current=r;const o=(0,t.useCallback)((()=>{const e=l.current;return void 0!==e?e.state.doc.toString():null}),[]),c=(0,t.useCallback)((e=>{const n=l.current;void 0!==n&&n.dispatch({changes:{from:0,to:n.state.doc.length,insert:e}})}),[]),d=(0,t.useCallback)((e=>{const n=l.current;void 0!==n&&n.dispatch({effects:Be.reconfigure(De(e))})}),[]),u=(0,t.useCallback)((e=>{a?.current?.(e)}),[]),p=(0,t.useCallback)((e=>{i?.current?.(e)}),[]);return{Editor:(0,v.jsx)(Je,{editorRef:l,readOnly:e,className:n,onChange:u,onDiagnostics:p}),getContent:o,setContent:c,setReference:d}}var Me=s(31833),Ue=s(57748),He=s(24604),Ve=s(18483),_e=s(67830),qe=s(92251),Ge=s(57692),Ke=s(11098),$e=s(32010),ze=s(96171),We=s(22558),Qe=s(25735),Ye=s(7680),Ze=s(60141),Xe=s(11924),en=s(15536),nn=s(62296),sn=s(94321),tn=s(62279),rn=s(67170),ln=s(68870),an=s(15633),on=s(56745),cn=s(48739),dn=s(29926),un=s(32112),pn=s(80086),hn=s(29060),mn=s(46332),xn=s(42801),jn=s(75520),vn=s(16460),fn=s(8391),gn=s(62587),yn=s(49889),bn=s(65157),Nn=s(97943),Cn=s(33473),Sn=s(13745),wn=s(59441);const On=[Me.F,Ue.Ul,He.M$,Ve.eN,_e.qu,qe.r2,Ge.JD,Ke.cf,$e.HP,ze.I1,We.Fg,Qe.w4,Ye.xi,Ze.cB,Xe.Xs,en.U,nn.I1,sn.nW,tn.w6,rn.id,ln.gw,an.jd,on._X,cn.BK,cn.yP,cn.b1,dn.E3,un.No,pn.KW,hn.xT,mn.Yx,o.hH,xn.HB,jn.XV,vn.KQ,fn.Pn,gn.R,yn.n0,ge.ev,bn.R3,Nn.p1,Nn.MR,Nn.jL,Nn.lc,Nn.IB,Cn.p,Sn.A7,wn.Dx];function kn(e){return JSON.parse(e,((e,n)=>null===n?void 0:n))}function An(e){return JSON.stringify(e,((e,n)=>void 0===n?null:n),2)}function Rn(){const{serviceMap:e,serviceNames:n}=(0,t.useMemo)((()=>{const e=function(e){return On.sort(((e,n)=>e.SERVICE_ID.localeCompare(n.SERVICE_ID))).reduce(((n,s)=>(n[s.SERVICE_ID]={methods:s.METHODS,client:new s(e)},n)),{})}((0,d.G)());return{serviceMap:e,serviceNames:Object.keys(e)}}),[]),[s,r]=(0,t.useState)(n[0]),l=e[s].methods,a=e[s].client,i=Object.keys(l),[o,c]=(0,t.useState)(i[0]),u=l[o].requestType,p=l[o].isStreaming,h=a[o],m=(0,t.useCallback)(((n,s)=>{const t=n??Object.keys(e)[0],l=e[t].methods,a=s??Object.keys(l)[0];r(t),c(a)}),[e,r,c]),x=(0,t.useMemo)((()=>An(ke(u,{},{cleanPolicies:!0}))),[u]),j=(0,t.useMemo)((()=>ke(u,{})),[u]),v=(0,t.useCallback)((e=>{try{return An(ke(u,kn(e),{cleanPolicies:!0}))}catch(n){return e}}),[u]),f=(0,t.useCallback)((async(e,n)=>{const s=u.fromPartial(kn(e));if(p)return h.call(a,s,(e=>{n(An(e))}));const t=await h.call(a,s);return n(An(t)),null}),[a,p,u,h]);return{services:n,methods:i,service:s,method:o,client:a,message:u,call:f,jsonReference:j,jsonString:x,prettify:v,update:m}}const In="gbcTqus4yhTHlzm2IETQ",Pn="EHmr8C7kxkrYGyC7o3JO",Dn="JAHwAteJRJtwtczneeVN",En="nqOWuGeqweWJBgtLeohb",Ln="tU2LEDqdrQPq3oDlpEOv",Tn="gkuNSEZ7uAKsay3cfbMR",Bn="nbQvEMLCjLpv4xnKSOIt",Jn=()=>{const{services:e,methods:n,service:s,method:r,call:l,jsonReference:a,jsonString:i,prettify:o,update:c}=Rn(),d=(0,t.useRef)(null),[u,p]=(0,t.useState)(!1),[h,m]=(0,t.useState)([]),x=h.length>0,{Editor:j,setContent:f,getContent:g,setReference:y}=Fe({className:Bn,onDiagnostics:e=>m(e)}),{Editor:b,setContent:N}=Fe({className:Bn,readOnly:!0}),C=(0,t.useCallback)((()=>{null!==d.current&&(d.current.cancel(),d.current=null,p(!1))}),[p]),S=(0,t.useCallback)((async()=>{C();const e=await l(g()??"{}",(e=>{N(e)}));null!==e&&(d.current=e,p(!0))}),[l,C,g,N]),w=(0,t.useCallback)((async()=>{const e=o(g()??"{}");f(e)}),[o,g,f]);return(0,t.useEffect)((()=>{y(a),f(i),N(""),C()}),[y,a,f,i,N,C]),(0,v.jsxs)("div",{className:In,children:[(0,v.jsxs)("div",{className:Pn,children:[(0,v.jsx)(ee.D,{as:"p",variant:"ballad",children:"Endpoint"}),(0,v.jsx)(ne.i,{value:s,onChange:e=>c(e.currentTarget.value),children:e.map((e=>(0,v.jsx)("option",{value:e,children:e},e)))}),(0,v.jsx)(ne.i,{value:r,onChange:e=>c(s,e.currentTarget.value),children:n.map((e=>(0,v.jsx)("option",{value:e,children:e},e)))})]}),(0,v.jsxs)("div",{className:Dn,children:[(0,v.jsxs)("div",{className:Ln,children:[(0,v.jsx)(ee.D,{as:"p",variant:"ballad",children:"Request"}),(0,v.jsx)(se.P,{className:Tn,size:"small",disabled:x,onClick:w,children:"Prettify"}),(0,v.jsx)(se.P,{className:Tn,size:"small",disabled:x,onClick:u?C:S,children:u?"Cancel":"Send"})]}),j]}),(0,v.jsxs)("div",{className:En,children:[(0,v.jsx)("div",{className:Ln,children:(0,v.jsx)(ee.D,{as:"p",variant:"ballad",children:"Response"})}),b]})]})};var Fn=s(93660),Mn=s(93635),Un=s(23363);var Hn=s(77308),Vn=s(42849);var _n=s(19031),qn=s(51087),Gn=s(97582),Kn=s(40679);const $n="bFE0oGWgZ40KJHjcBj12",zn="nAeIvCNG4jVwkKxAEqwm",Wn="KG4I4Zh3DDzaN0XwzddI",Qn="tiUNZpj0HxFf5EOWSiCA",Yn="eymcN9Ndbrbe5jR7URP_",Zn="nzbIAA5MqUSD0hIKUuHg",Xn="hksYFxAm48XqAEbpcukQ",es="UnO1u4VJB0B6pTtqWh1n",ns="xlSWVFMQmYmRK34yiPOA",ss="oKgZ0g8at59jN8nf8Bee",ts="Nodut0kqaRIc93iGqbbP",rs="dUIum8rPR6Msq9wot5ky",ls="QHO5pYBkfWBn6qyAh9dp";const as=({size:e,ranges:n})=>{if(0===n.length)return(0,v.jsx)("div",{className:Xn,children:(0,v.jsx)("div",{className:es})});const s=`linear-gradient(90deg, ${n.map((n=>{const s=100*n.fromByte/e,t=100*n.toByte/e;return`transparent ${s}%, ${Fn.pCU} ${s}%, ${Fn.pCU} ${t}%, transparent ${t}%`})).join(", ")})`;return(0,v.jsx)("div",{className:Xn,children:(0,v.jsx)("div",{className:es,style:{background:s}})})},is=({item:e,file:n})=>{const s=(0,_n.g)(),t=(function(e){let n,s,t=0;if(0===e.length)return t;for(n=0;n<e.length;n++)s=e.charCodeAt(n),t=(t<<5)-t+s,t|=0;return t}(`${n.format}${n.bitrate}`)+180)%360;return(0,v.jsxs)(L.S,{hover:!0,children:[(0,v.jsx)(T.p,{className:zn,highlight:!0,children:(0,v.jsxs)("div",{className:ns,style:{background:`linear-gradient(180deg, hsl(${t}, 60%, 30%), hsl(${t}, 40%, 70%))`},children:[(0,v.jsx)("span",{className:ss,children:n.format}),(0,v.jsx)("span",{className:ts,children:os(n.bitrate,1e3,"k")})]})}),(0,v.jsx)(T.p,{className:Wn,truncate:!0,children:(0,v.jsxs)("div",{className:Zn,children:[n.fileId,(0,v.jsx)(as,{size:n.byteSize,ranges:n.byteRanges})]})}),(0,v.jsxs)(T.p,{className:Qn,children:[(0,v.jsx)("button",{className:Yn,onClick:()=>{s.play({uri:"spotify:internal:fileplayback",pages:[{items:[{...e,provider:"context",metadata:{"media.manifest":JSON.stringify({id:n.fileId,bitrate:n.bitrate,format:n.formatEnum,encryption:"aes"})}}]}]},{referrerIdentifier:"PlayerStub_UnknownReferrer",featureIdentifier:"debug"})},children:(0,v.jsx)(Mn.J,{iconSize:16})}),(0,v.jsx)("button",{className:Yn,onClick:()=>{(0,U.v)(n.fileId)},children:(0,v.jsx)(B.c,{iconSize:16})})]})]})};function os(e=void 0,n=1,s=""){if(void 0!==e&&-1!==e)return"string"==typeof e&&(e=Number.parseInt(e,10)),`${(e/n).toLocaleString("en",{maximumFractionDigits:10})}${s}`}function cs(e=void 0){return!0===e?"Yes":"No"}function ds(e=void 0){if(void 0!==e)return(0,Gn.m)(parseInt(e,10))}const us=({name:e,value:n})=>(0,v.jsxs)(L.S,{hover:!0,children:[(0,v.jsx)(T.p,{className:zn,highlight:!0,children:e}),(0,v.jsx)(T.p,{className:Wn,truncate:!0,align:"right",children:n}),(0,v.jsx)(T.p,{className:Qn,children:(0,v.jsx)("button",{className:Yn,onClick:()=>{void 0!==n&&(0,U.v)(n)},children:(0,v.jsx)(B.c,{iconSize:16})})})]}),ps=()=>{const e=(0,qn.Y)((e=>e?.item??null)),n=function(){const[e,n]=(0,t.useState)(null),s=(0,Un.f)();return(0,t.useEffect)((()=>{let e=!0;return s.getPlaybackInfo().then((s=>{e&&n(s)})),()=>{e=!1}}),[s]),(0,Vn._)(Hn.r.INFO,(({data:e})=>{n(e)})),e}(),s=function(e=null,n=null){const[s,r]=(0,t.useState)(null),l=(0,Un.f)();return(0,t.useEffect)((()=>{let s=!0,t=null;if(null===e)r(null);else{const a=async()=>{const n=await l.getFiles(e);s&&r(n)};a(),null!==n&&(t=window.setInterval(a,n))}return()=>{s=!1,null!==t&&window.clearInterval(t)}}),[l,e,n]),s}(e?.uri,500),r=(0,_n.g)();return null===e?(0,v.jsx)("div",{className:$n,children:"Nothing is currently playing."}):(0,v.jsxs)("div",{className:$n,children:[(0,v.jsxs)("div",{className:rs,children:[(0,v.jsx)(ee.D,{variant:"violaBold",children:"Forced shuffle"}),(0,v.jsx)(Kn.Z,{id:"forced-shuffe",value:r.getForcedShuffle(),onSelected:e=>{r.setForcedShuffle(e)}})]}),(0,v.jsx)("div",{children:(0,v.jsx)("button",{className:ls,onClick:()=>{r.play({uri:"invalid_context_uri"},{referrerIdentifier:"PlayerStub_UnknownReferrer",featureIdentifier:"debug"})},children:(0,v.jsx)("span",{children:"Clear context"})})}),(0,v.jsx)(J.x,{children:(0,v.jsxs)(F.i,{children:[(0,v.jsxs)("colgroup",{children:[(0,v.jsx)("col",{width:"30%"}),(0,v.jsx)("col",{}),(0,v.jsx)("col",{width:"16px"})]}),(0,v.jsxs)("tbody",{children:[(0,v.jsx)(us,{name:"url"===n?.fileType?"URL":"File ID",value:n?.fileId}),(0,v.jsx)(us,{name:"Type",value:n?.fileType}),(0,v.jsx)(us,{name:"url"===n?.fileType?"URL":"File ID",value:n?.fileId}),(0,v.jsx)(us,{name:"Codec",value:n?.codecName}),(0,v.jsx)(us,{name:"Bitrate",value:os(n?.fileBitrate,1e3,"k")}),(0,v.jsx)(us,{name:"Strategy",value:n?.strategy}),(0,v.jsx)(us,{name:"Target Bitrate",value:os(n?.targetBitrate,1e3,"k")}),(0,v.jsx)(us,{name:"Advisted Bitrate",value:os(n?.advisedBitrate,1e3,"k")}),(0,v.jsx)(us,{name:"Target File Available",value:cs(n?.targetFileAvailable)}),(0,v.jsx)(us,{name:"Duration (hh:mm)",value:ds(n?.lengthMs)}),(0,v.jsx)(us,{name:"Duration (ms)",value:os(n?.lengthMs,1," ms")}),(0,v.jsx)(us,{name:"Speed",value:os(n?.playbackSpeed)}),(0,v.jsx)(us,{name:"Gain Adjustment",value:os(n?.gainAdjustment)}),(0,v.jsx)(us,{name:"Loudness",value:n?.hasLoudness?os(n?.loudness):void 0})]})]})}),(0,v.jsx)(J.x,{children:(0,v.jsxs)(F.i,{children:[(0,v.jsxs)("colgroup",{children:[(0,v.jsx)("col",{width:"72px"}),(0,v.jsx)("col",{}),(0,v.jsx)("col",{width:"32px"})]}),(0,v.jsx)("tbody",{children:s?.map((n=>(0,v.jsx)(is,{item:e,file:n},n.fileId)))})]})})]})};var hs=s(84875),ms=s.n(hs),xs=s(85830),js=s(437),vs=s(91369),fs=s(53167),gs=s(95421),ys=s(13390),bs=s(5684),Ns=s(31481),Cs=s(29629);const Ss="HnpguQ3rtX44hdThdwy9",ws="oJJkROlUPmT5lEqzx1cZ",Os="dQkRirl4qynBunRI_kR2",ks="RqhApI3LSHoimdyl53SQ",As="y1gsL5scUuLOArVrFYRl",Rs="Ni7focuLC626smvmOnLP",Is="W5wjtyjHTJPGX5j7_WOp",Ps=({property:e,value:n,onOverride:s,isOverridden:t})=>{if("int"===e.type||"internal"===e.type)throw Error("Invalid property type for dropdown!");const r="bool"===e.type?["true","false"]:e.values;return(0,v.jsx)(ne.i,{id:`${e.name}-dropdown`,value:(n??e.default).toString(),onChange:n=>{var t;s(e.name,(t=n.currentTarget.value,"bool"===e.type?"true"===t:t))},className:ms()({[Is]:t}),children:r.map((e=>(0,v.jsx)("option",{value:e,children:e},e)))})},Ds=({property:e,value:n,onOverride:s,isOverridden:r})=>{if("int"!==e.type)throw Error("Invalid property type for dropdown!");const[l,a]=(0,t.useState)(n??e.default),i=(0,xs.y1)((n=>{s(e.name,n)}),500);return(0,v.jsx)(ve.y,{type:"number",min:e.lower,max:e.upper,value:l,onChange:e=>{a(e.currentTarget.value),i(Number.parseInt(e.currentTarget.value,10))},className:ms()({[Is]:r})})},Es=({property:e,localValue:n,remoteValue:s,onOverride:t,filter:r})=>{const l=n!==s;return(0,v.jsxs)(L.S,{hover:!0,children:[(0,v.jsx)(T.p,{className:Os,title:e.name,highlight:!0,children:r?(0,v.jsx)(Ns.o,{searchWords:[r??""],textToHighlight:e.name}):e.name}),(0,v.jsx)(T.p,{className:ks,children:e.default.toString()}),(0,v.jsx)(T.p,{className:ks,children:s?.toString()??null}),(0,v.jsx)(T.p,{className:ks,children:"bool"===e.type||"enum"===e.type?(0,v.jsx)(Ps,{property:e,value:n,onOverride:t,isOverridden:l}):"int"===e.type?(0,v.jsx)(Ds,{property:e,value:n,onOverride:t,isOverridden:l}):null})]})},Ls="debugPanelRemoteConfigLastChangedAtByPropertyName",Ts=({properties:e,localConfiguration:n,remoteConfiguration:s,setOverrides:r,clearOverrides:l})=>{const{filter:a}=(0,t.useContext)(Cs.fo),i=(0,P.um)(),o=()=>{const e=i.getItem(Ls);return e instanceof gs.d||e instanceof ys.y?{}:e},c=(e,n)=>{r(vs.VK.fromJSON({[e]:n})),i.setItem(Ls,{...o(),[e]:Date.now()})},d=(0,t.useRef)(o()),u=e.sort(((e,n)=>(d.current[n.name]??0)-(d.current[e.name]??0)||e.name.localeCompare(n.name)));return(0,v.jsxs)("div",{className:As,children:[(0,v.jsxs)("div",{className:Rs,children:[(0,v.jsx)(se.P,{buttonSize:"sm",onClick:()=>{l(),i.clearItem(Ls)},children:"Clear local overrides"}),(0,v.jsx)(bs.K,{placeholder:"Find",alwaysExpanded:!0})]}),(0,v.jsx)(J.x,{children:(0,v.jsxs)(F.i,{children:[(0,v.jsxs)("colgroup",{children:[(0,v.jsx)("col",{width:"30%"}),(0,v.jsx)("col",{}),(0,v.jsx)("col",{})]}),(0,v.jsxs)("tbody",{children:[(0,v.jsxs)(L.S,{children:[(0,v.jsx)(js.x,{className:ws,children:"Name"}),(0,v.jsx)(js.x,{className:ws,children:"Default"}),(0,v.jsx)(js.x,{className:ws,children:"Remote"}),(0,v.jsx)(js.x,{className:ws,children:"Local"})]}),u.filter((e=>-1!==e.name.toLowerCase().indexOf(a.toLowerCase()))).map((e=>(0,v.jsx)(Es,{property:e,localValue:n.getValue(e.name),remoteValue:s.getValue(e.name),onOverride:c,filter:a},e.name)))]})]})})]})},Bs=()=>{const e=[...(0,vs.y6)()],{localConfiguration:n,remoteConfiguration:s,setOverrides:t,clearOverrides:r}=(0,fs.j)();return(0,v.jsx)("div",{className:Ss,children:(0,v.jsx)(Cs.hz,{uri:"spotify:internal:debug:remote-config-properties",children:(0,v.jsx)(Ts,{properties:e,localConfiguration:n,remoteConfiguration:s,setOverrides:t,clearOverrides:r})})})};var Js=s(43546),Fs=s(29740),Ms=s(2637),Us=s(29126),Hs=s(49261),Vs=s(80467),_s=s(33609),qs=s(36533),Gs=function(e){return e.IPL="IN_PERSON",e.RGS="REMOTE",e}(Gs||{});var Ks=s(11693),$s=s(6285),zs=s(79837);function Ws({obj:e}){return(0,v.jsx)(F.i,{children:(0,v.jsx)("tbody",{children:Object.entries(e).map((e=>(0,v.jsx)(Qs,{name:e[0],value:e[1]},e[0])))})})}function Qs({name:e,value:n}){let s;return"string"==typeof n||"number"==typeof n?s=n:"boolean"==typeof n?s=(0,v.jsx)(Ks.N,{defaultChecked:n,isActive:!1,onClick:e=>{e.preventDefault()}}):"object"==typeof n&&(s=(0,v.jsx)(Ws,{obj:n})),(0,v.jsxs)(L.S,{hover:!0,children:[(0,v.jsx)(T.p,{className:H.rowName,highlight:!0,children:e}),(0,v.jsx)(T.p,{className:H.rowValue,truncate:!0,align:"right",children:s}),(0,v.jsx)(T.p,{className:H.rowActions,children:(0,v.jsx)("button",{className:H.rowAction,onClick:()=>{void 0!==n&&(0,U.v)("object"==typeof n?JSON.stringify(n):n.toString())},children:(0,v.jsx)(B.c,{size:"small"})})})]})}const Ys=[{title:"Current Session",Component:()=>{const{currentSession:e,refreshCurrentSession:n}=(0,qs.A)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)($s.o,{iconOnly:zs.t,onClick:()=>{n()}}),(0,v.jsx)(J.x,{children:e&&(0,v.jsxs)(F.i,{children:[(0,v.jsxs)("colgroup",{children:[(0,v.jsx)("col",{width:"30%"}),(0,v.jsx)("col",{}),(0,v.jsx)("col",{width:"16px"})]}),(0,v.jsx)("tbody",{children:Object.entries(e).map((e=>(0,v.jsx)(Qs,{name:e[0],value:e[1]},e[0])))})]})})]})}},{title:"Create New Session",Component:()=>{const{createSession:e}=(0,qs.A)(),[n,s]=(0,t.useState)(null),[r,l]=(0,t.useState)(Gs.IPL),a=(0,g.I0)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{children:"Create a new session as your current user (does nothing if you already have a session)"}),(0,v.jsxs)("div",{className:H.rowControl,children:[(0,v.jsxs)(b.v,{id:"sessionTypeDropdown",value:r,onSelect:e=>{switch(e){case Gs.IPL:l(Gs.IPL);break;case Gs.RGS:l(Gs.RGS);break;default:l(Gs.IPL)}},children:[(0,v.jsx)("option",{value:Gs.IPL,children:Gs.IPL},Gs.IPL),(0,v.jsx)("option",{value:Gs.RGS,children:Gs.RGS},Gs.RGS)]}),(0,v.jsx)(y.D,{onClick:async n=>{n.preventDefault();const t=await e(r);s(t)},children:"Create"})]}),(0,v.jsx)(se.P,{onClick:()=>{a((0,_s.Cv)())},style:{marginTop:Hs.mG},children:"Open invitation modal"}),null!==n&&(0,v.jsx)(Vs.B,{value:JSON.stringify(n,null,2),readOnly:!0})]})}},{title:"Leave Current Session",Component:()=>{const{leaveSession:e,currentSession:n}=(0,qs.A)(),[s,r]=(0,t.useState)(null);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:H.rowName,children:"Leave your current session"}),(0,v.jsxs)("div",{className:H.rowControl,children:[(0,v.jsx)(ve.y,{value:n?.session_id??"",readOnly:!0}),(0,v.jsx)(y.D,{onClick:async s=>{if(s.preventDefault(),!n)return;const t=await e();r(t)},children:"Leave"})]}),null!==s&&(0,v.jsx)(Vs.B,{value:JSON.stringify(s,null,2),readOnly:!0})]})}},{title:"Delete Current Session",Component:()=>{const{currentSession:e,deleteSession:n}=(0,qs.A)(),[s,r]=(0,t.useState)(null);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:H.rowName,children:"Delete your current session"}),(0,v.jsxs)("div",{className:H.rowControl,children:[(0,v.jsx)(ve.y,{value:e?.session_id??"",readOnly:!0}),(0,v.jsx)(y.D,{onClick:async s=>{if(s.preventDefault(),!e)return;const t=await n();r(t)},children:"Delete"})]}),null!==s&&(0,v.jsx)(Vs.B,{value:JSON.stringify(s,null,2),readOnly:!0})]})}},{title:"Join Session as Guest",Component:()=>{const{joinSession:e}=(0,qs.A)(),[n,s]=(0,t.useState)(null),[r,l]=(0,t.useState)("");return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:H.rowName,children:"Join somebody else's session"}),(0,v.jsxs)("div",{className:H.rowControl,children:[(0,v.jsx)(ve.y,{value:r,onChange:e=>l(e.currentTarget.value)}),(0,v.jsx)(y.D,{onClick:async n=>{n.preventDefault();const t=await e(r);s(t)},children:"Join"})]}),null!==n&&(0,v.jsx)(Vs.B,{value:JSON.stringify(n,null,2),readOnly:!0})]})}}],Zs=()=>{const[e,n]=(0,t.useState)(-1);return(0,v.jsxs)("div",{className:H.panel,children:[(0,v.jsx)("h1",{children:"Social Connect!"}),(0,v.jsx)(Js.U,{children:Ys.map(((s,t)=>(0,v.jsxs)(Fs.Q,{children:[(0,v.jsx)(Ms.i,{className:H.rowHeader,onClick:s=>{s.preventDefault(),n(t===e?-1:t)},isExpanded:t===e,children:s.title}),(0,v.jsx)(Us.v,{isExpanded:t===e,children:s.Component&&(0,v.jsx)(s.Component,{})})]},`${t}-item`)))})]})},Xs="wjncHEmBUc7V8RZYdENw",et="uyHngn_fJez61BsFl3tA",nt="J2KhtXbDovVMDOMzv1Jy",st="h5nLocSUS3w2NB53IdWQ",tt="debugWindowActiveTabGroup",rt="debugWindowActiveTabIndex",lt=()=>{const e=(0,Un.f)().getCapabilities().canGetFiles,n=(0,D.Y)(),s=(0,I.ky)();(0,t.useEffect)((()=>{s&&(s.title="Spotify Debug Window")}),[s]);const o=(0,t.useMemo)((()=>Object.fromEntries(Object.entries({Page:[null].filter(E.K),Authorization:[{label:"Access Token",Panel:_}],Playback:[e?{label:"Playback",Panel:ps}:null,{label:"Connect",Panel:X},n?{label:"Social Connect",Panel:Zs}:null].filter(E.K),"Data Fetching":[{label:"Esperanto",Panel:Jn},null].filter(E.K),Other:[{label:"Remote Config",Panel:Bs},{label:"Ads",Panel:f},{label:"In-App Messaging",Panel:A},{label:"Your DJ",Panel:R.Fh}].filter(E.K)}).filter((([e,n])=>n.length>0)))),[e,n]),c=Object.keys(o),d=(0,P.um)(),u=d.getItem(tt),p="string"==typeof u&&u in o?u:c[0],[h,m]=(0,t.useState)(p),x=d.getItem(rt),j="number"==typeof x&&x in o[h]?x:0,[g,y]=(0,t.useState)(j),b=o[h][g].Panel;return(0,v.jsx)("div",{className:"encore-dark-theme",children:(0,v.jsxs)("div",{className:Xs,children:[(0,v.jsx)(r.W,{className:et,children:(0,v.jsx)(l.b,{flexMobile:!0,children:c.map((e=>(0,v.jsxs)(t.Fragment,{children:[(0,v.jsx)(a.W,{children:e}),o[e].map(((n,s)=>(0,v.jsx)(i._,{active:h===e&&g===s,label:n.label,onClick:()=>{m(e),d.setItem(tt,e),y(s),d.setItem(rt,s)},className:nt,children:n.label},n.label)))]},e)))})}),(0,v.jsx)("div",{className:st,children:(0,v.jsx)(b,{})})]})})}}}]);
//# sourceMappingURL=xpui-debug-window-contents.js.map