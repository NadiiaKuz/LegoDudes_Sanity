import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import client from '../helpers/client'

export default function Products({products, setCart}){
  const [sanityProducts, setSanityProducts] = useState(null)

  useEffect(() => { // for å sørge for at vi kjører denne koden når komponenten lastes inn
    async function fetchAllProducts() {
      const allProducts = await client.fetch("*[_type == 'product']{_id, productname, price, 'category': productcategory->categoryname, 'imageURL': productimage.asset->url }") // spør om clienten kan hente alle dokumenter av typen "product"
      setSanityProducts(allProducts)
    }

    fetchAllProducts() // kjør funksjonen for å hente produktene
  }, []) // tom dependency-list betyr at denne useEffect-en kun kjører én gang, når komponenten først lastes inn

  console.log(sanityProducts)

  return (
  <div id="product-list">
    {sanityProducts?.map(p => <ProductCard key={p._id} p={p} setCart={setCart} />)}
  </div>)
}