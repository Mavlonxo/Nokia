import React from 'react'
import './News.css'
import one from '../../assets/one.webp'
import two from '../../assets/two.webp'
import three from '../../assets/three.webp'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { useLocation } from 'react-router-dom'


function News() {
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
    <div className='news'>
      <div className="news__one">
        <img src={one} alt="" />
        <h2>Metaverse <AiOutlineArrowRight className='right__icon' /></h2>
        <h5>
        The metaverse is a partial or fully immersive digital networked experience that brings together people, places, objects, and/or information in real-time.
        </h5>

      </div>
      <div className="news__two">
        <img src={two} alt="" />
        <h2>5G monetization
        <AiOutlineArrowRight className='right__icon' />
        </h2>
        <h5>Discover how 5G can help unleash new business growth for CSPs beyond connectivity</h5>
        </div>
        <div className="news__three">
            <img src={three} alt="" />
            <h2>Sustainability
            <AiOutlineArrowRight className='right__icon' />
            </h2>
            <h5>
            Discover how 5G can help unleash new business growth for CSPs beyond connectivity
            </h5>
        
        </div>
    </div>
  )
}

export default News