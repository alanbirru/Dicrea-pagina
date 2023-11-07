import { useRef } from "react";

export default function EmailForm() {
  const form = useRef();

  const sendEmail = () => {};

  return (
    <form ref={form} onSubmit={sendEmail}>
      <h3>Conatactanos</h3>
      <div>
        <input placeholder="Nombre" required />
      </div>
      <div>
        <input type="email" placeholder="Correo electrónico" required />
      </div>

      <div>
        <input placeholder="Telefono" required />
      </div>

      <div>
        <textarea placeholder="Mensaje" required />
      </div>

      <input type="submit" value="Enviar" />
    </form>
  );
}
