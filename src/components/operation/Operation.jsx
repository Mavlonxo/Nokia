import React, { useState, useEffect } from 'react';
import { FaMobileAlt, FaTabletAlt, FaDesktop } from 'react-icons/fa';
import './Operation.css';
import { useLocation } from 'react-router-dom'


const NokiaOperationShowcase = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const { pathname } = useLocation()
  if (pathname.includes("/service")) {
      return <></>
  }
  if (pathname.includes("/traning")) {
    return <></>
}
if (pathname.includes("/product")) {
  return <></>
}
  

  return (

    <div className="container">
      <h1>Welcome to Nokia Operation</h1>
      <div className="content">
        <p>Discover the efficient operations and services provided by Nokia.</p>
        <p>Experience seamless communication and connectivity.</p>
      </div>
      <div className="device-icon">
        {windowWidth <= 480 && <FaMobileAlt />}
        {windowWidth > 480 && windowWidth <= 768 && <FaTabletAlt />}
        {windowWidth > 768 && <FaDesktop />}
      </div>
    </div>
  );
};

export default NokiaOperationShowcase;
