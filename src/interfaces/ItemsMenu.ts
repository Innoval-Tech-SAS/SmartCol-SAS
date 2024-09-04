export interface ItemsMenu {
  title: string;
  subtitle?: string;
  url?: string;
  content: Array<string>;
}

export interface AsideMenuProps {
  asideItems: ItemsMenu[];
  onCategorySelect: (category: string) => void;
  onSubcategorySelect: (subcategory: string) => void;
}
