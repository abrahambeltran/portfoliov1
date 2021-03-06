import React, {useState} from 'react'
import Header from '../components/header'
import Navbar from '../components/nav'
import SideBar from '../components/sidebar'

const Home = () => {
  const[isOpen, setIsOpen] = useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <Navbar toggle={toggle}/>
        <Header/>
    </>
  )
}

export default Home