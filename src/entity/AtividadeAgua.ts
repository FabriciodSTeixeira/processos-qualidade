import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, DeleteDateColumn, UpdateDateColumn} from "typeorm";

@Entity()
export class AtividadeAgua{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nomeProduto : string

    @Column()
    valorAW : number

    @Column()
    temperaturaAnalise : number

    @Column()
    horarioAnalise : Date

    @CreateDateColumn()
    createdAt : Date
    @DeleteDateColumn()
    deletedAt : Date
    @UpdateDateColumn()
    updatedAt : Date


}