import "../pages/Contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { useLanguage } from "../hooks/UseLanguage";
import { contactTexts } from "../i18n/navbarText";

export const Contact = () => {
  const { language } = useLanguage();
  const t = contactTexts[language];

  const form = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const isFormValid = () => {
    const phoneRegex = /^\+?[0-9\s-]{7,15}$/;
    return (
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.message.trim() !== "" &&
      phoneRegex.test(formData.number)
    );
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const phoneRegex = /^\+?[0-9\s-]{7,15}$/;
    const { name, email, number, message } = formData;

    if (!name || !email || !number || !message || !phoneRegex.test(number)) {
      setStatusMessage("⚠️ Por favor completá todos los campos correctamente.");
      return;
    }

    emailjs
      .sendForm(
        "service_euhzcbo",     // Service ID
        "template_c2mlxam",    // Template ID
        form.current,
        "ZUHZcNBo-iTEaLK6r"    // Public Key
      )
      .then(() => {
        setStatusMessage("✅ Email enviado con éxito");
        form.current.reset();
        setFormData({ name: "", email: "", number: "", message: "" }); // limpiar estado
      })
      .catch((error) => {
        setStatusMessage("❌ Error al enviar: " + error.text);
      });
  };

  return (
    <section className="contact">
      <div className="contact-overlay">
        <h1>{t.title}</h1>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <div className="input-group">
            <input
              type="text"
              name="name"
              placeholder={t.placeholders.name}
              required
              value={formData.name}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder={t.placeholders.message}
              required
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder={t.placeholders.email}
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="number"
            placeholder={t.placeholders.number}
            required
            pattern="^\+?[0-9\s\-]{7,15}$"
            value={formData.number}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="boton-submit"
            disabled={!isFormValid()}
          >
             {t.placeholders.submit}
          </button>
        </form>

        {/* Mensaje de estado */}
        {statusMessage && <p className="status-message">{statusMessage}</p>}

        
      </div>
    </section>
  );
};
