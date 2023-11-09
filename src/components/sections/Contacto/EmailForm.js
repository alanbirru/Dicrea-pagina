import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const EmailForm = () => {
  const [success, setSuccess] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gva0h3o",
        "template_ak31bcs",
        form.current,
        "KuMe0wd8qZNcW9AkV"
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="email-section">
      <h3 className="contactanos">Conatactanos</h3>
      {success ? (
        <div className="success-message">¡Mensaje enviado correctamente!</div>
      ) : (
        <form ref={form} onSubmit={sendEmail} className="form">
          <div className="name field">
            <input placeholder="Nombre Completo" required name="user_name" />
          </div>

          <div className="email field">
            <input
              type="email"
              placeholder="Correo electrónico"
              name="user_email"
              required
            />
          </div>

          <div className="number field">
            <input placeholder="Whatsapp" name="user_phone" required />
          </div>

          <div className="message-field">
            <textarea
              placeholder="Mensaje"
              name="message"
              rows="6"
              cols="55"
              required
            />
          </div>

          <input type="submit" value="Enviar" className="enviar-input" />
        </form>
      )}
    </div>
  );
};

export default EmailForm;
