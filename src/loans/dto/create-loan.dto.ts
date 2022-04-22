export class CreateLoanDto {
    library_id: number;
    book_id: number;
    reader_id: number;
    librarian_id: number;
    number_of_books: number;
    return_date: string;
    loan_return_time?: string;
}