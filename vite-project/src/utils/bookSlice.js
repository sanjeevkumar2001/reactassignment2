import { createSlice } from "@reduxjs/toolkit";
import Books from "./mockdata";
const bookSlice = createSlice({
    name:"book",
    initialState:{
        items:Books
    },
    reducers:{
        addItem:(state,action) => {
            state.items.push(action.payload);
        }
    }       
})  
export const{addItem} = bookSlice.actions;
export default bookSlice.reducer;