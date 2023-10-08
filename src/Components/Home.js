import React from 'react'
import { CartState } from '../Context/Context'
import SingleProduct from './SingleProduct';
import Filter from './Filter';



const Home = () => {

  const { state : {products} , 
          filterState : {bystock, byrating, sort, byfastdelivery, searchQuery }} = CartState();
    
  console.log(products);


  const transformProduct = () =>{

   let sortedProducts  = products;

   if(byfastdelivery){
    sortedProducts = sortedProducts.filter((prod)=> prod.fastDelivery === true)
   }
   
   if(bystock){
    sortedProducts = sortedProducts.filter((prod)=> !prod.inStock)
   }

       
    if(sort){
      sortedProducts = sortedProducts.sort ((a,b)=>
        sort === "LowtoHigh" ?  a.price - b.price : b.price - a.price
      )
    }

    if(byrating){
      sortedProducts = sortedProducts.filter((prod)=> prod.ratings >= byrating)
    }

    if(searchQuery){
      sortedProducts = sortedProducts.filter((prod)=> prod.name.toLowerCase().includes(searchQuery))
    }
    return sortedProducts;
  }

 
  return (
    <div className='Home'>

       <Filter /> 
      
      <div className='ProductContainer'>
        {
          transformProduct().map((prod)=>{
              return <SingleProduct prod={prod} key={prod.id} />
          })
        }
      </div>

    </div>
  )
}

export default Home;