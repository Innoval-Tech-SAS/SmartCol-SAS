import React, { useState, useEffect } from "react";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
    FaTiktok,
} from "react-icons/fa";
import { siteConfig } from "@/config/site";
import { Link } from "@nextui-org/link";

const SocialMedia: React.FC = () => {
    const [iconColor, setIconColor] = useState("");

    useEffect(() => {
        const updateIconColor = () => {
            const isDark = document.documentElement.classList.contains('dark');
            const color = isDark ? "#E6D38E" : "#456E2A";
            setIconColor(color);
        };

        updateIconColor();

        const observer = new MutationObserver(updateIconColor);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => observer.disconnect();
    }, []);

    return (
        <div className="w-full flex flex-wrap justify-center items-center gap-10 sm:gap-10 md:gap-12 py-5 border-y-2 border-primary">
            <Link className="flex items-center" href={siteConfig.links.facebook} isExternal>
                <FaFacebook style={{ color: iconColor }} size={30} />
            </Link>
            <Link className="flex items-center" href={siteConfig.links.twitter} isExternal>
                <FaTwitter style={{ color: iconColor }} size={30} />
            </Link>
            <Link className="flex items-center" href={siteConfig.links.instagram} isExternal>
                <FaInstagram style={{ color: iconColor }} size={30} />
            </Link>
            <Link className="flex items-center" href={siteConfig.links.youtube} isExternal>
                <FaYoutube style={{ color: iconColor }} size={30} />
            </Link>
            <Link className="flex items-center" href={siteConfig.links.tiktok} isExternal>
                <FaTiktok style={{ color: iconColor }} size={30} />
            </Link>
            <Link className="flex items-center" href={siteConfig.links.linkedin} isExternal>
                <FaLinkedin style={{ color: iconColor }} size={30} />
            </Link>
        </div>
    );
}

export default SocialMedia;
