import React from 'react';
import './NasaOpenScience.scss'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import videoOne from "../../video/science.mp4";
import { opensourcedata } from './opensourcedata';
import { Link } from 'react-router-dom';
import {AiOutlineArrowRight} from 'react-icons/ai'

const NasaOpenScience = () => {
    return (
        <>
        <Navbar/>
        <div className='open-science'>
        <div>
       <div className="video-section">
        <video src={videoOne} muted loop autoPlay></video>
        <div className="video-overly">
          <h4 className="mobiles">SpaceBox</h4>
        </div>
        <>
          <div className="content">
            <h1 style={{fontSize:"45px"}}>
            Nasas open science initiative and <br /> <span style={{fontSize:"45px"}} >tramsform to open science</span>
            </h1>
            <p>
            NASA's scientists continually explore the cosmos to unravel the mysteries of the universe, using advanced telescopes like the Hubble <br /> Space Telescope to capture breathtaking images of distant galaxies and nebulae.
            </p>
          
          </div>
        </>
      </div>
       </div>
        </div>
        <div className="science-of-nasa-container">
        <h2>The open science initiative at NASA</h2>
         <div className="rows-for-grid">
          
            {
                opensourcedata.map(item=>{
                    return <div key={item.id} className='item-of-grid' style={{background:`linear-gradient(0deg, rgb(0 0 0 / 92%), rgb(0 0 0 / 67%) 28.71%, transparent),url(${item.image})`}}>
                            <div className="data-item-name">
                            <h3>{item.name}</h3>
                            <Link to={`/nasaOpenScienceDetails/${item.id}`}>
                              <p>Show Details
                                <span><AiOutlineArrowRight/></span>
                              </p>
                            </Link>
                            </div>
                          </div>
                })
            }
         </div>
        </div>
        <Footer/>
        </>
    );
};

export default NasaOpenScience;