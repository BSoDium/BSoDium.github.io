import React, { useEffect, useState } from 'react';
import planet from 'assets/planet.png';
import robot1 from 'assets/robot_flying_1.png';
import robot2 from 'assets/robot_flying_2.png';
import sky from 'assets/sky.png';
import { useMobileMode } from './Responsive';

export default function Illustrations() {
  const mobile = useMobileMode();

  const [shift, setShift] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.getElementById('scroll-container');
      const scrollValue = scrollContainer?.scrollTop || 0;
      setShift(`translateY(${scrollValue * 0.3}px)`);
    };

    window.addEventListener('wheel', handleScroll, { passive: true });
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  return (
    <>
      <img
        src={planet}
        alt="planet"
        style={{
          position: 'absolute',
          width: '700px',
          top: '-100px',
          left: mobile ? '50%' : '0',
          transform: `${mobile ? 'translateX(-50%)' : ''} ${shift}`,
          zIndex: -1,
        }}
      />
      <img
        src={sky}
        alt="sky"
        style={{
          position: 'absolute',
          height: '70vh',
          top: '0',
          left: '0',
          zIndex: -2,
          filter: 'blur(5px)',
          transform: shift,
        }}
      />
      <img
        src={sky}
        alt="sky"
        style={{
          position: 'absolute',
          height: '70vh',
          top: '50vh',
          left: '0',
          zIndex: -2,
          filter: 'blur(5px) brightness(0.3)',
          transform: `scaleX(-1) ${shift}`,
        }}
      />
      <img
        src={robot1}
        alt="robot"
        style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          top: '100px',
          right: '5%',
          zIndex: -1,
          filter: 'blur(5px) brightness(0.8)',
          transform: `scale(0.5) ${shift}`,
          animation: 'float 20s ease-in-out infinite',
          animationDelay: '5s',
        }}
      />
      <img
        src={robot2}
        alt="robot"
        style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          top: '300px',
          right: '30%',
          zIndex: -1,
          filter: 'blur(5px) brightness(0.8)',
          transform: `scale(0.5) ${shift}`,
          animation: 'float 20s ease-in-out infinite',
          animationDelay: '10s',
        }}
      />
      <img
        src={robot1}
        alt="robot"
        style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          top: '100px',
          right: '20%',
          zIndex: -1,
          animation: 'float 20s ease-in-out infinite',
          transform: shift,
        }}
      />
      <img
        src={robot2}
        alt="robot"
        style={{
          position: 'absolute',
          width: '200px',
          height: '200px',
          top: '250px',
          right: '10%',
          zIndex: -1,
          animation: 'float 20s ease-in-out infinite',
          animationDelay: '13s',
          transform: shift,
        }}
      />
    </>
  );
}
