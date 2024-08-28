import React, { useState, useEffect } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "@nextui-org/link";

import { siteConfig } from "@/config/site";

const SocialMedia: React.FC = () => {
  const [iconColor, setIconColor] = useState("");

  useEffect(() => {
    const updateIconColor = () => {
      const isDark = document.documentElement.classList.contains("dark");
      const color = isDark ? "#E6D38E" : "#456E2A";

      setIconColor(color);
    };

    updateIconColor();

    const observer = new MutationObserver(updateIconColor);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="w-full flex flex-wrap justify-center items-center gap-10 sm:gap-10 md:gap-12 py-5 border-y-2 border-primary">
      <Link
        isExternal
        className="flex items-center"
        href={siteConfig.links.facebook}
      >
        <FaFacebook size={30} style={{ color: iconColor }} />
      </Link>
      <Link
        isExternal
        className="flex items-center"
        href={siteConfig.links.twitter}
      >
        <FaXTwitter size={30} style={{ color: iconColor }} />
      </Link>
      <Link
        isExternal
        className="flex items-center"
        href={siteConfig.links.instagram}
      >
        <FaInstagram size={30} style={{ color: iconColor }} />
      </Link>
      <Link
        isExternal
        className="flex items-center"
        href={siteConfig.links.youtube}
      >
        <FaYoutube size={30} style={{ color: iconColor }} />
      </Link>
      <Link
        isExternal
        className="flex items-center"
        href={siteConfig.links.tiktok}
      >
        <FaTiktok size={30} style={{ color: iconColor }} />
      </Link>
      <Link
        isExternal
        className="flex items-center"
        href={siteConfig.links.linkedin}
      >
        <FaLinkedin size={30} style={{ color: iconColor }} />
      </Link>
    </div>
  );
};

export default SocialMedia;
