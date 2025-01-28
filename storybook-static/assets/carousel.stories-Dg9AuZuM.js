import{j as A,a}from"./jsx-runtime-BQA5H8uj.js";import{u as ce,r as ie}from"./image-ChZ8EMgz.js";import{r as t}from"./index-CBqU2yxZ.js";import{W as ue,O as le,S as de,C as me,c as pe,a as ve,b as fe,t as ge,L as he,d as O,e as xe,P as Ie,M as _e}from"./three-i7idU94v.js";import{a as ye}from"./style-CdEeFtaU.js";import{u as be}from"./use-reduced-motion-CCptBKkH.js";import{S as we}from"./story-container-BmzpGumI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DdXbtMh7.js";import"./frame-COx4tYGr.js";import"./is-browser-KK9OLXwR.js";const Se="_carousel_156nm_2",Ce="_content_156nm_6",Fe="_imageWrapper_156nm_12",Re="_canvasWrapper_156nm_24",Pe="_canvas_156nm_24",Me="_placeholder_156nm_37",Ee="_button_156nm_52",Le="_nav_156nm_108",ke="_navButton_156nm_115",d={carousel:Se,content:Ce,imageWrapper:Fe,canvasWrapper:Re,canvas:Pe,placeholder:Me,button:Ee,nav:Le,navButton:ke},De=`varying vec2 vUv;
uniform sampler2D currentImage;
uniform sampler2D nextImage;
uniform float dispFactor;
uniform float direction;
uniform bool reduceMotion;

void main() {
  if (reduceMotion) {
    // Simple crossfade
    vec4 _currentImage = texture2D(currentImage, vUv);
    vec4 _nextImage = texture2D(nextImage, vUv);
    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
    gl_FragColor = finalTexture;
  } else {
    // Liquid distortion effect
    vec2 uv = vUv;
    vec4 _currentImage;
    vec4 _nextImage;
    float intensity = 0.6;

    vec4 orig1 = texture2D(currentImage, uv);
    vec4 orig2 = texture2D(nextImage, uv);

    vec2 distortedPosition = vec2(
      uv.x + direction * (dispFactor * (orig2.r * intensity)),
      uv.y + direction * (dispFactor * (orig2 * intensity))
    );

    vec2 distortedPosition2 = vec2(
      uv.x - direction * ((1.0 - dispFactor) * (orig1.r * intensity)),
      uv.y - direction * ((1.0 - dispFactor) * (orig1 * intensity))
    );

    _currentImage = texture2D(currentImage, distortedPosition);
    _nextImage = texture2D(nextImage, distortedPosition2);

    vec4 finalTexture = mix(_currentImage, _nextImage, dispFactor);
    gl_FragColor = finalTexture;
  }
}
`,Ne=`varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;function X(i,u,m,_){if(u!==null)return u;const y=m.length,b=(i-1+y)%y,R=(i+1)%y;return _>0?R:b}const H=({width:i,height:u,images:m,placeholder:_,...y})=>{const[b,R]=t.useState(!1),[o,Q]=t.useState(0),[w,Y]=t.useState(!1),[Z,ee]=t.useState(!0),[c,te]=t.useState(),[P,ne]=t.useState(),M=t.useRef(),L=t.useRef(),W=t.useRef(),f=t.useRef(),g=t.useRef(),S=t.useRef(),s=t.useRef(),h=t.useRef(!1),C=t.useRef(),k=t.useRef(),j=t.useRef(),B=be(),T=ce(M,!0),U=t.useRef(),z=t.useRef(),re=`Slide ${o+1} of ${m.length}. ${m[o].alt}`;t.useEffect(()=>(b&&(document.body.style.cursor="grabbing"),()=>{document.body.style.cursor=""}),[b]),t.useEffect(()=>{const e=[i/-2,i/2,u/2,u/-2,1,1e3];return s.current=new ue({canvas:M.current,antialias:!1,alpha:!0,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),S.current=new le(...e),g.current=new de,s.current.setPixelRatio(2),s.current.setClearColor(1118481,1),s.current.setSize(i,u),s.current.domElement.style.width="100%",s.current.domElement.style.height="auto",g.current.background=new me(1118481),S.current.position.z=1,()=>{h.current=!1,pe(g.current),ve(s.current)}},[u,i]),t.useEffect(()=>{let e=!0;return T&&!w&&(async()=>{const r=s.current.capabilities.getMaxAnisotropy(),p=m.map(async v=>{const N=v.srcSet?await ie(v):v.src,I=await ge.loadAsync(N);return await s.current.initTexture(I),I.colorSpace=he,I.minFilter=O,I.magFilter=O,I.anisotropy=r,I.generateMipmaps=!1,I}),x=await Promise.all(p);e&&(f.current=new xe({uniforms:{dispFactor:{type:"f",value:0},direction:{type:"f",value:1},currentImage:{type:"t",value:x[0]},nextImage:{type:"t",value:x[1]},reduceMotion:{type:"b",value:B}},vertexShader:Ne,fragmentShader:De,transparent:!1,opacity:1}),W.current=new Ie(i,u,1),L.current=new _e(W.current,f.current),L.current.position.set(0,0,0),g.current.add(L.current),Y(!0),te(x),requestAnimationFrame(()=>{s.current.render(g.current,S.current)}))})(),()=>{e=!1}},[u,m,T,w,B,i]);const q=t.useCallback(({index:e,direction:n=1})=>{if(!c)return;Q(e);const{uniforms:r}=f.current;r.nextImage.value=c[e],r.direction.value=n;const p=()=>{r.currentImage.value=c[e],r.dispFactor.value=0,h.current=!1};r.dispFactor.value!==1&&(h.current=!0,fe(r.dispFactor.value,1,{type:"spring",stiffness:100,damping:20,restSpeed:.001,restDelta:.001,onUpdate:x=>{r.dispFactor.value=x},onComplete:p}))},[c]),l=t.useCallback(({direction:e,index:n=null,...r})=>{if(!w)return;if(h.current){cancelAnimationFrame(j.current),j.current=requestAnimationFrame(()=>l({direction:e,index:n,...r}));return}const p=X(o,n,c,e);q({index:p,direction:e,...r})},[q,o,w,c]),ae=t.useCallback(e=>{if(e===o)return;const n=e>o?1:-1;l({direction:n,index:e})},[o,l]);t.useEffect(()=>{const e=()=>{const n=M.current.getBoundingClientRect();ne(n)};return window.addEventListener("resize",e),e(),()=>{window.removeEventListener("resize",e)}},[]),t.useEffect(()=>{let e;const n=()=>{e=requestAnimationFrame(n),h.current&&s.current.render(g.current,S.current)};return e=requestAnimationFrame(n),()=>{cancelAnimationFrame(e)}},[]),t.useEffect(()=>{if(_){const e=()=>{ee(!1)},n=U.current;return n.addEventListener("transitionend",e),()=>{n&&n.removeEventListener("transitionend",e)}}},[_]);const $=t.useCallback(e=>{if(h.current||!f.current||!c)return;k.current=e;const n=Math.abs(e),r=P.width;C.current=e>0?-1:1;const p=1-(n-r)/r*-1,x=X(o,null,m,C.current),v=f.current.uniforms,N=Math.min(Math.max(p,0),1);v.currentImage.value=c[o],v.nextImage.value=c[x],v.direction.value=C.current,v.dispFactor.value=N,requestAnimationFrame(()=>{s.current.render(g.current,S.current)})},[P,o,m,c]),G=t.useCallback(()=>{if(!f.current)return;const e=f.current.uniforms,n=(1-e.dispFactor.value)*1e3,r=Math.abs(k.current),p=P.width*.2;k.current=0,!h.current&&(r===0||!r||(r>p?l({duration:n,direction:C.current}):(e.currentImage.value=e.nextImage.value,e.nextImage.value=e.currentImage.value,e.dispFactor.value=1-e.dispFactor.value,l({direction:C.current*-1,index:o}))))},[P,o,l]),E=t.useCallback(e=>{$(e.clientX-z.current)},[$]),D=t.useCallback(()=>{R(!1),G(),document.removeEventListener("pointerup",D),document.removeEventListener("pointermove",E)},[E,G]),oe=t.useCallback(e=>{z.current=e.clientX,R(!0),document.addEventListener("pointermove",E),document.addEventListener("pointerup",D)},[E,D]),se=e=>{switch(e.key){case"ArrowRight":l({direction:1});break;case"ArrowLeft":l({direction:-1});break}};return A("div",{className:d.carousel,onKeyDown:se,...y,children:[A("div",{className:d.content,children:[A("div",{className:d.imageWrapper,"data-dragging":b,onPointerDown:oe,style:ye({aspectRatio:`${i} / ${u}`}),children:[a("div",{"aria-atomic":!0,className:d.canvasWrapper,"aria-live":"polite","aria-label":re,role:"img",children:a("canvas",{"aria-hidden":!0,className:d.canvas,ref:M})}),Z&&_&&a("img",{"aria-hidden":!0,className:d.placeholder,"data-loaded":w&&!!c,src:_,ref:U,alt:"",role:"presentation"})]}),a("button",{className:d.button,"data-prev":!0,"aria-label":"Previous slide",onClick:()=>l({direction:-1}),children:a(Ae,{})}),a("button",{className:d.button,"data-next":!0,"aria-label":"Next slide",onClick:()=>l({direction:1}),children:a(We,{})})]}),a("div",{className:d.nav,children:m.map((e,n)=>a("button",{className:d.navButton,onClick:()=>ae(n),"aria-label":`Jump to slide ${n+1}`,"aria-pressed":n===o},e.alt))})]})};function Ae(){return a("svg",{fill:"currentColor",width:"18",height:"42",viewBox:"0 0 18 42",children:a("path",{d:"M18.03 1.375L16.47.125-.031 20.75l16.5 20.625 1.562-1.25L2.53 20.75z"})})}function We(){return a("svg",{fill:"currentColor",width:"18",height:"42",viewBox:"0 0 18 42",children:a("path",{d:"M-.03 1.375L1.53.125l16.5 20.625-16.5 20.625-1.562-1.25 15.5-19.375z"})})}H.__docgenInfo={description:"",methods:[],displayName:"Carousel"};const Ke={title:"Carousel"},F=()=>a(we,{children:a(H,{style:{maxWidth:800,width:"100%"},placeholder:"/static/modern-styling-in-react-banner-placeholder.jpg",images:[{src:"/static/modern-styling-in-react-banner.jpg",alt:"Neon pink and blue lights"},{src:"/static/hello-world-banner.jpg",alt:"Geometric blue shapes"}],width:1920,height:1080})});F.__docgenInfo={description:"",methods:[],displayName:"Images"};var V,K,J;F.parameters={...F.parameters,docs:{...(V=F.parameters)==null?void 0:V.docs,source:{originalSource:`() => <StoryContainer>
    <Carousel style={{
    maxWidth: 800,
    width: '100%'
  }} placeholder="/static/modern-styling-in-react-banner-placeholder.jpg" images={[{
    src: '/static/modern-styling-in-react-banner.jpg',
    alt: 'Neon pink and blue lights'
  }, {
    src: '/static/hello-world-banner.jpg',
    alt: 'Geometric blue shapes'
  }]} width={1920} height={1080} />
  </StoryContainer>`,...(J=(K=F.parameters)==null?void 0:K.docs)==null?void 0:J.source}}};const Je=["Images"];export{F as Images,Je as __namedExportsOrder,Ke as default};
