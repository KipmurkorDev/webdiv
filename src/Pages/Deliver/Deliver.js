import React from 'react'
import ClientImg from '../../assest/client-recommend.png'
import './deliver.css'
function Deliver() {
    return (
        <div className='deliver'>
            <div className='deliver-top'>
                <div className='deliver-top-left'>
                    <p>
                        We Deliver Value to the business with Agile Development Processes
                    </p>
                    <h5>
                        Designed for remote corporations
                    </h5>
                </div>
                <div className='deliver-top-right'>
                    <div className='deliver-top-right-left'>
                        <p> 98%
                            <br />
                            Clients
                            <br />
                            recommend us</p>
                        <br />
                    </div>
                    <div>
                        <img src={ClientImg} alt='client-rcommend' />
                    </div>
                </div>

            </div>
            <div className='deliver-middle'>
                <div className='deliver-middle-predict'>
                    <div className='middle-predict-left'>
                        <h1> Predictable</h1>
                        <h5>To make things happen.</h5>
                        <p>
                            We understand the values, goals and needs of your business, taking a chance without knowing the market needs is not worth it.
                            Our key to success is trustworthiness and a proven process with the right methodology.
                        </p>
                        <p>
                            WeDigTech assures quality, performance, value to the business
                            and delivers the IT projects confidently within agreed metrics by following the right customer development process.
                        </p>
                    </div>
                    <div className='middle-predict-right'>
                        <div>
                            <h4> Budget & timeline control</h4>
                            <p> Dealing with international clients is no problem for us – everybody speaks English and further improves their language skills in weekly lessons.</p>
                        </div>
                        <div>
                            <h4> Project planning</h4>
                            <p> Dealing with international clients is no problem for us – everybody speaks English and further improves their language skills in weekly lessons.</p>
                        </div>
                        <div>
                            <h4> Executives report</h4>
                            <p> Dealing with international clients is no problem for us – everybody speaks English and further improves their language skills in weekly lessons. </p>
                        </div>
                        <div>
                            <h4> Certified Project Managers</h4>
                            <p> Our Project Managers are AgilePM Certified and constantly improve their project management skills. You can sleep well, you're in good hands. </p>
                        </div>
                    </div>
                </div>

                <div className='middle-cooparative'>
                    <div className='middle-cooparative-left'>
                        <h2> Cooperative</h2>
                        <p> To make you feel like we worked as your in-house team. </p>
                        <p> WeDigTech Approach ensures the perfect collaboration when it comes to working remotely.</p>
                        <p> With our approach, we provide complete transparency of the project to our clients as they are also part of the development process, which enables you to have complete control over the project, giving us prompt feedback and we ensure the project continues in the right direction. </p>
                        <p> Close cooperation with the product owner and development team is the only key to make an amazing product with amazing features. </p>

                    </div>
                    <div>
                        <p> At WeDigTech, our approach enables clients to work as product owners, using our special tools, kit, channels and development environment to deliver value. </p>
                        <p>
                            Therefore, we see you as a crucial member of our Agile Team.
                        </p>
                    </div>


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
    )
}

export default Deliver