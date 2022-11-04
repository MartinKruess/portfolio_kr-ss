import { NavLink } from "react-router-dom"
import { Link } from "react-scroll"
import { About } from "./about"
import { Contact } from "./contact"
import { Home } from "./home"
import { Projects } from "./projects"
import { Skills } from "./skills"

export const Navi = () => {
    return(
    <div className="naviContainer">
        <Link
            element={<Home />}
            to="home"
            className="topic"
          >
            Home
        </Link>
        <div className="connection"></div>
        <Link
            element={<About />}
            to="about"
            className="topic"
          >
            About
        </Link>
        <div className="connection"></div>
        <Link
            element={<Skills />}
            to="skills"
            className="topic"
          >
            Skills
        </Link>
        <div className="connection"></div>
        <Link
            element={<Projects />}
            to="projects"
            className="topic"
          >
            Projects
        </Link>
        <div className="connection"></div>
        <Link
            element={<Contact />}
            to="contact"
            className="topic"
            smooth={true}
            duration={500}
          >
            Contact
        </Link>
    </div>
    )
    
}