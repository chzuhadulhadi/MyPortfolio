import{j as p,a as w}from"./jsx-runtime-BQA5H8uj.js";import{r as s}from"./index-CBqU2yxZ.js";import{c as y,b as n}from"./style-CdEeFtaU.js";import{t as l,a as m}from"./theme-C2s-KA77.js";const g=""+new URL("gotham-bold-italic-C_msAlmW.woff2",import.meta.url).href,k=""+new URL("gotham-bold-D1kvQ7KV.woff2",import.meta.url).href,$=""+new URL("gotham-book-italic-Bm2IEtSK.woff2",import.meta.url).href,b=""+new URL("gotham-book-Bnaws0Ef.woff2",import.meta.url).href,G=""+new URL("gotham-medium-italic-Dok430ou.woff2",import.meta.url).href,T=""+new URL("gotham-medium-0VT3RO8I.woff2",import.meta.url).href,v=""+new URL("ipa-gothic-DimHCOud.woff2",import.meta.url).href,i=s.createContext({}),x=({theme:t="dark",children:e,className:c,as:h="div",toggleTheme:u,...d})=>{const f=R(),r=!f.theme;return p(i.Provider,{value:{theme:t,toggleTheme:u||f.toggleTheme},children:[r&&e,!r&&w(h,{className:y(c),"data-theme":t,...d,children:e})]})};function R(){return s.useContext(i)}function o(t){return t.replace(/\s\s+/g," ")}function a(t){return o(Object.keys(t).map(e=>`--${e}: ${t[e]};`).join(`

`))}function I(){return o(Object.keys(n).map(t=>`
        @media (max-width: ${n[t]}px) {
          :root {
            ${a(l[t])}
          }
        }
      `).join(`
`))}const P=o(`
  @layer theme, base, components, layout;
`),j=o(`
  :root {
    ${a(l.base)}
  }

  ${I()}

  [data-theme='dark'] {
    ${a(m.dark)}
  }

  [data-theme='light'] {
    ${a(m.light)}
  }
`),L=o(`
  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${b}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 400;
    src: url(${$}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${T}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 500;
    src: url(${G}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${k}) format('woff2');
    font-display: block;
    font-style: normal;
  }

  @font-face {
    font-family: Gotham;
    font-weight: 700;
    src: url(${g}) format('woff2');
    font-display: block;
    font-style: italic;
  }

  @font-face {
    font-family: IPA Gothic;
    font-weight: 400;
    src: url(${v}) format('woff2');
    font-display: swap;
    font-style: normal;
  }
`),O=o(`
  ${P}

  @layer theme {
    ${j}
    ${L}
  }
`);x.__docgenInfo={description:"",methods:[],displayName:"ThemeProvider",props:{theme:{defaultValue:{value:"'dark'",computed:!1},required:!1},as:{defaultValue:{value:"'div'",computed:!1},required:!1}}};export{x as T,O as t,R as u};
