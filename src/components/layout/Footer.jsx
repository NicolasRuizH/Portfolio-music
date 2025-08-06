export const Footer = () => {
  const handleInstagramClick = (e) => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
      e.preventDefault();
      window.location.href = "instagram://user?username=nicolasruizz1";

      // Si no abre la app, abre el perfil web después de 2 segundos
      setTimeout(() => {
        window.open("https://www.instagram.com/nicolasruizz1", "_blank");
      }, 2000);
    }
  };

  return (
    <footer className="footer">
      <ul>
        <li>
          <a
            href="https://www.instagram.com/nicolasruizz1"
            onClick={handleInstagramClick}
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </li>

        <li>
          <a
            href="https://www.tiktok.com/@nicoruiz732"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-tiktok"></i>
          </a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/@nicolasruiz4407"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="bi bi-youtube"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
};
