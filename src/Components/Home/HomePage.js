import React from 'react'
import './home.css'
import HomeImage from '../../assest/home1.jpg'
import service1 from '../../assest/home-service-1.jpg'
import service2 from '../../assest/home-service-2.jpg'
import service3 from '../../assest/home-service-3.jpg'
const HomePage = () => {

  return (
    <div>
      <div className='home'>
        <div>
          <h1> Build or scale up your software development team.</h1>
          <p> We help you simplify your software development lifecycle by setting up super productive agile development teams
          </p>
          <button> Know More</button>
        </div>
        <div className='homeImage'>
          <img src={HomeImage} alt="home" height={400} width={700} />
        </div>
      </div>
      <div>
        <h2 style={{ textDecoration: 'underline red', textDecorationThickness: '3px' }}> Our Services </h2>
        <div className='service-home' >
          <div>
            <img src={service1} alt='consulting' height={400} />
          </div>
          <div className='service-card'>
            <h4>Product Consulting & Innovation</h4>
            <p>
              Proven ROI based product innovation approach for dreamers seeking to build a digital product with an idea
            </p>
            <button> Know More</button>

          </div>
          <div className='service-card'>
            <h4> Agile Development Teams</h4>
            <p>
              Specialized teams to cater to your unique ongoing digital product development needs from small to large scale application
            </p>
            <button> Know More</button>
          </div>
          <div>
            <img src={service2} alt='consulting' height={400} />
          </div>
          <div>
            <img src={service3} alt='consulting' height={400} />
          </div>
          <div className='service-card'>
            <h4> On Demand IT Services</h4>
            <p>
              An affordable pool of on-demand specialized IT services for startups and enterprises for everyday IT needs.
            </p>
            <button> Know More</button>
          </div>
        </div>

      </div>
    </div>

  )
}

export default HomePage