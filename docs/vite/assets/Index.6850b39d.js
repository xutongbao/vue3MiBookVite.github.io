import{a as s}from"./index.538049d5.js";import{c as e,o as t,e as o,x as a,u as r,y as c,k as n,z as m,j as i,g as l,b as u,A as d}from"./vendor.c0d264ef.js";import{_ as f}from"./Icon.05f83b1f.js";const p={class:"m-header"},x={expose:[],setup(c){const n=s(),m=e((()=>n.state.light.header));return(s,e)=>(t(),o("div",p,a(r(m)),1))}},h={class:"m-badge-wrap"},g={expose:[],props:{count:{type:Number}},setup(s){const l=s,u=e((()=>{const{count:s}=l;return s>99?"99+":s}));return(s,e)=>(t(),o("div",h,[c(s.$slots,"default"),n(i("span",{class:"m-badge"},a(r(u)),513),[[m,0!==r(u)]])]))}},v={class:"m-footer"},b=i("div",{class:"m-footer-text"},"首页",-1),y=i("div",{class:"m-footer-text"},"书包",-1),_=i("div",{class:"m-footer-text"},"我的",-1),k={expose:[],setup(a){const c=s(),n=e((()=>c.state.light.myBooks.reduce(((s,e)=>s+e.count),0)));return l((async()=>{c.dispatch({type:"getMyBooks"})})),(s,e)=>{const a=u("router-link");return t(),o("div",v,[i(a,{to:"/light/index/home",class:"m-footer-item"},{default:d((()=>[i(f,{name:"home",class:"m-footer-icon"}),b])),_:1}),i(a,{to:"/light/index/my_books",class:"m-footer-item"},{default:d((()=>[i(g,{count:r(n)},{default:d((()=>[i(f,{name:"shubao",class:"m-footer-icon"})])),_:1},8,["count"]),y])),_:1}),i(a,{to:"/light/index/me",class:"m-footer-item"},{default:d((()=>[i(f,{name:"me",class:"m-footer-icon"}),_])),_:1})])}}};const j={class:"m-wrap"},w={expose:[],setup:s=>(s,e)=>{const a=u("router-view");return t(),o("div",j,[i(x),i(a),i(k)])}};export default w;
//# sourceMappingURL=Index.6850b39d.js.map
