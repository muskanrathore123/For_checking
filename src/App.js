import React from 'react'
import { Routes } from 'react-router-dom'
import { Route} from 'react-router-dom'
import Layout from './Components/Layout'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
  return (
    <>
    <h1>Hello</h1>
   <Routes>  
      <Route path="/" element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    </Route>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
    </>
  )
} 

export default App
