import { useContext } from "react";
import { SettingContext } from "../global/useContext";
import { basicSkills, skillData } from "./skilldata.js";

export const Skills = () => {
  const { language } = useContext(SettingContext);

  return (
    <section id="skills">
      <div className="tecStack">
        {language ? "Technical Skills" : "Technische Fähigkeiten"}
      </div>
      <div className="basicSkills">
        {basicSkills.map((skill, i) => (
          <img src={skill.image} alt={skill.alt} key={i} />
        ))}
      </div>
      <div className="cardContainer">
        {skillData.map((skill, i) => (
          <div className="card" key={i}>
            <img src={skill.image} alt={skill.alt} loading="lazy" />
            <h3>{skill.title}</h3>
          </div>
        ))}
      </div>
      <div className="spacer"></div>
    </section>
  );
};
