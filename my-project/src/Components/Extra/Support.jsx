import React from "react";

const Support = () => {
  return (
    <div className=" grid grid-cols-1 lg:grid-cols-2 justify-center  w-10/12 mx-auto bg-gradient-to-r from-yellow-200 to-rose-500 space-x-10 px-4 lg:px-40 py-5 items-center mb-10 space-y-9 rounded-md">
      <div>
        <h1 className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-fuchsia-600 py-3">countries you can visit</h1>
        <h1 className="text-lg py-3">Countries we support <br /> for the immigration</h1>
        <p>There cursus massa at urnaaculis estie. Sed aliquamellus vitae <br /> ultrs condmentum leo massa mollis. our unmatched approach <br /> to business and cost effectiveness consulting</p>
      <button className="block lg:ml-20 mx-auto mt-5 btn">Explor more</button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 justify-center gap-6 ">
          <div className="bg-gray-200 p-5 rounded-full">
          <img className="h-32 w-32 rounded-full mx-auto" src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png" alt="" />
          </div>

          <div className="bg-gray-200 p-5 rounded-full">
          <img className="h-32 w-32 rounded-full mx-auto" src="https://cdn.pixabay.com/photo/2017/03/14/21/00/american-flag-2144392_640.png" alt="" />
          </div>

          <div className="bg-gray-200 p-5 rounded-full">
          <img className="h-32 w-32 rounded-full" src="https://media.istockphoto.com/id/657672390/vector/flag-of-france.jpg?s=612x612&w=0&k=20&c=VY7IIA5kGgMNL_G_Uio7BV8vuH30HUk_jYezBDrpees=" alt="" />
          </div>

          <div className="bg-gray-200 p-5 rounded-full">
          <img className="h-32 w-32 rounded-full mx-auto" src="https://media.istockphoto.com/id/1334728364/vector/italian-republic-europe-flag.jpg?s=612x612&w=0&k=20&c=G_FQxaiGkRHX7Sh5lwBNEGqAANE_hVu6EaJsO2umcIY=" alt="" />
          </div>

          <div className="bg-gray-200 p-5 rounded-full">
          <img className="h-32 w-32 rounded-full" src="https://t3.ftcdn.net/jpg/00/62/19/82/360_F_62198244_HcI4q6pS86tREeUYuseBfTzPP7nLaSPi.jpg" alt="" />
          </div>

          <div className="bg-gray-200 p-5 rounded-full">
          <img className="h-32 w-32 rounded-full mx-auto" src="https://www.shutterstock.com/image-vector/flag-spain-national-symbol-official-260nw-2378056021.jpg" alt="" />
          </div>
      </div>
    </div>
  );
};

export default Support;
