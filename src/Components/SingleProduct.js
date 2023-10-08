import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Rating from './Rating';
import { CartState } from '../Context/Context';
//import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const SingleProduct = ({prod,key})=>{
   
  const { state : {cart}, dispatch} = CartState();
 // console.log("cart",cart)

 
  return(
    <div className='single__product'>

<Card style={{backgroundColor:" #7b8b94" }}>
      <Card.Img variant="top" src={prod.image} alt="product"/>
        <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle> $ {prod.price}</Card.Subtitle>
          <Card.Text>
            <div>
              {prod.fastDelivery ?
                "Fast Delivery" : "2 days Delivery"
              }
            </div>
            <Rating rating={prod.ratings} />
          </Card.Text>
          {
            cart.some(p => p.id === prod.id) ?
              (<Button onClick={()=>{
                dispatch({type:"REMOVE_FROM_CART",payload: prod})
              }} variant="danger">
                Remove from Cart
                </Button>)
              : (<Button onClick={
                ()=>{dispatch({type:"ADD_TO_CART",payload: prod})
              }}variant={!prod.inStock ? "danger":"warning"} disabled = {!prod.inStock}>
                 {!prod.inStock ? "Out of Stock" : "Add to Cart"} 
                 </Button>)

          }
        </Card.Body>
      </Card>

    </div>

  )
}
export default SingleProduct;




/*const SingleProduct = ({ prod, key }) => {

  const ratings = prod.ratings;
  return (
    <div key={key} className='single__product'>
      <img src={prod.image} alt="Products" />
      <span>{prod.name}</span>
      <span>{prod.price}</span>

      <span>
        {prod.fastDelivery  ?
          "Fast Delivery" : "2 days Delivery"
        }
      </span>
      <span>
      {
        [...Array(5)].map((_, i) => {

            if(ratings > i)
            {
             return <AiFillStar />
            }
            else{
              return <AiOutlineStar />
            }
          
         
          })
      }
      </span>
      <Button variant='warning'>Add to Cart</Button>
    </div>
  )
}
*/