import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import "../styles/App.css";

const Cursor = () => {
  const cursorRef = useRef(null);
  const auraRef = useRef(null);
  let mouseX = 0;
  let mouseY = 0;
  let posX = 0;
  let posY = 0;

  const mouseCoords = (e) => {
    mouseX = Math.min(window.innerWidth, Math.max(0, e.pageX));
    mouseY = e.clientY + window.scrollY;
  };

  const updateCursor = () => {
    posX += (mouseX - posX) / 10;
    posY += (mouseY - posY) / 10;

    gsap.set(cursorRef.current, {
      css: {
        left: mouseX,
        top: mouseY
      }
    });

    gsap.set(auraRef.current, {
      css: {
        left: posX - 13,
        top: posY - 13
      }
    });
  };

  const handleMouseMove = (e) => {
      mouseCoords(e);

      const targetElement = document.elementFromPoint(mouseX, mouseY);
    
      if (targetElement && targetElement.id === 'cursorBlack') {
        cursorRef.current.classList.add('activeBox');
        auraRef.current.classList.add('activeBox');
      } else {
        cursorRef.current.classList.remove('activeBox');
        auraRef.current.classList.remove('activeBox');
      }
    };
    
  const handleLinkHover = () => {
    cursorRef.current.classList.add('active');
    auraRef.current.classList.add('active');
  };

  const handleLinkLeave = () => {
    cursorRef.current.classList.remove('active');
    auraRef.current.classList.remove('active');
  };

  const handleDocumentLeave = () => {
    cursorRef.current.classList.add('hidden');
    auraRef.current.classList.add('hidden');
  };

  const handleDocumentEnter = () => {
    cursorRef.current.classList.remove('hidden');
    auraRef.current.classList.remove('hidden');
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleDocumentLeave);
    document.addEventListener('mouseenter', handleDocumentEnter);

    const updateInterval = setInterval(updateCursor, 4);

    const buttons = document.querySelectorAll('button');
    const links = document.querySelectorAll('a');

    links.forEach((link) => {
      link.addEventListener('mouseenter', handleLinkHover);
      link.addEventListener('mouseleave', handleLinkLeave);
    });

    buttons.forEach((button) => {
      button.addEventListener('mouseenter', handleLinkHover);
      button.addEventListener('mouseleave', handleLinkLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleDocumentLeave);
      document.removeEventListener('mouseenter', handleDocumentEnter);
      clearInterval(updateInterval);

      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleLinkHover);
        link.removeEventListener('mouseleave', handleLinkLeave);
      });

      buttons.forEach((button) => {
        button.removeEventListener('mouseenter', handleLinkHover);
        button.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, []);

  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaX !== 0) {
        e.preventDefault();
        document.body.style.overflowX = 'hidden';
      }
    };
  
    const handleWheelEnd = () => {
      document.body.style.overflowX = '';
    };
  
    window.addEventListener('wheel', handleWheel);
    window.addEventListener('mousewheel', handleWheel);
    window.addEventListener('wheel', handleWheelEnd);
    window.addEventListener('mousewheel', handleWheelEnd);
  
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('mousewheel', handleWheel);
      window.removeEventListener('wheel', handleWheelEnd);
      window.removeEventListener('mousewheel', handleWheelEnd);
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
