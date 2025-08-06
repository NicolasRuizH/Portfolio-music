import { Link } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import logoNav from '../../assets/images/logo-react.png';
import { useLanguage } from "../../hooks/UseLanguage";
import { navbarTexts } from "../../i18n/navbarText";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, toggleLanguage } = useLanguage();
  const t = navbarTexts[language];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className={`nav ${menuOpen ? 'open' : ''}`}>
      <div className='logoNav'>
        <img src={logoNav} alt="" />
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      <ul className={`menu ${menuOpen ? 'menu-open' : ''}`}>
        <div className="idioma-mobile">
          <div className="language-switcher">
            <button className="lang-option" onClick={() => toggleLanguage("en")}>
              <img src="https://flagcdn.com/us.svg" alt="EN" />
              <span>EN</span>
            </button>
            <button className="lang-option" onClick={() => toggleLanguage("es")}>
              <img src="https://flagcdn.com/mx.svg" alt="ES" />
              <span>ES</span>
            </button>
          </div>
        </div>

        <li><Link to="/home" onClick={() => setMenuOpen(false)}>{t.home}</Link></li>
        <li><Link to="/about" onClick={() => setMenuOpen(false)}>{t.about}</Link></li>
        <li><Link to="/videos" onClick={() => setMenuOpen(false)}>{t.videos}</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>{t.contact}</Link></li>
      </ul>
    </nav>
  );
};
