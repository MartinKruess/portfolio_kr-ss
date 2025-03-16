import { useContext } from "react";
import { SettingContext } from "../global/useContext";

export const Home = () => {
  const { language } = useContext(SettingContext);

  let glowInTexts = document.querySelectorAll(".glowIn");
  glowInTexts.forEach((glowInText) => {
    let letters = glowInText.textContent.split("");
    glowInText.textContent = "";
    letters.forEach((letter, i) => {
      let span = document.createElement("span");
      span.textContent = letter;
      span.style.animationDelay = `${i * 0.05}s`;
      glowInText.append(span);
    });
  });

  return (
    <header id="home">
      <div className="headerContainer">
        <h1 className="header">Martin Krüss</h1>
        <h2 className="header co">
          {language ? "Fullstack Developer" : "Fullstack Entwickler"}
        </h2>
      </div>
    </header>
  );
};
