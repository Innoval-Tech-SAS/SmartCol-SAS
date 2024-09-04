import React from "react";
import { Accordion, AccordionItem } from "@nextui-org/accordion";

import { AsideMenuProps } from "@/interfaces/ItemsMenu";

const AsideMenu: React.FC<AsideMenuProps> = ({
  asideItems,
  onCategorySelect,
  onSubcategorySelect,
}) => {
  const linkStyles =
    "relative inline-flex hover:cursor-pointer lg:text-sm items-center tap-highlight-transparent  outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium text-foreground no-underline hover:opacity-80 active:opacity-disabled transition-opacity w-full font-normal before:mr-4 before:content-[''] before:block before:bg-default-300 before:w-1 before:h-1 before:rounded-full";

  const asideStyles =
    "p-2 max-w-full hidden md:inline-block h-screen overflow-y-auto";

  return (
    <aside className={asideStyles} id="aside-element">
      <div className="text-center">
        <h2 className="text-primary text-md my-1 font-semibold">
          Filtrar por Categoría
        </h2>
      </div>
      <Accordion variant="light">
        {asideItems?.map((item, index) => (
          <AccordionItem key={index} title={item.title}>
            {item.content && (
              <ul>
                {item.content.map((contentItem, contentIndex) => (
                  <li
                    key={contentIndex}
                    className={linkStyles}
                    onClick={() =>
                      item.content?.length > 1
                        ? onSubcategorySelect(contentItem)
                        : onCategorySelect(item.title)
                    }
                  >
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
