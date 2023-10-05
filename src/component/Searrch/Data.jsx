import React from 'react';
import './Search.scss'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Search from './Search';

const Data = ({data}) => {
    console.log(data);
    return (
        <>
        {
            data.length === 0 ? <Search/> : <div>
                   <Navbar></Navbar>
        <div className='datagrids' >
        {data?.map((result, index) => (
    
        <div className="grid-s" key={index} >
          <img src={result.image} alt={result.title} /> <br />
          <div className="DATA-content">
          <p>{result.title}</p> <br />
         </div>
        </div>
        
      ))}
      </div>
      <Footer/>
            </div>
        }
        </>
    );
};

export default Data;