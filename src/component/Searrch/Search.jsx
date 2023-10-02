import React from 'react';
import './Search.scss'
import Navbar from '../Navbar/Navbar';
import video from '../../video/1.mp4'
import {AiOutlineSearch} from 'react-icons/ai'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = ({onSearch}) => {
    const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const handleSearch = () => {
      onSearch(query);
      navigate('/search-result');
    };
  
    
    return (
        <div>
        <Navbar/>

        <div>
      <div className="video-section">
        <video src={video} muted loop autoPlay></video>
        <div className="video-overly" >
          <h4 className="mobiles">SpaceBox</h4>
        </div>
        <>
          <div className="content">
          <h1 className='text-thin'>Hello, earthlings !</h1>
          <p style={{marginTop:"0"}}>
          Here you can find details of the planets and galaxies
          </p>
          <div className="searchs" style={{marginTop:"20px"}}>
            <input type="text" class="SearchBarHome"
             value={query}
             onChange={(e) => setQuery(e.target.value)}
             placeholder="Search" />
             <span onClick={handleSearch}>
                <AiOutlineSearch/>
             </span>
          </div>
        
          
          </div>
           
        </>
      </div>
    </div>
        </div>
    );
};

export default Search;