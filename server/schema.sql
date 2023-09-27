CREATE DATABASE MercedesUnClick;

Use MercedesUnClick;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) ,
    email VARCHAR(255) NOT NULL UNIQUE ,
    password VARCHAR(255)
);

CREATE TABLE todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    completed BOOLEAN DEFAULT false,
    user_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

CREATE TABLE shared_todos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    todo_id INT,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES todos(id),
    FOREIGN KEY (todo_id) REFERENCES users(id)
);

-- Insert two users into the users table
INSERT INTO users (name, email, password) VALUES ('Ramiro','ramirocarusi@hotmail.com','password1');
INSERT INTO users (name, email, password) VALUES ('Alberto','alberto@hotmail.com','password2');