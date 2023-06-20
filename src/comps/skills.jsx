import { useContext } from "react"
import { SettingContext } from "../global/useContext"



export const Skills = () => {
    const {language} = useContext(SettingContext)

    // Legend:
    const fine = 90
    const good = 75
    const okay = 50
    const basic = 20

    const skills = [
        {
            titel: "Styling",
            keys: ["CSS", "SCSS", "Tailwind", "Bootstrap", "responsive"],
            values: ["fine", "fine", "good", "good", "good"],
            percent: Math.floor((fine + fine + good + good + good)/5),
        },
        {
            titel: "Javascript",
            keys: ["JS-Dom", "Animations", "Singlepage App.", "heighOrderFunctions"],
            values: ["fine", "okay", "okay", "fine"],
            percent: Math.floor((fine + okay + okay + fine)/4),
        },
        {
            titel: "React",
            keys: ["react-router-dom", "useState", "useContext", "JSX", "libaries"],
            values: ["fine", "fine", "fine", "fine", "okay"],
            percent: Math.floor((fine + fine + fine + fine + okay)/5),
        },
        {
            titel: "Security",
            keys: ["bcrypt", "jwt", "oAuth", "user roles", "testing"],
            values: ["fine", "good", "okay", "good", "basic"],
            percent: Math.floor((fine + good + okay + good + basic)/5),
        },
        {
            titel: "Node",
            keys: ["Express", "Cors", "API"],
            values: ["good", "basic", "good"],
            percent: Math.floor((good + basic + good)/3),
        },
        {
            titel: "MongoDB",
            keys: ["mongoose", "Atlas","data-management", "Schemas & SubSchemas"],
            values: ["good","good","good", "good"],
            percent: Math.floor((good + good + good + good)/4),
        },
        {
            titel: "Socket IO",
            keys: ["many2one", "many2many", "Twitch LiveChat", "user Management"],
            values: ["okay", "good", "good", "okay"],
            percent: Math.floor((okay + okay + good + okay)/4),
        },
        {
            titel: "oAuth/oAuth2",
            keys: ["Login with Twitch", "Login with Github", "Login with Google", "Passport"],
            values: ["good", "good", "okay", "okay"],
            percent: Math.floor((good + good + okay + okay)/4),
        },
        {
            titel: "Extras",
            keys: ["Paypal", "Filesystem", "Cloudinary", "netlify", "cyclic sh"],
            values: ["okay", "good", "okay", "good", "good"],
            percent: Math.floor((okay + good +okay + good +good)/5),
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