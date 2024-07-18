import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  // justify-content: center;

  div {
    display: flex;
    justify-content: space-around;
  }
`;

export const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: linear-gradient(135deg, #b0d48f, #89b35d, #6b8f3e, #456e2a);
  color: #f6f6f9;
`;

export const LogoContainer = styled.div`
  display: flex;
  .logo {
    display: flex;
    justify-content: start;
    align-items: center;
  }

  img {
    width: auto;
    height: 200px;
  }

  h4 {
    font-size: 3.5rem;
  }

  p {
    font-size: 1.5rem;
  }

  .horario {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
