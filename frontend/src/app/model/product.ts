import { ProductGroup } from './product-group';

export interface Product {

    id: string;

    name: string;

    description: string;

    group: ProductGroup;

    active: boolean;

    price: number;

    createdAt?: Date;

    updatedAt?: Date;
    
}
