import {
  FooterContainer,
  FooterWrapper,
  LogoContainer,
} from "../common/Footer/Footer";
import { TitleContainer } from "../common/Contact/Contact";

const Footer = ({}) => {
  return (
    <FooterWrapper>
      <FooterContainer>
        <LogoContainer>
          <div className="logo">
            <img src="img/logo.png" alt="" />
            <h4>SMARTCOL SAS</h4>
          </div>
          <div className="horario">
            <h4>Horario Comercial</h4>
            <p>Lunes a Viernes de 8:00 a 17:00</p>
            <p>Sábados de 8:00 a 12:00</p>
          </div>
        </LogoContainer>
        <div>
          <div>
            <h4>Sedes</h4>
          </div>
          <div>
            <h4>Teléfonos</h4>
          </div>
          <div>
            <h4>Políticas</h4>
          </div>
        </div>
      </FooterContainer>

      <TitleContainer>
        <p>© Copyright 2024 SMARTCOL S.A.S.</p>
        <p>Todos los Derechos Reservados.</p>
      </TitleContainer>
    </FooterWrapper>
  );
};

export default Footer;
