import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, OneToMany, ManyToOne} from "typeorm";
import { Group } from "./Group";
import { UserAdress } from "./UserAdress";
import * as bcrypt from "bcryptjs";
import { Order } from "./Order";

@Entity()
export class User {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    cellphone: string;

    @Column()
    type: string;

    @Column()
    login: string;

    @Column()
    password: string;

    @OneToMany(type => UserAdress, userAdress => userAdress.user)
    Adresses: UserAdress[];

    @ManyToMany(type => Group)
    @JoinTable()
    categories: Group[];

    @OneToMany(type => Order, order => order.user)
    order: Order[];


    token: string;

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }

    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return true;
        //return unencryptedPassword == this.password;
        //return bcrypt.compareSync(unencryptedPassword, this.password);
    }

}
