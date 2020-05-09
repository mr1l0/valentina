import {Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn, UpdateDateColumn, CreateDateColumn, Index, ManyToMany, ManyToOne} from "typeorm";
import { UserAdress } from "./UserAdress";
import { OrderItem } from "./OrderItem";
import { User } from "./User";

@Entity()
export class Order {

    @PrimaryGeneratedColumn("uuid")    
    id: string;

    @Column()
    state: string; 

    @Column()
    scheduledTo: Date;

    @ManyToOne(type => User, user => user.order)    
    user: User;

    @ManyToOne(type => UserAdress, userAdress => userAdress.order)    
    userAdress: UserAdress;

    @OneToMany(type => OrderItem, OrderItem => OrderItem.order)
    orderItem: OrderItem[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;    
}
