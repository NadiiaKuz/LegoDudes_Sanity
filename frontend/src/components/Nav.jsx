import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import client from "../helpers/client";

  export default function Nav(){

    const [categories, setCategories] = useState(null)

    useEffect(() => {
      async function fetchAllCategories() {
        const allCategories = await client.fetch("*[_type == 'category']{categoryname, slug}") // spør om clienten kan hente alle dokumenter av typen "category"  
        setCategories(allCategories)
      }

      fetchAllCategories()
    }, [])

    console.log(categories)

    return(
       <nav>
          {categories?.map((c, index) => <Link key={index} to={"/kategori/" + c.slug.current}> {c.categoryname} </Link>)}
          
          {/*<Link to="city">City</Link>
          <Link to="ninjago">Ninjago</Link>
          <Link to="castles-and-knights">Castles & Knights</Link>
          <Link to="marine-and-pirates">Marine & Pirates</Link>
          <Link to="movie-characters">Movie characters</Link>*/}
        </nav>
    )
  }