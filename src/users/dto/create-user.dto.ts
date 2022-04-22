export class CreateUserDto {
    library_id: number;
    name: string;
    cpf:string;
    email: string;
    password:string;
    sex: string;
    date_of_birthday: Date;
    type: string;
}