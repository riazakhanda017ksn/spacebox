
import { Link } from 'react-router-dom';
import './Footer.scss'
const Footer = () => {
  return (
    <div className='main-footer'>
      <div className="footer">
        <div className="footer-item">
          <h4>Our Plan</h4>
          <p>Our main plan is to make this generation learn about space with entertainment and fun.
            This generation loves to play games and watching animated videos , thats why we have created this webapp to make
            them learn about space with the help of this game and animated videos</p>
        </div>
        <div className="footer-item position-space">
          <h4 style={{ paddingBottom: '10px' }}>History</h4>
          <Link to='/space-exploration'> Space Exploration  </Link>
          <Link to='/universal-history'> Universe's History</Link>
          <Link to='/solar-system-history'> Solar System History </Link>
          <Link to='/planet-history'> Planet Earth History </Link>
          <Link to='/star-history'> Stars History </Link>
          <Link to='/milky-way-history'> Milky Way History</Link>
        </div>
        <div className="footer-item position-space">
          <h4 style={{ paddingBottom: '10px' }}>Future</h4>
          <Link to='/nasa-future'> NASA'S Future  </Link>
          <Link to='/moon-future'> Moon's Future </Link>
          <Link to='/earth-future'> Earth's Future
          </Link>
          <Link to='/techhnolies-future'> Technology </Link>
          {/* <Link to='/'> Human Spaceflight
          </Link>
          <Link to='/'> Universe's Future </Link>
          <Link to='/'> Solar System
          </Link>
          <Link to='/'> NASA'S Event
          </Link> */}
        </div>
        <div className="footer-item position-space">
          <h4 style={{ paddingBottom: '10px' }}>Games</h4>
          <Link to='/wanna-play-game'> Clicker Game  </Link>


        </div>
      </div>

      <div className="footer-text">
        <p>all right reserved by @teamdreamers</p>
      </div>

    </div>
  );
};

export default Footer;
