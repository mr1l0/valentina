import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne} from "typeorm";
import { User } from "./User";

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
}
