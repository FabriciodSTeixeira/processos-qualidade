import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Cloro{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    pontoAnalise : string

    @Column()
    valorAnalise : number

    @Column()
    horarioAnalise : Date

    @CreateDateColumn()
    createdAt : Date
    @DeleteDateColumn()
    deletedAt : Date
    @UpdateDateColumn()
    updatedAt : Date


}