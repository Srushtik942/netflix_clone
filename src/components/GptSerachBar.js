import React, { useRef } from 'react'
import language  from '../utils/languageConstant';
import { useSelector } from 'react-redux';
import openai from '../utils/openai';
import { useState } from 'react';
// import { addGptMovieResult } from '../utils/GptSlice';
const GptSerachBar = () => {

    const langkey = useSelector((store)=>store.config.language);
    const searchText = useRef(null);
    // const [errorMessage, setErrorMessage] = useState("");
    const [recommendations] = useState([]);


    const handleGPTSearchClick = async ()=>{
      console.log(searchText.current.value);

      // setErrorMessage("");

      //make an api call to gemini and get movie results

      const prompt = "Act as a Movie Recommendation System and Suggest some best movies for the query :" +
       searchText.current.value + "give names of 10 movies, comma seperated. Like the example result ahead. Example Result: Phir Hera Pheri, Golmaal,Golmaal again,Munnabhai MBBS";


        const model = await openai.generateContent(prompt);
        console.log(model.response.text());

    };
  return (
    <div className='pt-[10%] flex justify-center  '>

    <form className= ' w-1/2 bg-black grid grid-cols-12 '
    onSubmit={(e)=>e.preventDefault()}
    >
        <input ref={searchText} type='text' className='p-4 m-4 col-span-9' placeholder = {language[langkey].gptSearchPlaceholder}/>
        <button className='col-span-3 py-2 px-4 m-4 bg-red-600 text-white rounded-md '
        onClick={handleGPTSearchClick}
        >{language[langkey].search}</button>
        <ul>
      {recommendations.map((movie,index)=>(
        <li key={index}>{movie}</li>
      ))}
    </ul>
    </form>
    </div>
  )
}

export default GptSerachBar;



