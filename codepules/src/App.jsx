import React from 'react'
import Header from './componants/layout/Header';
import Home from './home';
import {ToastContainer,toast} from 'react-toastify'

export default function App() {
  const to = () => {
  toast.success('success')
}
  return(
    <div>
    <button onClick={to}>click me</button>
   

      <Header/>
      <Home/>

      <ToastContainer/>

   </div> 
  )
}

