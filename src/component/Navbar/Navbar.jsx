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
                    <a href=""> Universe's History  <ArrowRightAltOutlinedIcon /></a> 
                    <a href=""> Solar System History <ArrowRightAltOutlinedIcon /></a> 
                    <a href=""> Planet Earth History <ArrowRightAltOutlinedIcon /></a> 
                    <a href=""> Stars History <ArrowRightAltOutlinedIcon /></a>  
                    <a href=""> Milky Way History <ArrowRightAltOutlinedIcon /></a>  
                    <a href=""> Milky Way History <ArrowRightAltOutlinedIcon /></a>  
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
