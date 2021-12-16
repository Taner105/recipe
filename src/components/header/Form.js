import React from 'react'
import { FormContainer } from './HeaderStye'

const Form = () => {
    return (
        <FormContainer>
            <FoodInput type="text" placeholder="Search"/>
            <Button>Search</Button>
            <Select></Select>
        </FormContainer>
    )
}

export default Form
