import './Header.css'

import { Link } from "react-router";

function Header() {
  
  return (
    <>
      <h1>Felicia Bloom</h1>
      
      <nav>
        <ul>
          <Link to="/"><li>Start</li></Link>
          <Link to="/projects"><li>Projects</li></Link>
          <Link to="/art"><li>Art</li></Link>
          <Link to="/aboutme"><li>About</li></Link>
        </ul>
      </nav>
    </>
  )
}

export default Header;