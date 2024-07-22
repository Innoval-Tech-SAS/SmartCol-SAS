import { FooterWrapper, FootIcons } from "../styles/Footer/Footer";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  const cities = [
    {
      name: "Bogotá",
      phoneNumbers: ["601 573 6413"],
      address: "Cl. 66 #75 - 11",
    },
    {
      name: "Medellín",
      phoneNumbers: ["316 456 8409"],
      address: "Cl 45D #75A-12",
    },
    {
      name: "Cali",
      phoneNumbers: ["301 430 5276"],
      address: "Av. 2b Nte. #1",
    },
  ];

  return (
    <FooterWrapper>
      <div className="foot-container">
        <div className="foot-logo">
          <div className="logo">
            <img src="img/logo.png" alt="SMARTCOL logo" />
            <h4>SMARTCOL SAS</h4>
          </div>
          <div className="horario">
            <h2>Horario Comercial</h2>
            <p>Lunes a Viernes de 8:00 a 17:00</p>

            <p>Sábados de 8:00 a 12:00</p>
          </div>
        </div>
      </div>
      <div className="info-sedes">
        <FootIcons className="ubications">
          <h2>Sedes</h2>
          {cities.map((city, index) => (
            <div key={index} className="container-sm">
              <div className="icon">
                <img src="img/icons/ubicacion.png" alt={`${city.name} logo`} />
              </div>
              <div className="info">
                <p className="city-address">{city.address}</p>
                <hr className="hr-cities" />
                <p className="city-name">{city.name}</p>
                <hr className="hr-cities" />
              </div>
            </div>
          ))}
        </FootIcons>
        <FootIcons className="cellphones">
          <h2>Teléfonos</h2>
          {cities.map((city, index) => (
            <div key={index} className="container-sm">
              <div className="icon">
                <img src="img/icons/tel.png" alt={`${city.name} logo`} />
              </div>
              <div className="info">
                <p className="city-name">{city.name}</p>
                <hr className="hr-cities" />
                <p className="city-phone">{city.phoneNumbers.join(", ")}</p>
                <hr className="hr-cities" />
              </div>
            </div>
          ))}
        </FootIcons>
        <FootIcons className="policies">
          <h2>Políticas</h2>
          <a className="policies-text">Términos de Uso.</a>
          <hr className="hr-policies" />
          <a className="policies-text">Política de Privacidad</a>
          <hr className="hr-policies" />
          <a className="policies-text">Política de Tratamiento de Datos</a>
          <hr className="hr-policies" />
          <a className="policies-text">Política de Cookies</a>
          <hr className="hr-policies" />
        </FootIcons>
      </div>
      <div className="social-media">
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube />
        </a>
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter />
        </a>

        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.tiktok.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTiktok />
        </a>
      </div>
      <div className="copyright">
        <p>© Copyright 2024 SMARTCOL S.A.S.</p>
        <p>Todos los Derechos Reservados.</p>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
