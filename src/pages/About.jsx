import "../pages/About.css";
import imagenAbout from "../assets/images/img-about.png";
import { useLanguage } from "../hooks/UseLanguage";
import { aboutTexts } from "../i18n/navbarText";

export const About = () => {
  const { language } = useLanguage();
  const t = aboutTexts[language];

  return (
    <div className="container-about">
      <div className="titulo-about">
        <h1>{t.title}</h1>
      </div>
      <div className="imagen-about">
        <img src={imagenAbout} alt="" />
      </div>
      <div className="texto-about">
        {t.paragraphs.map((p, i) => (
          <p
            key={i}
            className="bio-parrafo"
            dangerouslySetInnerHTML={{ __html: p }}
          />
        ))}
      </div>
    </div>
  );
};
