CREATE TABLE "user"(
    id INT PRIMARY KEY,
    library_id INT,
    name VARCHAR(255) NOT NULL,
    cpf VARCHAR(11) UNIQUE NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    sex VARCHAR(1) NOT NULL, 
    date_of_birthday timestamp NOT NULL,
    type VARCHAR(1) NOT NULL,
    created_at timestamp DEFAULT current_timestamp,
    updated_at timestamp DEFAULT current_timestamp,
    FOREIGN KEY (library_id)
        REFERENCES library(id)
);

/*
drop table loan;
drop table "user";
drop table stock;
drop table book;
drop table adress;
drop table library;
*/