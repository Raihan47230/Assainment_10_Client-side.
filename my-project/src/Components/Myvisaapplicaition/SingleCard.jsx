import React from "react";
import Swal from "sweetalert2";

const SingleCard = ({ data,users,setUsers}) => {
     // console.log(users)
  const {
    Application_method,
    CountryName,
    Fee,
    FirstName,
    LastName,
    Validity,
    date,
    email,
    photo,
    _id,
  } = data;

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://assainment10serverside.vercel.app/Raihan/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              const remainingUsers=users.filter(p=> id !== p._id )
              setUsers(remainingUsers)
          // console.log(remainingUsers)
             
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="card bg-base-100  shadow-xl">
        <figure className="px-10 pt-10">
          <img  src={photo} alt="Shoes" className="rounded-xl h-52" />
        </figure>
        <div className="card-body items-center text-center">
          <div className="text-start">
            <h2 className="card-title">Country name : {CountryName}!</h2>
            <p>
             Name : {FirstName}   {LastName}
            </p>
            <p>Email : {email}</p>
            <p>Validity : {Validity}</p>
            <p>Fee : {Fee}</p>
            <p>date : {date}</p>
          </div>
          <div className="card-actions">
            <button onClick={() => handleDelete(_id)} className="btn ">
              Cancle
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
