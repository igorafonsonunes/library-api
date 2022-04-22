import { Library } from "src/libraries/entities/library.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    library_id: number;

    @Column({length: 255})
    name: string;

    @Column({length: 11})
    cpf:string;

    @Column({length: 100})
    email: string;

    @Column({length: 255})
    password:string;
    
    @Column({length: 1})
    sex: string;

    @Column()
    date_of_birthday: Date;

    @Column({length: 1})
    type: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updated_at: string;

    @ManyToOne(()=> Library) 
    @JoinColumn({name:"library_id"})
    library?: Library;
}
