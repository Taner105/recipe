import axios from 'axios'
import React from 'react'
import {useState} from "react"
import Header from '../../components/header/Header'


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
            console.log(result);
        }
    }

    useEffect(() => {
        getData()
    })
    return (
        
       <Header/>
    )
}

export default Home
