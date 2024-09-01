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
        <div className="flex items-center justify-end p-4 bg-gray-400 w-1/2">
          <Image
            src="/nutricition.png"
            alt="nutriction"
            className="object-contain w-full h-auto max-w-full max-h-full"
            quality={100}
            width={300}
            height={300}
            sizes="100vw"
          />
        </div>
        <div className="w-1/2 h-full flex flex-col">
          <div className="w-full h-1/2 flex items-center justify-center border-b border-gray-300 p-2">
            <Image
              src="/healthyhabits.png"
              alt="First Image"
              className="object-cover w-full h-full"
              quality={100}
              width={300}
              height={300}
              sizes="100vw"
            />
          </div>
          <div className="w-full h-1/2 flex items-center justify-center p-2">
            <Image
              src="/happycustomers.png"
              alt="Second Image"
              className="object-cover w-[80%] h-[60%] max-w-[200px] max-h-[140px]"
              quality={100}
              width={200}
              height={140}
              sizes="100vw"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default MiddlePage;
