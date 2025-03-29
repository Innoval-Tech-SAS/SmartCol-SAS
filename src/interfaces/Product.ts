export interface Category {
  id: number;
  name: string;
}

export interface Subcategory {
  id: number;
  name: string;
  categoryId: number;
  category: Category;
}

export interface Product {
  id?: number;
  name: string;
  price: number | null;
  imgname: string;
  technicalSheet: string | null;
  um: string;
  presentation: string;
  description: string;
  uses: string;
  subCategoryId: number;
  subcategory: Subcategory;
  quantity?: number;
  isActive?: boolean;
}