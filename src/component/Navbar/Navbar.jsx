import { useEffect, useState } from "react";
import "./Navbar.scss";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowRightAltOutlinedIcon from "@mui/icons-material/ArrowRightAltOutlined";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import RocketIcon from '@mui/icons-material/Rocket';
import SearchIcon from '@mui/icons-material/Search';
const Navbar = () => {
  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } },
  };
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  const toggleDropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
  };

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <>
      <div>
        <div className={scrollY > 40 ? "pc-version-navbar bg" : "pc-version-navbar"}>
          <div className="logo-item">
            <span>
              <RocketIcon />
            </span>
            <h1>SpaceBox</h1>
          </div>
          <div className="nav-item">
            <Link to="/">Home</Link>
            <>
              <a className="need-gap-for-pc" onClick={toggleDropdown}>History <KeyboardArrowDownIcon /> </a>
              <>
                <div
                  className="positoning"

                >
                  {isDropdownOpen && (
                    <div className="dropdown-content-for-pc">
                      {/* Dropdown content goes here */}
                      <Link to='/space-exploration' className="x"> Space Exploration </Link>
                      <Link to='/universal-history' className="x"> Universe's History  </Link>
                      <Link to='/solar-system-history' className="x"> Solar System History</Link>
                      <Link to='/planet-history' className="x"> Planet Earth History </Link>
                      <Link to='/star-history' className="x"> Stars History </Link>
                      <Link to='/milky-way-history' className="x"> Milky Way History</Link>
                    </div>
                  )}
                </div>
              </>
              <div>

              </div>


            </>

            <>
              <a className="need-gap-for-pc" onClick={toggleDropdown2}>The Future <KeyboardArrowDownIcon /> </a>
              <>
                <div
                  className="positoning"
                >
                  {isDropdownOpen2 && (
                    <div className="dropdown-content-for-pc">
                      {/* Dropdown content goes here */}
                      <Link to='/nasa-future' className="x"> NASA'S Future  </Link>
                      <Link to='/moon-future' className="x"> Moon's Future </Link>
                      <Link to='/earth-future' className="x"> Earth's Future
                      </Link>
                      <Link to='/techhnolies-future' className="x"> Technology</Link>
                      {/* <Link to='/' className="x"> Human Spaceflight</Link>
                      <Link to='/' className="x"> Universe's Future </Link>
                      <Link to='/' className="x"> Solar System
                      </Link>
                      <Link to='/' className="x"> NASA'S Event
                      </Link> */}
                    </div>
                  )}
                </div>
              </>
              <div>

              </div>


            </>


            <Link to="/wanna-play-game">Wanna Play Game</Link>
            <a >Contact</a>
          </div>
          <Link to={'/search'} style={{textDecoration:'none',color:"white"}}>
          <div className="search">
            <p>Search </p>
            <a>
              <SearchIcon />
            </a>
          </div></Link>
        </div>
      </div>

      {/*  */}
      <div className="mobiles">
        <div className="hamburger-menu">
          <motion.div
            className={`menu-button ${isOpen ? "open" : ""}`}
            onClick={toggleMenu}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
          >
            {/* <div className={`${isOpen ? 'close' : 'bar'}`}></div>
          <div className={`${isOpen ? 'none' : 'bar'}`}></div>
          <div className={`${isOpen ? 'closes' : 'bar'}`}></div> */}
            {
              isOpen ? <div className="open">
                <span> <CloseIcon /></span>
              </div > : <div className="closess">
                <span>

                  <MenuIcon />
                </span>
              </div>
            }
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
                  <a className="specifiq-gap" onClick={toggleDropdown}>History <KeyboardArrowDownIcon /> </a>
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
                <div>
                  <a className="specifiq-gap" onClick={toggleDropdown2}>The Future <KeyboardArrowDownIcon /> </a>
                  {isDropdownOpen2 && (
                    <div className="dropdown-content">
                      {/* Dropdown content goes here */}
                      <Link to='/nasa-future'> NASA'S Future  <ArrowRightAltOutlinedIcon /></Link>
                      <Link to='/moon-future'> Moon's Future <ArrowRightAltOutlinedIcon /></Link>
                      <Link to='/earth-future'> Earth's Future
                        <ArrowRightAltOutlinedIcon /></Link>
                      <Link to='/techhnolies-future'> Technology <ArrowRightAltOutlinedIcon /></Link>
                      <Link to='/'> Human Spaceflight
                        <ArrowRightAltOutlinedIcon /></Link>
                      <Link to='/'> Universe's Future <ArrowRightAltOutlinedIcon /></Link>
                      <Link to='/'> Solar System
                        <ArrowRightAltOutlinedIcon /></Link>
                      <Link to='/'> NASA'S Event
                        <ArrowRightAltOutlinedIcon /></Link>
                    </div>
                  )}


                  <Link to={'/search'} style={{textDecoration:'none',color:"white"}} className="searchbar">
                 <div className="search">
                 <p>Search </p>
                 <a>
              <SearchIcon />
            </a>
          </div></Link>
                </div>
                <a href="#">Contact</a>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

    </>
  );
};

export default Navbar;
