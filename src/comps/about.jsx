import { useContext } from "react"
import { SettingContext } from "../global/useContext"
import cv from "/pdf/CV_Krüss.pdf"
import cerfiticate from "/pdf/Zertifikat_Krüss.pdf"
import zeugnis from "/pdf/Zeugnis_Tutor_Krüss.pdf"

const funx = () => {
    const heute = new Date()
    const bday = new Date(1982, 10, 10)
    console.log(bday)
    const rawAge = heute - bday
    const age = Math.floor(rawAge/31536000000)
    
    return alert(age);
}

export const About = () => {
    const { language } = useContext(SettingContext)

    const heute = new Date()
    const bday = new Date(1990, 2, 1)
    console.log(bday)
    const rawAge = heute - bday
    const age = Math.floor(rawAge/31536000000)

    return(
        <section id="about">
            <article className="aboutLeft">
                <ul>
                    <li>Firstname:</li>
                    <li>Lastname:</li>
                    <li>Education</li>
                    <li>Description:</li>
                    <li>Pastime:</li>
                    <li>CV:</li>
                    <li>Cerfiticate:</li>
                    <li>Tutor:</li>
                </ul>
                <ul>
                    <li>Martin</li>
                    <li>Krüss</li>
                    <li>DCI-Digital Career Institute gGmbH</li>
                    <li>Fullstack Webdeveloper <a href="https://www.mongodb.com/mern-stack" target="_blank" rel="noopener noreferrer">(MERN)</a></li>
                    <li>Family and Friends, Darts, Billiards, Gaming, Weekend Trips</li>
                    <li><a href={cv} target="_blank" rel="noopener noreferrer">View</a></li>
                    <li><a href={cerfiticate} target="_blank" rel="noopener noreferrer">View</a></li>
                    <li><a href={zeugnis} target="_blank" rel="noopener noreferrer">Report of Employment</a></li>
                </ul>
            </article>
            <article className="aboutRight">
                <div className="imgContainer"><img src="/images/preview.png" alt="" /></div>
                <p className="contextRight">
                    {language ? ("Hi, my name is Martin Krüss, but you can just call me Martin. I am {age} years old and used the Corona crisis to further educate myself as a full stack web and software developer.") : ("Hi ich heiße Martin Krüss, aber Sie können mich einfach Martin nennen. Ich bin {age} Jahre alt und habe die Corona Kriese genutzt um mich zum Fullstack Web- und Software Developer weiter zu bilden.")}
                    <br /><br />
                    {language ? ("In the last year, I have preferred to deal with the MERN stack and have implemented a number of smaller and larger projects with it.") : ("Im letzten Jahr habe ich mich bevorzugt mit dem MERN-Stack auseinader gesetzt und einige kleiner und größere projekte damit verwirklicht.")}
                </p>
                <p>
                {language ? ("I strive to create elegant solutions that surprise and delight users while keeping complex technical dependencies in mind for implementation, scalability and developer sanity.") : ("Ich bemühe mich, elegante Lösungen zu schaffen, die Benutzer überraschen und begeistern, während ich komplexe technische Abhängigkeiten für Implementierung, Skalierbarkeit und Entwicklervernunft im Auge behalte.")}
                <br /><br />
                {language ? ("In addition to my studies, I was hired as a tutor for two classes at my university. As a tutor, I became the first point of contact for students who had understanding and/or code issues.") : ("Neben dem Studium war ich als Tutor für zwei Klassen an meiner Uni eingestellt. Als Tutor wurde ich zum ersten Ansprechpartner für Studenten, die Verständnis- und/oder Codeprobleme hatten.")}
                </p>
            </article>
            <div className="spacer"></div>
        </section>
    )
}