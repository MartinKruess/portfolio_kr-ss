import { useContext } from "react"
import { SettingContext } from "../global/useContext"

export const Projects = () => {
    const { language } = useContext(SettingContext)

    return(
        <section id="projects">
            <h3>{language ? ('Projects') : ('Projekte')}</h3>
            <a href="https://stream-collection.netlify.app/" target="_blank" rel="noopener noreferrer">
                <div className="projectContainer">
                    <h4 className="projectHeader">StreamCollection</h4>
                    <div className="preview">
                        <img src="/images/streamCollection.png" alt="Image of the StreamCollection Webside" />
                    </div>
                    <div className="projectDescription">
                        {language ? ("A website for streamers to manage live chat, integrate alerts and minigames.")
                        : ("Eine Webseite für Streamer zur Verwaltung des Livechats, einbindung der Alerts und minigames.")}
                    </div>
                </div>
            </a>
            <a href="https://raikuns-gamezone.netlify.app/" target="_blank" rel="noopener noreferrer">
                <div className="projectContainer">
                    <h4 className="projectHeader">Gamezone</h4>
                    <div className="preview">
                        <img src="/images/gamezone.png" alt="Image of the Gamezone Webside" />
                    </div>
                    <div className="projectDescription">
                        {language ? ("My website with all information about my live streams and me.")
                        : ("Meine Webseite mit allen Informationen rund um meine Livestreams und mich.")}
                    </div>
                </div>
            </a>
            <a href="https://stream-collection.netlify.app/" target="_blank" rel="noopener noreferrer">
                <div className="projectContainer">
                    <h4 className="projectHeader">Final Project</h4>
                    <div className="preview">
                        <img src="/images/mms-computer.jpg" alt="" />
                    </div>
                    <div className="projectDescription">
                        {language ? ("An online shop as a DCI final project, in group work.")
                        : ("Ein Onlineshop als DCI Final project, in Gruppenarbeit. ")}
                    </div>
                </div>
            </a>
            <a href="https://stream-collection.netlify.app/" target="_blank" rel="noopener noreferrer">
                <div className="projectContainer">
                    <h4 className="projectHeader">Fliesenparadies</h4>
                    <div className="preview">
                        <img src="/images/preview.png" alt="Image of the Webside for Fleisenparadies Voss" />
                    </div>
                    <div className="projectDescription">
                        {language ? ("A static Webside for a craft business.")
                        : ("Eine statische Webseite für einen Handwerksbetrieb.")}
                    </div>
                </div>
            </a>
            <a href="https://stream-collection.netlify.app/" target="_blank" rel="noopener noreferrer">
                <div className="projectContainer">
                    <h4 className="projectHeader">WebDev-Collection</h4>
                    <div className="preview">
                        <img src="/images/preview.png" alt="Image of the Webside for my Students" />
                    </div>
                    <div className="projectDescription">
                        {language ? ("WebDev Docs to read and refine your own skills. (for my students)")
                        : ("WebDev Docs zum Nachlesen und verfeinern der eigenen Skill. (für meine Studenten)")}
                    </div>
                </div>
            </a>
        </section>
    )
}