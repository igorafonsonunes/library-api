import { Library } from "src/libraries/entities/library.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Stock {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    library_id: number

    @Column()
    book_id: number;
    
    @Column()
    number_avaible_books: number
    
    @Column()
    total_books: number;
    
    @Column({length: 50})
    shelf: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updated_at: string;

    @ManyToOne(() => Library, library => library.id)
    library: Library;
}
