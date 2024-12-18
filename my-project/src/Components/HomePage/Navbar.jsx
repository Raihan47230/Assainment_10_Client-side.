import React, { useContext } from "react";
import { Link, Navigate, NavLink } from "react-router-dom";
import { AuthContext } from "../AuthSystems/ProviderSystem/AuthProviders";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  
  const {users,singOuts}=useContext(AuthContext)
  console.log(users)

  const handleSingOur=()=>{
    singOuts()
   
    
  }

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
               <NavLink className={({isActive})=>isActive && 'bg-gradient-to-r from-lime-300 to-yellow-200  py-2 rounded-md text-white'} to={'/'}>
              <li>Home</li>
            </NavLink>
            <NavLink className={({isActive})=>isActive && 'bg-gradient-to-r from-lime-300 to-yellow-200 px-5 py-2 rounded-md text-white'} to={'/allvisa'}>
              <li>All visas</li>
            </NavLink>
            <NavLink className={({isActive})=>isActive && 'bg-gradient-to-r from-lime-300 to-yellow-200 px-5 py-2 rounded-md text-white'} to={'/addvisa'}>
              <li>Add Visa</li>
            </NavLink>
            {
              users && <div className="flex flex-col ">
                <NavLink to={'/addmyvisa'} className={({isActive})=>isActive && 'bg-gradient-to-r from-lime-300 to-yellow-200  py-2 rounded-md text-white'}>
              <li>My added visas</li>
            </NavLink>
            <NavLink to={'/myvisaapplicaition'} className={({isActive})=>isActive && 'bg-gradient-to-r from-lime-300 to-yellow-200   py-2 rounded-md text-white'}>
              <li>My Visa applications</li>
            </NavLink>
              </div>
            }
            </ul>
          </div>
        <Link className="text-2xl font-bold" to={'/'}> Visa Navigator </Link>
        </div>

        
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3 items-center text-lg">
            <NavLink className={({isActive})=>isActive && 'bg-gradient-to-r from-lime-300 to-yellow-200 px-5 py-2 rounded-md text-white'} to={'/'}>
              <li>Home</li>
            </NavLink>
            <NavLink className={({isActive})=>isActive && 'bg-gradient-to-r from-lime-300 to-yellow-200 px-5 py-2 rounded-md text-white'} to={'/allvisa'}>
              <li>All visas</li>
            </NavLink>
            <NavLink className={({isActive})=>isActive && 'bg-gradient-to-r from-lime-300 to-yellow-200 px-5 py-2 rounded-md text-white'} to={'/addvisa'}>
              <li>Add Visa</li>
            </NavLink>
            {
              users && <div className="flex space-x-6 items-center">
                <NavLink to={'/addmyvisa'} className={({isActive})=>isActive && 'bg-gradient-to-r from-lime-300 to-yellow-200 px-5 py-2 rounded-md text-white'}>
              <li>My added visas</li>
            </NavLink>
            <NavLink to={'/myvisaapplicaition'} className={({isActive})=>isActive && 'bg-gradient-to-r from-lime-300 to-yellow-200  px-5 py-2 rounded-md text-white'}>
              <li>My Visa applications</li>
            </NavLink>
              </div>
            }
          </ul>
        </div>
        <div className="navbar-end">



    <label className="flex cursor-pointer lg:gap-1  items-center lg:mr-10">
 
  <input  type="checkbox" value="synthwave" className="toggle theme-controller " />

</label>
{/* {users && users.email ? (
            <img
              className="h-10 w-11 mr-2 rounded-full object-cover ring-2 ring-violet-400"
              src={users.photoURL}
              alt=""
            />
          ) : (
           ""
          )} */}
 <div className="dropdown dropdown-hover">
  <div tabIndex={0} role="button" className=" m-1 ">

  {users && users.email ? (
            <img
              className="h-10 w-11 mr-2 rounded-full object-cover ring-2 ring-violet-400"
              src={users.photoURL}
              alt=""
            />
          ) : (
           ""
          )}

  </div>
  <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1]  p-2 shadow">
    <span>
     {
      users && users.displayName
     }
    </span>
   
  </ul>
</div>
          {
            

            
          users ?
              <Link to={'/'}>
                
                <button onClick={handleSingOur} className="btn">LogOut</button>
              </Link>
              :<div className="flex space-x-1 lg:space-x-1">
                
                <button ><Link className="btn" to={'/login'}>LogIn</Link></button>
                <button ><Link className="btn" to={'/register'}>Register</Link></button>
              </div>


          }
        </div>
      </div>
    </div>
  );
};


export default Navbar;
