import Swal from "sweetalert2";

import { validateEmail, validateName, validatePhone } from "./validators";
import { capitalesColombia } from "@/config/site";

export const getClientData = async () => {
  const clientData = await Swal.fire({
    title: "Necesitamos Algunos Datos Adicionales",
    icon: "warning",
    html: `
      <form>
        <select id="swal-input4" class="swal2-input">
          <option value="" disabled selected>Seleccione una ciudad</option>
          ${capitalesColombia
            .map((capital) => {
              return `<option value="${capital}">${capital}</option>`;
            })
            .join("")}  
        </select>
        <input id="swal-input1" class="swal2-input" placeholder="Nombre">
        <input id="swal-input2" class="swal2-input" placeholder="Email">
        <input id="swal-input3" class="swal2-input" placeholder="Teléfono">
      </form>
    `,
    focusConfirm: false,
    preConfirm: () => {
      const name = (document.getElementById("swal-input1") as HTMLInputElement)
        .value;
      const email = (document.getElementById("swal-input2") as HTMLInputElement)
        .value;
      const phone = (document.getElementById("swal-input3") as HTMLInputElement)
        .value;
      const selectedCapital = (
        document.getElementById("swal-input4") as HTMLSelectElement
      ).value;

      // Validaciones
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

  return clientData?.value;
};
