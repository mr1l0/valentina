import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany, CreateDateColumn, UpdateDateColumn} from "typeorm";
import { Product } from "./Product";

@Entity()
export class ProductGroup {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    active: boolean;

    @CreateDateColumn()
    createdAt?: Date;

    @UpdateDateColumn()
    updatedAt?: Date;

    @OneToMany(type => Product, product => product.group)
    product: Product[];

}
