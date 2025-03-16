import { useContext } from "react";
import { SettingContext } from "../global/useContext";

export const Projects = () => {
  const { language } = useContext(SettingContext);

  return (
    <section id="projects">
      <h3>{language ? "Projects" : "Projekte"}</h3>
      <div className="projectContainer">
        <a
          href="https://stream-collection.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="projectCard">
            <h4 className="projectHeader">StreamCollection</h4>
            <div className="preview">
              <img
                src="/images/streamCollection.png"
                alt="Image of the StreamCollection Webside"
              />
            </div>
            <div className="projectDescription">
              {language
                ? "A website for streamers to manage live chat and integrate alerts."
                : "Eine Webseite für Streamer zur Verwaltung des Livechats und einbindung der Alerts."}
            </div>
          </div>
        </a>
        <a
          href="https://www.fliesenparadies-voss.de/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="projectCard">
            <h4 className="projectHeader">Fliesenparadies</h4>
            <div className="preview">
              <img
                src="/images/fliesenparadiesVoß.png"
                alt="Image of the Webside for Fleisenparadies Voss"
              />
            </div>
            <div className="projectDescription">
              {language
                ? "A static Webside for a craft business."
                : "Eine statische Webseite für einen Handwerksbetrieb."}
            </div>
          </div>
        </a>
        <a
          href="https://webdev-collection.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="projectCard">
            <h4 className="projectHeader">WebDev-Collection</h4>
            <div className="preview">
              <img
                src="/images/webDevCollection.png"
                alt="Image of the Webside for my Students"
              />
            </div>
            <div className="projectDescription">
              {language
                ? "WebDev Docs to read and refine your own skills. (for my students)"
                : "WebDev Docs zum Nachlesen und verfeinern der eigenen Skill. (für meine Studenten)"}
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};
