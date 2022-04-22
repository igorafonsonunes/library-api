import { Book } from "src/books/entities/book.entity";
import { Library } from "src/libraries/entities/library.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, Timestamp } from "typeorm";

@Entity()
export class Loan {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    library_id: number;

    @Column()
    book_id: number;

    @Column()
    reader_id: number;

    @Column()
    librarian_id: number;

    @Column()
    number_of_books: number;

    @Column({ type: "timestamp"})
    return_date: string;

    @Column({ 
        nullable: true 
    })
    loan_return_time?: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updated_at: string;

    @OneToMany(() => Library, library => library.id)
    library: Library;

    @OneToMany(() => Book, book => book.id)
    book: Book;

    @OneToMany(() => User, user => user.id)
    @JoinColumn({name: "reader_id"})
    user_reader: User;

    @OneToMany(() => User, user => user.id)
    @JoinColumn({name: "librarian_id"})
    user_librarian: User;
}
