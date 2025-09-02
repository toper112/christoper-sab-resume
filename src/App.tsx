import { FC } from "react";
import StarRating from "./StarRating";
import { MaleIcon, FemaleIcon } from "./components/Icons";
import "@fortawesome/fontawesome-free/css/all.min.css";
import './App.css';

const App: FC = () => {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="container">
          <div className="profile">
            <img src="/images/pfp.jpg" alt="" />
            <h1 className="name">Chistoper Sab</h1>
          </div>
          <div className="navbar-links">
            <ul className="nav-links">
              <li><a href="#about">About</a></li>
              <li><a href="#education">Education</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#references">References</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="about" className="background">
        <h2>Hi, I’m Christoper 👋</h2>
        <hr />
        <p>
          I am a fresh graduate full stack web developer, an aspiring IT professional with a passion for web development, problem-solving,
          and building secure applications. I am eager to learn more about coding,
          continuously improving my skills and staying updated with new technologies. I enjoy collaborating with others and tackling new challenges in software development.
        </p>
        <p>
          Experienced in building web applications with Laravel, JavaScript, and MySQL, utilizing Inertia.js for seamless front-end integration.
        </p>
      </section>

      <section id="education" className="section">
        <h2>Education 🎓</h2>
        <hr />
        <ul>
          <li>
            <h3>Bachelor of Science in Information Technology</h3>
            <p>Mater Dei College, 2025 </p>
          </li>
        </ul>
      </section>

      <section id="skills" className="section alt">
        <h2>Skills 🛠️</h2>
        <hr />
        <div className="skills-list">
          <div className="skill">
            <span>HTML5</span>
            <StarRating rating={4} />
          </div>
          <div className="skill">
            <span>TypeScript</span>
            <StarRating rating={4} />
          </div>
          <div className="skill">
            <span>JavaScript</span>
            <StarRating rating={4} />
          </div>
          <div className="skill">
            <span>Laravel</span>
            <StarRating rating={4} />
          </div>
          <div className="skill">
            <span>CSS</span>
            <StarRating rating={4} />
          </div>
          <div className="skill">
            <span>MySQL</span>
            <StarRating rating={4} />
          </div>
          <div className="skill">
            <span>Flutter</span>
            <StarRating rating={3} />
          </div>
          <div className="skill">
            <span>Java</span>
            <StarRating rating={4} />
          </div>
          <div className="skill">
            <span>PHP</span>
            <StarRating rating={4} />
          </div>
          <div className="skill">
            <span>Blade</span>
            <StarRating rating={4} />
          </div>
          <div className="skill">
            <span>Firebase</span>
            <StarRating rating={3} />
          </div>
          <div className="skill">
            <span>React</span>
            <StarRating rating={3} />
          </div>
          <div className="skill">
            <span>Next.js</span>
            <StarRating rating={3} />
          </div>
          <div className="skill">
            <span>Tailwind CSS</span>
            <StarRating rating={4} />
          </div>
        </div>
      </section>


      <section id="projects" className="section">
        <h2>Projects 💻</h2>
        <hr />
        <div className="projects">
          <div className="card">
            <h3><a href="https://hr.materdeicollege.com/" target="_blank" rel="noopener noreferrer">MDC HR System</a></h3>
            <p>
              This website was built to automate the HR processes of Mater Dei College, including attendance tracking and employee management.
            </p>
          </div>
        </div>
      </section>

      <section id="references" className="section alt">
        <h2>References 📌</h2>
        <hr />
        <div className="ref">
          <div className="ref-card">

            <div className="pfp">
              <MaleIcon />
            </div>
            <div className="desc">
              <span className="name">Benjie Lenteria</span>
              <span>Professor/Supervisor</span>
              <span>0917-303-5716</span>
              <span>hawkmanlentrix@gmail.com</span>
            </div>

          </div>

          <div className="ref-card">

            <div className="pfp">
              <FemaleIcon />
            </div>
            <div className="desc">
              <span className="name">Sheryl Enriquez</span>
              <span>Professor</span>
              <span>0999-150-6636</span>
              <span>sherylenriquez30@gmail.com</span>
            </div>

          </div>
          <div className="ref-card">

            <div className="pfp">
              <FemaleIcon />
            </div>
            <div className="desc">
              <span className="name">Josefina J. Pangan</span>
              <span>CAST Dean/Supervisor</span>
              <span>0923-911-3760</span>
              <span>j1fina@yahoo.com</span>
            </div>

          </div>

        </div>
      </section>

      <section id="contact" className="section">

      </section>
    </div>
  );
};

export default App;
