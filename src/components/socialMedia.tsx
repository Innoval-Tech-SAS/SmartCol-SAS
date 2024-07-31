import React from "react";
import { useState, useEffect } from "react";
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaLinkedin,
    FaYoutube,
    FaTiktok,
} from "react-icons/fa";


const SocialMedia: React.FC = () => {
    const [iconColor, setIconColor] = useState("");

    useEffect(() => {
        const updateIconColor = () => {
            const isDark = document.documentElement.classList.contains('dark');
            const color = isDark ? "#E6D38E" : "#456E2A"
            setIconColor(color)
        }

        updateIconColor()

        const observer = new MutationObserver(updateIconColor);
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class'],
        });

        return () => observer.disconnect();
    }, [])
    return (
        <div className="flex w-full justify-center items-center gap-20 py-5 border-y-2 border-primary">
            <div className="">
                <FaFacebook style={{ color: iconColor }} size={30} />
            </div>
            <div className="">
                <FaTwitter style={{ color: iconColor }} size={30} />
            </div>
            <div className="">
                <FaInstagram style={{ color: iconColor }} size={30} />
            </div>
            <div className="">
                <FaYoutube style={{ color: iconColor }} size={30} />
            </div>
            <div className="">
                <FaTiktok style={{ color: iconColor }} size={30} />
            </div>
            <div className="">
                <FaLinkedin style={{ color: iconColor }} size={30} />
            </div>
        </div>
    )
}

export default SocialMedia;