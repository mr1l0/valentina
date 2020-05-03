import { Product } from "./product";

export interface OrderItem {

    id?: string;

    product: Product;

    amount?: number;
    
}
