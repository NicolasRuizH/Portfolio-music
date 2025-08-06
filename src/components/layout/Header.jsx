import { useLanguage } from "../../hooks/UseLanguage";
import tituloLogo from '../../assets/images/Fondo-trasnparente.png';

export const Header = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className="header">
      <div className='width-header'>
        <div className='logo'>
          <img src={tituloLogo} alt="" />
        </div>
        <div className='idioma'>
          <div className="language-switcher">
            <button
              className={`lang-option ${language === "en" ? "active" : ""}`}
              onClick={() => toggleLanguage("en")}
            >
              <img src="https://flagcdn.com/us.svg" alt="EN" />
              <span>EN</span>
            </button>
            <button
              className={`lang-option ${language === "es" ? "active" : ""}`}
              onClick={() => toggleLanguage("es")}
            >
              <img src="https://flagcdn.com/mx.svg" alt="ES" />
              <span>ES</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

