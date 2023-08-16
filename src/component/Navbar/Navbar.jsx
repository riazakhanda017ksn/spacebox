import { useState } from "react";
import "./Navbar.scss";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <>
      <div className="hamburger-menu">
        <motion.div
          className={`menu-button ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
        >
          <div className={`${isOpen ? 'close' : 'bar'}`}></div>
          <div className={`${isOpen ? 'none' : 'bar'}`}></div>
          <div className={`${isOpen ? 'closes' : 'bar'}`}></div>
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="menu-items"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Link to="/">Home</Link>
              <Link to="/wanna-play-game">Wanna Play Game</Link>
              <div>
                <a className="specifiq-gap"  onClick={toggleDropdown}>History <KeyboardArrowDownIcon/> </a>
                {isDropdownOpen && (
                  <div className="dropdown-content">
                    {/* Dropdown content goes here */}
                    <Link to='/space-exploration'> Space Exploration   <ArrowRightAltOutlinedIcon /></Link> 
                    <Link to='/universal-history'> Universe's History  <ArrowRightAltOutlinedIcon /></Link> 
                    <Link to='/solar-system-history'> Solar System History <ArrowRightAltOutlinedIcon /></Link> 
                    <Link to='/planet-history'> Planet Earth History <ArrowRightAltOutlinedIcon /></Link> 
                    <Link to='/star-history'> Stars History <ArrowRightAltOutlinedIcon /></Link>  
                    <Link to='/milky-way-history'> Milky Way History <ArrowRightAltOutlinedIcon /></Link>  
                  </div>
                )}

              </div>
              <a href="#">Contact</a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
