"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[2749],{86099:(e,i,r)=>{r.d(i,{Z:()=>t});var s=r(14090),n=r(85259),a=r(4637);const t=({name:e,uri:i,images:r,isHero:t,testId:o,description:d,index:u,requestId:c,color:l})=>(0,a.jsx)(s.C,{index:u,featureIdentifier:"artist_concerts",headerText:e,uri:i,isPlayable:!1,renderCardImage:()=>(0,a.jsx)(n.x,{isHero:t,images:r,color:l}),renderSubHeaderContent:()=>(0,a.jsx)("span",{children:d||""}),testId:o,requestId:c})},18018:(e,i,r)=>{r.d(i,{q:()=>H});var s=r(14887),n=r(56813),a=r(14090),t=r(85259),o=r(25462),d=r(31101),u=r(4637);const c=({name:e="",uri:i="",images:r=[],isHero:s,onClick:n,testId:c,index:l})=>s?(0,u.jsx)(o.Z,{featureIdentifier:"unknown",index:l,onClick:n,headerText:e,uri:i,isPlayable:!1,renderCardImage:()=>(0,u.jsx)(t.x,{isHero:s,images:r}),renderSubHeaderContent:()=>(0,u.jsx)(d.k,{}),testId:c}):(0,u.jsx)(a.C,{index:l,featureIdentifier:"unknown",onClick:n,headerText:e,uri:i,isPlayable:!1,renderCardImage:()=>(0,u.jsx)(t.x,{isHero:s,images:r}),renderSubHeaderContent:()=>(0,u.jsx)("span",{}),testId:c});var l=r(9739),m=r(43228),x=r(34211),g=r(53778),I=r(86099),p=r(91274),h=r(14964),C=r(78384),f=r(75e3),j=r(90967),y=r(13977),k=r(79053),b=r(65059);const H=({entity:e,index:i,testId:r,isHero:a=!1})=>{const t=((0,s.EC)(e.uri)||{}).type,o={testId:r,isHero:a,index:i,sharingInfo:e.sharingInfo};if(("string"==typeof e.uri||e.uri instanceof String)&&e.uri.startsWith("spotify:merch:"))return(0,u.jsx)(h.T,{...o,name:e.name,uri:e.uri,href:e.href,images:e.images,price:e.price});if(("string"==typeof e.uri||e.uri instanceof String)&&e.uri.startsWith("spotify:artist:")&&e.uri.endsWith(":concerts"))return(0,u.jsx)(I.Z,{...o,name:e.name,uri:e.uri,images:e.images,description:e.description});switch(t){case s.JM.ALBUM:case s.JM.COLLECTION_ALBUM:{const i=e;return(0,u.jsx)(x.r,{...o,name:i.name,uri:i.uri,images:i.images,artists:i.artists})}case s.JM.ARTIST:{const i=e;return(0,u.jsx)(g.I,{...o,name:i.name,uri:i.uri,images:i.images})}case s.JM.EPISODE:{const i=e;return(0,u.jsx)(p.B,{...o,name:i.name,uri:i.uri,images:i.images,showImages:i.show?.images||[],durationMilliseconds:i.duration_ms,releaseDate:i.release_date,resume_point:i.resume_point,description:i.description,isExplicit:i.explicit,is19PlusOnly:!!i.tags?.includes("MOGEF-19+")})}case s.JM.PLAYLIST:case s.JM.PLAYLIST_V2:{const i=e,r=i.owner?.display_name||e.owner?.displayName||"";return(0,u.jsx)(C.Z,{...o,name:i.name,uri:i.uri,images:i.images,description:i.description,authorName:r})}case s.JM.PROFILE:return(0,u.jsx)(f.P,{...o,name:e.name,uri:e.uri,images:e.images});case s.JM.SHOW:{const i=e;return(0,u.jsx)(y._,{...o,name:i.name,uri:i.uri,images:i.images,publisher:i.publisher,mediaType:{audio:m.E.AUDIO,video:m.E.VIDEO,mixed:m.E.MIXED}[i.media_type]??m.E.AUDIO})}case s.JM.APPLICATION:return(0,u.jsx)(n.s,{...o,name:e.name,uri:e.uri,images:e.images,description:e.description});case s.JM.RADIO:return(0,u.jsx)(j.I,{testId:r,index:i,name:e.name,uri:e.uri,images:e.images});case s.JM.TRACK:{const i=e;return(0,u.jsx)(k.G,{...o,name:i.name,uri:i.uri,images:i.album?.images||[],artists:i.artists,album:i.album,isExplicit:i.explicit,is19PlusOnly:i.tags?.includes("MOGEF-19+")})}case s.JM.COLLECTION:return e.uri.endsWith("your-episodes")?(0,u.jsx)(b.T,{index:i}):(0,u.jsx)(l.p,{index:i});default:return console.warn("Rendering a generic Card for unknown type:",t),(0,u.jsx)(c,{...o,name:e.name,uri:e.uri,images:e.images})}}},56813:(e,i,r)=>{r.d(i,{s:()=>u});var s=r(94633),n=r(14090),a=r(85259),t=r(25462),o=r(31101),d=r(4637);const u=({name:e,uri:i,images:r,isHero:u,onClick:c,testId:l,description:m,index:x,requestId:g,color:I})=>u?(0,d.jsx)(t.Z,{featureIdentifier:"genre",index:x,onClick:c,headerText:e,uri:i,isPlayable:!1,renderCardImage:()=>(0,d.jsx)(a.x,{isHero:u,images:r,color:I}),renderSubHeaderContent:()=>(0,d.jsx)(o.k,{children:m||s.ag.get("card.tag.genre")}),testId:l,requestId:g}):(0,d.jsx)(n.C,{index:x,featureIdentifier:"genre",onClick:c,headerText:e,uri:i,isPlayable:!1,renderCardImage:()=>(0,d.jsx)(a.x,{isHero:u,images:r,color:I}),renderSubHeaderContent:()=>(0,d.jsx)("span",{children:m||""}),testId:l,requestId:g})},14964:(e,i,r)=>{r.d(i,{T:()=>t});var s=r(52309),n=r(85259),a=r(4637);const t=({name:e,uri:i,href:r,images:t,isHero:o,price:d,testId:u,color:c})=>(0,a.jsx)(s.Z,{id:i,"data-testid":u,title:e,media:(0,a.jsx)(n.x,{isHero:o,images:t,color:c}),onClick:()=>{window.open(r,"_blank")},size:"sm",subtitle:d},i)},75e3:(e,i,r)=>{r.d(i,{P:()=>x});var s=r(59496),n=r(72481),a=r(94633),t=r(70231),o=r(14090),d=r(85259),u=r(25462),c=r(31101),l=r(18858),m=r(4637);const x=s.memo((function(e){const{images:i,name:r,uri:x,onClick:g,isHero:I,testId:p,index:h,requestId:C,color:f}=e;let j;const y=(0,s.useCallback)((()=>(0,m.jsx)(d.x,{isCircular:!0,isHero:I,images:i,color:f,FallbackComponent:e=>(0,m.jsx)(n.a,{iconSize:64,...e})})),[f,i,I]),k=(0,s.useCallback)((()=>I?(0,m.jsx)(c.k,{children:a.ag.get("card.tag.profile")}):a.ag.get("card.tag.profile")),[I]);return j=I?(0,m.jsx)(u.Z,{index:h,onClick:g,headerText:r,featureIdentifier:"profile",uri:x,isPlayable:!1,renderCardImage:y,renderSubHeaderContent:k,testId:p,requestId:C}):(0,m.jsx)(o.C,{index:h,onClick:g,headerText:r,featureIdentifier:"profile",uri:x,isPlayable:!1,renderCardImage:y,renderSubHeaderContent:k,testId:p,requestId:C}),(0,m.jsx)(t._,{menu:(0,m.jsx)(l.I,{uri:x}),children:j})}))},98211:(e,i,r)=>{r.d(i,{h:()=>p});var s=r(34211),n=r(53778),a=r(79598),t=r(18018),o=r(91274),d=r(56813),u=r(78384),c=r(75e3),l=r(13977),m=r(79053),x=r(95195),g=r(72390),I=r(4637);const p=({entity:e,index:i,testId:r,onClick:p,isHero:h=!1})=>{const C=(0,g.E)();switch(e.type){case x.p.ALBUM:return(0,I.jsx)(s.r,{testId:r,onClick:p,isHero:h,index:i,name:e.name,uri:e.uri,images:e.images,artists:e.artists,year:e.year,sharingInfo:null,requestId:e.requestId,color:e.color},e.uri);case x.p.ARTIST:return(0,I.jsx)(n.I,{testId:r,onClick:p,isHero:h,index:i,name:e.name,uri:e.uri,images:e.images,requestId:e.requestId,color:e.color},e.uri);case x.p.AUDIOBOOK:return(0,I.jsx)(a.c,{testId:r,onClick:p,isHero:h,index:i,name:e.name,uri:e.uri,images:e.images,authorName:e.authorName,requestId:e.requestId,color:e.color,signifierText:e.signifierText},e.uri);case x.p.EPISODE:return(0,I.jsx)(o.B,{testId:r,onClick:p,isHero:h,index:i,name:e.name,uri:e.uri,images:e.images,showImages:e.show?.images||[],durationMilliseconds:e.duration.milliseconds,releaseDate:e.release.date,resume_point:null,description:e.description,isExplicit:e.isExplicit,is19PlusOnly:e.is19PlusOnly,sharingInfo:null,requestId:e.requestId,color:e.color},e.uri);case x.p.GENRE:return(0,I.jsx)(d.s,{testId:r,onClick:p,isHero:h,index:i,name:e.name,uri:e.uri,images:e.images,requestId:e.requestId,color:e.color},e.uri);case x.p.PLAYLIST:return(0,I.jsx)(u.Z,{testId:r,onClick:p,isHero:h,index:i,name:e.name,uri:e.uri,images:e.images,description:"",authorName:e.owner.displayName,requestId:e.requestId,color:e.color},e.uri);case x.p.USER:return(0,I.jsx)(c.P,{testId:r,onClick:p,isHero:h,index:i,name:e.name,uri:e.uri,images:e.images,requestId:e.requestId,color:e.color},e.uri);case x.p.SHOW:return(0,I.jsx)(l._,{testId:r,onClick:p,isHero:h,index:i,name:e.name,uri:e.uri,images:e.images,publisher:e.publisher,sharingInfo:null,requestId:e.requestId,color:e.color},e.uri);case x.p.TRACK:return(0,I.jsx)(m.G,{testId:r,onClick:p,isHero:h,index:i,name:e.name,uri:e.uri,images:e.album?.images||[],artists:e.artists,album:C?null:e.album,isExplicit:e.isExplicit,is19PlusOnly:e.is19PlusOnly,sharingInfo:null,requestId:e.requestId,isLyricsMatch:e.isLyricsMatch,color:e.color},e.uri);default:return console.warn('Rendering SearchEntityCard using the old method <DeprecatedEntityCardByUriType /> as the entity doesn\'t contain the new "type" EntityType enum.'),(0,I.jsx)(t.q,{testId:r,onClick:p,isHero:h,index:i,entity:e})}}},95943:(e,i,r)=>{r.d(i,{q:()=>c});var s=r(9401),n=r(94633),a=r(98211);const t="x-searchHistoryEntries-searchHistoryEntry",o="x-searchHistoryEntries-clearSingleSearchHistory",d="x-searchHistoryEntries-clearSingleSearchHistoryButton";var u=r(4637);const c=({entity:e,index:i,clearSearchHistory:r})=>(0,u.jsxs)("div",{className:t,children:[(0,u.jsx)(a.h,{entity:{...e,requestId:void 0},index:i}),(0,u.jsx)("div",{className:o,children:(0,u.jsx)("button",{className:d,onClick:()=>r(e.uri),"aria-label":n.ag.get("remove"),children:(0,u.jsx)(s.k,{iconSize:16})})})]},e.uri)},79548:(e,i,r)=>{r.d(i,{Z:()=>s});const s={searchPageGrid:"search-recentSearches-searchPageGrid",narrowPage:"search-recentSearches-narrowPage"}}}]);
//# sourceMappingURL=2749.js.map