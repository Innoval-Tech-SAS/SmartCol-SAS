import Swal from "sweetalert2";
import { validateEmail, validateName, validatePhone } from "./validators";
import { capitalesColombia } from "@/config/site";

export const getClientData = async () => {
  const clientData = await Swal.fire({
    title: "Necesitamos Algunos Datos Adicionales",
    icon: "warning",
    html: `
        <select id="swal-input4" class="swal2-input swal2-select" required>
            <option value="" disabled selected>Selecciona una Ciudad: </option>
            ${capitalesColombia.map((capital) => `<option value="${capital}">${capital}</option>`).join("")}
      </select>
      <input id="swal-input1" class="swal2-input" placeholder="Nombre" required />
      <input type="email" id="swal-input2" class="swal2-input" placeholder="Email" required />
      <input id="swal-input3" class="swal2-input" placeholder="Teléfono" required />

    `,
    focusConfirm: false,
    confirmButtonText: "Aceptar",
    preConfirm: () => {
      const name = Swal.getPopup().querySelector("#swal-input1").value;
      const email = Swal.getPopup().querySelector("#swal-input2").value;
      const phone = Swal.getPopup().querySelector("#swal-input3").value;
      const selectedCapital =
        Swal.getPopup().querySelector("#swal-input4").value;

      if (!name || !email || !phone || !selectedCapital) {
        Swal.showValidationMessage("Por favor complete todos los campos");
        return false;
      }

      if (!validateName(name)) {
        Swal.showValidationMessage("Por favor ingrese un nombre válido");
        return false;
      }

      if (!validateEmail(email)) {
        Swal.showValidationMessage("Por favor ingrese un email válido");
        return false;
      }

      if (!validatePhone(phone)) {
        Swal.showValidationMessage("Por favor ingrese un teléfono válido");
        return false;
      }

      return { name, email, phone, selectedCapital };
    },
    customClass: {
      confirmButton: "bg-primary font-semibold",
    },
  });

  return clientData;
};
