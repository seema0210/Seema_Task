import { configureStore, createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "user",
    initialState: {
        _id: '',
        firstName: '',
        lastName: '',
        email: '',
        image: ''
    },
    reducers: {
        login(state, action) {
            state._id = action.payload._id
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.email = action.payload.email
            state.image = action.payload.image
        },
        logout(state, action) {
            state._id = ''
            state.firstName = ''
            state.lastName = ''
            state.email = ''
            state.image = ''
        }
    }
})

const productSlice = createSlice({
    name : 'product',
    initialState : {
        productList : [],
        cartItem : []
    },
    reducers : {
        setDataProduct(state,action){
            // console.log('get from backend', action)
            state.productList = [...action.payload]
        },
        addCartItem(state,action){
            const check = state.cartItem.some((i) => i._id === action.payload._id) // here action.payload is product
            // some() returns boolean value, if any element in mach this given condition then return true o.w false
            if(check){
                alert('Product Already present')
            } else{
                const total = action.payload.price // need to creat total bcoz when we get double product then only change the total
            state.cartItem = [...state.cartItem, {...action.payload,qty:1, total : total}]
            // right side create a new array, ...state.createItem takes the existing items. ...action.payload takes the new items with add quantity 1 for each item
            // user ne product chya 'Add Cart' button varti click karun to current product store madhe add hoto but tya product madhe only id,name,price,category,desctiption,image fields aahet. store tya each product madhe qty and total field add karto
            }
        }, // here add product only those are selected
        deleteCartItem(state,action){
            const index = state.cartItem.findIndex((i) => i._id === action.payload)  // here action.payload=id
            console.log(index)
            state.cartItem.splice(index,1)
        },
        increaseQty(state,action){
            const index = state.cartItem.findIndex((i)=> i._id === action.payload) // find the index of prod which match with given payload
            let qty = state.cartItem[index].qty;  // get the qty of current product
            let price = state.cartItem[index].price;
            state.cartItem[index].qty = ++qty;
            state.cartItem[index].total = price*qty;
        },
        dereaseQty(state,action){
            const index = state.cartItem.findIndex((i) => i._id === action.payload)
            let qty = state.cartItem[index].qty;
            let price = state.cartItem[index].price;
            if(qty > 1){
            state.cartItem[index].qty = --qty;
            state.cartItem[index].total = price*qty;
            }
        }
    }

})

export const userActions = userSlice.actions;
export const productActions = productSlice.actions

export const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        product : productSlice.reducer
    }
})