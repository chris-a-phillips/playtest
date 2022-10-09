DROP TABLE IF EXISTS books;
DROP TABLE IF EXISTS authors;

CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    nationality VARCHAR(255),
    birth_year INTEGER
);

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    publication_date INTEGER,
    author_id INTEGER
);



INSERT INTO authors(name, nationality, birth_year) VALUES ('Cao Xueqin',         'China', 1715);
INSERT INTO books(title, publication_date, author_id) VALUES ('Fervor de Buenos Aires', 1923, 4);
