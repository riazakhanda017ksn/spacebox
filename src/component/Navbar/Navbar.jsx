import { useState } from "react";
import "./Navbar.scss";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
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
          <div className={`${isOpen ?'close': 'bar'}`}></div>
          <div className={`${isOpen ?'none':'bar' }`}></div>
          <div className={`${isOpen ?'closes': 'bar' }`}></div>
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
              <Link to='/history'>History</Link>
              <a href="#">Contact</a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
