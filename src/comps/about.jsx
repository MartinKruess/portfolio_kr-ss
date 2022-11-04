import cv from "/pdf/CV_Krüss.pdf"
import cerfiticate from "/pdf/Zertifikat_Krüss.pdf"
import zeugnis from "/pdf/Zeugnis_Tutor_Krüss.pdf"

export const About = () => {
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
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, quae illo temporibus labore maiores autem veritatis. Ipsam minima eos saepe temporibus facere sapiente quam debitis voluptatem, qui, corporis quod! Architecto illo provident aut sequi, quos, nihil, quod excepturi voluptatibus vero voluptates neque nam dolorum? Eos voluptates asperiores corporis dolore molestias, rerum minima sed voluptatibus odio porro odit, obcaecati ut illo aliquid repellendus reprehenderit id laborum accusantium nisi esse nostrum, in eius?
                </p>
                <p>
                 Illum, numquam! Cum dolores deleniti, quos saepe reprehenderit accusamus vel repellat? Dicta odio eaque voluptate, nihil quaerat molestiae cupiditate iusto, quae maxime beatae dolore aliquam repellat, ea aliquid similique voluptatem. Praesentium voluptatibus illum voluptas maxime et optio inventore exercitationem blanditiis obcaecati labore, recusandae aliquid cupiditate, officiis molestias nemo odit totam error?
                </p>
            </article>
            <div className="spacer"></div>
            <article>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam deserunt expedita ratione soluta eaque labore, rerum sit accusamus laudantium enim eius consectetur ab facere fugit aspernatur repellat voluptates, itaque doloremque, explicabo fuga officiis quasi. Fuga, quasi ex! Accusamus voluptatibus quos suscipit delectus nulla consequatur facilis aut harum totam dicta repudiandae veritatis ex vitae sed explicabo a doloribus, aperiam, vel iste. Sequi iure dolorem fugit earum in, aliquam incidunt ad ratione quibusdam voluptatibus cupiditate amet maxime placeat asperiores et eligendi sunt rerum nesciunt recusandae consectetur voluptate unde qui omnis. Eos earum temporibus inventore obcaecati nemo nisi quis soluta esse hic itaque.
            </article>
            <div className="spacer"></div>
        </section>
    )
}