import { Library } from "src/libraries/entities/library.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:255})
    name:string;

    @Column({length:255})
    description: string;

    @Column({length:50})
    category: string;

    @Column()
    number_pages: number;

    @Column()
    library_id: number;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updated_at: string;

    @OneToOne(()=> Library) 
    library?: Library;
}
