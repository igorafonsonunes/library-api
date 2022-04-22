CREATE TABLE loan(
    id INT PRIMARY KEY,
    library_id INT NOT NULL,
    book_id INT NOT NULL,
    reader_id INT NOT NULL,
    librarian_id INT NOT NULL,
    number_of_books INT NOT NULL,
    return_date timestamp,
    loan_return_time timestamp, 
    created_at timestamp DEFAULT current_timestamp,
    updated_at timestamp DEFAULT current_timestamp,
    FOREIGN KEY (library_id)
        REFERENCES library(id),
    FOREIGN KEY (book_id)
        REFERENCES book(id),
    FOREIGN KEY (reader_id)
        REFERENCES "user"(id),
    FOREIGN KEY (librarian_id)
        REFERENCES "user"(id)
);