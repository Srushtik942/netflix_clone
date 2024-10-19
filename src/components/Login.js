import React, { useRef, useState } from 'react'
import Header from './Header';
import {isValidata} from "../utils/validate";
import { createUserWithEmailAndPassword , signInWithEmailAndPassword} from "firebase/auth";
import {auth} from "../utils/firebase";
import { updateProfile } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';

const Login = () => {

  const [isSignInForm, setisSignInForm] = useState(true);
  const [errorMessage, seterrorMessage] = useState(null);

  const dispatch = useDispatch();
  const email = useRef(null);

  const password = useRef(null);

  const number = useRef(null);

  const name = useRef(null);

  const toogleSignInform = ()=>{
    setisSignInForm(!isSignInForm);

  };
  const handleButtonClick = ()=>{
    //validate the form data
    // isValidata(email, password);

    console.log(email.current.value);
    console.log(password.current.value);
    // console.log(number.current.value);
    // console.log(name.current.value);

    const message = isValidata(email.current.value, password.current.value);
    // console.log(message);
    seterrorMessage(message);

    if(message)return;

    //sign in and sign up


    if(!isSignInForm){
      //Sign up form logic
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        updateProfile(user, {
          displayName: "Srushti Kulkarni", photoURL: "https://avatars.githubusercontent.com/u/78899960?v=4"
        }).then(() => {
          // Profile updated!
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(
            addUser({
              uid:uid,
              email:email,
              displayName: displayName,
              photoURL: photoURL,

            })
          );
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
          seterrorMessage(error.message);
        });
       console.log(user);


      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        seterrorMessage(errorCode + "-" + errorMessage);

      });


    }
    else{

      //sign in logic
  signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in
    const user = userCredential.user;

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode + "-"+ errorMessage);
  });

    }

  }

  return (
    <div>
<Header/>
<div className='absolute '>
    <img src="https://assets.nflxext.com/ffe/siteui/vlv3/bfc0fc46-24f6-4d70-85b3-7799315c01dd/web/IN-en-20240923-TRIFECTA-perspective_74e21c19-980e-45ef-bd6c-78c1a6ce9381_large.jpg" alt="bgpicture"/>
</div>
<form onSubmit={(e)=>e.preventDefault()}
className=' w-3/12 absolute p-12 bg-black bg-opacity-85 my-20 mx-auto right-0 left-0 text-white rounded-lg' onClick={handleButtonClick}>
    <h1 className='font-bold text-white text-3xl p-y-4 mb-5 '> {isSignInForm? "Sign In" : "Sign Up"}</h1>
    {!isSignInForm &&(
      <input
      ref={name}
      type="text"
      placeholder='Name' className='py-2 ,my-3 w-full mb-4 grid-cols-2 border-red bg-gray-800 rounded-sm' ></input>)}
    {!isSignInForm && (
      <input
       ref={number}
        type='number'
         placeholder='Mobile Number'
          className='py-2 ,my-3 w-full mb-4 grid-cols-2 border-red bg-gray-800 rounded-sm'></input>)}
    <input
     ref ={email}
    type="text"
     placeholder='Email or Mobile Number'
     className='py-2 ,my-3 w-full mb-4 grid-cols-2 border-red bg-gray-800 rounded-sm' />
    <input ref={password} type="password" placeholder='Password' className='py-2 ,my-3 w-full bg-gray-800 rounded-sm'  />
    <p className='text-red-500 text-lg py-2 '>{errorMessage}</p>
    <button className=' p-2 m-4 shadow-sm bg-red-600 w-full  mx-0  rounded-sm '>{isSignInForm? "Sign In" : "Sign Up"}</button>
    <h1 className='text-center text-gray-400'>OR</h1>
    <button  className='p-2 m-2 bg-white bg-opacity-40 mx-0 rounded-sm w-full '>{isSignInForm? "Use Sign In Code" : "Use Sign Up Code"}</button>
    <h1 className='text-center  m-2 cursor-pointer'>Forgot password?</h1>
    <p className='py-4  text-center cursor-pointer'onClick={toogleSignInform}>{isSignInForm? "Sign Up Now" : "Already registered? Sign In now."}</p>

</form>
</div>
  )
}

export default Login;
