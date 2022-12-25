import {configureStore} from '@reduxjs/toolkit'  // here we create a store where we store our reducer that are create in form of slice
import cartReducer from './cartSlice'            // import our cartReducer
import productReducer from './productSlice'
const store = configureStore({                  // create a variable af configureStore and it take object as reducers
    reducer:{                                   // we can store our reducer int and it can be many as per need
        cart : cartReducer  ,                   // for now we have only onre reducer cartSlice and we named it cart same way we can store maore reducer in it
        product : productReducer               // second reducer
    } 
})

export default store