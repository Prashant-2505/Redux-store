const { createSlice } = require('@reduxjs/toolkit');   // createslice basicaly part of redux toolkit and it is used to slice the components
// int o small slice to use anywhere

const cartSlice = createSlice({                    // creaeslice take an object  consist 
    name: 'cart',                                      // its consist name 
    initialState: [],                          // create intailstate in our case its an array and intially its empty
    reducers: {                                   //  reducers ==> basixally its a pure function we can make one or meore than on function in it
        add(state, action) {                      // this function take two parameters => state,action 
            state.push(action.payload)            // means state push some action on the sate 
        },
        remove(state, action) {
            return state.filter(item => item.id !== action.payload)
        },
    },
})

export const { add, remove } = cartSlice.actions           // then export the function of reducers
export default cartSlice.reducer                     // and the cartteslice reducer



// in redux toolkit inside the create slice we can do 2 things with the reducer 
// 1==> we directlry change the state   ==> example add reducer
//2==> we can return the sate       ==> example remove reducer