drop DATABASE burgers_db;
CREATE DATABASE IF NOT EXISTS burger_db;
USE burger_db;

CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  burger_name VARCHAR (50) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY(id)
);


select * from burgers;