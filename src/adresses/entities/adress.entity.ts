import { Library } from "src/libraries/entities/library.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Adress {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 255})
    street: string;

    @Column({length: 20})
    number: string;
    
    @Column({length: 255})
    complement: string;

    @Column({length: 30})
    state: string;

    @Column({length: 2})
    uf: string;

    @Column({length: 8})
    cep: string;

    @Column()
    library_id?:number;

    @Column()
    user_id?:number;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    created_at: string;

    @Column({ type: "timestamp", default: () => "CURRENT_TIMESTAMP"})
    updated_at: string;

    @OneToOne(()=> Library) 
    library?: Library;

    @OneToOne(()=> User) 
    user?: User;
}
