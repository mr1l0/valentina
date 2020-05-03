import {Entity, PrimaryGeneratedColumn, Column, OneToMany, OneToOne, JoinColumn, UpdateDateColumn, CreateDateColumn, Index, ManyToMany} from "typeorm";
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

    @ManyToMany(type => User)
    @JoinColumn()
    user: User;

    @ManyToMany(type => UserAdress)
    @JoinColumn()
    userAdress: UserAdress;

    @OneToMany(type => OrderItem, OrderItem => OrderItem.order)
    orderItem: OrderItem[];

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;    
}
