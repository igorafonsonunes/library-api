CREATE TABLE adress(
    id INT PRIMARY KEY,
    street VARCHAR(255) NOT NULL,
    number VARCHAR(20) NOT NULL,
    cep VARCHAR(255),
    complement VARCHAR(255) NOT NULL,
    state VARCHAR(25) NOT NULL,
    uf VARCHAR(2) NOT NULL,
    created_at timestamp DEFAULT current_timestamp,
    updated_at timestamp DEFAULT current_timestamp
);