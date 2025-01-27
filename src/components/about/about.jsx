import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './about.css'
import Josemasster from '../../assets/josemasster.jpeg';
import Experience from './experience/experience';

const AboutMe = () => {
    return (
        <section className='content'>
            <div className='columnas'>
                <h1 className='name'>Josemasster</h1>
                <p className='carrera'>Desarrollador Web FullStack</p>

                <h2 className='aboutme'>Sobre Mi</h2>
                <p>Soy un desarrollador de software con 2 años de experiencia en la creación de aplicaciones web, especializándome en el uso de tecnologías modernas.</p>
                <p>Cuento con experiencia en la arquitectura de sistemas mediante microservicios y la implementación de microclientes. También he trabajado en despliegues en la nube utilizando AWS, asegurando que las aplicaciones sean robustas, seguras y escalables.</p>
                <p> Estoy comprometido con la mejora continua y con aportar valor a cada proyecto en el que participo, ofreciendo soluciones innovadoras y eficientes para satisfacer las necesidades del negocio.
                </p>
                <button>Certificados</button>
                <button>CV</button>
            </div>
            <div className='columnas perfil'>
                <img src={Josemasster} alt="Foto de perfil" height={400} width={400} />
            </div>
            <div className='columnas contact'>
                <button>Linkedink</button>
                <button>Github</button>
                <button>Correo</button>
            </div>
            <Experience/>
        </section>



    );

}

export default AboutMe