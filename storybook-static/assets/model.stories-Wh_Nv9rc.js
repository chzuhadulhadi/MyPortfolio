import{j as Qe,a as U}from"./jsx-runtime-BQA5H8uj.js";import{u as Ce,r as Ie}from"./image-ChZ8EMgz.js";import{r as e}from"./index-CBqU2yxZ.js";import{W as Te,f as he,g as Le,S as Pe,G as ee,A as be,D as te,h as re,P as ke,i as ne,M as W,O as ze,j as Fe,e as ae,r as je,c as Ge,a as _e,t as oe,m as Oe,C as se,V as G,b as V,k as He}from"./three-i7idU94v.js";import{c as Je,a as Ne,n as Ke}from"./style-CdEeFtaU.js";import{u as xe}from"./use-reduced-motion-CCptBKkH.js";import{u as ce}from"./use-spring-Cmob5oOX.js";import{S as ye}from"./story-container-BmzpGumI.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-DdXbtMh7.js";import"./frame-COx4tYGr.js";import"./is-browser-KK9OLXwR.js";import"./use-constant-GMTLHggF.js";const Ye={uniforms:{tDiffuse:{value:null},h:{value:1/512}},vertexShader:`
      varying vec2 vUv;

      void main() {

        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

      }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float h;

    varying vec2 vUv;

    void main() {

    	vec4 sum = vec4( 0.0 );

    	sum += texture2D( tDiffuse, vec2( vUv.x - 4.0 * h, vUv.y ) ) * 0.051;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x - 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 1.0 * h, vUv.y ) ) * 0.1531;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 2.0 * h, vUv.y ) ) * 0.12245;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 3.0 * h, vUv.y ) ) * 0.0918;
    	sum += texture2D( tDiffuse, vec2( vUv.x + 4.0 * h, vUv.y ) ) * 0.051;

    	gl_FragColor = sum;

    }
  `},We={uniforms:{tDiffuse:{value:null},v:{value:1/512}},vertexShader:`
    varying vec2 vUv;

    void main() {

      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

    }
  `,fragmentShader:`

  uniform sampler2D tDiffuse;
  uniform float v;

  varying vec2 vUv;

  void main() {

    vec4 sum = vec4( 0.0 );

    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 4.0 * v ) ) * 0.051;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y - 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y ) ) * 0.1633;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 1.0 * v ) ) * 0.1531;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 2.0 * v ) ) * 0.12245;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 3.0 * v ) ) * 0.0918;
    sum += texture2D( tDiffuse, vec2( vUv.x, vUv.y + 4.0 * v ) ) * 0.051;

    gl_FragColor = sum;

  }
  `},Ve=""+new URL("gamestack-list-large-DYaUO4yA.jpg",import.meta.url).href,Ze="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIAEUAIAMBIgACEQEDEQH/xAAcAAACAgIDAAAAAAAAAAAAAAAEBgMFAQcAAgj/2gAIAQEAAAAA84zyZiNzyYqtEYpKEBu7rwLOSvAbDPSKbaxiDRt0tOB//8QAFwEBAQEBAAAAAAAAAAAAAAAAAwABAv/aAAgBAhAAAABLlWLZc//EABgBAQEAAwAAAAAAAAAAAAAAAAMEAAEC/9oACAEDEAAAANZVJ0YLM3//xAAfEAACAgMBAAMBAAAAAAAAAAAAAQIDBBESIQUTMSL/2gAIAQEAAT8Arjs+sVSZKkpg2Ks1ocloxqU0vCdajEtemx2GJD+S9aiX/rGYeuTJ1yXr1kjD60XxlyZC02SPjcHpLwy8BRg/DOq5kySPjLIRgjOvhKBnrqUidZjZE4rwuybJRLm5fpOKP//EABoRAQEAAwEBAAAAAAAAAAAAAAEAAhAhETH/2gAIAQIBAT8AWJxRg5Jimu3kfNf/xAAcEQACAgIDAAAAAAAAAAAAAAAAAQIhEBESEzH/2gAIAQMBAT8AUcRlDgSdlJDO2xPY1YvD/9k=",Xe=""+new URL("gamestack-list-BdO7kQnP.jpg",import.meta.url).href,$e=""+new URL("gamestack-login-large-ryOo_e4Z.jpg",import.meta.url).href,qe="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAUFBQUFBQUGBgUICAcICAsKCQkKCxEMDQwNDBEaEBMQEBMQGhcbFhUWGxcpIBwcICkvJyUnLzkzMzlHREddXX0BBQUFBQUFBQYGBQgIBwgICwoJCQoLEQwNDA0MERoQExAQExAaFxsWFRYbFykgHBwgKS8nJScvOTMzOUdER11dff/CABEIAEUAIAMBIgACEQEDEQH/xAAaAAACAwEBAAAAAAAAAAAAAAADBAACBQEH/9oACAEBAAAAAPAGGkwlsuTolmWA57UCI9Kd1NCIKPRNIsF//8QAGAEBAAMBAAAAAAAAAAAAAAAAAQACBQT/2gAIAQIQAAAA7RrDVmQ//8QAFwEAAwEAAAAAAAAAAAAAAAAAAAIEAf/aAAgBAxAAAACVlc2IuP/EABwQAAIDAQEBAQAAAAAAAAAAAAABAgMRBFExMv/aAAgBAQABPwD6VpITWHThFCeCsLp6hNYfSexJy0iRxItzCYp4O4lafoxscJeDrl4KDRz1xklpHmrZLmrL64R+FVziR6X6S6H6W3aRbQpsc2Ntn//EAB4RAAICAgIDAAAAAAAAAAAAAAECAAMEEhBRESFB/9oACAECAQE/AITFK/YxHn1NG6mjdSvMoRADWJZmUMhAr5//xAAcEQACAQUBAAAAAAAAAAAAAAAAAQIDBBESURD/2gAIAQMBAT8AEsGGJPBsumy6Tt6kpNqZC3qKSbn7/9k=",et=""+new URL("gamestack-login-hTRhV9nJ.jpg",import.meta.url).href,ie=""+new URL("spr-lesson-builder-dark-large-DZ47e5rw.jpg",import.meta.url).href,tt=""+new URL("spr-lesson-builder-dark-placeholder-BYjrS8rr.jpg",import.meta.url).href,rt=""+new URL("iphone-11-DGIHa_Ph.glb",import.meta.url).href,nt=""+new URL("macbook-pro-DZn-FKKF.glb",import.meta.url).href,_={SpringUp:"spring-up",LaptopOpen:"laptop-open"},Z={phone:{url:rt,width:374,height:512,position:{x:0,y:0,z:0},animation:_.SpringUp},laptop:{url:nt,width:1280,height:800,position:{x:0,y:0,z:0},animation:_.LaptopOpen}};function at(E,x){let y=0;return function(...u){const w=new Date;w-y>=x&&(E(...u),y=w)}}const ot="_model_fphsv_2",st="_canvas_fphsv_11",Ae={model:ot,canvas:st},ue={Frame:"Frame",Logo:"Logo",Screen:"Screen"},le={stiffness:40,damping:20,mass:1.4,restSpeed:.001},X=({models:E,show:x=!0,showDelay:y=0,cameraPosition:u={x:0,y:0,z:8},style:w,className:k,onLoad:O,alt:S,...z})=>{const[M,H]=e.useState(!1),v=e.useRef(),l=e.useRef(),c=e.useRef(),g=e.useRef(),r=e.useRef(),t=e.useRef(),p=e.useRef(),d=e.useRef(),f=e.useRef(),h=e.useRef(),s=e.useRef(),A=e.useRef(),n=e.useRef(),m=e.useRef(),D=e.useRef(),a=e.useRef(),F=e.useRef(),$=Ce(v,!1,{threshold:.2}),q=xe(),R=ce(0,le),Q=ce(0,le);e.useEffect(()=>{const{clientWidth:o,clientHeight:i}=v.current;t.current=new Te({canvas:l.current,alpha:!0,antialias:!1,powerPreference:"high-performance",failIfMajorPerformanceCaveat:!0}),t.current.setPixelRatio(2),t.current.setSize(o,i),t.current.outputColorSpace=he,c.current=new Le(36,o/i,.1,100),c.current.position.set(u.x,u.y,u.z),r.current=new Pe,g.current=new ee,r.current.add(g.current);const B=new be(16777215,1.2),I=new te(16777215,1.1),T=new te(16777215,.8);T.position.set(-6,2,2),I.position.set(.5,0,.866),D.current=[B,I,T],D.current.forEach(L=>r.current.add(L)),p.current=new ee,r.current.add(p.current),p.current.position.set(0,0,-.8),p.current.rotateX(Math.PI/2);const j=512,N=8,K=8,De=1.5,Be=.8,Ee=3;d.current=new re(j,j),d.current.texture.generateMipmaps=!1,f.current=new re(j,j),f.current.texture.generateMipmaps=!1;const Y=new ke(N,K).rotateX(Math.PI/2),Ue=new ne({map:d.current.texture,opacity:Be,transparent:!0});m.current=new W(Y,Ue),m.current.scale.y=-1,p.current.add(m.current),a.current=new W(Y),a.current.visible=!1,p.current.add(a.current);const Se=new ne({color:16777215,opacity:0,transparent:!0});F.current=new W(Y,Se),F.current.rotateX(Math.PI),F.current.position.y-=1e-5,p.current.add(F.current),h.current=new ze(-N/2,N/2,K/2,-K/2,0,De),h.current.rotation.x=Math.PI/2,p.current.add(h.current),s.current=new Fe,s.current.userData.darkness={value:Ee},s.current.onBeforeCompile=L=>{L.uniforms.darkness=s.current.userData.darkness,L.fragmentShader=`
        uniform float darkness;
        ${L.fragmentShader.replace("gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );","gl_FragColor = vec4( vec3( 0.0 ), ( 1.0 - fragCoordZ ) * darkness );")}
      `},s.current.depthTest=!1,s.current.depthWrite=!1,A.current=new ae(Ye),A.current.depthTest=!1,n.current=new ae(We),n.current.depthTest=!1;const Me=R.on("change",C),Re=Q.on("change",C);return()=>{d.current.dispose(),f.current.dispose(),je(D.current),Ge(r.current),_e(t.current),Me(),Re()}},[]);const J=e.useCallback(o=>{a.current.visible=!0,a.current.material=A.current,a.current.material.uniforms.tDiffuse.value=d.current.texture,A.current.uniforms.h.value=o*(1/256),t.current.setRenderTarget(f.current),t.current.render(a.current,h.current),a.current.material=n.current,a.current.material.uniforms.tDiffuse.value=f.current.texture,n.current.uniforms.v.value=o*(1/256),t.current.setRenderTarget(d.current),t.current.render(a.current,h.current),a.current.visible=!1},[]),C=e.useCallback(()=>{const i=r.current.background;r.current.background=null,r.current.overrideMaterial=s.current,t.current.setRenderTarget(d.current),t.current.render(r.current,h.current),r.current.overrideMaterial=null,J(5),J(5*.4),t.current.setRenderTarget(null),r.current.background=i,g.current.rotation.x=R.get(),g.current.rotation.y=Q.get(),t.current.render(r.current,c.current)},[J,R,Q]);return e.useEffect(()=>{const o=at(i=>{const{innerWidth:B,innerHeight:I}=window,T={x:(i.clientX-B/2)/B,y:(i.clientY-I/2)/I};Q.set(T.x/2),R.set(T.y/2)},100);return $&&!q&&window.addEventListener("mousemove",o),()=>{window.removeEventListener("mousemove",o)}},[$,q,R,Q]),e.useEffect(()=>{const o=()=>{if(!v.current)return;const{clientWidth:i,clientHeight:B}=v.current;t.current.setSize(i,B),c.current.aspect=i/B,c.current.updateProjectionMatrix(),C()};return window.addEventListener("resize",o),o(),()=>{window.removeEventListener("resize",o)}},[C]),Qe("div",{className:Je(Ae.model,k),"data-loaded":M,style:Ne({delay:Ke(y)},w),ref:v,role:"img","aria-label":S,...z,children:[U("canvas",{className:Ae.canvas,ref:l}),E.map((o,i)=>U(ct,{renderer:t,modelGroup:g,show:x,showDelay:y,renderFrame:C,index:i,setLoaded:H,onLoad:O,model:o},JSON.stringify(o.position)))]})},ct=({renderer:E,model:x,modelGroup:y,renderFrame:u,index:w,showDelay:k,setLoaded:O,onLoad:S,show:z})=>{const[M,H]=e.useState(),v=xe(),l=e.createRef();e.useEffect(()=>{const c=async(r,t)=>{r.colorSpace=he,r.flipY=!1,r.anisotropy=E.current.capabilities.getMaxAnisotropy(),r.generateMipmaps=!1,await E.current.initTexture(r),t.material.color=new se(16777215),t.material.transparent=!0,t.material.map=r};H({start:async()=>{const{texture:r,position:t,url:p}=x;let d,f;const[h,s]=await Promise.all([await oe.loadAsync(r.placeholder),await Oe.loadAsync(p)]);y.current.add(s.scene),s.scene.traverse(async n=>{n.material&&(n.material.color=new se(2039845)),n.name===ue.Screen&&(l.current=n.clone(),l.current.material=n.material.clone(),n.parent.add(l.current),l.current.material.opacity=1,l.current.position.z+=.001,c(h,l.current),d=async()=>{const m=await Ie(r),D=await oe.loadAsync(m);await c(D,n),V(1,0,{onUpdate:a=>{l.current.material.opacity=a,u()}})})});const A=new G(t.x,t.y,t.z);return v&&s.scene.position.set(...A.toArray()),x.animation===_.SpringUp&&(f=()=>{const n=new G(A.x,A.y-1,A.z);s.scene.position.set(...n.toArray()),V(n.y,A.y,{type:"spring",delay:(300*w+k)/1e3,stiffness:60,damping:20,mass:1,restSpeed:1e-4,restDelta:1e-4,onUpdate:m=>{s.scene.position.y=m,u()}})}),x.animation===_.LaptopOpen&&(f=()=>{const n=s.scene.children.find(a=>a.name===ue.Frame),m=new G(He.degToRad(90),0,0),D=new G(0,0,0);return s.scene.position.set(...A.toArray()),n.rotation.set(...m.toArray()),V(m.x,D.x,{type:"spring",delay:(300*w+k+300)/1e3,stiffness:80,damping:20,restSpeed:1e-4,restDelta:1e-4,onUpdate:a=>{n.rotation.x=a,u()}})}),{loadFullResTexture:d,playAnimation:f}}})},[]),e.useEffect(()=>{if(!M||!z)return;let c;const g=async()=>{const{loadFullResTexture:r,playAnimation:t}=await M.start();O(!0),S==null||S(),v||(c=t()),await r(),v&&u()};return e.startTransition(()=>{g()}),()=>{c==null||c.stop()}},[M,z])};X.__docgenInfo={description:"",methods:[],displayName:"Model",props:{show:{defaultValue:{value:"true",computed:!1},required:!1},showDelay:{defaultValue:{value:"0",computed:!1},required:!1},cameraPosition:{defaultValue:{value:"{ x: 0, y: 0, z: 8 }",computed:!1},required:!1}}};const wt={title:"Model"},we={position:"absolute",top:0,right:0,bottom:0,left:0},P=()=>U(ye,{padding:0,children:U(X,{style:we,cameraPosition:{x:0,y:0,z:11.5},alt:"Phone models",models:[{...Z.phone,position:{x:-.6,y:.8,z:.1},texture:{srcSet:`${et} 375w, ${$e} 750w`,placeholder:qe}},{...Z.phone,position:{x:.6,y:-.8,z:.4},texture:{srcSet:`${Xe} 375w, ${Ve} 750w`,placeholder:Ze}}]})}),b=()=>U(ye,{padding:0,children:U(X,{style:we,cameraPosition:{x:0,y:0,z:8},alt:"Laptop model",models:[{...Z.laptop,position:{x:0,y:0,z:0},texture:{srcSet:`${ie} 800w, ${ie} 1920w`,placeholder:tt}}]})});P.__docgenInfo={description:"",methods:[],displayName:"Phone"};b.__docgenInfo={description:"",methods:[],displayName:"Laptop"};var pe,de,me;P.parameters={...P.parameters,docs:{...(pe=P.parameters)==null?void 0:pe.docs,source:{originalSource:`() => <StoryContainer padding={0}>
    <Model style={modelStyle} cameraPosition={{
    x: 0,
    y: 0,
    z: 11.5
  }} alt="Phone models" models={[{
    ...deviceModels.phone,
    position: {
      x: -0.6,
      y: 0.8,
      z: 0.1
    },
    texture: {
      srcSet: \`\${phoneTexture} 375w, \${phoneTextureLarge} 750w\`,
      placeholder: phoneTexturePlaceholder
    }
  }, {
    ...deviceModels.phone,
    position: {
      x: 0.6,
      y: -0.8,
      z: 0.4
    },
    texture: {
      srcSet: \`\${phoneTexture2} 375w, \${phoneTexture2Large} 750w\`,
      placeholder: phoneTexture2Placeholder
    }
  }]} />
  </StoryContainer>`,...(me=(de=P.parameters)==null?void 0:de.docs)==null?void 0:me.source}}};var ve,fe,ge;b.parameters={...b.parameters,docs:{...(ve=b.parameters)==null?void 0:ve.docs,source:{originalSource:`() => <StoryContainer padding={0}>
    <Model style={modelStyle} cameraPosition={{
    x: 0,
    y: 0,
    z: 8
  }} alt="Laptop model" models={[{
    ...deviceModels.laptop,
    position: {
      x: 0,
      y: 0,
      z: 0
    },
    texture: {
      srcSet: \`\${laptopTexture} 800w, \${laptopTextureLarge} 1920w\`,
      placeholder: laptopTexturePlaceholder
    }
  }]} />
  </StoryContainer>`,...(ge=(fe=b.parameters)==null?void 0:fe.docs)==null?void 0:ge.source}}};const Dt=["Phone","Laptop"];export{b as Laptop,P as Phone,Dt as __namedExportsOrder,wt as default};
