import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToOne, JoinColumn, Generated, ManyToMany} from "typeorm";
import { Product } from "./Product";
import { Order } from "./Order";

@Entity()
export class OrderItem {

    @PrimaryGeneratedColumn("uuid")    
    id: string;

    @ManyToOne(type => Order, order => order.orderItem)
    order: Order;

    @ManyToMany(type => Product)
    @JoinColumn()
    product: Product;

    @Column()
    amount: number;

}
