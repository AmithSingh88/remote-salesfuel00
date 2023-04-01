import React from 'react';
import './cStyle.css';

import { MdOutlinePlayLesson } from 'react-icons/md';
import { FiClock } from 'react-icons/fi'

function Card( {courseData}) {
  return (
    <div className="card-container">

    {
      courseData.map((elem) => {
        const { id, image, label, courseName, lastUpdated, lessons, minutes, tag1, tag2 } = elem;
        return (
          <div className="card" key={id}>

            <div className="img">
              <img src={image} alt="" />
            </div>

            <div className="label-container">

              <div style={{ backgroundColor: 'red', }} className="label-color">
              </div>

              <div className="label">
                {label}
              </div>

            </div>

            <div className="course-info">
              <h4 className='course-name'>{courseName}</h4>

              <p className='course-update'>
                Last updated : {lastUpdated}
              </p>

              <div className='course-details-container'>

                <div className='course-details'>

                  <MdOutlinePlayLesson className='icon-two' /> Lessons : {lessons}

                </div>

                <div className='course-details'>

                  <FiClock className='icon-two' />
                  Minutes : {minutes}

                </div>

              </div>

              <div className="tags-container">

                <div className="tags">
                  {tag1}
                </div>


              </div>
            </div>

          </div>
        )
      })
    }


  </div>
  )
}

export default Card
