import "../pages/Videos.css"
import { useLanguage } from "../hooks/UseLanguage";
import { videosTexts } from "../i18n/navbarText";

export const Videos = () => {
 const { language } = useLanguage();
  const t = videosTexts[language];
  const videoLinks = [
    "https://www.youtube.com/embed/swY8BjwSveA",
    "https://www.youtube.com/embed/ZEP5v5NyyjI",
    "https://www.youtube.com/embed/qwMr6_LB218",
    "https://www.youtube.com/embed/r8jPucn-CWA",
    "https://www.youtube.com/embed/iRsYEkOB3y4",
    "https://www.youtube.com/embed/6hHEHjPCRBs",
    "https://www.youtube.com/embed/90evdMwB7Sc",
  ];

  return (
    <div className="full-container">
      <div className="titulo-video">
        <h1>{t.title}</h1>
      </div>
      <div className="videos-container">
        {videoLinks.map((link, index) => (
          <div className="video-box" key={index}>
            <iframe
              width="400"
              height="200"
              src={link}
              title={`YouTube video ${index}`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  )
}
