import React from "react";
import { data, Link } from "react-router-dom";
import Swal from "sweetalert2";

const SingleDataCard = ({ p, user, setUser }) => {
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
  } = p;

const handleDelete=(id)=>{
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      fetch(`https://assainment10serverside.vercel.app/myaddvisa/${id}`,{
        method:"DELETE"
      })
      .then(res=>res.json())
      .then(data=>{
        if(data.deletedCount){
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });
          const remainingData=user.filter(use=>use._id !== id)
          setUser(remainingData) 
        }
      })
      
    }
  });

 
}

  return (
    <div>
      <div className="card bg-base-100  shadow-xl ">
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
            <p className="text-start font-semibold">
              Application_method : {Application_method}
            </p>
            <p className="text-start font-semibold">Validity : {Validity}</p>
            <p className="text-start font-semibold">
              Age_restriction : {Age_restriction}
            </p>
            <p className="text-start font-semibold">Fee : {Fee}</p>
            <p className="text-start font-semibold">{Description}</p>
          </div>
          <div className="card-actions justify-end pt-5">
            <Link to={`/update/${_id}`}>
            <div className="badge badge-outline btn">Update</div>
            </Link>
            <div onClick={()=>handleDelete(_id)} className="badge badge-outline btn">Delete</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDataCard;
