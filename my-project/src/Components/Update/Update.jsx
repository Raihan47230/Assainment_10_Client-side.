import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Update = () => {
     const data=useLoaderData();
     const {CountryName,Visa_type,Description,Age_restriction,Fee,Validity,Application_method,photo,_id}=data
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
          console.log(CountryName,Validity,Visa_type,Description,Age_restriction,Fee,Application_method,photo)
          const update={CountryName,Validity,Visa_type,Description,Age_restriction,Fee,Application_method,photo}



          fetch(`https://assainment10serverside.vercel.app/myaddvisa/${_id}`, {
               method: "PUT",
               headers: {
                 "content-type": "application/json",
               },
               body: JSON.stringify(update),
             })
               .then((res) => res.json())
               .then((data) => {
                 console.log(data);
                 if (data.modifiedCount>0) {
                   Swal.fire({
                     icon: "success",
                     title: "Imfomation has added",
                     text: "Successfully!",
                   });
                 }
               });

     }
     return (
          <div>
               <h1>update :{CountryName}</h1>
               <div className="w-8/12 mx-auto pt-20">
        <div>
          <h1 className="text-center font-bold text-2xl py-10">
            Update visa and pasport imformataion
          </h1>
          <form onSubmit={hendleForm} >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              <div>
                <p className="text-start">Country name</p>
                <input
                  type="text"
                  name="name"
                  defaultValue={CountryName}
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
                  defaultValue={Visa_type}

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
                  defaultValue={Description}

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
                  defaultValue={Age_restriction}

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
                  defaultValue={Fee}
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
                  defaultValue={Validity}
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
                  defaultValue={Application_method}

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
                defaultValue={photo}

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

export default Update;