import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Modal = ({loaderData}) => {
  // console.log(loaderData)
  const navigate=useNavigate()
  const handleForma = (e) => {
    e.preventDefault();
const loaderDatass=loaderData
// console.log(loaderDatass)

    const form = e.target;
    const email = form.email.value;
    const FirstName = form.FirstName.value;
    const LastName = form.LastName.value;
    const date = form.date.value;
    const Fee = form.Fee.value;

    

    const CountryName = loaderDatass.CountryName;
    const Visa_type = loaderDatass.Visa_type;
    const Application_method = loaderDatass.Application_method;
    const Validity = loaderDatass.Validity;
    const photo = loaderDatass.photo;
  //   {
  //     "_id": "675097dccb567edc56004d32",
  //     "CountryName": "Bangladesh",
  //     "Visa_type": "student",
  //     "Description": "Bangladesh is a small county in the world. But Bangladesh natrue is so beautifull.Bangladesh has a large populaition.",
  //     "Age_restriction": "",
  //     "Fee": "20000",
  //     "Validity": "yes",
  //     "Application_method": "student visa",
  //     "photo": "https://www.business.hsbc.com/-/jssmedia/media/global/images/business-guides/bd/hero-bangladesh.jpg?h=1200&iar=0&w=1920&hash=DBCD88DED8BC9EA65E2EE72559FC82DB"
  // }
    //     console.log(email, FirstName, LastName, date, Fee);
    const modalData = { email, FirstName, LastName, date, Fee,CountryName ,Visa_type ,Application_method ,Validity , photo };

    fetch("https://assainment10serverside.vercel.app/Raihan", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(modalData),
    })
      .then((res) => res.json())
      .then((data) => {
          
        if(data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Imfomation has added",
            text: "Successfully!",
          });
        }
        navigate('/')
      });
  };
  return (
    <div>
      <form onSubmit={handleForma}>
        <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
          <div className="modal-box">
            <div className="modal-action">
              <div className="w-8/12 mx-auto pt-20">
                <div>
                  <h1 className="text-center font-bold text-2xl">
                    Add visa and pasport imformataion
                  </h1>

                  <dv className="grid grid-cols-1 gap-10">
                    <div>
                      <p className="text-start">Email</p>
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        className="input input-bordered input-primary w-full "
                        required
                      />
                    </div>

                    <div>
                      <p className="text-start">FIrst Name</p>

                      <input
                        type="text"
                        name="FirstName"
                        placeholder="Enter your First Name"
                        className="input input-bordered input-primary w-full "
                        required
                      />
                    </div>

                    <div>
                      <p className="text-start">Last Name</p>

                      <input
                        type="text"
                        name="LastName"
                        placeholder="Enter your Last Name"
                        className="input input-bordered input-primary w-full "
                        required
                      />
                    </div>

                    <div>
                      <p className="text-start">Applied date</p>

                      <input
                        type="number"
                        name="date"
                        placeholder=""
                        className="input input-bordered input-primary w-full "
                        required
                      />
                    </div>

                    <div>
                      <p className="text-start">Fee</p>

                      <input
                        type="number"
                        name="Fee"
                        className="input input-bordered input-primary w-full "
                        required
                      />
                    </div>
                  </dv>

                  <button className="mx-auto block btn w-full bg-gradient-to-r from-yellow-300 to-rose-400 text-2xl font-semibold text-white">
                    Apply
                  </button>
                </div>
                <Link className="btn mt-5" to={"/allvisa"}>
                  Go Back
                </Link>
              </div>
            </div>
          </div>
        </dialog>
      </form>
    </div>
  );
};

export default Modal;
