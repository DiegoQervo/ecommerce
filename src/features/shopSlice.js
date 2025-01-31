import { createSlice } from "@reduxjs/toolkit";
import products from '../data/products.json'
import categories from '../data/categorias.json'

export const shopSlice = createSlice({
    name:"shop",
    initialState:{
        categories:categories,
        products:products,
        productsFilteredByCategory:[],
        productSelected:{}
    },
    reducers:{
        setProductFilteredByCategory: (state, action) =>
            state.productsFilteredByCategory = state.products.filter(product => product.category === action.payload)
    }
})

export const {setProductFilteredByCategory} = shopSlice.actions

export default shopSlice.reducer