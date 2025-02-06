import React from 'react'
import './About.css'
import about from '../assets/about.jpg'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
        <img src={about} alt="" className='about-img'/>
        </div>
        <div className="about-right">
    <h3>
        About Laundry
    </h3>
    <h2>The professional approach to hotel laundry </h2>
    <p>At Windy City Laundry, we take pride in providing exceptional laundry services to meet the needs of our clients. With a focus on quality and customer satisfaction, we ensure that each garment is treated with the utmost care. Our dedicated team is committed to offering reliable and efficient services, making sure your experience with us is seamless and convenient.</p>

<p>Our state-of-the-art facilities and advanced techniques allow us to handle all types of laundry with precision. Whether it's delicate fabrics, tough stains, or bulk orders, we guarantee outstanding results. Our commitment to excellence ensures that your laundry is cleaned and returned to you in perfect condition, every time.</p>

<p>We believe in providing an eco-friendly approach to laundry services, using sustainable methods to minimize our environmental impact. Our mission is not only to deliver outstanding results but also to create a positive and lasting effect on both our clients and the environment.</p>

        </div>
    </div>
  )
}

export default About