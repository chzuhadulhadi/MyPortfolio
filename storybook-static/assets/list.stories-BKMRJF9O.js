import{a as t,j as g}from"./jsx-runtime-BQA5H8uj.js";import{c as f}from"./style-CdEeFtaU.js";import{S as y}from"./story-container-BmzpGumI.js";import"./index-CBqU2yxZ.js";import"./_commonjsHelpers-BosuxZz1.js";const S="_list_1ecfb_2",h="_item_1ecfb_15",l={list:S,item:h},p=({ordered:e,children:n,className:u,..._})=>t(e?"ol":"ul",{className:f(l.list,u),..._,children:n}),i=({children:e,...n})=>t("li",{className:l.item,...n,children:e});p.__docgenInfo={description:"",methods:[],displayName:"List"};i.__docgenInfo={description:"",methods:[],displayName:"ListItem"};const O={title:"List"},I=e=>t(y,{children:g(p,{...e,children:[t(i,{children:"List item 1"}),t(i,{children:"List item 2"}),t(i,{children:"List item 3"})]})}),s=I.bind({});s.args={ordered:!1};const r=I.bind({});r.args={ordered:!0};var o,m,a;s.parameters={...s.parameters,docs:{...(o=s.parameters)==null?void 0:o.docs,source:{originalSource:`args => {
  return <StoryContainer>
      <List {...args}>
        <ListItem>List item 1</ListItem>
        <ListItem>List item 2</ListItem>
        <ListItem>List item 3</ListItem>
      </List>
    </StoryContainer>;
}`,...(a=(m=s.parameters)==null?void 0:m.docs)==null?void 0:a.source}}};var c,d,L;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`args => {
  return <StoryContainer>
      <List {...args}>
        <ListItem>List item 1</ListItem>
        <ListItem>List item 2</ListItem>
        <ListItem>List item 3</ListItem>
      </List>
    </StoryContainer>;
}`,...(L=(d=r.parameters)==null?void 0:d.docs)==null?void 0:L.source}}};const U=["Unordered","Ordered"];export{r as Ordered,s as Unordered,U as __namedExportsOrder,O as default};
