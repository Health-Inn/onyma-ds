var d=Object.defineProperty;var c=(o,t)=>d(o,"name",{value:t,configurable:!0});import{s as e,C as f,c as p}from"./styled-components.browser.esm.88d70aff.js";import{a as r,j as n}from"./jsx-runtime.7c6b6fc3.js";const g=e.div`
  font-family: "Roboto", sans-serif;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8rem;

  p,
  h2,
  h3 {
    margin: 0;
  }
`,y=e.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  & > h2 {
    font-size: 2.25rem;
    font-weight: 700;
  }
`,b=e.div`
  display: flex;
  gap: 4rem;
`,u=e.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    color: #ff3b30;
    font-size: 1rem;
  }

  h3 {
    color: #333333;
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    color: #666666;
    font-size: 1rem;
    font-weight: 400;
  }
`,z=e.section`
  height: 4rem;
  border-color: #333333;
  border-style: solid;
  box-sizing: border-box;

  ${({long:o,dark:t,borderWidth:i})=>f`
    width: ${o?"256px":"4rem"};
    background-color: ${t?"#333333":"#cccccc"};
    border-width: ${i||"1px"};
  `};
`,w=e.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  p,
  h3 {
    margin: 0;
  }
`,v=e.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    color: #ff3b30;
    font-size: 1rem;
  }

  h3 {
    color: #333333;
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    color: #333333;
    font-size: 1rem;
  }
`,T=e.section`
  width: ${({spacing:o})=>o};
  aspect-ratio: 1;
  border: 1px solid #ff3b30;
  background-color: #ff7b74;
`;const a=c(({tokens:o,convertRemToPix:t,convertToSize:i})=>r("table",{className:"gtg-container",children:[n("thead",{children:r("tr",{children:[n("th",{children:"Name"}),n("th",{children:"Value"}),!!t&&n("th",{children:"Value"}),!!i&&n("th",{children:"Size"})]})}),n("tbody",{children:Object.entries(o).map(([l,s])=>r("tr",{children:[n("td",{children:l}),n("td",{children:s}),!!t&&r("td",{children:[Number(s.replace("rem",""))*16,"px"]}),!!i&&n("td",{children:n("div",{className:"gtg-container__width-td",style:{width:`${Number(s.replace("rem",""))*16}px`}})})]},l))})]}),"GeneralTokensGrid");try{a.displayName="GeneralTokensGrid",a.__docgenInfo={description:"",displayName:"GeneralTokensGrid",props:{tokens:{defaultValue:null,description:"",name:"tokens",required:!0,type:{name:"Tokens"}},convertRemToPix:{defaultValue:null,description:"",name:"convertRemToPix",required:!1,type:{name:"boolean"}},convertToSize:{defaultValue:null,description:"",name:"convertToSize",required:!1,type:{name:"boolean"}}}},typeof STORYBOOK_REACT_CLASSES<"u"&&(STORYBOOK_REACT_CLASSES["src/components/GeneralTokensGrid/index.tsx#GeneralTokensGrid"]={docgenInfo:a.__docgenInfo,name:"GeneralTokensGrid",path:"src/components/GeneralTokensGrid/index.tsx#GeneralTokensGrid"})}catch{}const $=e.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  p,
  h3 {
    margin: 0;
  }
`,_=e.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  span {
    font-size: 1rem;
    color: #ff3b30;
  }

  h3 {
  }

  p {
    font-size: 1rem;
    color: #666666;
  }
`,G=e.h3`
  font-size: 2rem;
  font-weight: 700;
  font-family: ${({font:o})=>o};
`,k=e.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 6rem;
  font-family: "Roboto", sans-serif;

  p,
  h4 {
    margin: 0;
  }
`,S=e.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1rem;

  span {
    color: #ff3b30;
    font-size: 1rem;
  }

  h4 {
    font-size: 1rem;
    color: #333333;
  }

  div {
    font-size: 1rem;
    color: #666666;
  }
`,C=e.p`
  color: #000000;
  font-size: ${({size:o})=>o};
`,I=e.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 6rem;
  font-family: "Roboto", sans-serif;

  p,
  h4 {
    margin: 0;
  }
`,R=e.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1rem;

  span {
    color: #ff3b30;
    font-size: 1rem;
  }

  h4 {
    font-size: 1rem;
    color: #333333;
  }

  div {
    font-size: 1rem;
    color: #666666;
  }
`,j=e.p`
  color: #333333;
  font-size: 2rem;
  font-weight: ${({weight:o})=>o};
`,B=e.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 6rem;
  font-family: "Roboto", sans-serif;

  p,
  h4 {
    margin: 0;
  }
`,E=e.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 1rem;

  span {
    color: #ff3b30;
    font-size: 1rem;
  }

  h4 {
    font-size: 1rem;
    color: #333333;
  }

  div {
    font-size: 1rem;
    color: #666666;
  }
`,F=e.p`
  color: #333333;
  font-size: 2rem;
  font-weight: 700;
`,N=e.div`
  font-family: "Roboto", sans-serif;

  h2 {
    font-size: 2rem;
    font-weight: 700;
  }
`,O=e.table`
  width: 100%;
  border-collapse: collapse;

  th {
    font-weight: 500;
    background-color: ${p.gray_96};
  }

  th,
  td {
    font-size: 0.875rem;
    padding: 6px;
    text-align: start;
    border: 1px solid #cccccc;
  }
`;export{y as B,g as C,F as E,_ as F,E as I,v as S,O as T,b as a,u as b,z as c,$ as d,G as e,k as f,S as g,C as h,I as i,R as j,j as k,B as l,w as m,T as n,N as o};
//# sourceMappingURL=styles.e45fa2f3.js.map
