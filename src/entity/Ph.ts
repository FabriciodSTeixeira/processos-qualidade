import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class Ph{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nomeProduto : string

    @Column()
    valorPh : number

    @Column()
    horarioAnalise : Date

    @CreateDateColumn()
    createdAt : Date
    @DeleteDateColumn()
    deletedAt : Date
    @UpdateDateColumn()
    updatedAt : Date


}