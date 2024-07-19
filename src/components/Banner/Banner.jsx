import { BannerContainer } from "../common/Banner/banner";

const Banner = () => {
  return (
    <BannerContainer $img={"img/banner-index.jpg"}>
      <div>
        <h1>SMARTCOL S.A.S.</h1>
      </div>

      <>
        <span>
          "Somos una empresa dedicada a la comercialización e importación de una
          amplia variedad de materias primas para los principales sectores
          alimenticio, industrial y farmacéutico."
        </span>
      </>
    </BannerContainer>
  );
};

export default Banner;
