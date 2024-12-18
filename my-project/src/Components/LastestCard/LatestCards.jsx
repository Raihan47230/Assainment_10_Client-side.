import React, { useEffect, useState } from 'react';
// import SingleData from '../Allvisa/SingleData';
import Cardss from './Cardss';
import { Link } from 'react-router-dom';

// http://localhost:5000
const LatestCards = () => {
     const [data,setDatas]=useState([])
     useEffect(()=>{
          fetch('https://assainment10serverside.vercel.app/allData')
          .then(res=>res.json())
          .then(data=>{
               setDatas(data)
               
          })
     },[])
     // https://assainment10serverside.vercel.app/
  console.log(data)

  const reverseData=[...data].reverse().slice(0,6)

     return (
          <div className='w-9/12 lg:w-8/12 mx-auto'>
               <div className='grid  grid-cols-1 lg:grid-cols-3 gap-3'>
                       
                    {

                reverseData.map(p=><Cardss key={p._id} p={p}></Cardss>)
                    
                    }
          
               </div>
               <button className='block mx-auto mt-10 bg-gradient-to-r from-fuchsia-300 to-rose-500 px-10 py-2 rounded-md font-bold'>
               <Link  to={'/allvisa'} >See all</Link>
               </button>
                    
             
          </div>
     );
};

export default LatestCards;


// Age_restriction
// : 
// ""
// Application_method
// : 
// "free visa"
// CountryName
// : 
// "Australia"
// Description
// : 
// "Australia a Big county in the world. Australia natrue is so beautifull. Australia has a large populaition."
// Fee
// : 
// "18000"
// Validity
// : 
// "yes"
// Visa_type
// : 
// "student"
// photo
// : 
// "https://www.shutterstock.com/image-photo/sydney-australia-october-20-2023-600nw-2465212583.jpg"