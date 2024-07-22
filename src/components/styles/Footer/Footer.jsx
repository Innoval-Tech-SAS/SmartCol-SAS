import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: linear-gradient(135deg, #b0d48f, #89b35d, #6b8f3e, #456e2a);
  color: #faefe0;

  .foot-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .foot-logo {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
    width: 100%;
  }

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
  }

  img {
    width: auto;
    height: 120px;
  }

  h4 {
    font-size: 4rem;
  }

  p {
    font-size: 1.5rem;
  }

  .horario {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 25px;
  }

  .info-sedes {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
  }

  .social-media {
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 2px solid;
    gap: 2rem;
    padding: 0.8rem 2rem;
    width: 100%;

    a {
      color: inherit;
      font-size: 3rem;
      transition: color 0.3s;

      &:hover {
        color: #4caf50;
      }

      svg {
        transition: background-color 0.3s;
      }

      &:hover svg {
        // background-color: #f9f9f6;
      }
    }
  }

  .copyright {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-top: 2px solid;
  }
  hr {
    width: 40%;
    margin: 0rem 0rem;
  }
`;

export const FootIcons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  padding: 0rem 6rem;
  max-width: calc(100% / 3 - 2rem);

  h2 {
    margin-bottom: 1rem;
    font-weight: bold;
  }

  .container-sm {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
    width: 100%;
  }

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .info p {
    margin: 0 0 0 2rem;
  }

  img {
    width: auto;
    height: 60px;
  }

  .hr-cities {
    width: 90%;
    margin: 0.2rem 2rem;
  }

  .policies-text {
    margin: 0.5rem 0;
    cursor: pointer;
    font-weight: bold;
    text-decoration: none;
    color: #faefe0;
  }

  .hr-policies {
    width: 70%;
  }

  .city-name,
  .city-phone,
  .city-address {
    font-size: 1.1rem;
    font-weight: bold;
    cursor: pointer;
    margin: 0;
  }
`;
