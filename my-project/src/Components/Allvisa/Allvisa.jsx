import React from "react";
import { useLoaderData } from "react-router-dom";
import SingleData from "./SingleData";

const Allvisa = () => {
  const data = useLoaderData();
  console.log(data);
//   const {
//     Age_restriction,
//     Application_method,
//     CountryName,
//     Description,
//     Fee,
//     Validity,
//     Visa_type,
//     photo,
//     _id,
//   } = data;

  return (
    <div>
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-10/12 mx-auto gap-4 bg-gray-200  shadow-orange-100 p-3 rounded-md mt-10">
     {
          data.map(singledatas=><SingleData key={singledatas._id} singledatas={singledatas}></SingleData>)
      }
     </div>
    </div>
  );
};

export default Allvisa;
