export interface NewestProduct {
  _id: string;
  price: number;
  imageUrl: string;
  slug: string;
  categoryName: string;
  name: string;
}

export interface ProductInterface {
  _id: string;
  images: any;
  price: number;
  slug: string;
  categoryName: string;
  name: string;
  description: string;
}
