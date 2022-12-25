import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux' // its a hook its work as a subscribe means if you cjange state then you have to req to get response from the changed state bt of you subscribe that sate then it will be send ato you automaticalyy you have to req again and again

const Navbar = () => {

    const items = useSelector(state=>state.cart)    // its take ans state as a paramanter then intialize tha state aname in arrow function in our case or state is cart  and useselector is used to get data from store

    return (
        <div style={{ display: 'flex', alignItems: 'cenet', justifyContent: 'space-between' }}>
            <span className='logo'>REDUX STORE</span>
            <div>
                <Link className='navLink' to='/'>Home</Link>
                <Link className='navLink' to='/cart'>Cart</Link>
                <span className='cartCount'>
                    {/* here we use the items to length as a counter means the lenght of state as much as itme we add to tha stae its length will increas and give us the exact no of items of cart we selected */}
                    Cart items :{items.length}  
                </span>
            </div>
        </div>
    )
}

export default Navbar