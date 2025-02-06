import React from 'react'
import './Testimonial.css'
import user1 from '../assets/user1.webp'
import user2 from '../assets/usser2.webp'
import user3 from '../assets/user3.webp'

const Testimonial = () => {
  return (
    <div className='testimonials'>
      <div className="user-container">
        <div className="users">
          <img src={user1} alt="User 1" />
          <div>
            <h3>Jane Smith</h3>
            <span>Chicago, IL</span>
          </div>
          <p>"I have been using windy city laundry for months, and their service is exceptional. They always handle my delicate items with care.I would really say its one of the highly recommend!"</p>
        </div>
        <div className="users">
          <img src={user2} alt="User 2" />
          <div>
            <h3>Emily Johnson</h3>
            <span>Chicago, IL</span>
          </div>
          <p>"The team at windy city laundry has made laundry day hassle-free. Fast, professional, and the results are always amazing. Their attention to detail is unmatched!"</p>
        </div>
        <div className="users">
          <img src={user3} alt="User 3" />
          <div>
            <h3>John Doe</h3>
            <span>Chicago, IL</span>
          </div>
          <p>"I trust windy city laundry with all my laundry needs. They are reliable, efficient, and always exceed my expectations. It's great to have a service I can count on!"</p>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
