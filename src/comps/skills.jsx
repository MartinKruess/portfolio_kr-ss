import { useContext } from "react"
import { SettingContext } from "../global/useContext"

export const Skills = () => {
    const {language} = useContext(SettingContext)
    const skills = [
        {
            titel: "Styling",
            keys: ["CSS", "SCSS", "Tailwind", "Bootstrap", "responsive"],
            values: ["fine", "fine", "good", "good", "good"],
            percent: 420/5,
        },
        {
            titel: "Languages",
            keys: ["Javascript", "Typescript", ""],
            values: ["fine", "good"],
            percent: 170/2,
        },
        {
            titel: "Frameworks",
            keys: ["Vite React", "Vite Electron", "NextJS", "VueJS", "Libaries"],
            values: ["fine", "fine", "okay", "basics", "good"],
            percent: 440/5,
        },
        {
            titel: "Backend",
            keys: ["NodeJS", "Express", "Cors", "API"],
            values: ["good", "good", "basics", "good"],
            percent: 260/4,
        },
        {
            titel: "Databases",
            keys: ["MongoDB", "Firebase", "MYSQL"],
            values: ["good","good","okay"],
            percent: 195/3,
        },
        {
            titel: "Socket IO",
            keys: ["many to one (Support)", "Twitch LiveChat", "user Management"],
            values: ["okay", "good", "okay"],
            percent: 210/3,
        },
        {
            titel: "Security",
            keys: ["bcrypt", "jwt", "oAuth", "Passport", "userManagment", "testing"],
            values: ["fine", "fine", "okay", "okay", "good", "basics"],
            percent: 405/6,
        },
        {
            titel: "Extras",
            keys: [, "Paypal", "Cloudinary", "netlify", "ionos (1&1)", "cyclic sh", "BigO", "Recursion"],
            values: ["okay", "good", "good", "good", "good", "okay", "okay"],
            percent: 490/7,
        },
    ]

    return(
        <section id="skills">
            <div className="tecStack" >
                {language ? ("Technical Skills") : ("Technische Fähigkeiten")}
            </div>
            <div className="cardContainer">
                <p className="introduce">
                    {language ? ("The values ​​given here show how confident I feel in my previous tasks with the respective techniques.") : ("Die hier angegebenen Werte zeigen, wie sicher ich mich bei meinen bisherigen Aufgaben mit den jeweiligen Techniken fühle.")}
                    <br />
                    {language ? ("fine > 90% - good > 80% - okay > 60% - basics < 20%"):("sehr gut > 90% - gut > 80% - ok > 60% - Grundkenntnisse > 20%")}
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