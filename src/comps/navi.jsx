import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { Link } from "react-scroll"
import { SettingContext } from "../global/useContext"
import { About } from "./about"
import { Contact } from "./contact"
import { Home } from "./home"
import { Projects } from "./projects"
import { Skills } from "./skills"

export const Navi = () => {
  const { language, setLanguage } = useContext(SettingContext)
const [open, setOpen] = useState(false)


    return(
    <div className="naviContainer">
        <div className="settings" onClick={() => setOpen(!open)}>
          <i className="fa-sharp fa-solid fa-gear"></i>
        </div>

        {open && <>
        <div className="connection"></div>
        <div className="settingModal">
            <div className="settingsHori">{language ? "ENG" : "DE"}
              <label className="switch">
                <input type="checkbox" />
                <span className="slider round" onClick={() => setLanguage(!language)}></span>
              </label>
            </div>
        </div>
        </>}
        
        <div className="connection"></div>
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