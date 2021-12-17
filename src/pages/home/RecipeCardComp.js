import React from 'react'
// import { Button } from '../../components/header/HeaderStye'
import { RecipeCard, RecipeHeader, RecipeImage,Button } from "./HomeStyle"
import defaultImage from "../../assets/default-image.jpg"
import { useNavigate } from 'react-router-dom'


const moreClick = () => {

    let navigate = useNavigate();
    navigate("/details", {state:{recipe}})
}
const RecipeCardComp = ({recipe}) => {
    return (
        <div>
            <RecipeCard>
                <RecipeHeader>{recipe.label}</RecipeHeader>
                <RecipeImage src={recipe?.image || defaultImage}></RecipeImage>
                <Button onClick={moreClick}>View More</Button>
            </RecipeCard>
            
        </div>
    )
}

export default RecipeCardComp
