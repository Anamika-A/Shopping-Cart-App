import { createContext, useContext, useReducer } from "react";
import { faker } from '@faker-js/faker';
import { cartReducer } from "./Reducers";
import { filterReducer } from "./Reducers";

const Cart = createContext();
faker.seed(42);

  const products = [...Array(30)].map(()=>({

      id: faker.string.uuid(),
      name: faker.commerce.productName(),
      price: faker.commerce.price({ min: 100, max: 200, dec: 0}),
      image: faker.image.image(),
      inStock: faker.helpers.arrayElement([3, 0, 4, 7, 9]),
      fastDelivery: faker.datatype.boolean(),
      ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5])

  }));

  console.log(products);
 

export const Context = ({children}) => {

  const [state, dispatch] = useReducer(cartReducer,{
    products:products,
    cart : []
  })

  const [filterState, filterDispatch] = useReducer(filterReducer,{
    bystock : false,
    byfastdelivery : false,
    byrating : 0,
    searchQuery : "",
  });

  return (
    <Cart.Provider value={{state, dispatch, filterState, filterDispatch}}>{children}</Cart.Provider>
  )
}

export default Context;

export const CartState = ()=>{
  return useContext(Cart);
}