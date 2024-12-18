import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SingleCard from "./SingleCard";

const MyVisaApplicaition = () => {
  const loadedData = useLoaderData();
  const [users, setUsers] = useState(loadedData);
  const [search,setSearch]=useState('')
//  console.log(search)

 useEffect(()=>{
  fetch(`https://assainment10serverside.vercel.app/Raihan?searchParms=${search}`)
  .then(res=>res.json())
  .then(data=>{
    setUsers(data)
  })
 },[search])
  


  return (
    <div className="w-10/12 mx-auto mt-10">
      <div  className="text-center my-10">
        <input
        onChange={(e)=>setSearch(e.target.value)}
          type="text"
          placeholder="search"
          className="input input-bordered input-info w-full max-w-xs"
          name="search"
        />
        <button className="btn ring-1 ring-blue-200">search</button>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-4  gap-5">
        {users.map((Rai) => (
          <SingleCard
            users={users}
            setUsers={setUsers}
            data={Rai}
            key={Rai._id}
          ></SingleCard>
        ))}
      </div>
    </div>
  );
};

export default MyVisaApplicaition;
