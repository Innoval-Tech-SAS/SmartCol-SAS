import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

interface ItemsMenu {
  title?: string;
  subtitle?: string;
  url?: string;
  content?: Array<string>;
}

export interface AsideMenuProps {
  asideItems: ItemsMenu[];
}

const AsideMenu: React.FC<AsideMenuProps> = ({ asideItems }) => {
  const linkStyles =
    "relative inline-flex items-center tap-highlight-transparent  outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-foreground no-underline hover:opacity-80 active:opacity-disabled transition-opacity w-full font-normal before:mr-4 before:content-[''] before:block before:bg-default-300 before:w-1 before:h-1 before:rounded-full";

  return (
    <aside className="p-2 w-full max-w-xs hidden md:inline-block">
      <Accordion isCompact variant="light">
        {asideItems?.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            subtitle={item.subtitle}
          >
            {item.content && (
              <ul>
                {item.content.map((contentItem, contentIndex) => (
                  <li className={linkStyles} key={contentIndex}>
                    {contentItem}
                  </li>
                ))}
              </ul>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </aside>
  );
};

export default AsideMenu;
