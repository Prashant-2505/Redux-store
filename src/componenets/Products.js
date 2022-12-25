import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'   // here we using the dispatch hook from react-redux => dispatch is used to dispathc the action to the state 
import { add } from '../store/cartSlice'    // here we are importing the action which is reducer add
 import { fetchProducts } from '../store/productSlice'

const Products = () => {
    const [products, setProducts] = useState([])
    const dispathch = useDispatch();       // here create the variable for dispatch


    useEffect(() => {
         dispathch(fetchProducts())
        // const fetchProducts = async () => {
        //     const res = await fetch('https://fakestoreapi.com/products')
        //     const data = await res.json()
        //     console.log(data)
        //     setProducts(data);
        // }
        // fetchProducts();
    }, [])



    const handleADD = (product)=>  // in this function we are using diapatch and pass a product that we map from products 
    {
        dispathch(add(product))    // here dispatch take an action(add) then take payload(product) as action paramenter  then send it to store 
    }

    return (
        <div className='productsWrapper'>
            {products.map((product) => (                         // map tkae calback and it is selfed call function thats why we use this () in starting instead of {} 
                <div className="card" key={product.key}>
                    <img src={product.image} alt="" />
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                    <button className='btn' onClick={()=>handleADD(product)}>Add to cart </button>
                </div>
            ))}
        </div>
    )
}

export default Products
