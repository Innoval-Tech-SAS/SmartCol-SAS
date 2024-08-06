import React, { useEffect, useState } from "react";

import { title } from "@/components/primitives";

interface BannerProps {
  bannerName: string;
  bannerTitle: string;
  bannerSubtitle: string;
}

const Banner: React.FC<BannerProps> = ({
  bannerName,
  bannerTitle,
  bannerSubtitle,
}) => {
  const [bannerRoute, setBannerRoute] = useState("");

  useEffect(() => {
    const updateBanner = () => {
      const isDark = document.documentElement.classList.contains("dark");
      const prefix = isDark ? "dark-" : "light-";
      const bannerTheme = `/img/${prefix}${bannerName}`;

      setBannerRoute(bannerTheme);
    };

    updateBanner();

    const observer = new MutationObserver(updateBanner);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, [bannerName]);

  return (
    <div
      className="w-full flex flex-col items-center justify-center bg-cover bg-center bg-no-repeat h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px]"
      style={{ backgroundImage: `url(${bannerRoute})` }}>
      <div className="rounded-xl py-1 px-6 text-center mb-4 lg:mb-0">
        <h1 className={` ${title()} text-white`}>{bannerTitle}</h1>
      </div>
      <span className="text-white font-semibold mt-1 text-base sm:text-lg md:text-xl lg:text-2xl leading-6 text-center max-w-screen-lg px-4 sm:px-6 md:px-8">
        {bannerSubtitle}
      </span>
    </div>
  );
};

export default Banner;
