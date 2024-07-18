import styled from "styled-components";

const Construction = () => {
  return (
    <StyledConstruccion>
      {/* <h2>Sitio en Construcción</h2> */}
      <img src="img/construccion.jpg" alt="" />
    </StyledConstruccion>
  );
};

const StyledConstruccion = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
  width: auto;
  //   background-image: url("img/construccion.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  text-align: center;

  img {
    width: auto;
    max-height: 700px;
  }
`;

export default Construction;
