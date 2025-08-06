import './Home.css';
import miImagen from '../assets/images/foto-porfolio-music.png';
import { useLanguage } from "../hooks/UseLanguage";
import { homeTexts } from "../i18n/navbarText";

export const Home = () => {

    const { language } = useLanguage();
    const t = homeTexts[language]

  return (
    <div className='home'>
      <div className='texto-titulo'>
        <h1>Nicolas Ruiz</h1>
        <div className="underline"></div>
        <h3>{t.role}</h3>
      </div>
      <div className='imagen-container'>
        <div className='imagen-box'>
          <img src={miImagen} alt="foto de perfil musico" />
        </div>
      </div>
    </div>
  )
}
