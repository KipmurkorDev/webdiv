import React, { useState } from 'react'
import './service.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDotCircle } from '@fortawesome/free-solid-svg-icons'
import ProductImage from '../../assest/product-innovation-img.png'
import FrameworkImg from '../../assest/framework-img.jpg'
import InnovationImag from '../../assest/innovation-element.png'
import Wrapper from '../../Utlis/Wrapper'
function Services() {

  const [id, setId]= useState(0);

  return (
    <>
      <div className='service-pg'>
        <div>
          <h1> Digital Product Innovation & Consulting </h1>
          <p>
            Digital products developed with maturity and scalability, leading
            <br />
            the way to next-level value, disrupting the status quo
          </p>
          <button> Book A Free Consulation</button>
        </div>

      </div>
      <div className='service-product'>
        <div className='srv-left'>
          <h4>
            PRODUCT INNOVATION & CONSULTING
          </h4>
          <h3> The best way to predict the future is to create it
          </h3>
          <p> Innovative enterprises understand the need to adapt to a dynamic technology-driven future.
            WebDiv leverages digital technology to cause radical industry-level transformation and enhance products and services portfolios into new domains.
            WebDiv's unique approach helps:</p>
          <ul>
            <li>Create & implement disruptive ideas to capture new revenues and expand to new markets</li>
            <li>Merge existing business models with trending technologies</li>
            <li>Improve customer & user experiences</li>
          </ul>
          <p>
            We use our expertise in design thinking, market research, budgeting, and more, to define product features,
            create prototypes and inputs for a go-to-market strategy for digital products with proven and optimized ROIs.
          </p>
        </div>
        <div className='srv-right'>
          <img src={ProductImage} alt="product" />

        </div>
        <div>
        </div>
      </div>
      <div style={{ marginTop: "40px", marginBottom:"20%"}}>
        <h2> Why choose WebDiv as your product development partner? </h2>
        <div className='product-development'>
          <div>
            <h4> Superior Product Design</h4>
            <p>
              Products are designed based on the highest standards by experts who understand your goals, technical needs, and team dynamics.
            </p>
          </div>
          <div>
            <h4>Extensive Research</h4>
            <p>
              Our team of experts are highly experienced in conducting extensive market research to ensure every consumer need, each market and improvement opportunity is identified.
            </p>
          </div>
          <div>
            <h4>
              Leading Industry Processes
            </h4>
            <p>
              Our team consists of Certified Agile Scrum Masters, Project Managers, Experienced Full-stack Technology Leads and Developers, and Integrated QA and DevOps processes.

            </p>
          </div>
          <div>
            <h4>
              Prioritized Communication
            </h4>
            <p>
              We are known for our superior communication with our clients as we believe that it is essential for a successful delivery. Throughout the duration of the project, clients play a significant and continual advisory role to ensure their ideas are realized.
            </p>
          </div>
          <div>
            <h4>
              Leading-Edge Product Engineering
            </h4>
            <p>
              We ensure that the solutions we create are full stack, scalable, and secure with performance optimized code for faster apps and a better user experience.
            </p>
          </div>
          <div>
            <h4> Expertise in Every Phase of Development</h4>
            <p>
              We've assisted businesses at every stage of new product development, including market research, idea generation, concept feasibility, product development, test marketing, product launch, and support & maintenance.

            </p>
          </div>
        </div>

        <div className='framework'>
          <h2> Framework</h2>
          <img src={FrameworkImg} alt='framework' />
        </div>
        <div className='pitfall'>
          <div className='pitfall-left'>
            <h2> What are the pitfalls in innovation?</h2>
            <p>
              Most of the companies pretend that innovation is their major priority, but as per market aspect, the innovation is hard enough to implement.
              Digital and data are required even though the expert innovators are continuously learning and mastering new capabilities and developing faster and more agile research and development processes.
              There are a lot of reasons that leads underperform the innovation engine. The reasons can be divided into four type</p>
          </div>
          <div className='pitfall-right'>
            <div>
              <h4><span className='pitfall-icon'> <FontAwesomeIcon icon={faDotCircle} /></span>All Torque, no traction</h4>
              <p> The activity for the progress that development team follows might be wrong, this activity keeps everyone busy but there is no profitable output as roles are unclear and initiatives are not linked to an overarching strategy.</p>
            </div>
            <div>
              <h4><span className='pitfall-icon'> <FontAwesomeIcon icon={faDotCircle} /></span> Abstraction, No action</h4>
              <p> Missing the market research leads to a non user centric approach of the product and service development. Keeping a high level strategy and insufficient user centricity to inspire action and direct investment to the valuable business opportunities. </p>
            </div>
            <div>
              <h4><span className='pitfall-icon'> <FontAwesomeIcon icon={faDotCircle} /></span>Stuck in the lab</h4>
              <p> The organisation perseus mediocre idea for too long wasting resources that could instead be dedicated to good ideas with the potential to scale. </p>
            </div>
            <div>
              <h4><span className='pitfall-icon'> <FontAwesomeIcon icon={faDotCircle} /></span>Autoimmune Reaction</h4>
              <p> The future results are not based on the past performance. The new innovations are delayed by corporate policies, watered down by process, kept on a short leash by internal “customer owners,” or just relegated to organizational purgatory.</p>
            </div>
          </div>
        </div>
        <div className='innovation'>
          <h2> Our Innovation and Consulting Journey</h2>
          <div className='innovation-top'>
            <div onClick={()=>setId(0)} className={`${id === 0 ? 'btn-active' : ''}`}> <h4> INNOVATION STRATEGY</h4> </div>
            <div onClick={()=>setId(1)} className={`${id === 1 ? 'btn-active' : ''}`}> <h4> INNOVATION SPRINTS</h4></div>
            <div onClick={()=>setId(2)} className={`${id === 2 ? 'btn-active' : ''}`}> <h4> BUSINESS BUILD AND SCALE-UP</h4></div>
            <div onClick={()=>setId(3)} className={`${id === 3 ? 'btn-active' : ''}`}> <h4>INNOVATION ENABLEMENT</h4></div>
          </div>
          <div className='innovation-bottom'>
            <div className='innovation-left'>
            <Wrapper id={id}/>
            </div>
            <div className='innovation-right'>
              <img src={InnovationImag} alt='innovation' />
            </div>
            <div>
            </div>
          </div>
          <div className='deliver-bottom'>
                <h4>
                    Is software important to your business?
                </h4>
                <h1> Build it with WebDiv</h1>
                <button> Let's Get in Touch</button>

            </div>
        </div>
      </div>
    </>
  )
}

export default Services