"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[8142],{78142:(t,e,o)=>{o.r(e),o.d(e,{EpisodeSponsorNowPlayingBarHatIfPodcastAdIsPlaying:()=>E,default:()=>m});var n=o(59496),s=o(19031),a=o(51087),d=o(24725),i=o(40591);const c=["podcast-preroll","podcast-midroll-1","podcast-midroll-2","podcast-midroll-3","podcast-midroll-4","podcast-midroll-5","podcast-postroll"];function r({eventTypesToSubscribeTo:t,onPodcastAdEvent:e,onError:o}){const n=t.flatMap((t=>c.map((n=>(0,i.oc)(t,e,o,{slot:n})))));return()=>n.forEach((({cancel:t})=>t()))}const l=["started","resumed","ended"];const u=250;const p="cta_card_sai";function v({subscribeToPodcastAdEvents:t=r}={}){const[e,o]=(0,n.useState)(),{hidingHat:s,setHidingHat:a}=function(){const[t,e]=(0,n.useState)();return{hidingHat:t,setHidingHat:e}}();return(0,n.useEffect)((()=>{let n=!0;const s=t({eventTypesToSubscribeTo:l,async onPodcastAdEvent(t){const s="started"===(d=t.event_type)||"resumed"===d?d:void 0;var d;const i=Boolean(s&&t.ad.metadata.product_name===p),c=Boolean(e&&i&&e.ad.id===t.ad.id)?void 0:new Promise((t=>setTimeout((()=>{n&&(o(void 0),a(void 0)),t()}),u)));c&&n&&a(c),i&&(await c,n&&o(t))}});return()=>{n=!1,s()}}),[e,a,t]),{activeAdEvent:e,hidingHat:s}}var f=o(4637);const b=(0,n.lazy)((()=>Promise.all([o.e(1814),o.e(6507)]).then(o.bind(o,96507))));function E({subscribeToPodcastAdEvents:t,clickEventPosterForEpisodeSponsorNowPlayingBarHat:e}){const o=(0,s.g)(),i=(0,a.Y)((t=>{const e=t?.item??void 0;return(0,d.k6)(e)&&e.isPodcastAd?e:null}),((t,e)=>t?.uri===e?.uri)),{activeAdEvent:c,hidingHat:r}=v({subscribeToPodcastAdEvents:t});return(i||r)&&c?(0,f.jsx)(n.Suspense,{fallback:!0,children:(0,f.jsx)(b,{adEvent:c,ad:i,hidingHat:r,postClickEvent:e?.(c.ad.id,o)})}):null}const m=E}}]);
//# sourceMappingURL=8142.js.map