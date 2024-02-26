import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "../styles/App.css"

const Cursor = () => {
  const cursorRef = useRef(null);
  const auraRef = useRef(null);
  let mouseX = 0;
  let mouseY = 0;
  let posX = 0;
  let posY = 0;

  const mouseCoords = (e) => {
    mouseX = e.clientX;
    mouseY = e.pageY;
  };

  const updateCursor = () => {
    posX += (mouseX - posX) / 3;
    posY += (mouseY - posY) / 3;

    gsap.set(cursorRef.current, {
      css: {
        left: mouseX,
        top: mouseY
      }
    });

    gsap.set(auraRef.current, {
      css: {
        left: posX - 13.5,
        top: posY - 13.5      
      }
    });
  };

  const handleMouseMove = (e) => {
    mouseCoords(e);
  };

  const handleLinkHover = () => {
    cursorRef.current.classList.add('active');
    auraRef.current.classList.add('active');
  };

  const handleLinkLeave = () => {
    cursorRef.current.classList.remove('active');
    auraRef.current.classList.remove('active');
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    const updateInterval = setInterval(updateCursor, 16); // Обновление каждые 16 миллисекунд (приблизительно 60 FPS)

    const links = document.querySelectorAll('a');
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      clearInterval(updateInterval);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} id='cursor'></div>
      <div ref={auraRef} id='aura'></div>
    </>
  );
};

export default Cursor;
