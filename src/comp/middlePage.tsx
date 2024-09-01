import Image from 'next/image';
import gsap from 'gsap';
import { useLayoutEffect, useRef } from 'react';

const MiddlePage = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if (containerRef.current) {
      const ctx = gsap.context(() => {
        gsap.from(containerRef.current, {
          opacity: 0,
          duration: 1,
          ease: "power4.out",
        });
      });

      return () => ctx.revert();
    }
  }, []);

  return (
    <>
      <section
        ref={containerRef}
        className="flex w-full h-[50vh] rounded-lg border-4 border-dashed border-gray-300 overflow-hidden"
      >
        {/* Nutrition Image Container */}
        <div className="flex items-center justify-center p-2 w-1/2 bg-gray-400">
          <Image
            src="/nutricition.png"
            alt="Nutrition"
            className="object-contain w-full h-auto"
            quality={100}
            width={300}
            height={300}
            sizes="100vw"
          />
        </div>
        
        {/* Content Container */}
        <div className="w-1/2 h-full flex flex-col p-2">
          {/* Healthy Habits Image */}
          <div className="flex-1 flex items-center justify-center p-2 border-b border-gray-300">
            <Image
              src="/healthyhabits.png"
              alt="Healthy Habits"
              className="object-cover w-full h-full"
              quality={100}
              width={300}
              height={300}
              sizes="100vw"
            />
          </div>
          {/* Happy Customers Image */}
          <div className="flex-1 flex items-center justify-center p-2">
            <Image
              src="/happycustomers.png"
              alt="Happy Customers"
              className="object-cover w-[80%] h-[70%] max-w-[200px] max-h-[200px]"
              quality={100}
              width={200}
              height={200}
              sizes="100vw"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MiddlePage;
