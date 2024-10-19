import React from 'react'
import language  from '../utils/languageConstant';
import { useSelector } from 'react-redux';
const GptSerachBar = () => {

    const langkey = useSelector((store)=>store.config.language);
  return (
    <div className='pt-[10%] flex justify-center  '>

    <form className= ' w-1/2 bg-black grid grid-cols-12 '>
        <input type='text' className='p-4 m-4 col-span-9' placeholder = {language[langkey].gptSearchPlaceholder}/>
        <button className='col-span-3 py-2 px-4 m-4 bg-red-600 text-white rounded-md '>{language[langkey].search}</button>
    </form>

    </div>
  )
}

export default GptSerachBar;
