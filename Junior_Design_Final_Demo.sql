-- CS 3311/LMC 3432 Final Presentation Demo
-- Junior Design Team 1124
-- Sunday, April 18, 2021

DROP DATABASE IF EXISTS demo_app;
CREATE DATABASE IF NOT EXISTS demo_app;
USE demo_app;

-- --------------------------------------------------------- Database Creation -----------------------------------------------------------
-- Table Creation for an Application User
DROP TABLE IF EXISTS app_user;
CREATE TABLE app_user (
	id int NOT NULL AUTO_INCREMENT,
    username varchar(20) NOT NULL,
	pass varchar(50) NOT NULL,
    first_name char(30) NOT NULL,
	last_name char(30) NOT NULL,
	zip char(5),
	state char(2),
	city char(30),
	street char(30),
    cell varchar(15),
    email varchar(30),
    bio text,
    user_type ENUM('parent', 'volunteer'),
    unique(username),
	PRIMARY KEY (id)
) ENGINE=InnoDB;


-- Table Creation for tasks
DROP TABLE IF EXISTS task;
CREATE TABLE task (
	id int not null auto_increment,
	username char(15) NOT NULL,
    day_avail char(20) NOT NULL,
    time_begin time NOT NULL,
    time_end time NOT NULL,
    service ENUM('tutor', 'babysit', 'transportation'),
    PRIMARY KEY (id),
	CONSTRAINT parent_days_available_username_constraint FOREIGN KEY (username) REFERENCES app_user (username)
	on update cascade
) ENGINE=InnoDB;

-- Table Creation for Multivalued Attribute Volunteer Days Available
DROP TABLE IF EXISTS volunteer_days_available;
CREATE TABLE volunteer_days_available (
	username char(15) NOT NULL,
    day_avail char(20) NOT NULL,
    time_begin time NOT NULL,
    time_end time NOT NULL,
    PRIMARY KEY (username, day_avail, time_begin, time_end),
	CONSTRAINT volunteer_days_available_username_constraint FOREIGN KEY (username) REFERENCES app_user (username)
	on update cascade
) ENGINE=InnoDB;

-- Table Creation for Multivalued Attribute Volunteer Services Provided
DROP TABLE IF EXISTS volunteer_services_provided;
CREATE TABLE volunteer_services_provided (
    username char(15) NOT NULL,
    tutor boolean default false,
    babysit boolean default false,
    transportation boolean default false,
    PRIMARY KEY (username),
	CONSTRAINT services_provided_username_constraint FOREIGN KEY (username) REFERENCES app_user (username)
	on update cascade
) ENGINE=InnoDB;

-- ------------------------------------------------------ Inserting User Data to Database ------------------------------------------------
-- Insert into App Users
INSERT INTO app_user VALUES (1,'janedoe34','mypassword','Jane','Doe','30308','GA','Atlanta','15 Tech Lane', '404-444-4444', 'janedoe@gatech.edu', 'My name is Jane. I have two children aged 8 and 9. I am looking for a tutor in math for both of them', 'parent');
INSERT INTO app_user VALUES (2,'bobwilson88','mypassword2','Bob','Wilson','30308','GA','Atlanta','10 Buzz Drive', '404-888-8888', 'bobwilson@gatech.edu', 'My name is Bob. I am a volunteer who can tutor in math and science.', 'volunteer');
INSERT INTO app_user VALUES (3,'annasmith20','mypassword3','Anna','Smith','30308','GA','Atlanta','101 Jacket Way', '404-555-5555', 'asmith@gatech.edu', 'My name is Anna. I can tutor in english and I can also babysit and do housework.', 'volunteer');
INSERT INTO app_user VALUES (4,'joebrown56','mypassword4','Joe','Brown','30308','GA','Atlanta','77 Ferst Drive', '404-999-9999', 'joebrown@gatech.edu', 'My name is Joe Brown. I have one child aged 5 and am looking for someone to watch her while I am at work. 
							I am also looking for someone to tutor her in english', 'parent');
-- Insert into tasks
INSERT INTO task VALUES (1, 'janedoe34', 'Friday', '11:30', '15:00', 'babysit');

-- Insert into Volunteer Services Provided and Days Available
INSERT INTO volunteer_services_provided VALUES ('bobwilson88', true, true, false);
INSERT INTO volunteer_days_available VALUES ('bobwilson88', 'Wednesday', '10:00', '17:00');
INSERT INTO volunteer_days_available VALUES ('bobwilson88', 'Friday', '10:00', '17:00');

INSERT INTO volunteer_services_provided VALUES ('annasmith20', true, true, true);
INSERT INTO volunteer_days_available VALUES ('annasmith20', 'Tuesday', '7:00', '13:00');
INSERT INTO volunteer_days_available VALUES ('annasmith20', 'Friday', '10:00', '17:00');