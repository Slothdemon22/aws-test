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
          <section className='md:w-[80%] w-full h-[100%] '>
              <div className='w-full'>
                  
                  <Image src="/base.png" alt="hero image" width={1500} height={900} className="w-full h-auto" quality={100} sizes="100vw" />
              </div>
      </section>
    </>
  );
};

export default MiddlePage;
