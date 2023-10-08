import React from 'react'
import Form from 'react-bootstrap/Form';
import  Button from 'react-bootstrap/Button';
import Rating from './Rating';
import { CartState } from '../Context/Context';
const Filter = () => {

    

    const {filterState : {bystock, byrating, sort, byfastdelivery, searchQuery }, filterDispatch} = CartState();

    console.log(bystock, byrating, sort, byfastdelivery, searchQuery);


  return (
    <div className='filters'>
        <p className='title'>FILTER PRODUCTS</p>
        <span>
            <Form.Check inline
               
               type="radio"
               label="Ascending"
               name="group1"
               id="inline-1"

               onChange={()=>{
                filterDispatch({
                    type : "SORT_BY_PRICE",
                    payload : "LowtoHigh"
                })
               }}

               checked ={sort === "LowtoHigh" ? true: false }
               

            />
        </span>
        <span>
            <Form.Check inline
               type="radio"
               name="group1"
               id="inline-2"
               label="Descending"

               onChange={()=>{
                filterDispatch({
                    type : "SORT_BY_PRICE",
                    payload : "HightoLow"
                })
               }}

               checked ={sort === "HightoLow" ? true: false }

            />
        </span>
        <span>
            <Form.Check inline
               type="checkbox"
               name="group1"
               id="inline-3"
               label="Out of Stock"
                
               onChange={()=>{
                filterDispatch({
                    type : "FILTER_BY_STOCK",
                    
                })
               }}

               checked = {bystock}

            />
        </span>
        <span>
            <Form.Check inline
               type="checkbox"
               name="group1"
               id="inline-4"
               label="Fast Delivery"
               
               onChange={()=>{
                filterDispatch({
                    type : "FILTER_BY_FASTDELIVERY",
                   
                })
               }}
               checked = {byfastdelivery}
            />
        </span>
        <span className="rating">
           <label for="rating"> Rating </label>
           <Rating rating={byrating}  onClick={ (i) =>
            filterDispatch({
                type : "FILTER_BY_RATING",
                payload : i +1 ,
            })
           } style={{paddingLeft : "10px", cursor:"pointer"}} />
        </span>  
        <Button variant="dark" style={{borderRadius: 10}}
        onClick = {()=>{
            filterDispatch({
                type: "CLEAR_FILTER"
            })
        }}>Clear Filters</Button>
    </div>
  )
}

export default Filter;