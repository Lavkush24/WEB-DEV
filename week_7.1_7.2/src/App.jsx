import './App.css'
import React, { lazy } from 'react'
import { Suspense } from 'react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
// import { Dashboard } from './components/Dashboard'
// import { Landing } from './components/Landing'

/* When we are importing the compement in lazy mod then we need to use suspence to handle 
the error think the suspense like ( try and catch block ) 
in local system it is work fine because of the cache fast loading but in the production it breaks
(better practice to use <suspence> //here comes the route <suspence/>) 
suspance is used to asynchrous fetching of component
*/
const Dashboard = lazy(() => import("./components/Dashboard"));
const Landing = lazy(() => import("./components/Landing"));
const Lazy = React.lazy(() => import("./components/LazyComp"));

function App() {

  // (window.location.href )updation is not the write way of doing client side routing as it is reloading page agian 
  <button onClick={() => {window.location.href="/"}}>Landing</button>

  return (
    <>
      <BrowserRouter>
        <AppBar/>
        <Routes> 
          <Route path="/lazy" element={<Suspense fallback={"loading..."}><Lazy/></Suspense>}></Route>
          <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
          <Route path="/" element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function AppBar() {
  // better way is using useNavigate() hook
  const navigate = useNavigate();
  return (
    <div style={{background:"black",color:"white"}}>This is top bar
      <button onClick={() => { navigate("/dashboard")}}>Dashboard</button>
      <button onClick={() => { navigate("/")}}>Landing</button>
    </div>
  )
}

export default App


/* 
    - single page application (react is single page application ) (client side routing)
    (no hard routing )
    - client side bundle
    - client side routing 
*/

/* 
 what are routes?  
    /messages, /(something) in the link called routes

  How do routing in the react ? 
  using react-router-dom
*/


/*
What is Lazy loading ? 
 It is like laoding the only thing that client need to visit . 
 Not loading the whole bundle at once 
 */