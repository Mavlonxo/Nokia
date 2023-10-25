import React from 'react'
import './Products.css'
import one from '../../assets/1.webp'
import two from '../../assets/2.webp'
import three from '../../assets/3.webp'
import four from '../../assets/4.webp'
import five from '../../assets/5.webp'
import six from '../../assets/6.webp'
import seven from '../../assets/7.webp'
import eight from '../../assets/8.webp'
import nine from '../../assets/9.webp'
import ten from '../../assets/10.webp'
import eleven from '../../assets/11.webp'

function Products() {
  return (
    <div className='product__item'>
      <div className="products__banner">
        <h1>
        Product portfolio
        </h1>
      </div>
      <div className="products__items">
        <div className="products__items__one">
          <img src={one} alt="" />
          <h2>BSS/OSS</h2>
          <h5>Software solutions for network service providers</h5>
        </div>
        <div className="products__items__two">
          <img src={two} alt="" />
          <h2>Core networks</h2>
          <h5>
          Differentiate your business and explore new opportunities
          </h5>
        </div>
        <div className="products__items__three">
          <img src={three} alt="" />
          <h2>
            Data center
          </h2>
          <h5>
          Build scalable and distributed data centers to embrace the cloud native era
          </h5>
        </div>
        <div className="products__items__four">
          <img src={four} alt="" />
          <h2>
            Fixed networks
          </h2>
          <h5>
          Bring ultra-broadband faster and at the right cost
          </h5>
        </div>
        <div className="products__items__one">
          <img src={five} alt="" />
          <h2>Internet of Things</h2>
          <h5>Maximize the potential of your connected things</h5>
        </div>
        <div className="products__items__two">
          <img src={six} alt="" />
          <h2>IP networks</h2>
          <h5>
          Build scalable, secure, and adaptive networks
          </h5>
        </div>
        <div className="products__items__three">
          <img src={seven} alt="" />
          <h2>
           Mobile networks
          </h2>
          <h5>
          Scalable coverage and capacity
          </h5>
        </div>
        <div className="products__items__four">
          <img src={eight} alt="" />
          <h2>
          Optical networks
          </h2>
          <h5>
          Scale made simple
          </h5>
        </div>
        <div className="products__items__one">
          <img src={nine} alt="" />
          <h2>Private networks</h2>
          <h5>Maximize the potential of your connected things</h5>
        </div>
        <div className="products__items__two">
          <img src={ten} alt="" />
          <h2>Security</h2>
          <h5>
          Protect networks, data and devices
          </h5>
        </div>
        <div className="products__items__three">
          <img src={eleven} alt="" />
          <h2>
         Solutions for industry
          </h2>
          <h5>
          Network solutions for industry, enterprises and the public sector
          </h5>
        </div>
      

      </div>
      
    </div>
  )
}

export default Products