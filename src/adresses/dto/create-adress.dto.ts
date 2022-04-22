export class CreateAdressDto {
    street: string;
    number: string;
    complement: string;
    state: string;
    uf: string;
    cep: string;
    library_id?: number;
    user_library_id?:number;
}