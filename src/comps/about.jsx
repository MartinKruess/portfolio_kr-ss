import { useContext } from "react";
import { SettingContext } from "../global/useContext";
import cv from "/pdf/CV_Krüss.pdf";
import cerfiticate from "/pdf/Zertifikat_Krüss.pdf";
import zeugnis from "/pdf/Zeugnis_Tutor_Krüss.pdf";

export const About = () => {
  const { language } = useContext(SettingContext);

  const heute = new Date();
  const bday = new Date(1990, 2, 1);
  const rawAge = heute - bday;
  const age = Math.floor(rawAge / 31536000000);

  return (
    <section id="about">
      <div className="imgContainer">
        <img
          src="/images/martin_kruess.png"
          alt="image Martin Kruess"
          max-width="480"
          max-height="480"
          rel="preload"
        />
      </div>
      <ul>
        <li>{language ? "Firstname:" : "Vorname:"} Martin</li>
        <li>{language ? "Lastname:" : "Nachname:"} Krüss</li>
        <li>
          {language ? "Contact:" : "Kontakt:"}{" "}
          <a href="mailto:martinkr90@googlemail.com">
            martinkr90@googlemail.com
          </a>
        </li>
        <li>Position: Junior Teacher (DCI-Digital Career Institute gGmbH)</li>
        <li>
          {language ? "Description:" : "Beschreibung:"} Fullstack Webdeveloper{" "}
          <a
            href="https://www.mongodb.com/mern-stack"
            target="_blank"
            rel="informationabout MERM-Stack"
          >
            (MERN)
          </a>
        </li>
        <li>
          {language ? "CV:" : "Lebenslauf:"}{" "}
          <a href={cv} target="_blank" rel="download cv">
            {language ? "CV download" : "Lebenslauf herunterladen"}
          </a>
        </li>
        <li>
          {language ? "Cerfiticate:" : "Zertifikat:"}{" "}
          <a href={cerfiticate} target="_blank" rel="download certificate">
            {language ? "DCI Certificate" : "DCI Zertifikat"}
          </a>
        </li>
        <li>
          {language ? "Tutor:" : "Tutor"}{" "}
          <a href={zeugnis} target="_blank" rel="download report">
            {language
              ? "Report of Employment (Tutor)"
              : "Arbeitszeugnis (Tutor)"}
          </a>
        </li>
        <li>
          {language ? "Hobbies:" : "Hobbys:"}{" "}
          {language
            ? "Family & Friends, Darts, Billiards, Gaming and Gamedevelopment (Unreal Engine)"
            : "Familie & Freunde, Handwerken, Darts, Billard, Gaming sowei Spieleentwicklung (Unreal Engine)"}
        </li>
      </ul>
      <article className="contextRightText">
        <p>
          {language
            ? `Hi, my name is Martin Krüss, ${age} years old and I am a passionate web developer. I am currently working as a Junior Teacher at the Digital Career Institute in Hamburg. In my role, I teach my students the basics of fullstack web development, especially in the MERN stack with Javascript and TypeScript. This job has not only given me technical knowledge, but also strengthened my ability to communicate complex topics in an understandable and precise way.`
            : `Hi, mein Name ist Martin Krüss, ${age} Jahre alt und bin ein leidenschaftlicher Webentwickler. Derzeit arbeite ich als Junior Teacher am Digital Career Institute in Hamburg. In meiner Rolle bringe ich meinen Studenten die Grundlagen der Fullstack-Webentwicklung bei, insbesondere im MERN-Stack mit Javascript und TypeScript. Diese Tätigkeit hat mir nicht nur technisches Wissen vermittelt, sondern auch meine Fähigkeit gestärkt, komplexe Themen verständlich und präzise zu vermitteln.`}
        </p>
        <p>
          {language
            ? `My experience as a teacher has shown me how important technical communication is, especially when it comes to conveying technical content. I also bring this skill to my projects as a developer.`
            : `Meine Erfahrung als Lehrer hat mir gezeigt, wie wichtig klare Kommunikation ist, insbesondere wenn es darum geht, technische Inhalte zu vermitteln. Diese Fähigkeit bringe ich auch in meinen Projekten als Entwickler mit ein.`}
        </p>
        <p>
          {language
            ? `In addition to my teaching activities, I also work on expanding my skills in my private life. For me, coding is not just a profession, but a passion. Finding creative solutions for different projects and constantly discovering new techniques and approaches fascinates me.`
            : `Neben meiner Lehrtätigkeit beschäftige ich mich auch privat mit der Erweiterung meiner Fähigkeiten. Für mich ist das Coden nicht nur ein Beruf, sondern eine Leidenschaft. Kreative Lösungen für verschiedene Projekte zu finden und dabei stets neue Techniken und Ansätze zu entdecken, fasiziert mich.`}
        </p>
        <p>
          {language
            ? `Privately, I am currently working with the Unreal Engine in conjunction with a NodeJS backend. Communication via WebSockets is currently still via JSON, later binary via UDP.`
            : `Privat beschäftige ich mich gerade mit der Unreal Engine in Verbindung mit einem NodeJS Backend. Die Kommunikation über WebSockets aktuell noch via JSON, später dann binär via UDP.`}
        </p>
      </article>
    </section>
  );
};
