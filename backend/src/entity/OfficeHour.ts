import {Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable, ManyToOne} from "typeorm";

@Entity()
export class OfficeHour {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column()
    weekDay: number;

    @Column()
    startHourTurnOne: number;

    @Column()
    endHourTurnOne: number;

    @Column()
    startHourTurnTwo?: number;

    @Column()
    endHourTurnTwo?: number;

}
