import "./Hero.css"

import { Link } from "react-router";

function Hero() {

  return (
    <>
    <section id="hero">
        <hgroup>
          <h2>Logic? Art? Both.</h2>
          <p id="subheading">Hello - I am Felicia, a fullstack developer and a portrait artist.</p>
        </hgroup>
        <p>
          Measuring proportions by hand taught me precision — a discipline that now shapes the way I build code. < br />
          
          <span>
            Curious about my skills? <Link to="/aboutme">Click here.</Link>
          </span>
        </p>
    </section>
    </>
  )
}

export default Hero;