CREATE TABLE adress(
    id INT PRIMARY KEY,
    street VARCHAR(255) NOT NULL,
    number VARCHAR(20) NOT NULL,
    cep VARCHAR(255),
    complement VARCHAR(255) NOT NULL,
    state VARCHAR(25) NOT NULL,
    uf VARCHAR(2) NOT NULL,
    library_id INT,
    user_library_id INT,
    created_at timestamp DEFAULT current_timestamp,
    updated_at timestamp DEFAULT current_timestamp,
    FOREIGN KEY (library_id)
        REFERENCES library(id),
    FOREIGN KEY (user_library_id)
        REFERENCES user_library(id)
);