import React from "react";
import { IBrand } from "./brand.types";
import { ICategory } from "./category.type";
import { IColor } from "./color.types";
import { ISize } from "./size.types";
import { ISubCategory } from "./sub-category.type";

export interface IProduct {
    _id: string;
    name: string;
    slug: string;
    description: string;
    price: number;
    discount: number;
    keyFeatures: { [key: string]: React.ReactNode }[];
    category: ICategory;
    subCategory: ISubCategory[];
    quantity: number;
    sold: number;
    imageURLs: [string];
    shipping: string;
    colors: IColor[];
    sizes: ISize[];
    brand: IBrand;
    updatedAt: Date;
    __v: number;
}
