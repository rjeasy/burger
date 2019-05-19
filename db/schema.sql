CREATE DATABASE burger_db;
USE burger_db;

-- Create the table actors.
CREATE TABLE burgers (
  id int AUTO_INCREMENT,
  burger_name VARCHAR (50) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY(id)
);


select * from burgers;