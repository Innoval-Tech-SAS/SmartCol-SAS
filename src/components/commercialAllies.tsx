import React from "react";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const CommercialAllies: React.FC = () => {
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerMode: false,
    };

    return (
        <><h3 className="text-3xl font-bold text-primary text-center">Nuestros Aliados Comerciales</h3>
            <div className="w-full flex justify-center p-10">

                <div className="w-full max-w-3xl">
                    <Slider {...settings}>
                        <div className="flex justify-center items-center p-4">
                            <div className="w-24 h-24 bg-gray-200 flex justify-center items-center rounded-full overflow-hidden shadow-lg">
                                <img src="img/ensignworld.png.webp" alt="logo proveedor" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <div className="w-24 h-24 bg-gray-200 flex justify-center items-center rounded-full overflow-hidden shadow-lg">
                                <img src="img/fufeng-group.png.webp" alt="logo proveedor" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <div className="w-24 h-24 bg-gray-200 flex justify-center items-center rounded-full overflow-hidden shadow-lg">
                                <img src="img/gelco.png.webp" alt="logo proveedor" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <div className="w-24 h-24 bg-gray-200 flex justify-center items-center rounded-full overflow-hidden shadow-lg">
                                <img src="img/hongda-group.png.webp" alt="logo proveedor" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <div className="w-24 h-24 bg-gray-200 flex justify-center items-center rounded-full overflow-hidden shadow-lg">
                                <img src="img/ingredion.png.webp" alt="logo proveedor" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <div className="w-24 h-24 bg-gray-200 flex justify-center items-center rounded-full overflow-hidden shadow-lg">
                                <img src="img/qhdlihua.png.webp" alt="logo proveedor" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <div className="w-24 h-24 bg-gray-200 flex justify-center items-center rounded-full overflow-hidden shadow-lg">
                                <img src="img/rzbc.png.webp" alt="logo proveedor" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <div className="w-24 h-24 bg-gray-200 flex justify-center items-center rounded-full overflow-hidden shadow-lg">
                                <img src="img/sucroal.png.webp" alt="logo proveedor" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="flex justify-center items-center p-4">
                            <div className="w-24 h-24 bg-gray-200 flex justify-center items-center rounded-full overflow-hidden shadow-lg">
                                <img src="img/tianjiachem.png.webp" alt="logo proveedor" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default CommercialAllies;
