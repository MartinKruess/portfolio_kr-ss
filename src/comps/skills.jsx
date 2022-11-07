import { useContext } from "react"
import { SettingContext } from "../global/useContext"

export const Skills = () => {
    const {language} = useContext(SettingContext)
    const skills = [
        {
            titel: "Styling",
            keys: ["CSS", "SCSS", "Tailwind", "Bootstrap", "responsive"],
            values: ["fine", "good", "good", "basics", "okay"],
            percent: 60,
        },
        {
            titel: "Javascript",
            keys: ["JS-Dom", "Animations", "Singlepage App.", "heighOrderFunctions"],
            values: ["good", "good", "okay", "okay"],
            percent: 68,
        },
        {
            titel: "React",
            keys: ["react-router-dom", "useState", "useContext", "JSX", "libaries"],
            values: ["fine", "fine", "good", "good", "okay"],
            percent: 84,
        },
        {
            titel: "Security",
            keys: ["bcrypt", "jwt", "oAuth", "user Managment", "testing"],
            values: ["fine", "good", "okay", "good", "basics"],
            percent: 68,
        },
        {
            titel: "Node",
            keys: ["Express", "Cors", "API"],
            values: ["good", "basics", "good"],
            percent: 85,
        },
        {
            titel: "MongoDB",
            keys: ["mongoose", "Atlas","data-management", "Schemas & SubSchemas"],
            values: ["good","good","okay", "good"],
            percent: 75,
        },
        {
            titel: "Socket IO",
            keys: ["many to one (Support)", "Twitch LiveChat", "user Management"],
            values: ["okay", "good", "okay"],
            percent: 66,
        },
        {
            titel: "Extras",
            keys: ["Login with Twitch", "Passport", "Login with Github", "Paypal", "Filesystem", "Cloudinary", "netlify", "cyclic sh"],
            values: ["okay", "okay", "okay", "okay", "good", "okay", "good", "good"],
            percent: 67.5,
        },
    ]

    return(
        <section id="skills">
            <div className="tecStack" >Technical Skills</div>
            <div className="cardContainer">
                <p className="introduce">
                    {language ? ("All values ​​given here are only a guideline and correspond to my personal assessment.")
                    : ("Alle hier angegebenen Werte sind nur ein Richtwert und entsprechen meiner persönlichen Einschätzung.")}
                    <br /> 
                    {language ? ("The values ​​given here show how confident I feel in my previous tasks with the respective techniques.") : ("Die hier angegebenen Werte zeigen, wie sicher ich mich bei meinen bisherigen Aufgaben mit den jeweiligen Techniken fühle.")}
                    <br />
                    {language ? ("fine > 90% - good > 80% - okay > 60% - basics > 20%"):("sehr gut > 90% - gut > 80% - ok > 60% - Grundkenntnisse > 20%")}
                </p>
                { skills.map((skill, i) => (
                <div className="card" key={i}>
                    <h3>{skill.titel}</h3>
                    <div className="keyContainer" >
                    {skill.keys.map((key, i) => (
                            <div className="key" key={`k_${i}`}>{key}</div>
                    ))}
                    </div>
                    <div className="valueContainer" >
                    {skill.values.map((value, i) => (
                        <div className="" key={`v_${i}`}>{value}</div>
                    ))}
                    </div>
                    <div className="progressBar">
                        <div className="progress"
                        style={{width: `${skill.percent}%`}}>
                            <p className="percent">{skill.percent}%</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            <div className="spacer"></div>
        </section>
        
    )
}