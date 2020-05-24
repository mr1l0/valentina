import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne, OneToMany, UpdateDateColumn, CreateDateColumn} from "typeorm";
import { OrderItem } from "./OrderItem";
import { ProductGroup } from "./ProductGroup";

@Entity()
export class Product {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    name: string;

    @Column()
    description?: string;

    @Column()
    active: boolean;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @ManyToOne(type => ProductGroup, productGroup => productGroup.product)
    group: ProductGroup;

    @Column({ type: "double precision" })
    price: number;


}
