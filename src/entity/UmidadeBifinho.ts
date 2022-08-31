import { Entity, PrimaryGeneratedColumn, Column, Unique, CreateDateColumn,UpdateDateColumn } from "typeorm"
import {Length, IsNotEmpty, isNotEmpty} from "class-validator";

@Entity()
export class UmidadeBifinho {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    @Length(1,35)
    nome_produto: string

    @Column()
    @IsNotEmpty()
    resultado_analise: string

    @Column()
    @IsNotEmpty()
    data_analise : string

    @Column()
    @CreateDateColumn()
    createdAt: Date

    @Column()
    @UpdateDateColumn()
    updatedAt: Date

};

export default UmidadeBifinho;