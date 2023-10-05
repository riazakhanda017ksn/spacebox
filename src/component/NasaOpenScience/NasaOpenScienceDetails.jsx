import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { opensourcedata } from './opensourcedata';

const NasaOpenScienceDetails = () => {
    const { id } = useParams();
    const data = opensourcedata?.find((item) => item?.id === id);
    const { banner,title,active,post,type,  targer,launch,objective, iframe,newsHeading,newsimg,detailsHeading, p, p2, detailsHeading2,newsimg2,readheading,readheading2,readHeadingImg,readHeadingImg2 } = data;
    
    console.log(p.length)
    console.log(p2.length)
    return (
        <div>
         <Navbar/>
           <div className='details-page-banner' style={{background:`linear-gradient(0deg, rgb(0 0 0 / 92%), rgb(0 0 0 / 67%) 28.71%, transparent),url(${banner})`}}>
               <h1>{title}</h1>
               <p>{active}</p>
           </div>
           <div className="science-of-nasa-container">
           <div className="rows-for-title">
            <div className="title-posts">
                <h4>{post}</h4>
            </div>
            <div className="targets">
                <div className="flex-targets">
                <div className="target">
                    <h5>Type</h5>
                    <h6>{type}</h6>
                </div>

                <div className="target">
                    <h5>
                       LAUNCH</h5>
                    <h6>{launch}</h6>
                </div>
                
                  </div>

                  <div className="flex-targets">
                <div className="target">
                    <h5>Objective</h5>
                    <h6>{objective}</h6>
                </div>

                <div className="target">
                    <h5>
                       Target</h5>
                    <h6>{targer}</h6>
                </div>
                </div>

            </div>
            </div>
           </div>
           <div className="iframe-part">
           <iframe src={iframe} width="900" height="900" frameborder="0" scrolling="auto"></iframe>

           </div>

           {
           
           newsimg.length === 0 ? '' : <div>
            <div className="science-of-nasa-container">
           <h3 className='heading'>{newsHeading}</h3>
           <div className="rows-for-title">
            <div className="emty-div">
           <div className='item-of-grid need-space-top-side'  style={{background:`linear-gradient(0deg, rgb(0 0 0 / 92%), rgb(0 0 0 / 67%) 28.71%, transparent),url(${newsimg})`}}>
                            <div className="data-item-name">
                            <h3>{detailsHeading}</h3>
                            </div>
                          </div>
                          <div className="flex-read-article">
                            <div className="read-some-news">
                            <img src={readHeadingImg} alt="" />
                            <p>{readheading}</p>
                            </div>
                            <span>{p}</span>
                          </div>
                          </div>
                          <div className="emty-div">
                          <div className='item-of-grid need-space-top-side'  style={{background:`linear-gradient(0deg, rgb(0 0 0 / 92%), rgb(0 0 0 / 67%) 28.71%, transparent),url(${newsimg2})`}}>
                            <div className="data-item-name">
                            <h3>{detailsHeading2}</h3>
                            </div>
                          </div>
                          <div className="flex-read-article">
                            <div className='read-some-news'>
                            <img src={readHeadingImg2} alt="" />
                            <p>{readheading2}</p>
                            </div>
                            <span>{p2}</span>
                          </div>
                          </div>
           </div>
           </div>
           </div>

           }

         <Footer/>
        </div>
    );
};

export default NasaOpenScienceDetails;