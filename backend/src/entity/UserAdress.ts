import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany} from "typeorm";
import { User } from "./User";
import { Order } from "./Order";

@Entity()
export class UserAdress {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    cep: string;

    @Column()
    street: string;

    @Column()
    number: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    more: string;

    @ManyToOne(type => User, user => user.Adresses)
    user: User;

    @OneToMany(type => Order, order => order.userAdress)
    order: Order[];
}
