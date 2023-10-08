import React, { memo, useEffect, useState } from 'react'
import { CartState } from '../Context/Context';
import { ListGroup } from 'react-bootstrap';
import { AiFillDelete } from 'react-icons/ai';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import {Row, Col }from 'react-bootstrap';
import Rating from './Rating';
import Form from 'react-bootstrap/Form';
const Cart = () => {
    
  const {state : {cart}, dispatch} = CartState();
  
  const [amount,setAmount] = useState(0);

  
  
  useEffect(()=>{
     
    setAmount(cart.reduce((total,prod) => total+ Number(prod.price)*prod.qty,0));

  },[cart])
  return (
    <div className='Home'>
      <div className='ProductContainer'>
      <ListGroup>
        {cart.map((prod) =>(
              <>
              <ListGroup.Item variant="light" key={prod.id}>
                <Row>
                <Col md={2}>
                        <Image src={prod.image} alt={prod.name}  fluid thumbnail />;
                  </Col>
                  <Col md={2}>
                    <span>{prod.name}</span>
                  </Col>
                  <Col md={2}>
                   <span>$ {prod.price}</span> 
                  </Col>
                  <Col md={2}>
                    <span><Rating rating={prod.ratings}  /></span>
                  </Col>
                  <Col md={2}>
                    <Form.Control as="select" 
                       value={prod.qty}
                       onChange = {(e)=>
                        dispatch({
                          type:"CHANGE_QUANTITY" ,
                          payload : {
                          id : prod.id,
                          qty : e.target.value,
                        },
                         })
                       }
                        >
                       
                       {
                        [...Array(prod.inStock)].map((_,i) =>(
                          <option key={i+1}>{i+1}</option>
                        ))
                       }
                    </Form.Control>
                  </Col>
                  <Col md={2}>
                    <AiFillDelete onClick={()=>{dispatch({type:"REMOVE_FROM_CART",payload: prod})}}fontSize={25} color="red"/>
                  </Col>
                </Row>
                
              </ListGroup.Item>
              
              </>
        ))
      
        }
    </ListGroup>
    </div>
    <div className="filters summary">
       <span className='title'>Subtotal ({cart.length}) items</span>
       <span style={{fontSize:"1.5rem"}}>Total : $ {amount}</span>
       <Button variant="primary" style={{borderRadius: 10}} disabled={cart.length ===0}>Checkout Items</Button>
    </div>
    </div>
  )
}

export default memo(Cart);