"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[9694],{8735:(e,a,s)=>{s.r(a),s.d(a,{HptoContainer:()=>Ne,default:()=>we});var t=s(59496),r=s(83792),n=s(9990),c=s(95430),i=s(84875),l=s.n(i),d=s(62551),o=s(7317),h=s(47948),u=s(94993);const m="WiPggcPDzbwGxoxwLWFf",g="tqFRRnWu7DgTNKYlCl6x",x="MnW5SczTcbdFHxLZ_Z8j",j="kYeGiolqG6dym3vP3Sux",f="YZtgNJaLuYjhGWHuN2zN";var v=s(4637);const p=({children:e,fetchingState:a,isHptoShown:s})=>{const i=(0,n.W6)(h.R2E),p=(0,r.v9)(o.W3),k=(0,r.I0)(),b=(0,t.useRef)(null);(0,t.useEffect)((()=>(b.current&&k((0,c.az)(b.current)),()=>{k((0,c.MJ)(i))})),[k,i]),(0,t.useEffect)((()=>{a===u.Y.FETCHED&&k((0,c.Fw)())}),[a,k]);const M=(0,t.useCallback)((e=>{k((0,c.lT)(e.message))}),[k]);return(0,v.jsx)(d.L,{onError:M,children:(0,v.jsx)("div",{"data-testid":"hpto-parent-container",className:l()(m,"contentSpacing",{[j]:!s,[g]:(a===u.Y.FAILED||!p)&&i}),children:(0,v.jsx)("div",{"data-testid":"test-htpo-ref",ref:b,className:l()(x,{[f]:a===u.Y.FETCHING&&i}),children:e})})})};var k=s(98484),b=s(42899),M=s(94633),y=s(45364);const N="JRpZEVSn5LfbA9fwwOqQ",w=({isPremium:e})=>{const a=(0,r.I0)();return(0,v.jsx)("div",{className:N,children:e?(0,v.jsx)(k.D,{buttonSize:"sm",colorSet:"overMedia",onClick:()=>a((0,y.xG)()),children:M.ag.get("ad-formats.hideAnnouncements")}):(0,v.jsx)(b.V,{colorSet:"overMedia",children:M.ag.get("ad-formats.sponsored")})})},S="iVAZDcTm1XGjxwKlQisz",I="_I_1HMbDnNlNAaViEnbp",C=({isPremium:e,backgroundColor:a,backgroundImage:s,backgroundUrl:n,loaderFrame:i})=>{const l=(0,t.useRef)(null),[d,o]=(0,t.useState)(!1),h=(0,r.I0)();return(0,t.useEffect)((()=>{const e=()=>{o(!0),i.contentWindow?.postMessage({name:"fireHptoViewEvent"},"*")};return l&&l.current&&(i.style.display="",i.className=I,i.setAttribute("aria-hidden","true"),i.addEventListener("load",e),l.current.innerHTML="",l.current.insertBefore(i,l.current.firstChild)),()=>{i.removeEventListener("load",e)}}),[l,i]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("a",{draggable:!1,href:n,ref:l,className:S,onClick:()=>{n&&h((0,c.kh)("event_clicked"))},style:{backgroundColor:a,opacity:d?1:0,backgroundImage:d?`url(${s})`:"none",backgroundSize:"cover"}}),(0,v.jsx)(w,{isPremium:e})]})},V=({isPremium:e,backgroundColor:a,backgroundImage:s,backgroundUrl:n,bannerMode:i,html:l})=>{const d=(0,r.I0)(),[h,u]=(0,t.useState)(!1),m=(0,r.v9)(o.t4)?.media,g=l||m;return(0,t.useEffect)((()=>{if("html"===i){u(!0);const e=document.querySelectorAll('[data-testid="html-hpto-iframe"]')[0];e instanceof HTMLIFrameElement&&e.contentWindow?.postMessage({name:"fireHptoViewEvent"},"*")}}),[i]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("a",{draggable:!1,href:n||"",className:S,onClick:()=>{n&&d((0,c.kh)("event_clicked"))},style:{backgroundColor:a,backgroundImage:h?`url(${s})`:"none",backgroundSize:"cover"},children:(0,v.jsx)("iframe",{"data-testid":"html-hpto-iframe",className:I,srcDoc:g,scrolling:"no",marginWidth:0,marginHeight:0,style:{display:h?"":"none"},"aria-hidden":!0})}),(0,v.jsx)(w,{isPremium:e})]})},E="xXj7eFQ8SoDKYXy6L3E1",T="F68SsPm8lZFktQ1lWsQz",F=({isPremium:e,backgroundColor:a,backgroundImage:s,clickThroughUrl:n})=>{(0,t.useEffect)((()=>{if(!s)throw Error("[Image HPTO] Missing background image")}),[s]);const i=(0,r.I0)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("a",{draggable:!1,onClick:()=>{i((0,c.kh)("event_clicked"))},className:E,style:{backgroundColor:a},href:n,children:(0,v.jsx)("img",{draggable:!1,className:T,alt:"",src:s})}),(0,v.jsx)(w,{isPremium:e})]})};var z=s(14887),A=s(29919),P=s(70706),L=s(26156),H=s(73519),_=s(41946),J=s(24880),D=s(17887),Y=s(62168),R=s(15917),O=s(51431),B=s(68985),W=s(64689),U=s(13138),K=s(18112);const q="x8e0kqJPS0bM4dVK7ESH",X="gZ2Nla3mdRREDCwybK6X",G="SChMe0Tert7lmc5jqH01",Q="AwF4EfqLOIJ2xO7CjHoX",Z="UlkNeRDFoia4UDWtrOr4",$="k_RKSQxa2u5_6KmcOoSw",ee="_mWmycP_WIvMNQdKoAFb",ae="O3UuqEx6ibrxyOJIdpdg",se="akCwgJVf4B4ep6KYwrk5",te="qXuAn7YYM9WSo4IaRS_X",re="bIA4qeTh_LSwQJuVxDzl",ne="ajr9pah2nj_5cXrAofU_",ce="gvn0k6QI7Yl_A0u46hKn",ie="obTnuSx7ZKIIY1_fwJhe",le="IiLMLyxs074DwmEH4x5b",de="RJjM91y1EBycwhT_wH59",oe="mxn5B5ceO2ksvMlI1bYz",he="l8wtkGVi89_AsA3nXDSR",ue="Th1XPPdXMnxNCDrYsnwb",me="SJMBltbXfqUiByDAkUN_",ge="Nayn_JfAUsSO0EFapLuY",xe="YqlFpeC9yMVhGmd84Gdo",je="HksuyUyj1n3aTnB4nHLd",fe="DT8FJnRKoRVWo77CPQbQ",ve=(e,a)=>{switch(e){case z.JM.ALBUM:case z.JM.TRACK:case z.JM.EPISODE:case z.JM.PLAYLIST:return a?M.ag.get("ad-formats.remove"):M.ag.get("ad-formats.save");default:return a?M.ag.get("unfollow"):M.ag.get("follow")}},pe=({playBtnUri:e,uri:a,uriType:s})=>{const n=(0,r.I0)(),[i,d]=(0,W.Z)(a),o=(0,K.o)(),{togglePlay:h,isPlaying:u}=(0,U.n)({uri:e},{featureIdentifier:"hpto"}),m=(0,t.useCallback)((()=>{h(),n((0,c.kh)("event_clicked","ne-play-button"))}),[n,h]),g=(0,t.useCallback)((async()=>{try{await d(!i)}catch{(0,c.lT)(`invalid button uri type ${a}`)}o({targetUri:a,intent:i?"unsave":"save",type:"click"})}),[i,d,a,o]),x=(0,t.useCallback)((()=>{n((0,c.kh)("event_clicked","ne-more-button"))}),[n]);let j=null;return j=(0,z.YF)(a)?(0,v.jsx)(L.Y,{uri:a}):(0,z.OB)(a)?(0,v.jsx)(H.m,{uri:a}):(0,z.nK)(a)?(0,v.jsx)(Y.X,{uri:a}):(0,z.RS)(a)?(0,v.jsx)(R.M,{uri:a}):(0,z.wj)(a)?(0,v.jsx)(O.$,{uri:a}):(0,z.hn)(a)?(0,v.jsx)(_.k,{uri:a}):(0,z.dB)(a)?(0,v.jsx)(D.N,{uri:a}):(0,v.jsx)(J.o,{uri:a}),(0,v.jsxs)("div",{className:ue,"data-testid":"hpto-native-buttons",children:[(0,v.jsx)(k.D,{onClick:m,children:u?M.ag.get("pause"):M.ag.get("play")}),(0,v.jsx)(A.P,{className:l()({[fe]:i}),onClick:g,children:ve(s,i)}),(0,v.jsx)(B.y,{menu:j,children:(0,v.jsx)(P.MoreButton,{onClick:x,size:32,className:me})})]})},ke=({className:e})=>(0,v.jsx)("svg",{className:e,xmlns:"http://www.w3.org/2000/svg",width:"150",height:"20",viewBox:"0 0 147 20",children:(0,v.jsxs)("g",{fill:"none",fillRule:"evenodd",stroke:"none",strokeWidth:"1",children:[(0,v.jsx)("path",{fill:"#FFF",d:"M70 5H71V16H70z"}),(0,v.jsxs)("g",{children:[(0,v.jsx)("path",{fill:"#84BD00",d:"M10.001.045C4.489.045.02 4.49.02 9.975c0 5.486 4.469 9.932 9.981 9.932 5.513 0 9.981-4.446 9.981-9.931 0-5.485-4.468-9.931-9.981-9.931"}),(0,v.jsx)("path",{fill:"#000",d:"M15.544 10.6C12.463 8.717 7.956 8.186 4.33 9.28a.775.775 0 00-.519.967.78.78 0 00.972.515c3.173-.958 7.263-.483 9.945 1.158a.78.78 0 001.07-.255.772.772 0 00-.255-1.065"}),(0,v.jsx)("path",{fill:"#000",d:"M16.858 7.251c-3.704-2.187-9.565-2.393-13.09-1.328A.928.928 0 104.31 7.7c3.07-.927 8.378-.752 11.595 1.149a.936.936 0 001.28-.325.926.926 0 00-.327-1.273"}),(0,v.jsx)("path",{fill:"#000",d:"M14.372 13.518c-2.63-1.6-5.892-1.972-9.694-1.107a.618.618 0 10.277 1.206c3.474-.79 6.424-.467 8.768.958a.624.624 0 00.855-.206.617.617 0 00-.206-.851"})]}),(0,v.jsxs)("g",{fill:"#FFF",transform:"translate(25 5)",children:[(0,v.jsx)("path",{d:"M3.806 4.194C2.23 3.822 1.95 3.56 1.95 3.013c0-.518.493-.867 1.226-.867.711 0 1.416.265 2.156.81a.104.104 0 00.146-.023l.77-1.073a.102.102 0 00-.02-.139C5.347 1.023 4.357.684 3.199.684 1.496.684.307 1.694.307 3.14c0 1.55 1.026 2.099 2.799 2.522 1.508.344 1.763.632 1.763 1.147 0 .57-.515.924-1.343.924-.92 0-1.672-.306-2.511-1.025a.109.109 0 00-.076-.025.103.103 0 00-.071.036L.005 7.734a.1.1 0 00.01.142 5.18 5.18 0 003.476 1.318c1.834 0 3.02-.991 3.02-2.525 0-1.297-.784-2.014-2.705-2.475"}),(0,v.jsx)("path",{d:"M10.661 2.656c-.795 0-1.447.31-1.985.944v-.714a.103.103 0 00-.103-.102H7.16a.103.103 0 00-.103.102v7.935c0 .057.046.102.103.102h1.412a.103.103 0 00.103-.102V8.316c.538.597 1.19.889 1.985.889 1.478 0 2.973-1.125 2.973-3.274 0-2.15-1.495-3.275-2.973-3.275zm1.332 3.275c0 1.094-.682 1.858-1.659 1.858-.965 0-1.693-.798-1.693-1.858s.728-1.858 1.693-1.858c.961 0 1.659.78 1.659 1.858z"}),(0,v.jsx)("path",{d:"M17.468 2.656c-1.903 0-3.393 1.449-3.393 3.298 0 1.83 1.48 3.263 3.37 3.263 1.91 0 3.405-1.444 3.405-3.286 0-1.836-1.485-3.275-3.382-3.275zm0 5.145c-1.012 0-1.775-.804-1.775-1.87 0-1.07.737-1.847 1.752-1.847 1.019 0 1.787.804 1.787 1.87 0 1.07-.742 1.847-1.764 1.847z"}),(0,v.jsx)("path",{d:"M24.913 2.784H23.36v-1.57a.103.103 0 00-.104-.103h-1.411a.103.103 0 00-.104.102v1.57h-.679a.103.103 0 00-.102.103v1.2c0 .056.046.102.102.102h.68v3.104c0 1.254.63 1.89 1.876 1.89.507 0 .927-.103 1.323-.325a.102.102 0 00.052-.089V7.626a.102.102 0 00-.049-.087.104.104 0 00-.1-.004 1.797 1.797 0 01-.83.197c-.452 0-.654-.203-.654-.659V4.188h1.553a.103.103 0 00.103-.102v-1.2a.103.103 0 00-.103-.102"}),(0,v.jsx)("path",{d:"M30.326 2.79v-.193c0-.567.22-.82.714-.82.294 0 .53.057.795.145.033.01.067.005.093-.014a.101.101 0 00.043-.083V.648a.102.102 0 00-.073-.098 3.916 3.916 0 00-1.173-.166c-1.305 0-1.994.726-1.994 2.098v.296h-.678a.103.103 0 00-.104.102v1.206c0 .056.047.102.104.102h.678v4.788c0 .056.046.102.103.102h1.412a.103.103 0 00.103-.102V4.188h1.319l2.019 4.787c-.23.502-.455.603-.762.603-.25 0-.511-.074-.779-.219a.107.107 0 00-.082-.007.104.104 0 00-.061.055l-.479 1.038a.1.1 0 00.045.132 3 3 0 001.507.381c1.043 0 1.62-.48 2.127-1.771l2.45-6.258a.1.1 0 00-.011-.095.103.103 0 00-.085-.044h-1.47a.104.104 0 00-.098.068L34.483 7.11l-1.649-4.254a.103.103 0 00-.096-.066h-2.412"}),(0,v.jsx)("path",{d:"M27.188 2.784h-1.412a.103.103 0 00-.103.102v6.09c0 .056.046.102.103.102h1.412a.103.103 0 00.103-.102v-6.09a.103.103 0 00-.103-.102"}),(0,v.jsx)("path",{d:"M26.49.011c-.56 0-1.014.448-1.014 1 0 .554.454 1.002 1.013 1.002.56 0 1.013-.448 1.013-1.001 0-.553-.454-1-1.013-1"}),(0,v.jsx)("path",{d:"M38.858 4.742a.984.984 0 01-.994-.983c0-.538.44-.987 1-.987a.984.984 0 11-.006 1.97zm.005-1.872c-.509 0-.894.4-.894.89 0 .489.382.884.889.884.509 0 .894-.4.894-.89a.876.876 0 00-.889-.884zm.22.985l.281.389h-.237l-.253-.357h-.217v.357h-.198V3.213h.465c.242 0 .401.122.401.329 0 .169-.098.272-.242.313zm-.167-.465h-.26v.326h.26c.129 0 .206-.063.206-.163 0-.107-.077-.163-.206-.163z"})]}),(0,v.jsx)("path",{fill:"#FFF",d:"M79.9 13.12c1.8 0 2.37-1.03 2.37-1.89 0-2.49-4-1.55-4-3.26 0-.72.67-1.23 1.56-1.23.75 0 1.43.26 1.91.84l.38-.42c-.52-.59-1.26-.94-2.26-.94-1.21 0-2.19.69-2.19 1.78 0 2.33 4 1.31 4 3.27 0 .57-.39 1.33-1.76 1.33-.95 0-1.65-.47-2.08-.97l-.37.43c.51.62 1.34 1.06 2.44 1.06zm6.61-.12v-2.77h1.93c1.27 0 2.01-.9 2.01-1.95 0-1.05-.73-1.95-2.01-1.95h-2.5V13h.57zm1.87-3.29h-1.87V6.85h1.87c.88 0 1.47.59 1.47 1.43s-.59 1.43-1.47 1.43zm8.56 3.41c1.95 0 3.24-1.5 3.24-3.45 0-1.95-1.29-3.45-3.24-3.45-1.96 0-3.24 1.5-3.24 3.45 0 1.95 1.28 3.45 3.24 3.45zm0-.52c-1.62 0-2.64-1.25-2.64-2.93 0-1.7 1.02-2.93 2.64-2.93 1.6 0 2.64 1.23 2.64 2.93 0 1.68-1.04 2.93-2.64 2.93zm8.94.4V6.85h2.18v-.52h-4.94v.52h2.18V13h.58zm9.46 0v-.52h-3.23V6.33h-.57V13h3.8zm4.11 0V6.33h-.57V13h.57zm7.09.13c1.05 0 1.94-.45 2.53-1.11V9.69h-3.09v.51h2.52v1.6c-.37.37-1.07.81-1.96.81-1.57 0-2.78-1.22-2.78-2.94 0-1.74 1.21-2.93 2.78-2.93.85 0 1.61.37 2.08.93l.43-.31c-.61-.7-1.41-1.14-2.51-1.14-1.87 0-3.38 1.39-3.38 3.45 0 2.06 1.51 3.46 3.38 3.46zM138.2 13V6.33h-.58v2.98h-4.23V6.33h-.57V13h.57V9.83h4.23V13h.58zm6.23 0V6.85h2.18v-.52h-4.94v.52h2.18V13h.58z"})]})}),be=e=>{switch(e){case z.JM.ALBUM:return M.ag.get("card.tag.album");case z.JM.TRACK:return M.ag.get("card.tag.track");case z.JM.ARTIST:return M.ag.get("card.tag.artist");case z.JM.EPISODE:return M.ag.get("card.tag.episode");case z.JM.SHOW:return M.ag.get("card.tag.show");case z.JM.PLAYLIST:case z.JM.PLAYLIST_V2:return M.ag.get("card.tag.playlist");default:return""}},Me=(e,a)=>"spotlight"===e?(0,v.jsx)(ke,{className:ie}):"exclusive"===e?(0,v.jsx)("p",{dir:"auto",className:l()(ie,le),children:M.ag.get("ad-formats.exclusive")}):(0,v.jsx)("p",{dir:"auto",className:ie,children:be(a)}),ye=({name:e,uri:a,playBtnUri:s,description:t,smallImage:n,isSponsored:i,backgroundImage:d,sponsoredLogo:o,uriType:h,logoBlurb:u,isPremium:m,artists:g,badgeType:x})=>{const j=(0,r.I0)(),f=g.length>0,p=!m&&i;return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:l()(i?X:q,{[Z]:i}),children:[i&&(0,v.jsx)("div",{className:$,children:(0,v.jsxs)("div",{children:[(0,v.jsx)("p",{className:ce,children:M.ag.get("ad-formats.presentedBy")}),(0,v.jsx)("img",{draggable:!1,className:re,src:o,alt:""}),(0,v.jsx)("p",{className:ne,children:u})]})}),(0,v.jsx)("div",{className:i?Q:G,children:(0,v.jsx)("a",{"data-testid":"ne-image-link-test",onClick:()=>{j((0,c.kh)("event_clicked","ne-image-link"))},className:se,href:a,children:(0,v.jsx)("img",{className:l()(ae,{[te]:i}),alt:"",src:n})})}),(0,v.jsxs)("div",{className:ee,children:[Me(x,h),(0,v.jsx)("a",{"data-testid":"ne-name-link-test",onClick:()=>{j((0,c.kh)("event_clicked","ne-name-link"))},href:a,dir:"auto",className:i?oe:de,children:e}),f&&(0,v.jsx)("div",{children:g.map(((e,s)=>(0,v.jsxs)("span",{children:[s?M.ag.getSeparator():"",(0,v.jsx)("a",{"data-testid":`ne-attrib-link-${s}-test`,onClick:()=>{j((0,c.kh)("event_clicked","ne-attrib-link"))},draggable:!1,href:e.uri,children:e.name})]},`${a}-${s}`)))}),(0,v.jsx)("span",{dir:"auto",className:he,children:t}),(0,v.jsx)(pe,{playBtnUri:s,uri:a,uriType:h})]})]}),(0,v.jsx)("div",{draggable:!1,className:l()(i?xe:ge,{[je]:!i}),style:{backgroundImage:`url(${d})`}}),!p&&(0,v.jsx)(w,{isPremium:m})]})},Ne=()=>{const e=(0,r.I0)(),a=(0,r.v9)(o.LA),s=(0,r.v9)(o.sp),i=(0,r.v9)(o.Jk),l=(0,r.v9)(o.F7),d=(0,r.v9)(o.vK),m=(0,n.W6)(h.R2E),g=(0,r.v9)(o.PA),x={[u.O.NATIVE]:ye,[u.O.IMAGE]:F,[u.O.HTML]:C},j={[u.O.NATIVE]:ye,[u.O.IMAGE]:F,[u.O.HTML]:V};if((0,t.useEffect)((()=>{e((0,c.fm)(m))}),[e,d,m]),m){if(d){if(!a)return(0,v.jsx)(p,{isHptoShown:!0,fetchingState:s,children:(0,v.jsx)(V,{isPremium:i})});if(a&&g){const e=j[a.bannerMode];return(0,v.jsx)(p,{isHptoShown:!0,fetchingState:s,children:(0,v.jsx)(e,{...a,isPremium:i})})}}return null}if(!d)return null;if(!g)return null;if(null===a)return null;const f=x[a.bannerMode];return(0,v.jsx)(p,{isHptoShown:l,fetchingState:s,children:(0,v.jsx)(f,{...a,isPremium:i})})},we=Ne},24880:(e,a,s)=>{s.d(a,{o:()=>h});var t=s(59496),r=s(94633),n=s(74433),c=s(15644),i=s(35005),l=s(65630),d=s(46909),o=s(4637);const h=t.memo((function({uri:e}){const{spec:a}=(0,i.T)(e);return(0,o.jsx)(c.ZP,{value:"generic",children:(0,o.jsx)(n.v,{children:(0,o.jsx)(l.q,{divider:"before",children:(0,o.jsx)(d.Jx,{spec:a,uri:e,displayText:r.ag.get("context-menu.copy-generic-link")})})})})}))}}]);
//# sourceMappingURL=home-hpto.js.map