import{r,j as e,T as m,U as j,W as y,a4 as g,X as C,p as d,w as n,a7 as b,a8 as D,a9 as w,aa as v,ab as k,ac as F}from"./react-vendors-Df_ma0qF.js";import{G as I,H as R}from"./vendor-DYGqKupJ.js";function L(){const[l,a]=r.useState(null),[i,o]=r.useState(!1),c=r.useRef(),x=s=>{s.preventDefault()},p=s=>{s.preventDefault(),a(s.dataTransfer.files),console.log(s.dataTransfer.files)},f=s=>{const t=Object.values(l).filter(u=>u!==s);a(t),console.log("nameit",t)},h=()=>{o(!i);const s=new FormData;s.append("Files",l),console.log(s.getAll()),console.log(l)};return e.jsxs(e.Fragment,{children:[e.jsx(m,{className:"justify-content-md-center",children:e.jsx(j,{xs:10,children:e.jsxs(y,{className:"mb-4",style:{boxShadow:"0px 15px 34px 0px rgba(0,0,0,0.2)"},children:[e.jsx(g,{style:{backgroundColor:"#fff",color:"blue"},children:e.jsx("h3",{children:"Upload file"})}),e.jsxs(C,{children:[e.jsxs("div",{style:{background:"#f3f4f6",border:"2px dashed lightgray",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",color:"gray",padding:"20px"},onDragOver:x,onDrop:p,children:[e.jsx(d,{icon:I,size:"3xl"}),e.jsx("h3",{children:"Drag and Drop files to upload"}),e.jsx("h3",{children:"Or"}),e.jsx("input",{type:"file",multiple:!0,onChange:s=>a(s.target.files),hidden:!0,ref:c}),e.jsx(n,{type:"button",color:"dark",id:"inputGroupFileAddon04",onClick:()=>c.current.click(),style:{margin:"20px"},children:"Select Files"})]}),l&&e.jsxs("div",{style:{margin:"40px"},children:[e.jsx(b,{flush:!0,children:Array.from(l).map((s,t)=>e.jsxs(D,{style:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[s.name,e.jsx(n,{color:"danger",style:{color:"#fff"},onClick:()=>f(s),children:e.jsx(d,{icon:R})})]},t))}),e.jsx("div",{style:{margin:"15px",width:"100%"},className:"d-grid gap-2",children:e.jsx(n,{color:"success",onClick:h,style:{marginRight:"20px",color:"#fff"},xs:10,children:"Upload"})})]})]})]})})}),e.jsx(w,{visible:i,onClose:()=>o(!1),"aria-labelledby":"LiveDemoExampleLabel",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsxs(v,{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",width:"100%",padding:"50px",textAlign:"center"},children:[e.jsx(k,{style:{width:"100%"},children:e.jsx("h2",{children:"Uploaded Successfully"})}),e.jsx(F,{to:"/sent-messages",style:{width:"100%",display:"flex",alignItems:"center",justifyContent:"center"},children:e.jsx(n,{color:"primary",className:"mt-3",style:{width:"80%"},children:" OK "})})]})})]})}export{L as default};