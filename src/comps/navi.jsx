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

  const scrollToPage = (page) => {
    window.scroll(0, page)
  }

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
        <NavLink
            element={<Home />}
            to="home"
            className="topic"
            onClick={() => scrollToPage(0)}
          >
            Home
        </NavLink>
        <div className="connection"></div>
        <NavLink
            element={<About />}
            to="about"
            activeClassName={"active"}
            className="topic"
            onClick={() => scrollToPage(200)}
          >
            About
        </NavLink>
        <div className="connection"></div>
        <NavLink
            element={<Skills />}
            to="skills"
            activeClassName={"active"}
            className="topic"
            onClick={() => scrollToPage(1200)}
          >
            Skills
        </NavLink>
        <div className="connection"></div>
        <NavLink
            element={<Projects />}
            to="projects"
            className="topic"
            onClick={() => scrollToPage(2400)}
          >
            Projects
        </NavLink>
        <div className="connection"></div>
        <NavLink
            element={<Contact />}
            to="contact"
            className="topic"
            // smooth={true}
            duration={500}
            onClick={() => scrollToPage(10000)}
          >
            Contact
        </NavLink>
    </div>
    )
    
}