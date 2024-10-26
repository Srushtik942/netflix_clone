// import { createSlice } from "@reduxjs/toolkit";


// const GptSlice  =  createSlice({
//     name:'GPT',
//     initialState:{
//         showGptSearch: false
//     },
//     reducers:{
//         toggleGPTSearchView : (state)=>{
//             state.showGptSearch = !state.showGptSearch;
//         },
//     },
// });

// export const {toggleGPTSearchView} = GptSlice.actions;

// export default GptSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    movieResults: null,
    movieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovieResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResult } = gptSlice.actions;

export default gptSlice.reducer;