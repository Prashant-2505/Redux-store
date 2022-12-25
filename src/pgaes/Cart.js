import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import  {remove}  from '../store/cartSlice'

const Cart = () => {
    const dispatch = useDispatch()
    const products = useSelector((state)=>state.cart)
    const handeleRemove = (productID)=>
    {
       dispatch(remove(productID))
    }
  return (
    <div>
        <h3>Cart</h3>
        <div className="cartWrapper">
            {
             products.map(product =>(
                <div className="cartCard">
                    <img src={product.image} alt="" />
                    <h5>{product.title}</h5>
                    <h4>{product.price}</h4>
                    <button className="btn" onClick={()=> handeleRemove(product.id)}>Remove</button>
                </div>
             ))
            }
        </div>
    </div>
  )
}

export default Cart