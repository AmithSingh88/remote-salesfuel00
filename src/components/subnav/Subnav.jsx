import React from 'react';
import './snStyle.css';
import { BsThreeDotsVertical } from 'react-icons/bs'


const Subnav = ({ name }) => {
  return (
    <div className='subnav-container'>
      <h1 className='subnav-name'>{name}</h1>
      <div className='subnav-right-container'>
        <button className="create-course-btn">
          CREATE COURSE
        </button>
        <div className="img_container">
          <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" className="profile_img" />
        </div>
        <div>
          <BsThreeDotsVertical />
        </div>
      </div>
    </div>
  )
}

export default Subnav