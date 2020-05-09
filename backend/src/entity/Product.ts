import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne} from "typeorm";
import { OrderItem } from "./OrderItem";

@Entity()
export class Product {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    active: boolean;

    @Column()
    createdAt?: Date;

    @Column()
    updatedAt?: Date;

    @ManyToOne(type => OrderItem, orderItem => orderItem.product)
    orderItem: OrderItem[];

}
