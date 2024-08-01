import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { Card, CardHeader, CardBody, CardFooter, Image } from '@nextui-org/react';
import { Button } from '@nextui-org/react';
import { categories, settings } from "../config/site";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Categorys: React.FC = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const updateTheme = () => {
            const theme = document.documentElement.classList.contains('dark');
            setIsDark(theme);
        };

        updateTheme();

        const observer = new MutationObserver(() => {
            updateTheme();
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <div className={`mx-auto p-8 my-8
         ${isDark ? 'bg-gradient-to-tl from-background via-zinc-800 to-background' : 'bg-gradient-to-tl from-success-700 via-primary to-success-700'}`}>
            <h3 className='text-center p-6 mb-4 font-semibold text-white text-3xl'>
                Explora Nuestra Gama de Productos
            </h3>
            <div className="slider-wrapper mx-auto mb-4 text-center w-auto px-5">
                <Slider {...settings}>
                    {categories.map((category, index) => (
                        <div className='p-2 my-4' key={index}>
                            <Card className='bg-white/10 backdrop-blur-lg border border-white/30 rounded-3xl shadow-2xl mx-4 opacity-100 z-0'>
                                <CardHeader className='pb-0 pt-2 px-4 flex-col items-start'>
                                    <h4 className='text-white font-bold text-lg line-clamp-2'>{category.title}</h4>
                                </CardHeader>
                                <CardBody className="overflow-visible py-2">
                                    <Image className="object-cover rounded-xl" src={category.img} alt={category.title} height={270} width={390} />
                                </CardBody>
                                <CardFooter className='flex justify-center'>
                                    <Button className='font-bold text-white hover:text-gray dark:border-primary' radius='full' variant="ghost">
                                        Conoce Más
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Categorys;
