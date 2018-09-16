DROP DATABASE IF EXISTS friend_finder_db;

CREATE DATABASE friend_finder_db;

USE friend_finder_db;

CREATE TABLE user_answers(
	id INT NOT NULL AUTO_INCREMENT,
	username VARCHAR(255),
    img_url VARCHAR(255),
    answer1 INT,
    answer2 INT,
    answer3 INT,
    answer4 INT,
    answer5 INT,
    answer6 INT,
    answer7 INT,
    answer8 INT,
    answer9 INT,
    answer10 INT,
	PRIMARY KEY (id)
);

