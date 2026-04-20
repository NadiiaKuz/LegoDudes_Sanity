import { useEffect } from "react"
import { useState } from "react"
import { useParams } from "react-router-dom"
import client from "../helpers/client"

export default function CategoryPage(){
    const parameters = useParams()
    const [category, setCategory] = useState(null)

    useEffect(() => {
        async function fetchCategory(slug) {
            const tempCategory = await client.fetch("*[_type == 'category' && slug.current == $slug]{...}", { slug }) 
            // spør om clienten kan hente det dokumentet av typen "category" som har en slug som matcher den vi sender inn som parameter
            setCategory(tempCategory[0]) // tempCategory er en array, så vi tar ut det første elementet (som er det eneste i dette tilfellet) og setter det som category
        }

        fetchCategory(parameters.slug) // kjør funksjonen for å hente kategorien basert på slug-en i URL-en
    }, [parameters]) // denne useEffect-en kjører hver gang parameterne i URL-en endres, altså hver gang vi klikker på en ny kategori

    console.log(parameters)
    console.log(category)

    return <h1>{category?.categoryname}</h1>
}