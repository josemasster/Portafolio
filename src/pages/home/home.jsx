import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AboutMe from '../../components/about/about';
import './home.css'

const Home = () => {
    return (
        <section className='section'>
            <AboutMe />
        </section>

    );
};

export default Home;