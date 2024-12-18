import React from 'react';

const Meet = () => {
     return (
          <div className='mt-10'>
               <div className='text-center'>
                    <p>our team members</p>
                    <h1 className='text-3xl font-bold '>Meet our qualified visa & <br />
                    immigration experts</h1>
               </div>
               <div className='w-8/12 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5 pt-10' >

                      <div>
                         <img className='w-96 h-60 object-cover rounded-sm' src="https://img.freepik.com/free-photo/creative-graphic-designer-sitting-table_23-2147652925.jpg?t=st=1733760522~exp=1733764122~hmac=63ee35c93be3a23c609cc095beefe91b93ae92087e0109ca9946db9bcb25df3f&w=1380" alt="" />
                      </div>

                      <div>
                         <img className='w-96 h-60 object-cover rounded-sm' src="https://img.freepik.com/free-photo/low-angle-woman-terrace-working-laptop_23-2148645195.jpg?t=st=1733760755~exp=1733764355~hmac=81d2937994b623073b161d73fa8a4065fb1aacf44b9ea8f383f0a4936a568a46&w=1380" alt="" />
                      </div>

                      <div>
                         <img className='w-96 h-60 object-cover rounded-sm' src="https://img.freepik.com/free-photo/photo-female-office-worker-sitting-desk-with-laptop-clipboard-high-quality-photo_2831-9650.jpg?t=st=1733760871~exp=1733764471~hmac=1baf02cd82f072ad4793d1054e5ec804005a69d36490efb766807fc934045b6d&w=1380" alt="" />
                      </div>

                      

               </div>
          </div>
     );
};

export default Meet;