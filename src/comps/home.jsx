export const Home = () => {

let glowInTexts = document.querySelectorAll(".glowIn");
glowInTexts.forEach(glowInText => {
  let letters = glowInText.textContent.split("");
  glowInText.textContent = "";
  letters.forEach((letter, i) => {
    let span = document.createElement("span");
    span.textContent = letter;
    span.style.animationDelay = `${i * 0.05}s`;
    glowInText.append(span);
  });
});


    return(
        <section id="home">
            <div >
              <h1 className="header">Portfolio</h1>
              <h2 className="header co">Martin Krüss</h2>
              </div>
              <div className="spacer"></div>
        </section>
    )
}