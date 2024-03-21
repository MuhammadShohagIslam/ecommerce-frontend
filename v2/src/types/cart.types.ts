import { IProduct } from "./product.type";


export interface CountType {
    count: number; 
    color:string;
    size:string;
}

export type CartType = IProduct & CountType;
