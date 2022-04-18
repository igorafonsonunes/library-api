CREATE TABLE library(
    id INT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    CNPJ VARCHAR(11) UNIQUE NOT NULL,
    adress_id INT NOT NULL,
    created_at timestamp DEFAULT current_timestamp,
    updated_at timestamp DEFAULT current_timestamp,
    FOREIGN KEY (adress_id)
        REFERENCES adress(id)
);