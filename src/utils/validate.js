
//using regex


export const isValidata = (email,number,password,name)=>{

const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(email);

// const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

// const isMobileValid = /^\+\d{1,3}\d{9}$/.test(number);

// const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);

if(!isEmailValid) return "Email is not valid";
// if(!isPasswordValid) return "Password is not valid";
// if(!isMobileValid) return  "Number is not valid";
// if(!isNameValid) return "Name is not valid";

return null;
};

// export default validata;