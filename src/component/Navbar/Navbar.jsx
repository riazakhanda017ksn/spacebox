import { useState } from "react";
import "./Navbar.scss";
import { motion, AnimatePresence } from "framer-motion";
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
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </motion.div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="menu-items"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <a href="#">Home</a>
              <a href="#">About</a>
              <a href="#">Services</a>
              <a href="#">Contact</a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default Navbar;
