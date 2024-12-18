

import React from "react";
import slider1 from '../../assets/traveling-family.jpg'
import screen from '../../assets/Screenshot 2024-12-07 215543.png'
import happy from '../../assets/Screenshot 2024-12-07 215953.png'
import slider3 from '../../assets/young-female-traveller-with-backpack-wearing-black-mask-holding-travel-ticket-white.jpg'
// import Head from "../Head";

import {useTypewriter,Cursor} from 'react-simple-typewriter'

const Hero = () => {
  const [tyoeEffect]=useTypewriter({
    words:["FOR STUDENT VISA" , 'FOR TOURIST VISA' , 'FOR WORK PARMIT VISA'],
    loop:{},
    typeSpeed:100,
    deleteSpeed:30
  })
  return (
    <div >
      <div className="carousel w-full relative">
        <div id="slide1" className="carousel-item relative w-full">
          <img
            src={slider3}
            className="w-full lg:h-[700px] object-cover  object-top"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>


        <div id="slide2" className="carousel-item relative w-full">
          <img
            src={ slider1}
            className="w-full lg:h-[700px] object-cover"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>


        <div id="slide3" className="carousel-item relative w-full">
          <img
            src={happy}
            className="w-full lg:h-[700px] object-cover"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>


        <div id="slide4" className="carousel-item relative w-full">
          <img
            src={screen}
            className="w-full lg:h-[700px] object-cover"
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>


      </div>
      <div className="absolute -mt-56 px-2 lg:-mt-96 lg:ml-56">
        <p className="text-xl lg:text-4xl font-bold py-5 text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 to-violet-700">WELCOME OUR VISA SERVISE CENTER. </p>
        <div className="flex space-x-3 items-center">
        <h1 className="lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-sky-500">SEMPOLE PROCESS  </h1>
        <span className="lg:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-yellow-700">{tyoeEffect}</span>
        </div>
      </div>
    
    </div>
  );
};

export default Hero;
