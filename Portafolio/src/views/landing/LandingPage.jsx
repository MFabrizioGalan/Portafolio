import { Link } from "react-router-dom";
import styles from "./LandingPage.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

import LogoImagen from "../../assets/Logo-M3-sinfondo.png";
import LogoImagen1 from "../../assets/yo-dibujo-sinfondo.png";

function LandingPage() {
  return (
    <main className={styles.mainContainer}>
      <div className={styles.head}>
        <div className={styles.logo}>
          <img src={LogoImagen} alt="logo_imagen" title="logo_imagen"></img>
        </div>
        <div className={styles.navegation}>
          <nav className={styles.menu}>
            <ul>
              <li>
                <a href="" className={styles.items}>Acerca de</a>
              </li>
              <li>
                <a href="" className={styles.items}>Experiencia</a>
              </li>
              <li>
                <a href="" className={styles.items}>Trabajos</a>
              </li>
              <li>
                <a href="" className={styles.items}>Contactos</a>
              </li>
              <li>
                <a href="" className={styles.button_cv}>Resumen</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={styles.cuerpo}>
        <div className={styles.container}>
          <div className={styles.informacion}>
            <div className={styles.pre}>
              <p>
                Hola, mi nombre es
              </p>
            </div>
            <div className={styles.profile}>
              <h1>
                Manuel Fabrizio
              </h1>
            </div>
            <div className={styles.description}>
              <p>
              Desarrollador Full Stack, estoy entusiasmado por aplicar mi pasión por la programación y seguir aprendiendo en un entorno profesional estimulante.
              </p>
            </div>
          </div>
            <div className={styles.imagen_profile}>
              <img src={LogoImagen1} alt="profile_imagen" title="profile_imagen" className={styles.profileI}></img>
            </div>

        </div>
      </div>

      <div className={styles.footer}>
          <a
            href="https://www.facebook.com/manuelfabrizio.galanheredia/"
            target="_blank"
            title="Facebook"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/fabrizio-gal%C3%A1n-8b3429270/"
            target="_blank"
            title="Instagram"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://wa.me/+51951943438"
            target="_blank"
            title="Twitter"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon />
          </a>
      </div>
      {/* <div className={styles.bubbles}>
        <span style={{'--i': 11}}></span>
      </div> */}
            <div className={styles.bubbles}>
              <span style={{'--i': 31}}></span>
              <span style={{'--i': 25}}></span>
              <span style={{'--i': 21}}></span>
              <span style={{'--i': 27}}></span>
              {/* <span style={{'--i': 39}}></span> */}
              {/* <span style={{'--i': 10}}></span>
              <span style={{'--i': 32}}></span> */}
              {/* <span style={{'--i': 24}}></span>
              <span style={{'--i': 16}}></span>
              <span style={{'--i': 18}}></span>
              <span style={{'--i': 30}}></span>
              <span style={{'--i': 21}}></span> */}
              {/* <span style={{'--i': 23}}></span>
              <span style={{'--i': 30}}></span>
              <span style={{'--i': 17}}></span> */}
              {/* <span style={{'--i': 39}}></span>
              <span style={{'--i': 20}}></span> */}
              <span style={{'--i': 12}}></span>
              <span style={{'--i': 14}}></span>
              <span style={{'--i': 33}}></span>
              {/* <span style={{'--i': 28}}></span>
              <span style={{'--i': 21}}></span>
              <span style={{'--i': 32}}></span>
              <span style={{'--i': 13}}></span>
              <span style={{'--i': 34}}></span>
              <span style={{'--i': 25}}></span>
              <span style={{'--i': 16}}></span> */}
              <span style={{'--i': 17}}></span>
              {/* <span style={{'--i': 38}}></span>
              <span style={{'--i': 21}}></span>
              <span style={{'--i': 29}}></span> */}
              <span style={{'--i': 34}}></span>
              {/* <span style={{'--i': 15}}></span>
              <span style={{'--i': 33}}></span> */}
              {/* <span style={{'--i': 21}}></span>
              <span style={{'--i': 18}}></span>
              <span style={{'--i': 16}}></span>
              <span style={{'--i': 30}}></span> */}
              {/* <span style={{'--i': 22}}></span>
              <span style={{'--i': 20}}></span>
              <span style={{'--i': 39}}></span> */}
              <span style={{'--i': 17}}></span>
              {/* <span style={{'--i': 35}}></span>
              <span style={{'--i': 23}}></span>
              <span style={{'--i': 11}}></span>
              <span style={{'--i': 10}}></span>
              <span style={{'--i': 38}}></span> */}
              <span style={{'--i': 26}}></span>
              <span style={{'--i': 24}}></span>
              <span style={{'--i': 32}}></span>
            </div>
    </main>
  );
}

export default LandingPage;
