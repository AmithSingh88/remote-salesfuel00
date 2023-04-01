import React, { useState } from 'react';
import Subnav from '../../components/subnav/Subnav';
import './Kstyle.css';
import data from '../../data/data'



import Card from '../../components/card/Card';


const Knowledge = () => {

  const [courseData, setCourseData] = useState(data);

  const filterLabel = (courseLabel) => {
    const filterdCourseLabel = data.filter(
      (currCourseLabel) => {
        return currCourseLabel.label === courseLabel;
      }
    );
    setCourseData(filterdCourseLabel);
  }

  return (
    <div className='knowledge-container' >

      <Subnav name={'KNOWLEDGE'} />

      <div>

        <div className="btn-container">
          <button className="filter-btn" onClick={() => setCourseData(data)}>ALL</button>
          <button className="filter-btn" onClick={() => filterLabel('LIVE')}>LIVE</button>
          <button className="filter-btn" onClick={() => filterLabel('DRAFT')}>DRAFT</button>
          <button className="filter-btn" onClick={() => filterLabel('ARCHIVED')}>ARCHIVED</button>
        </div>

        <Card  courseData={courseData}/>

      </div>

    </div>
  )
}

export default Knowledge