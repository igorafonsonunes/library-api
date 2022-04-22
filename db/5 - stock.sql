CREATE TABLE stock(
    id INT PRIMARY KEY,
    library_id INT NOT NULL,
    book_id INT NOT NULL,
    number_avaible_books INT NOT NULL,
    total_books INT NOT NULL,
    shelf VARCHAR(50),
    created_at timestamp DEFAULT current_timestamp,
    updated_at timestamp DEFAULT current_timestamp,
    FOREIGN KEY (book_id)
        REFERENCES book(id),
    FOREIGN KEY (library_id)
        REFERENCES library(id)
);