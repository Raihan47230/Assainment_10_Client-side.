import React from "react";
import { Link } from "react-router-dom";

const SingleData = ({singledatas}) => {
     const {Age_restriction,
          Application_method,
          CountryName,
          Description,
          Fee,
          Validity,
          Visa_type,
          photo,
          _id}=singledatas
  return (
    <div>
      <div className="card bg-base-100  shadow-xl ">
        <figure className="px-10 pt-10">
          <img  src={photo} alt="Shoes" className="rounded-xl h-40 w-80 object-cover" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">Country Name : {CountryName}</h2>
          <p> Visa_type: {Visa_type}</p>
          <p> Validity : {Validity}</p>
          <p > Fee :${ Fee}</p>
          <div className="card-actions">
           <Link to={`/visaDetails/${_id}`}>
           <button className="btn ">Show Details</button>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleData;
