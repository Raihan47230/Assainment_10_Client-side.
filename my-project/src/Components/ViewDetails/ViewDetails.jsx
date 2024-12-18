import React from "react";
import {  useLoaderData } from "react-router-dom";
import Modal from "./Modal";

const ViewDetails = () => {



  const loaderData = useLoaderData();
  const {
    Age_restriction,
    Application_method,
    CountryName,
    Description,
    Fee,
    Validity,
    Visa_type,
    photo,
    _id,
  } = loaderData;

 

  return (
    <div className="flex justify-center">
      <div className="card bg-base-100  shadow-xl w-96">
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
          <p className="text-start font-semibold">Application_method : {Application_method}</p>
          <p className="text-start font-semibold">Validity : {Validity}</p>
          <p className="text-start font-semibold">Age_restriction : {Age_restriction}</p>
          <p className="text-start font-semibold">Fee : {Fee}</p>
          <p className="text-start font-semibold">{Description}</p>
          </div>
          <div className="card-actions">
            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_5").showModal()}
            >
              Apply for the visa
            </button>
          </div>
        </div>
      </div>


<Modal loaderData={loaderData}></Modal>
      
    </div>
  );
};

export default ViewDetails;

