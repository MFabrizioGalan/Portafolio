import { Link } from "react-router-dom";
import React, { useState } from 'react';
import HamburguerMenu from '../../components/hamburguesa/Hamburguesa';

import styles from "./LandingPage.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';

import LogoImagen3 from "../../assets/logo-programador2-sinfondo.png";
import LogoImagen1 from "../../assets/yo-dibujo-sinfondo.png";
import MenuIcon from '@mui/icons-material/Menu';
import p1 from "../../assets/proyecto1.png";
import p2 from "../../assets/proyecto2.png";
import p3 from "../../assets/proyecto3.png";
import p4 from "../../assets/proyecto4.png";
// function LandingPage() {
//   return (
//     <main className={styles.mainContainer}>
//       <div className={styles.head}>
//         <div className={styles.logo}>
//           <img src={LogoImagen} alt="logo_imagen" title="logo_imagen"></img>
//         </div>
//         <div className={styles.navegation}>
//           <nav className={styles.menu}>
//             <ul>
//               <li>
//                 <a href="" className={styles.items}>Acerca de</a>
//               </li>
//               <li>
//                 <a href="" className={styles.items}>Experiencia</a>
//               </li>
//               <li>
//                 <a href="" className={styles.items}>Trabajos</a>
//               </li>
//               <li>
//                 <a href="" className={styles.items}>Contacto</a>
//               </li>
//               <li>
//                 <a href="" className={styles.button_cv}>Resumen</a>
//               </li>
//             </ul>
//           </nav>
//           <div>
//             <MenuIcon/>
//           </div>
//         </div>
//       </div>

//       <div className={styles.cuerpo}>
//         <div className={styles.container}>
//           <div className={styles.informacion}>
//             <div className={styles.pre}>
//               <p>
//                 Hola, mi nombre es
//               </p>
//             </div>
//             <div className={styles.profile}>
//               <h1>
//                 MANUEL FABRIZIO
//               </h1>
//             </div>
//             <div className={styles.description}>
//               <p>
//               Desarrollador Full Stack, estoy entusiasmado por aplicar mi pasión por la programación y seguir aprendiendo en un entorno profesional estimulante.
//               </p>
//             </div>
//           </div>
//             <div className={styles.imagen_profile}>
//               <img src={LogoImagen1} alt="profile_imagen" title="profile_imagen" className={styles.profileI}></img>
//             </div>

//         </div>
//       </div>

//       <div className={styles.footer}>
//           <a
//             href="https://www.linkedin.com/in/fabrizio-gal%C3%A1n-8b3429270/"
//             target="_blank"
//             title="LinkedIn"
//             rel="noopener noreferrer"
//           >
//             <LinkedInIcon />
//           </a>
//           <a
//             href="https://github.com/MFabrizioGalan"
//             target="_blank"
//             title="GitHub"
//             rel="noopener noreferrer"
//           >
//             <GitHubIcon />
//           </a>
//       </div>
//             <div className={styles.bubbles}>
//               <span style={{'--i': 31}}></span>
//               <span style={{'--i': 25}}></span>
//               <span style={{'--i': 21}}></span>
//               <span style={{'--i': 27}}></span>
//               <span style={{'--i': 12}}></span>
//               <span style={{'--i': 14}}></span>
//               <span style={{'--i': 33}}></span>
//               <span style={{'--i': 17}}></span>
//               <span style={{'--i': 34}}></span>
//               <span style={{'--i': 17}}></span>
//               <span style={{'--i': 26}}></span>
//               <span style={{'--i': 24}}></span>
//               <span style={{'--i': 32}}></span>
//             </div>
//     </main>
//   );
// }

