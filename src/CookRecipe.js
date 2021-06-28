
import { useState } from "react"
import axios from 'axios';
import Recipe from './Recipe'
import { v4 as uuidv4 } from 'uuid'
import Alert from "./Alert"
import './cook.css'
const CookRecipe = () => {
    const [query, setQuery] = useState("")
    const [recipes, setRecipes] = useState([])
    const [alert, setAlert] = useState("")
    const APP_ID = "0e0f8f6a";
    const APP_KEY = "dd109300e4f476b4ae4eec19f9547690";
    const url = `https://api.edamam.com/search?q=${query}app_id=${APP_ID}&app_key=${APP_KEY}`


    const getData = async () => {
        if (query !== "") {
            const result = await axios.get(url)
            if (result.data.more) {
                return setAlert("No food with such name")
            }
            console.log(result)
            setRecipes(result.data.hits)
            setAlert("")
            setQuery("")
        }
        else {
            setAlert("Please fill the form")
        }
    }
    const onsubmit = (e) => {
        e.preventDefault();
        getData()
    }
    const onChange = (e) => {
        setQuery(e.target.value)
    }
    return (
        <div className="cookRecipe">
            <h1>Food Searching App</h1>
            <form className="search-form" onSubmit={onsubmit}>
                {alert !== "" && <Alert alert={alert} />}
                <input type="text" placeholder="search" autoComplete="off" onChange={onChange} value={query} />
                <input type="submit" value="search" />
            </form>
            <div className="recipes">
                {recipes !== [] && recipes.map(recipe => <Recipe key={uuidv4()} recipe={recipe} />)}
            </div>
        </div>
    )
}

export default CookRecipe