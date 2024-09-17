export interface ItemsMenu {
  title: string;
  subtitle?: string;
  url?: string;
  content: Array<string>;
}

// interfaces/ItemsMenu.ts
export interface AsideMenuProps {
  asideItems: {
    title: string;
    content: string[];
  }[];
  onCategorySelect: (category: string | null) => void;
  onSubcategorySelect: (subcategory: string | null) => void;
  onUseSelect?: (use: string | null) => void;
}
