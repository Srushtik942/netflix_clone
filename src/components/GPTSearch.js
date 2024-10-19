import React from 'react'
import GptSerachBar from './GptSerachBar';
import GptMovieSuggestion from './GptMovieSuggestion';

const GPTSearch = () => {
  return (

    <div>
       <div className='absolute  -z-10'>
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg" alt="bgpicture"/>
</div>
      <GptSerachBar/>
      <GptMovieSuggestion/>

    </div>
  )
}

export default GPTSearch;
