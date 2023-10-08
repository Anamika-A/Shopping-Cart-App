import React from 'react'
import { Navbar, Nav} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import { FaShoppingCart, FaShopify } from "react-icons/fa";
import { AiFillDelete } from 'react-icons/ai';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { CartState } from '../Context/Context';


const Header = () => {

    const {state : {cart}, dispatch, filterDispatch} = CartState();

    return (
        <div>
            <Navbar bg="dark" fixed="top" variant="dark" style={{ height: 80 }} >
                <Container>

                    <Navbar.Brand style={{ fontSize: 25, fontFamily: "sans-serif" }}>
                        <FaShopify color="red" fontSize="50px" />
                        <Link to="/">Shopping-Kart</Link>
                    </Navbar.Brand>

                    <Navbar.Text className='search' style={{width :"60%"}} >
                            <Form.Control 
                                type="text"
                                placeholder="Search..."

                                onChange={(e)=>{
                                    filterDispatch({
                                        type : "FILTER_BY_SEARCH",
                                        payload : e.target.value,
                                    })
                                }}
                            />
                
                    </Navbar.Text>
                    <Nav>
                        <Dropdown>
                            <Dropdown.Toggle variant='warning'>
                                <FaShoppingCart color="black" fontSize="25px" />
                                <Badge bg="none" style={{ fontSize: 15 }}>{cart.length}</Badge>
                            </Dropdown.Toggle>

                            <Dropdown.Menu style={{ minWidth: 350 }} >
                                {
                                    cart.length > 0 ? (
                                        <div>
                                            {
                                                cart.map((addedprod) => (
                                                   
                                                    <span className='cartProduct' key={addedprod.id}>
                                                       
                                                       <img src={addedprod.image} className='CartProduct__image' alt={addedprod.name}/>
                                                       <div className='CartProduct__details'>
                                                        <span>{addedprod.name}</span>
                                                        <span>$ {addedprod.price}</span>
                                                       </div>
                                                       <AiFillDelete fontSize={20} color="red" style={{cursor:'pointer'}}
                                                        onClick={()=>{dispatch({type:"REMOVE_FROM_CART",payload: addedprod})}} />
                                                    </span>
                                                   
                                                ))
                                            }
                                            <Link to="/cart">
                                                <Button variant="warning" style={{width: "70%" , margin:"0 15%", borderRadius:"6px"}}>Go to Cart</Button></Link>
                                        </div>
                                    ) :
                                        (<span style={{ padding: 10 }}>cart is empty!</span>)
                                }


                            </Dropdown.Menu>

                        </Dropdown>
                    </Nav>

                </Container>


            </Navbar>

        </div>
    )
}

export default Header;

