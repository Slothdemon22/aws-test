import Image from 'next/image';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

const MiddlePage = () => {
  const containerRef = useRef(null);
  const innerRef = useRef(null);
  const innerr = useRef(null);

  useLayoutEffect(() => {
    if (containerRef.current && innerRef.current && innerr.current) {
      const ctx = gsap.context(() => {
        // Animate the container
        gsap.from(containerRef.current, {
          opacity: 0,
          x: -100,
          duration: 2,
          ease: "power4.out",
        });

        // Animate the inner content
        gsap.from(innerRef.current, {
          opacity: 0,
          y: -100,
          duration: 1,
          ease: "power2.out",
          delay: 0.5,
        });

        // Animate the innermost content with stagger
        gsap.from(innerr.current, {
          opacity: 0,
          y: 100,
          duration: 1.2,
          ease: "power2.out",
          stagger: 0.2,
          delay: 0.5,
        });
      });

      return () => ctx.revert();
    }
  }, []);

  return (
    <div ref={containerRef} className='flex flex-wrap justify-center items-center '>
      {/* left image */}
      <div className="flex justify-center w-full ">
        <Image 
          src="/nutricition.png" 
          alt="Nutrition Image" 
          width={400} 
          height={500} 
         
        />
      </div>
      {/* right images */}
      <div ref={innerRef} className='flex flex-col md:flex-wrap justify-center items-center gap-8 w-full md:w-1/2'>
        <Image 
          src="/healthyhabits.png" 
          alt="Healthy Habits Image" 
          width={400} 
          height={500} 
          
        />
        <div ref={innerr} className='flex '>
          <div className="flex justify-center">
            <Image  
              src="/Experience.png" 
              alt="Experience Image" 
              width={200} 
              height={500} 
              
            />
          </div>
          <div className="flex justify-center">
            <Image 
              src="/happycustomers.png" 
              alt="Happy Customers Image" 
              width={200} 
              height={500} 
              
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MiddlePage;
