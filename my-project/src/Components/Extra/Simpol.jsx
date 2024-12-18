import React from 'react';
import logo1 from '../../assets/testing_2828998.png'
import logo2 from '../../assets/document_9586136.png'
import logo3 from '../../assets/open-box_312115.png'

const Simpol = () => {
     return (
          <div className='w-10/12 mx-auto space-y-14'>
               <div className='text-center'>
                    <h1>our work process</h1>
                    <p className='lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-800 to-fuchsia-700 '>Get your visa approved in <br />
                    3 easy simple steps</p>
               </div>
               <div className='grid text-xl lg:grid-cols-3 gap-9'>
                    <div>
                         <img className='h-20 w-20 p-6 bg-slate-100 rounded-full ring-1  mx-auto' src={logo1} alt="" />
                         <div className='text-center p-4 mt-4 bg-yellow-50 rounded-xl'>
                         <p >Complete Online Form</p>
                         <p>Filling out the online form is required to proceed with the registration  Ensure you provide accurate details while completing the <br /> online form.</p>
                         </div>
                         </div>
                    <div>
                         <img className='h-20 w-20 p-6 bg-slate-100 rounded-full ring-1  mx-auto' src={logo2} alt="" />
                        <div className='text-center p-4 mt-4 bg-yellow-50 rounded-xl'>
                        <p>Documents & Payments</p>
                        <p>Please ensure all required documents are submitted before proceeding with the payment process. <br /> velit auctor aliquet.</p>
                        </div>
                    </div>
                    <div>
                         <img className='h-20 w-20 p-6 bg-slate-100  rounded-full ring-1 mx-auto' src={logo3} alt="" />
                         <div className='text-center p-4 mt-4 bg-yellow-50 rounded-xl'>
                         <p>Receive Your Visa</p>
                         <p>Congratulations! Your visa has been approved and is ready for collection You can now receive your visa by visiting the nearest embassy <br /> or consulate</p>
                         </div>

                         
                    </div>
               </div>
          </div>
     );
};

export default Simpol;