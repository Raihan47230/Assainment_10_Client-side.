import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import googleIcon from "../../assets/image.png"

import { AuthContext } from "./ProviderSystem/AuthProviders";

const Login = () => {
  const data = useContext(AuthContext);
  const [sucess, setSucces] = useState("");
  const [error, setError] = useState("");
  const { singInUsers, handleGoogle } = data;
  const nav=useNavigate()
  const hendleGOOGle = () => {
    handleGoogle();
    nav('/')
  };

  const hendleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    e.target.reset();
    console.log(email, password);

    singInUsers(email, password)
      .then((result) => {
        setSucces(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className="card bg-slate-200 py-10 px-6 w-full max-w-sm shrink-0 shadow-2xl block mx-auto mt-20">
      <h1 className="text-center text-lg font-semibold">Pleace login</h1>
      <form onSubmit={hendleLogin} className="card-body">
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
          <button className="btn btn-primary">Login</button>
          <p>
            Already have an account ?
            <Link className="underline " to={"/register"}>
              Register
            </Link>{" "}
          </p> <br />
          <div>
            <p className="font-semibold text-red-400">{sucess}</p>
            <p className="text-red-600">{error}</p>
          </div>
          <div className="divider py-3 "> or</div>
          <button onClick={hendleGOOGle} className="btn block mx-auto w-full">
          <img className="h-6 w-6 rounded-full" src={googleIcon}alt="" />
            Login with Google
            
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
