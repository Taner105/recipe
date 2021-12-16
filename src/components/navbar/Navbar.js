import React from 'react'
import { Nav,Logo,Hamburger,MenuLink,Menu  } from './NavbarStyle'

const Navbar = () => {
    return (
       <Nav>
           <Logo to="/">
                <i>{"<Clarusway>"}</i><span>recipe</span>
           </Logo>

           <Hamburger>
               <span/>
               <span/>
               <span/>

           </Hamburger>

           <Menu>
                <MenuLink to="about">About</MenuLink>
                <MenuLink to={{pathname:"https://github.com/orgs/clarusway/dashboard"}}>About</MenuLink>
                <MenuLink to="/login">Logout</MenuLink>

           </Menu>
       
       </Nav>
    )
}

export default Navbar
