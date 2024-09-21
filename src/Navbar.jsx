import Logout from './auth/Logout.jsx';
import { Link, NavLink } from 'react-router-dom';

  function Navbar(){

    return(
    <nav className="nav">
      <Link to="/message-board" className="site-title">Message Board</Link>
      <ul>
        <li><a href="">Profile</a></li>
        <li><NavLink
            to="/about"
            >
          About
          </NavLink></li>
        <li><Logout/></li>
      </ul>
    </nav>)
  }

  export default Navbar