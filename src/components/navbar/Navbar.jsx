import React from 'react';
import './nStyle.css';
import { BsHouseDoor } from "react-icons/bs";
import { BsPeople } from "react-icons/bs";
import { BsChatLeftText } from "react-icons/bs";
import { SlGraduation } from "react-icons/sl";
import { CgShapeRhombus } from "react-icons/cg";
import { CiFolderOn } from "react-icons/ci";
import { VscSettingsGear } from "react-icons/vsc";
import { RiBuildingLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='nav-container'>
      <div className="nav-list-one">
        <div className="logo">
          Remote SalesFuel
        </div>
        <ul>
          <li >
            <Link className="nav-item" to='/dashboard'>
              <BsHouseDoor className='icons' />
              DASHBOARD
            </Link>
          </li>
          <li >
            <Link className="nav-item" to='/'>
              <SlGraduation className='icons' />
              KNOWLEDGE
            </Link>
          </li>
          <li >
            <Link className="nav-item" to='/members'>
              <BsPeople className='icons' />
              MEMBERS
            </Link>
          </li>
          <li >
            <Link className="nav-item" to='/teams'>
              <CgShapeRhombus className='icons' />
              TEAMS
            </Link>
          </li>
          <li >
            <Link className="nav-item" to='/vault'>
              <CiFolderOn className='icons' />
              VAULT
            </Link>
          </li>
          <li >
            <Link className="nav-item" to='/chat'>
              <BsChatLeftText className='icons' />
              CHAT
            </Link>
          </li>
        </ul>
      </div>

      <div className="nav-list-two">
        <div>
          <ul>
            <li >
              <Link className="nav-item" to='/settings'>

                <VscSettingsGear className='icons' />
                SETTINGS
              </Link>

            </li>
            <li >
              <Link className="nav-item" to='/company'>

                <RiBuildingLine className='icons' />
                COMPANY
              </Link>
            </li>
            <li>
              <Link className="nav-item" to='/myprofile'>

                <FaUserCircle className='icons' />
                MY PROFILE
              </Link>
            </li>
          </ul>
        </div>
        <hr />
        <div className='nav-bottom'>
          Powered By Team Jeanyus
        </div>
      </div>
    </div>
  )
}

export default Navbar