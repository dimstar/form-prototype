DROP DATABASE IF EXISTS fl_prototype;

CREATE DATABASE fl_prototype;

USE fl_prototype;

CREATE TABLE applicant (
    id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
    name VARCHAR(255)
);