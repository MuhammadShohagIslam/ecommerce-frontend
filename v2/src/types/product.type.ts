import { IBrand } from "./brand.types";
import { ICategory } from "./category.type";
import { IColor } from "./color.types";
import { ISize } from "./size.types";
import { ISubCategory } from "./sub-category.type";


export interface IProduct {
    _id: string;
    title: string;
    slug: string;
    description: string;
    price: number;
    discount: number;
    category: ICategory;
    subCategory: ISubCategory[];
    quantity: number;
    sold: number;
    imageURL: [string];
    shipping: string;
    colors: IColor[];
    sizes: ISize[];
    brand: IBrand;
    updatedAt: Date;
    __v: number;
}
