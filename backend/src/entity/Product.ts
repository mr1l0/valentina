import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne} from "typeorm";

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

}
