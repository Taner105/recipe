import React from 'react'
import {useState} from "react"
import { Nav,Logo,Hamburger,MenuLink,Menu  } from './NavbarStyle'

const Navbar = () => {
    const [isOpen, setIsopen] = useState(false)
    return (
       <Nav>
           <Logo to="/">
                <i>{"<Clarusway>"}</i><span>recipe</span>
           </Logo>

           <Hamburger onClick={() => setIsopen(!isOpen)}>
               <span/>
               <span/>
               <span/>

           </Hamburger>

           <Menu isOpen={isOpen}>
                <MenuLink to="about">About</MenuLink>
                <MenuLink to={{pathname:"https://github.com/orgs/clarusway/dashboard"}}>Github</MenuLink>
                <MenuLink to="/login">Logout</MenuLink>

           </Menu>
       
       </Nav>
    )
}

export default Navbar
