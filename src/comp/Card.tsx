import React from 'react';
import Image from 'next/image';

const Card = () => {
  return (
    <div className='p-5 gap-3 w-full flex flex-wrap justify-center overflow-x-hidden'>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full'>
        
        <div className='bg-[#A3DAC2] rounded-3xl p-4 flex flex-col justify-between hover:cursor-pointer hover:scale-105 transition-all duration-300'>
          <div className='p-3'>
            <h1 className='text-4xl lg:text-4xl text-[#252B61]'>
              Instant video consultation.
            </h1>
            <p className='mt-3 text-[#252B61] text-xl md:text-base'>Connect within 60 seconds.</p>
          </div>
          <div className='flex items-center justify-center p-3 md:p-5 '>
            <Image src='/Arrow.png' alt="arrow" width={50} height={50} />
            <Image src='/Social.png' alt="social" className='max-w-full h-full mix-blend-multiply' width={100} height={100} />
          </div>
        </div>
        
        <div className='bg-[#F0DA69] rounded-3xl p-4 flex flex-col justify-between hover:cursor-pointer hover:scale-105 transition-all duration-300'>
          <div className='p-3'>
            <h1 className='text-3xl lg:text-4xl text-[#252B61]'>
              Find the doctors near you.
            </h1>
            <p className='mt-3 text-[#252B61] text-xl md:text-base'>Confirmed Appointments.</p>
          </div>
          <div className='flex items-center justify-center p-3 md:p-5'>
            <Image src='/Arrow.png' alt="arrow" width={50} height={50} />
            <Image src='/Laptop.png' alt="laptop" className='max-w-full h-auto mix-blend-multiply' width={100} height={100} />
          </div>
        </div>
        
        <div className='bg-[#E7C2D4] rounded-3xl p-4 flex flex-col justify-between hover:cursor-pointer hover:scale-105 transition-all duration-300'>
          <div className='p-3'>
            <h1 className='text-3xl lg:text-4xl text-[#252B61]'>
              24/7 <br /> medicine.
            </h1>
            <p className='mt-3 text-[#252B61] text-xl md:text-base'>Essentials at your doorstep.</p>
          </div>
          <div className='flex items-center justify-center p-3 md:p-5'>
            <Image src='/Arrow.png' alt="arrow" width={50} height={50} />
            <Image src='/Horse.png' alt="horse" className='max-w-full h-auto mix-blend-multiply' width={100} height={100} />
          </div>
        </div>
        
        <div className='bg-[#92BDF6] rounded-3xl p-4 flex flex-col justify-between hover:cursor-pointer hover:scale-105 transition-all duration-300'>
          <div className='p-3'>
            <h1 className='text-3xl lg:text-4xl text-[#252B61]'>
              Lab <br /> Tests.
            </h1>
            <p className='mt-3 text-[#252B61] text-xl md:text-base'>Simple pickup at your home.</p>
          </div>
          <div className='flex items-center justify-center p-3 md:p-5'>
            <Image src='/Arrow.png' alt="arrow" width={50} height={50} />
            <Image src='/Plane.png' alt="plane" className='max-w-full h-auto mix-blend-multiply' width={100} height={100} />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Card;
