import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { products } from "./data/products"
import Card from './Card'
 
export default function App() {
const [count, setCount] = useState(0)
/*const cards =products.map(function(pro){
  return <Card image={pro.image} name={pro.name} description={pro.description} price={pro.price}/>
})*/

  return (
    <div>
    <div className=" flex justify-between  ">
        <div>./amazon</div>
        <div>Search </div>
        <div><img src='search-icon.png' className="w-8"></img></div>
        <div><img src='secure-transaction.png' className="w-10"></img></div>
        <div>cart 0</div>
      <div>Returns & Orders</div>
      </div>

      <div className="flex flex-wrap justify-center gap-6 px-10 py-8 bg-gray-100">
           {products.map(function(pro){
  return <Card image={pro.image} name={pro.name} description={pro.description} price={pro.price}/>
})}
      </div>
   
    </div>
  )
}

