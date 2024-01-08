import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import MainNews from './components/Main-News/MainNews'
import TopNews from './components/Top-News/TopNews'
import SideNavbar from './components/SideNavbar/SideNavbar'

function App() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Navbar/>
      <SideNavbar open={open} setOpen={setOpen}/>
      <MainNews/>
      <TopNews/>
    </>
  )
}

export default App
