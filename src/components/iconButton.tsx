import React, { useEffect, useState } from "react";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

interface IconButtonProps {
  url?: string | undefined;
  title: string;
  iconName: string;
  variant?:
    | "solid"
    | "ghost"
    | "bordered"
    | "light"
    | "flat"
    | "faded"
    | "shadow"
    | undefined;
  textColor?: string;
  darkTextColor?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  darkTextColor,
  url,
  title,
  iconName,
  textColor,
  variant,
}) => {
  const [iconSrc, setIconSrc] = useState("");
  const iconsRoute = "icons/";

  useEffect(() => {
    const updateIconSrc = () => {
      const isDark = document.documentElement.classList.contains("dark");
      const prefix = isDark ? "dark-" : "light-";
      const formattedIconName = `${iconsRoute}${prefix}${iconName}`;

      setIconSrc(formattedIconName);
    };

    updateIconSrc();

    const observer = new MutationObserver(updateIconSrc);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [iconName, iconsRoute]);

  return (
    <div className="flex flex-col items-center justify-center gap-5">
      <div className="w-full max-w-xs flex justify-center items-center">
        <img alt={title} className="w-auto max-h-32 sm:h-24" src={iconSrc} />
      </div>
      <div
        className="flex items-center justify-center w-full"
        id="button-container">
        <Link className="w-5/6" href={url} title={title}>
          <Button
            className={`w-full ${textColor} font-bold sm:text-sm flex justify-center ${darkTextColor}`}
            color="primary"
            radius="full"
            variant={variant}>
            {title}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default IconButton;
