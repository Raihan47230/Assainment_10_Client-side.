import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleDataCard from '../MeetSection/SingleDataCard';

const MyAddVisa = () => {
  const loadData=useLoaderData()
  const [user,setUser]=useState(loadData)
  console.log(user)
  return (
    <div className='w-8/12 mx-auto mt-10'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-3 '> 
      {
        user.map(p=><SingleDataCard key={p._id} p={p} user={user} setUser={setUser}></SingleDataCard>)
      }
      </div>
    </div>
  );
};

export default MyAddVisa;

