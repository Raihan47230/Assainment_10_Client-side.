import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthSystems/ProviderSystem/AuthProviders";

const AddVisa = () => {
  const { users } = useContext(AuthContext);
  console.log(users)
  const hendleForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const CountryName = form.name.value;
    const Visa_type = form.Visa_type.value;
    const Description = form.Description.value;
    const Age_restriction = form.Age_restriction.value;
    const Fee = form.Fee.value;
    const Validity = form.Validity.value;
    const Application_method = form.Application_method.value;
    const photo = form.photo.value;
    const Processing_time=form.Processing_time.value
    if(users){
      const email=users.email
    }
    // console.log(CountryName,Visa_type,Description,Age_restriction,Fee,Validity,Application_method,photo)

    const usersDetais = {
      CountryName,
      Visa_type,
      Description,
      Age_restriction,
      Fee,
      Validity,
      Processing_time,
      Application_method,
      photo,
      if(users){
        email
      }
    };
    ;
    if (users) {
      fetch("https://assainment10serverside.vercel.app/myaddvisa", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(usersDetais),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Imfomation has added",
              text: "Successfully!",
            });
          }
        });
    }

    const usersDetaisData = {
      CountryName,
      Visa_type,
      Description,
      Age_restriction,
      Processing_time,
      Fee,
      Validity,
      Application_method,
      photo
    };
 
      fetch("https://assainment10serverside.vercel.app/addData", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(usersDetaisData),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.insertedId) {
            Swal.fire({
              icon: "success",
              title: "Imfomation has added",
              text: "Successfully!",
            });
          }
        });
    
    
  };

  return (
    <div>
      <div className="w-8/12 mx-auto pt-20">
        <div>
          <h1 className="text-center font-bold text-2xl">
            Add visa and pasport imformataion
          </h1>
          <form onSubmit={hendleForm}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <p className="text-start">Country name</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter coffee name"
                  className="input input-bordered input-primary w-full "
                  required
                />
              </div>

              <div>
                <p className="text-start">Visa_type</p>

                <input
                  type="text"
                  name="Visa_type"
                  placeholder="Enter coffee category"
                  className="input input-bordered input-primary w-full "
                  required
                />
              </div>

              <div>
                <p className="text-start">Description</p>

                <input
                  type="text"
                  name="Description"
                  placeholder="Enter coffee details"
                  className="input input-bordered input-primary w-full "
                  required
                />
              </div>

              <div>
                <p className="text-start">Processing_time.</p>

                <input
                  type="number"
                  name="Processing_time"
                  placeholder="Enter coffee details"
                  className="input input-bordered input-primary w-full "
                  required
                />
              </div>

              <div>
                <p className="text-start">Age_restriction</p>

                <input
                  type="number"
                  name="Age_restriction"
                  placeholder="Enter coffee details"
                  className="input input-bordered input-primary w-full "
                  required
                />
              </div>

              <div>
                <p className="text-start">Fee</p>

                <input
                  type="number"
                  name="Fee"
                  placeholder="Enter coffee details"
                  className="input input-bordered input-primary w-full "
                  required
                />
              </div>

              <div>
                <p className="text-start">Validity</p>

                <input
                  type="text"
                  name="Validity"
                  placeholder="Enter coffee details"
                  className="input input-bordered input-primary w-full "
                  required
                />
              </div>

              <div>
                <p className="text-start">Application_method</p>

                <input
                  type="text"
                  name="Application_method"
                  placeholder="Enter coffee details"
                  className="input input-bordered input-primary w-full "
                  required
                />
              </div>
            </div>
            <div className="py-11">
              <p className="text-start">Country image</p>

              <input
                type="text"
                name="photo"
                placeholder="Photo url"
                className="input input-bordered input-primary w-full "
                required
              />
            </div>
            <button className="mx-auto block btn w-full bg-gradient-to-r from-yellow-300 to-rose-400 text-2xl font-semibold text-white">
              Add visa
            </button>
          </form>
        </div>
        <Link className="btn mt-5" to={"/"}>
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default AddVisa;
