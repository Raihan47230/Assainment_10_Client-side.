import React, { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from "./ProviderSystem/AuthProviders";
import googleIcon from "../../assets/image.png"


const Register = () => {
     const data=useContext(AuthContext)
     const {createUsers,handleGoogle}=data
     const[success,setSuccess]=useState('')
     const[error,setError]=useState('')
  const [passwordError, setPasswordError] = useState();

const nav=useNavigate()

     const hendleGOOGle=()=>{
       handleGoogle()
       nav('/')
     }

  const hendleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const names = form.name.value;
    const email = form.email.value;
    const photourl = form.photo.value;
    const password = form.password.value;
    console.log(names,email, photourl, password);


    e.target.reset();
    setSuccess();
    setError();
    setPasswordError();
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (!passwordRegex.test(password)) {
      return setPasswordError(
        "At least one Uppercase and one Lowercase and password length has to be atleast 6 cateacter "
      );
    }

    createUsers(email,password)
    .then(result=>{
      console.log(result.users)
    })
    .catch((error)=>{
      setError(error.message)
    })
  };

  return (
    <div className="">
      <div className="card bg-gradient-to-t from-yellow-50 to-pink-200 pt-3 w-full max-w-sm shrink-0 shadow-2xl block mx-auto mt-20 ">
        <h1 className="text-2xl font-bold  text-center text-transparent  bg-clip-text bg-gradient-to-r from-rose-500 to-yellow-400">
          Pleace Registation Form
        </h1>

        <form onSubmit={hendleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="name"
              placeholder="name"
              className="input input-bordered"
              name="name"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              className="input input-bordered"
              name="email"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">PhotoURL</span>
            </label>
            <input
              type="photoURL"
              placeholder="photoURL"
              className="input input-bordered"
              name="photo"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              className="input input-bordered"
              name="password"
              required
            />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Registation</button>
          <p>Already have an account ? <Link className="underline " to={'/login'}>LogIn </Link> </p>
          {<p className="text-red-600"> {error}</p>}
      <p className="text-red-400 font-semibold">{passwordError}</p>

            <div className="divider py-3 "> or</div>
            <button onClick={hendleGOOGle} className="btn block mx-auto w-full">
          <img className="h-6 w-6 rounded-full" src={googleIcon}alt="" />
              Register with Google
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
