// context/FiltersContext.tsx
import React, {
  createContext,
  useState,
  useContext,
  useEffect,
  ReactNode,
} from "react";

import { Product } from "@/interfaces/Product";
import controller from "@/controllers/Controller";
import { AsideMenuProps } from "@/interfaces/ItemsMenu";

interface FiltersContextType {
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
  selectedSubcategory: string | null;
  setSelectedSubcategory: (subcategory: string | null) => void;
  selectedUse: string | null;
  setSelectedUse: (use: string | null) => void;
  filteredProducts: Product[];
  menuItems: AsideMenuProps["asideItems"];
  setProducts: (products: Product[]) => void;
}

const FiltersContext = createContext<FiltersContextType | undefined>(undefined);

export const FiltersProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(
    null,
  );
  const [selectedUse, setSelectedUse] = useState<string | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [menuItems, setMenuItems] = useState<AsideMenuProps["asideItems"]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const data = await controller.getAll("/products");
      console.log(data.data);

      console.log(data.data);

      setProducts(data.data);
      const transformedMenuItems = transformDataToMenu(data.data);

      setMenuItems(transformedMenuItems);
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    let newFilteredProducts = [...products];

    if (selectedCategory) {
      newFilteredProducts = newFilteredProducts.filter(
        (product) => product.subcategory.name === selectedCategory,
      );
    }

    if (selectedSubcategory) {
      newFilteredProducts = newFilteredProducts.filter(
        (product) => product.subcategory.name === selectedSubcategory,
      );
    }

    if (selectedUse) {
      newFilteredProducts = newFilteredProducts.filter((product: Product) => {
        const normalizedSelectedUse = removeAccents(
          selectedUse
            .toLowerCase()
            .trim()
            .replace(/[^a-z0-9]/g, ""),
        );

        const usesArray = product.uses?.split(",").map((use) =>
          removeAccents(
            use
              .trim()
              .toLowerCase()
              .replace(/[^a-z0-9]/g, ""),
          ),
        );

        return usesArray?.some((use) => use === normalizedSelectedUse);
      });
    }

    setFilteredProducts(newFilteredProducts);
  }, [selectedCategory, selectedSubcategory, selectedUse, products]);

  const transformDataToMenu = (
    data: Product[],
  ): AsideMenuProps["asideItems"] => {
    const menu: AsideMenuProps["asideItems"] = [];
    console.log("data", data);
    data.forEach((product) => {
      const { subcategory } = product;
      const category = subcategory.category.name;
      let categoryItem = menu.find((item) => item.title === category);

      if (!categoryItem) {
        categoryItem = {
          title: category,
          content: [],
        };
        menu.push(categoryItem);
      }

      if (!categoryItem.content?.includes(subcategory.name)) {
        categoryItem.content?.push(subcategory.name);
      }
    });

    return menu;
  };

  return (
    <FiltersContext.Provider
      value={{
        selectedCategory,
        setSelectedCategory,
        selectedSubcategory,
        setSelectedSubcategory,
        selectedUse,
        setSelectedUse,
        filteredProducts,
        menuItems,
        setProducts,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFilters = (): FiltersContextType => {
  const context = useContext(FiltersContext);

  if (!context) {
    throw new Error("useFilters must be used within a FiltersProvider");
  }

  return context;
};

function removeAccents(str: string) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}
