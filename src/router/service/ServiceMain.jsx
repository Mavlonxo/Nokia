import React from 'react'
import './ServiceMain.css'
import one from '../../assets/Nokia_Fixed_Networks_services_top_banner.jpg.webp'
import two from '../../assets/669_transform.jpg.webp'
import three from '../../assets/services-for-mobile-networks.png.webp'
import {AiOutlineArrowRight} from 'react-icons/ai'

function ServiceMain() {
    return (
        <div className='news'>
          <div className="news__one">
            <img src={one} alt="" />
            <h2>Fixed networks services <AiOutlineArrowRight className='right__icon' /></h2>
            <h5>
            Transform your broadband network and unlock its full potential
            </h5>
    
          </div>
          <div className="news__two">
            <img src={two} alt="" />
            <h2>Services for industry 
            <AiOutlineArrowRight className='right__icon' />
            </h2>
            <h5>Maximize business value from your technology investmentsy</h5>
            </div>
            <div className="news__three">
                <img src={three} alt="" />
                <h2>Services for mobile networks
                <AiOutlineArrowRight className='right__icon' />
                </h2>
                <h5>
                Maximize business value from your technology investments
                </h5>
            
            </div>
        </div>
      )
}

export default ServiceMain