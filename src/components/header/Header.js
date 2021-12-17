import React from 'react'
import Form from './Form';
import { HeaderContainer, MainHeader } from './HeaderStye';

const Header = ({setQuery, query, getData,mealTypes,setMeal,meal}) => {
    return (
        <div>
           <HeaderContainer>
               <MainHeader>
                   Food App
               </MainHeader>
               <Form/>
           </HeaderContainer>
        </div>
    )
}

export default Header;
