import { Formik } from "formik";

export default function EmailForm() {
  return (
    <form>
      <h3>Conatactanos</h3>
      <div>
        <input placeholder="Nombre" />
      </div>

      <div>
        <input type="email" placeholder="Correo electrónico" />
      </div>

      <div>
        <input placeholder="Telefono" />
      </div>

      <div>
        <textarea placeholder="Mensaje" />
      </div>

      <input type="submit" value="Enviar" />
    </form>
  );
}
