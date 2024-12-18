import React from 'react';
import { Link } from 'react-router-dom';

const Cardss = ({p}) => {
     const {
          Age_restriction,
          Application_method,
          CountryName,
          Description,
          Fee,
          Validity,
          Visa_type,
          Processing_time,
          photo,
          _id,
        } = p;
     return (
          <div>
               <div className="card bg-base-100 w-96  lg:h-[500px] shadow-xl ">
        <figure className="px-10 pt-10">
          <img
            src={photo}
            alt="Shoes"
            className="rounded-xl h-40 w-80 object-cover"
          />
        </figure>
        <div className="card-body items-center text-center">
          <div className="text-start">
            <h2 className="card-title">Country Name : {CountryName}</h2>
            <p className="text-start font-semibold">Visa_Type : {Visa_type}</p>
            
            <p className="text-start font-semibold">Validity : {Validity} years</p>
            <p className="text-start font-semibold">Fee : ${Fee}</p>
            <p className="text-start font-semibold">Processing_time : {Processing_time} day</p>
          </div>
        
        {/* <button className='block mx-auto btn'>Viwe Details</button> */}
      
       
        </div>
      </div>
          </div>
     );
};

export default Cardss;