const { createSlice , createAsyncThunk} = require('@reduxjs/toolkit');
// here we are creating sor for the api we call api 

const STATUSES = Object.freeze({                // here we are using object because we want to use status at multiple and we freeze then no one can manipulate from outside the object          
    IDLE: "idle",
    ERROR: "error",
    LOADING: "loading"
})


const productSlice = createSlice({
    name: 'product',
    initialState: {            // here intial state will be a object because while working with api we may have maore that take time so we have spinner for this 
        data: [],
        status: STATUSES.IDLE,       // and may be there is error so for this we have to shav status    means there is more than onr things thats why we used object     
    },

    // here we want to fetch data from api but we cant usse fetch inside the reducer cause reducer is a pure function and sync in nature and api is woring as async
    reducers: {
        setProducts(state, action) {
            state.data = action.payload
        },
        setStatus(state, action) {
            state.status = action.payload
        }
    },
})

export const { setProducts, setStatus } = productSlice.actions
export default productSlice.reducer


// t0 fetch data from api we are using thunk middleware
// thunk os function who return the async function
// we have to export it
export function fetchProducts() {
    return async function fetchProductThunk(dispatch, getState)    // inside function have two parameters (dispatch,getState)
    {
        dispatch(STATUSES.LOADING)  // we dispatch the status first becuase our api is loading first
        try {
            const res = await fetch('https://fakestoreapi.com/products')
            const data = await res.json()    // here we get the data from api then we pass that that data using ispatch we dipatch
            dispatch(setProducts(data)) // an action payload to setproduct whic is action of reducers
            dispatch(setStatus(STATUSES.IDLE))  // we dispatch the status again becuase our api is loaded done

        }
        catch (error) {
            console.log(error)
            dispatch(setStatus(STATUSES.ERROR) ) // we dispatch the status as ERROR In catch if we get any erroe while fetch data from api
        }
    }
}