function LandingPage() {
  return (
    <main>
      <div id="inicio" className={styles.mainContainer} >
      <div className={styles.head}>
        <div className={styles.headContainer}>
        <div className={styles.logo}>
          <img src={LogoImagen3} alt="logo_imagen" title="logo_imagen"></img>
        </div>
        <div className={styles.navegation}>
          <nav className={styles.menu}>
            <ul>
              <li>
                <a href="#inicio" className={styles.items}>Inicio</a>
              </li>
              <li>
                <a href="#habilidades" className={styles.items}>Habilidades</a>
              </li>
              <li>
                <a href="#proyectos" className={styles.items}>Proyectos</a>
              </li>
              <li>
                <a href="#contacto" className={styles.items}>Contacto</a>
              </li>
              <li>
                <a href="" className={styles.button_cv}>Resumen</a>
              </li>
            </ul>
          </nav>
        </div>
          <div className={styles.hamburguesa1}>
            <MenuIcon/>
          </div>
          <div className={styles.redes}>
          <a
            href="https://www.linkedin.com/in/fabrizio-gal%C3%A1n-8b3429270/"
            target="_blank"
            title="LinkedIn"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/MFabrizioGalan"
            target="_blank"
            title="GitHub"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>
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
                MANUEL GALAN 
              </h1>
            </div>
            <div className={styles.description}>
              <p>
              Desarrollador Full Stack, estoy entusiasmado por aplicar mi pasión por la programación y seguir aprendiendo en un entorno profesional estimulante.
              </p>
            </div>
            <div className={styles.ver}>
              <a href="#habilidades">
                Ver más
              </a>
            </div>
          </div>
            <div className={styles.imagen_profile}>
              <img src={LogoImagen1} alt="profile_imagen" title="profile_imagen" className={styles.profileI}></img>
            </div>

        </div>
      </div>

      {/* <div className={styles.footer}>
          <a
            href="https://www.linkedin.com/in/fabrizio-gal%C3%A1n-8b3429270/"
            target="_blank"
            title="LinkedIn"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <a
            href="https://github.com/MFabrizioGalan"
            target="_blank"
            title="GitHub"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
      </div> */}
            <div className={styles.bubbles}>
              <span style={{'--i': 31}}></span>
              <span style={{'--i': 25}}></span>
              <span style={{'--i': 21}}></span>
              <span style={{'--i': 27}}></span>
              <span style={{'--i': 12}}></span>
              <span style={{'--i': 14}}></span>
              <span style={{'--i': 33}}></span>
              <span style={{'--i': 17}}></span>
              <span style={{'--i': 34}}></span>
              <span style={{'--i': 17}}></span>
              <span style={{'--i': 26}}></span>
              <span style={{'--i': 24}}></span>
              <span style={{'--i': 32}}></span>
            </div>
      </div>
      <div id="habilidades" className={styles.habilidadesContainer}>
        <h3>HABILIDADES</h3>
        <div className={styles.habilidades}>
          <div className={styles.infoHabilidades}>
            <p><span className={styles.listaHabilidades}></span>Html</p>
            <span className={styles.porcentaje}>90%</span>
          </div>
          <div className={styles.barra}>
            <div id="html" className={styles.barraProgreso1}></div>
          </div>
        </div>
        <div className={styles.habilidades}>
          <div className={styles.infoHabilidades}>
            <p><span className={styles.listaHabilidades}></span>Css</p>
            <span className={styles.porcentaje}>80%</span>
          </div>
          <div className={styles.barra}>
            <div id="css" className={styles.barraProgreso2}></div>
          </div>
        </div>
        <div className={styles.habilidades}>
          <div className={styles.infoHabilidades}>
            <p><span className={styles.listaHabilidades}></span>Javascript</p>
            <span className={styles.porcentaje}>85%</span>
          </div>
          <div className={styles.barra}>
            <div id="javascript" className={styles.barraProgreso3}></div>
          </div>
        </div>
        <div className={styles.habilidades}>
          <div className={styles.infoHabilidades}>
            <p><span className={styles.listaHabilidades}></span>Base de Datos</p>
            <span className={styles.porcentaje}>90%</span>
          </div>
          <div className={styles.barra}>
            <div id="db" className={styles.barraProgreso4}></div>
          </div>
        </div>
      </div>
      <div id="proyectos" className={styles.proyectosContainer}>
        <h3 className={styles.TituloP}>PROYECTOS</h3>
        <div className={styles.fila}>
          <div className={styles.proyecto}>
            <div className={styles.overlay}></div>
            <img src={p1} alt="proyecto1" title="proyecto1" />
            <div className={styles.infoProyecto}>
              <h4>KapowVerse</h4>
              <p>Diseño Web</p>
            </div>
          </div>
          <div className={styles.proyecto}>
            <div className={styles.overlay}></div>
            <img src={p2} alt="proyecto2" title="proyecto2" />
            <div className={styles.infoProyecto}>
              <h4>Amigos Fieles</h4>
              <p>Diseño Web</p>
            </div>
          </div>
          <div className={styles.proyecto}>
            <div className={styles.overlay}></div>
            <img src={p3} alt="proyecto3" title="proyecto3" />
            <div className={styles.infoProyecto}>
              <h4>Rick and Morty</h4>
              <p>Diseño Web</p>
            </div>
          </div>
          <div className={styles.proyecto}>
            <div className={styles.overlay}></div>
            <img src={p4} alt="proyecto4" title="proyecto4" />
            <div className={styles.infoProyecto}>
              <h4>CodeDex</h4>
              <p>Diseño Web</p>
            </div>
          </div>
        </div>
      </div>

      <div id="contacto" className={styles.contactoContainer}>
        <h3 className={styles.tituloContacto}>Contactarme</h3>
        <div className={styles.contactoForm}>
          <form action="">
            <div className={styles.fila1}>
              <input type="text" placeholder="Nombre Completo" className={styles.input1} />
              <input type="text" placeholder="Dirección Email" className={styles.input1}/>
            </div>
            <div className={styles.fila2}>
              <input type="text" placeholder="Tema ..." className={styles.input2} />
            </div>
            <div className={styles.fila3}>
              <textarea name="" id="" placeholder="Tu Mensaje ..." className={styles.input3} ></textarea>
            </div>
            {/* <input type="sumit" value={"Enviar Mensaje"} className={styles.enviar}></input> */}
            <button className={styles.enviar}>Enviar</button>
          </form>
        </div>
      </div>

      <footer>
        <p>Copyright © 2023 MG Portafolio. Todos los derechos reservados.</p>
      </footer>
    </main>
  );
}

export default LandingPage;
