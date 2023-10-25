import React from 'react'
import './Traning.css'
import photo01 from '../../assets/01.webp'
import photo02 from '../../assets/02.webp'
import photo03 from '../../assets/03.webp'
import photo04 from '../../assets/04.webp'
import photo05 from '../../assets/05.webp'
import photo06 from '../../assets/06.webp'
import photo07 from '../../assets/07.webp'
import photo08 from '../../assets/08.webp'
import photo09 from '../../assets/09.webp'

function Traning() {
  return (
    <div className='part'>
      <div className="traning__banner">
        <h1>
        NokiaEDU
Learn. Perform. Share.
        </h1> 

      </div>
      <div className="numbers">
        <div className="number__one">
          <h3>3.0M</h3>
          <p>student hours delivered</p>
        </div>
        <div className="number__two">
          <h3>137+</h3>
          <p>countries</p>
        </div>
        <div className="number__three">
          <h3>97.7%</h3>
          <p>student satisfaction</p>
        </div>
      </div>
      <div className="technical">
      <div className="technical__one">
        <img src={photo01} alt="" />
        <h2>
        Nokia NSP Learning and Certification Program
        </h2>
        <h6>
        Learn and demonstrate your ability to automate, manage and control your IP and optical networks
        </h6>
      </div>
      <div className="technical__two">
      <img src={photo02} alt="" />
      <h2>
        Nokia NSP Learning and Certification Program
        </h2>
        <h6>
        Learn and demonstrate your ability to automate, manage and control your IP and optical networks
        </h6>
        
        </div>
        <div className="technical__three">
        <img src={photo03} alt="" />
        <h2>
        Nokia NSP Learning and Certification Program
        </h2>
        <h6>
        Learn and demonstrate your ability to automate, manage and control your IP and optical networks
        </h6>
        </div>
      <div className="technical__one">
        <img src={photo04} alt="" />
        <h2>
        Nokia NSP Learning and Certification Program
        </h2>
        <h6>
        Learn and demonstrate your ability to automate, manage and control your IP and optical networks
        </h6>
      </div>
      <div className="technical__two">
      <img src={photo05} alt="" />
      <h2>
        Nokia NSP Learning and Certification Program
        </h2>
        <h6>
        Learn and demonstrate your ability to automate, manage and control your IP and optical networks
        </h6>
        
        </div>
        <div className="technical__three">
        <img src={photo06} alt="" />
        <h2>
        Nokia NSP Learning and Certification Program
        </h2>
        <h6>
        Learn and demonstrate your ability to automate, manage and control your IP and optical networks
        </h6>
        </div>
      <div className="technical__one">
        <img src={photo07} alt="" />
        <h2>
        Nokia NSP Learning and Certification Program
        </h2>
        <h6>
        Learn and demonstrate your ability to automate, manage and control your IP and optical networks
        </h6>
      </div>
      <div className="technical__two">
      <img src={photo08} alt="" />
      <h2>
        Nokia NSP Learning and Certification Program
        </h2>
        <h6>
        Learn and demonstrate your ability to automate, manage and control your IP and optical networks
        </h6>
        
        </div>
        <div className="technical__three">
        <img src={photo09} alt="" />
        <h2>
        Nokia NSP Learning and Certification Program
        </h2>
        <h6>
        Learn and demonstrate your ability to automate, manage and control your IP and optical networks
        </h6>
        </div>
      </div>
      {/* Shu yerga Slider quyish kerak
       */}
       <div className="last__elements">
        <p>
        Learning help and support 
        </p>
        <h3>
        The NokiaEDU Global Contact Center (GCC) is your primary point of contact for <br /> NokiaEDU and is available to help answer your learning-related questions.
        </h3>
        <button>Global Contact Center</button>
        
       </div>



    </div>
  )
}

export default Traning