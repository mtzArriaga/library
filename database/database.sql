CREATE DATABASE ng_libreria_db;

USE ng_libreria_db;

CREATE TABLE categoria(
    idcategorias INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombreCategoria VARCHAR(45),
    cantidadLibros INT(11),
    editorial VARCHAR(30),
    fechaIngreso DATE,
    imagen VARCHAR(200)
);

CREATE TABLE libros(
    clave INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    categoria_idcategorias INT(11),
    nombre VARCHAR(45),
    edicion INT(11),
    cantidadTomos INT(11),
    precio DOUBLE,
    autor VARCHAR(40),
    horaEntrega TIME,
    imagen VARCHAR(200),
    FOREIGN KEY(categoria_idcategorias) REFERENCES categoria(idcategorias)
);

DESCRIBE categoria;
DESCRIBE libros;