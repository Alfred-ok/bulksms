import{r as o,Q as N,j as e,k as v,T as x,U as c,V as I,W as L,X as U,Y as A,Z as B,_ as M,$ as h,a0 as m,p as g,a1 as j,w as i,C as E}from"./react-vendors-Df_ma0qF.js";import{A as R}from"./index-Bmw6S5Ai.js";import{k as t,D as F,E as P}from"./vendor-DYGqKupJ.js";import{e as z}from"./icons8-error-EK1qFjAG.js";const $=()=>{const[p,C]=o.useState(""),[d,b]=o.useState(""),u=t.get("responseMessage"),[y,n]=o.useState(!1),f=N(),{setRole:k,setUsername:w,setAuthToken:S}=o.useContext(R),T=async r=>{r.preventDefault(),n(!0);try{const a="https://wazimobile-sms-backend.onrender.com/";console.log("Base URL:",a);const l=await fetch(`${a}auth/authenticate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:p,password:d})});if(!l.ok)throw new Error(`HTTP error! status: ${l.status}`);const s=await l.json();console.log(s),n(!1),k(s.role),w(s.user),S({accessToken:s.accessToken,refreshToken:s.refreshToken}),t.set("username",s.user,{expires:7,secure:!0,sameSite:"Strict",path:"/"}),t.set("role",s.role,{expires:7,secure:!0,sameSite:"Strict",path:"/"}),t.set("refreshToken",s.accessToken,{expires:7,secure:!0,sameSite:"Strict",path:"/"}),t.set("responseMessage",s.responseMessage,{expires:7,secure:!0,sameSite:"Strict",path:"/"})}catch(a){console.error("There was a problem with the fetch operation:",a),n(!1)}f("/dashboard")};return e.jsx("div",{className:"min-vh-100 d-flex flex-row align-items-center",style:{backgroundImage:"url('src/assets/images/login-bg.jpg')",backgroundRepeat:"no-repeat",backgroundColor:"rgba(0,0,0,0.5)",backgroundSize:"cover",backgroundBlendMode:"multiply",overflow:"hidden"},children:e.jsx(v,{children:e.jsx(x,{className:"justify-content-center",children:e.jsxs(c,{md:4,children:[e.jsx("h3",{style:{textAlign:"center",color:"#fff",padding:"20px"},children:"WAZI MOBILE"}),e.jsx(I,{children:e.jsx(L,{className:"p-4",style:{boxShadow:"0px 15px 34px 0px rgba(0,0,0,0.2)"},children:e.jsxs(U,{children:[u=="Login Failed"?e.jsxs(A,{color:"danger",style:{textAlign:"center"},children:[e.jsx(B,{src:z,height:50}),e.jsx("h5",{style:{margin:"4px 0px"},children:u}),e.jsx("p",{style:{margin:"0"},children:"Wrong username or password. Try again"})]}):null,e.jsxs(M,{onSubmit:T,style:{textAlign:"center"},children:[e.jsx("h1",{style:{marginTop:"10px"},children:"Login"}),e.jsx("p",{className:"text-body-secondary",style:{marginTop:"10px"},children:"Sign In to your account"}),e.jsxs(h,{className:"mb-3",style:{marginTop:"20px"},children:[e.jsx(m,{style:{borderColor:"rgb(71, 71, 212)",backgroundColor:"rgb(71, 71, 212)",color:"#fff"},children:e.jsx(g,{icon:F})}),e.jsx(j,{placeholder:"Username",autoComplete:"username",value:p,onChange:r=>C(r.target.value),style:{borderColor:"rgb(71, 71, 212)"},required:!0})]}),e.jsxs(h,{className:"mb-4",children:[e.jsx(m,{style:{borderColor:"rgb(71, 71, 212)",backgroundColor:"rgb(71, 71, 212)",color:"#fff"},children:e.jsx(g,{icon:P})}),e.jsx(j,{type:"password",placeholder:"Password",autoComplete:"current-password",value:d,onChange:r=>b(r.target.value),required:!0,style:{borderColor:"rgb(71, 71, 212)"}})]}),e.jsxs(x,{children:[e.jsx(c,{xs:12,style:{marginTop:"15px"},children:y?e.jsxs(i,{color:"success",type:"submit",className:"px-4",disabled:!0,style:{width:"100%"},children:[e.jsx(E,{as:"span",size:"sm"})," authenticating ..."]}):e.jsx(i,{color:"primary",className:"px-4",type:"submit",style:{width:"100%"},children:"Login"})}),e.jsx(c,{xs:12,className:"text-right",style:{marginTop:"15px"},children:e.jsx(i,{color:"link",className:"px-0",children:"Forgot password?"})})]})]})]})})})]})})})})};export{$ as default};