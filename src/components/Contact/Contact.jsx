import {
  Container,
  CustomButton,
  IconButton,
  IconsContainer,
  PhoneNumbers,
  ListContainer,
  TitleContainer,
} from "../styles/Contact/Contact";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const cityContacts = [
  {
    city: "Bogotá",
    phoneNumbers: ["350 422 7737", "316 017 9783", "301 502 9279"],
  },
  {
    city: "Cali",
    phoneNumbers: ["301 430 5276"],
  },
  {
    city: "Medellín",
    phoneNumbers: ["316 456 8409"],
  },
];

const Contact = () => {
  const handleClick = () => {
    window.open("files/PortafolioSmartCol2024.pdf");
  };

  return (
    <>
      <TitleContainer onClick={handleClick}>
        <CustomButton title="EXPLORA NUESTRO CATÁLOGO" />
      </TitleContainer>

      <Container>
        <PhoneNumbers>
          <h4>CONTACTO</h4>
          <p>Contáctanos por medio de Whatsapp: </p>

          <ListContainer>
            {cityContacts.map((contact, index) => (
              <div key={index}>
                <ul>
                  <h4>{contact.city.toUpperCase()}</h4>
                  {contact.phoneNumbers.map((phone, phoneIndex) => (
                    <li key={phoneIndex}>
                      <FaWhatsapp
                        style={{ marginRight: "8px", color: "#456E2A" }}
                      />
                      {phone}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </ListContainer>
        </PhoneNumbers>

        <IconsContainer>
          <IconButton
            url="/products"
            iconUrl="img/icons/Caja.png"
            title="Nuestros Productos"
          />

          <IconButton
            url=""
            iconUrl="img/icons/Camion.png"
            title="Distribución"
          />

          <IconButton
            url=""
            iconUrl="img/icons/Localización.png"
            title="Sedes"
          />
        </IconsContainer>
      </Container>
    </>
  );
};

export default Contact;
