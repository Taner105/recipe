import axios from 'axios'
import React from 'react'
import {useState,useEffect} from "react"
import Header from '../../components/header/Header'
import { MainContainer,HomeImg, ImgDiv } from './HomeStyle'
import homeSvg from "../../assets/home.svg"
import RecipeCardComp from './RecipeCardComp'


const mealTypes=["Breakfast","Lunch","Dinner","Snack","Teatime"]
const APP_ID = "d87d723a"
const APP_KEY ="705e63e74754f297e3eaef8da4b7c3bf"
const Home = () => {
    const[query, setQuery] =useState("pizza")
    const[recipes, setRecipes] =useState();
    const[meal,setMeal] =useState(mealTypes[0].toLowerCase())
    const url=`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

    const getData = async() => {
        if(query !== ""){
            const result = await axios.get(url)
            // console.log(result.data.hits);
            if(result.data.more){
                console.log("no food a this name");
            }
            setRecipes(result.data.hits)
            setQuery("")
        }
        else{
            console.log("please fill the form");
        }
    }

    useEffect(() => {
        getData()
    })
    return (
    <div> 
       <Header setQuery={setQuery}
       query={query}
       getData={getData}
       mealTypes={mealTypes}
       setMeal={setMeal}
       meal={meal}/>
       {recipes?(
           <MainContainer>
               {recipes.map((recipe,index) => (
                   <RecipeCardComp key={index} recipe={recipe.recipe}/>
               ))}
           </MainContainer>) : 
           <ImgDiv>
            <HomeImg  src={homeSvg}/>
           </ImgDiv>}
    </div>
       
    )
    
}

export default Home
