export interface Product {
  id?: number;
  category: string;
  subcategory: string;
  name: string;
  imgname: string;
  um: string;
  presentation: string;
  technicalsheet?: string;
  description?: string;
  uses?: string;
  quantity?: number;
}
