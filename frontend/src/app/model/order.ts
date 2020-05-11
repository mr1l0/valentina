import { OrderItem } from './order-item';
import { UserAdress } from './user-adress';
import { User } from './user';

export interface Order {

    id?: string;
    
    state?: string; 

    user?: User;

    scheduledTo?: Date;

    userAdress?: UserAdress;

    orderItem?: OrderItem[];

    sumAmount?: Number;

    sumValue?: Number;    

    createdAt?: Date;

    updatedAt?: Date;
    
}
