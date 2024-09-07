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
    <>
    

    </>
  );
};

export default MiddlePage;
