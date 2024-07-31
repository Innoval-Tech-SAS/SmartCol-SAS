import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@nextui-org/button";

interface IconButtonProps {
    url: string;
    title: string;
    iconName: string;
}

const IconButton: React.FC<IconButtonProps> = ({ url, title, iconName }) => {
    const [iconSrc, setIconSrc] = useState("");
    const iconsRoute = "icons/";

    useEffect(() => {
        const updateIconSrc = () => {
            const isDark = document.documentElement.classList.contains('dark');
            const prefix = isDark ? "dark-" : "light-";
            const formattedIconName = `${iconsRoute}${prefix}${iconName}`;
            setIconSrc(formattedIconName);
        };


        updateIconSrc();


        const observer = new MutationObserver(updateIconSrc);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => observer.disconnect();
    }, [iconName, iconsRoute]);

    return (
        <div className="flex flex-col items-center justify-center gap-5">
            <div id="img-container">
                <img className="w-auto h-32" src={iconSrc} alt={title} />
            </div>
            <div className="flex items-center justify-center w-full" id="button-container">
                <Button className="w-2/3 sm:w-full mb-4" color="primary" radius="full">
                    <Link title={title} className="text-white w-full font-bold text-lg flex justify-center dark:text-background" to={url}>
                        {title}
                    </Link>
                </Button>
            </div>
        </div>
    );
}

export default IconButton;
