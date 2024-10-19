import { createSlice } from "@reduxjs/toolkit";


const GptSlice  =  createSlice({
    name:'GPT',
    initialState:{
        showGptSearch: false
    },
    reducers:{
        toggleGPTSearchView : (state)=>{
            state.showGptSearch = !state.showGptSearch;
        },
    },
});

export const {toggleGPTSearchView} = GptSlice.actions;

export default GptSlice.reducer;