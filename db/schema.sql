-- db/schema.sql
DROP DATABASE IF EXISTS tuner;

CREATE DATABASE tuner;

\c tuner;

CREATE TABLE songs(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    artist TEXT,
    album TEXT,
    time TEXT,
    is_favorite BOOLEAN
);

