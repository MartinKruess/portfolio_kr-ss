import { useContext } from 'react'
import { SettingContext } from '../global/useContext'
import cv from '/pdf/CV_Krüss.pdf'
import cerfiticate from '/pdf/Zertifikat_Krüss.pdf'
import zeugnis from '/pdf/Zeugnis_Tutor_Krüss.pdf'

export const About = () => {
    const { language } = useContext(SettingContext)

    const heute = new Date()
    const bday = new Date(1990, 2, 1)
    const rawAge = heute - bday
    const age = Math.floor(rawAge/31536000000)

    return(
        <section id='about'>
            <article className='aboutLeft'>
                <ul>
                    <li>{language ? ('Firstname:') : ('Vorname:')}</li>
                    <li>{language ? ('Lastname:') : ('Nachname:')}</li>
                    <li>{language ? ('Contact:') : ('Kontakt:')}</li>
                    <li>{language ? ('Education') : ('Ausbildung:')}</li>
                    <li>{language ? ('Description:') : ('Beschreibung:')}</li>
                    <li>{language ? ('Hobbies:') : ('Hobbys:')}</li>
                    <li>{language ? ('CV:') : ('Lebenslauf:')}</li>
                    <li>{language ? ('Cerfiticate:') : ('Zertifikat:')}</li>
                    <li>{language ? ('Tutor:') : ('Tutor')}</li>
                </ul>
                <ul>
                    <li>Martin</li>
                    <li>Krüss</li>
                    <li><a href="mailto:martinkr90@googlemail.com">martinkr90@googlemail.com</a></li>
                    <li>DCI-Digital Career Institute gGmbH</li>
                    <li>Fullstack Webdeveloper <a href='https://www.mongodb.com/mern-stack' target='_blank' rel='informationabout MERM-Stack'>(MERN)</a></li>
                    <li>
                        {language
                        ? ('Family & Friends, Darts, Billiards, Gaming')
                        : ('Familie & Freunde, Dart, Billard, Gaming')}
                    </li>
                    <li>
                        <a href={cv} target='_blank' rel='download cv'>
                            {language ? ('CV download') : ('Lebenslauf herunterladen')}
                        </a>
                    </li>
                    <li>
                        <a href={cerfiticate} target='_blank' rel='download certificate'>
                            {language ? ('DCI Certificate') : ('DCI Zertifikat')}
                        </a>
                    </li>
                    <li>
                        <a href={zeugnis} target='_blank' rel='download report'>
                            {language ? ('Report of Employment (Tutor)') : ('Arbeitszeugnis (Tutor)')}
                        </a>
                    </li>
                </ul>
            </article>
            <article className='aboutRight'>
                <div className='contextRightText'>
                    <p>
                        {language ? (`
                        Hi, my name is Martin Krüss, but you can just call me Martin. I'm ${age} years old and have always been involved in various aspects of application development in my private life.`) : (`Hi ich heiße Martin Krüss, aber Sie können mich einfach Martin nennen. Ich bin ${age} Jahre alt und habe mich privat schon immer mit verschiedenen Aspekten der Anwendungsentwicklung beschäftigt.`)}
                    </p>
                    <p>
                        {language ? ('Due to the Corona crisis, I finally had the time to deal with the topic of web development professionally, so I used this time to further educate myself as a full-stack web and software developer.') : ('Durch die Corona Kriese hatte ich nun endlich die Zeit mich professionell mit dem Thema Web Development zu beschäftigen, so habe ich diese Zeit genutzt um mich zum Fullstack Web- und Software Developer weiter zu bilden.')}
                    </p>
                    <p>
                        {language ? ('In the last year, I have preferred to deal with the MERN stack and have implemented a number of smaller and larger projects with it.') : ('Im letzten Jahr habe ich mich bevorzugt mit dem MERN-Stack auseinader gesetzt und einige kleiner und größere projekte damit verwirklicht.')}
                    </p>
                    <p>
                        {language ? ('I strive to create elegant solutions that surprise and delight users while keeping complex technical dependencies in mind for implementation, scalability and developer sanity.') : ('Ich bemühe mich, elegante Lösungen zu schaffen, die Benutzer überraschen und begeistern, während ich komplexe technische Abhängigkeiten für Implementierung, Skalierbarkeit und Entwicklervernunft im Auge behalte')}
                    </p>
                    <p>
                        {language ? ('In addition to my studies, I was hired as a tutor for two classes at my university. As a tutor, I became the first point of contact for students who had understanding and/or code issues.') : ('Neben dem Studium war ich als Tutor für zwei Klassen an meiner Uni eingestellt. Als Tutor wurde ich zum ersten Ansprechpartner für Studenten, die Verständnis- und/oder Codeprobleme hatten.')}
                    </p>
                </div>
                <div className='imgContainer'>
                    <img src='/images/martin_kruess.png' alt='image Martin Krüss' />
                </div>
            </article>
            <div className='spacer'></div>
        </section>
    )
}