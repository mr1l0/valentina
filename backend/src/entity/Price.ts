import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne} from "typeorm";

@Entity()
export class Price {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    amount: number;

    @Column({ type: "double precision" })
    value: number;

    @Column()
    active: boolean;

    @Column()
    createdAt?: Date;

    @Column()
    updatedAt?: Date;

}
