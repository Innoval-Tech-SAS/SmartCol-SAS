import { BannerContainer,TitleContainer, BannerTitle, BannerText, Hr  } from '../common/Banner/banner';

const Banner = () => {
    return (
        <>
        <BannerContainer $img={'img/banner-index.jpg'}>
            <TitleContainer>
                <BannerTitle>
                    SMARTCOL S.A.S.
                </BannerTitle>
            </TitleContainer> 
               
                <BannerText>
                    <span>
                    "Somos una empresa dedicada a la comercialización e importación de una amplia variedad de materias primas para los principales sectores alimenticio, industrial y farmacéutico."
                    </span>
                </BannerText>
            
        </BannerContainer>

        
        </>
        
    );
};

export default Banner;
