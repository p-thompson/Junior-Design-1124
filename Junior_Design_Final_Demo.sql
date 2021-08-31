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
	username char(15) NOT NULL,
	pass char(15) NOT NULL,
    first_name char(30) NOT NULL,
	last_name char(30) NOT NULL,
	zip char(5),
	state char(2),
	city char(30),
	street char(30),
    cell char(15),
    email char(30),
	PRIMARY KEY (username)
) ENGINE=InnoDB;

-- Table Creation for a Single Parent
DROP TABLE IF EXISTS parent;
CREATE TABLE parent (
	username char(15) NOT NULL,
    bio text,
    num_children decimal(2,0),
    PRIMARY KEY (username),
	CONSTRAINT parent_username_constraint FOREIGN KEY (username) REFERENCES app_user (username)
) ENGINE=InnoDB;

-- Table Creation for a Volunteer
DROP TABLE IF EXISTS volunteer;
CREATE TABLE volunteer (
	username char(15) NOT NULL,
    bio text,
    PRIMARY KEY (username),
	CONSTRAINT volunteer_username_constraint FOREIGN KEY (username) REFERENCES app_user (username)
) ENGINE=InnoDB;

-- Table Creation for Multivalued Attribute Parent Days Available
DROP TABLE IF EXISTS parent_days_available;
CREATE TABLE parent_days_available (
	username char(15) NOT NULL,
    day_avail char(20) NOT NULL,
    time_begin time NOT NULL,
    time_end time NOT NULL,
    PRIMARY KEY (username, day_avail, time_begin, time_end),
	CONSTRAINT parent_days_available_username_constraint FOREIGN KEY (username) REFERENCES parent (username)
) ENGINE=InnoDB;

-- Table Creation for Multivalued Attribute Volunteer Days Available
DROP TABLE IF EXISTS volunteer_days_available;
CREATE TABLE volunteer_days_available (
	username char(15) NOT NULL,
    day_avail char(20) NOT NULL,
    time_begin time NOT NULL,
    time_end time NOT NULL,
    PRIMARY KEY (username, day_avail, time_begin, time_end),
	CONSTRAINT volunteer_days_available_username_constraint FOREIGN KEY (username) REFERENCES volunteer (username)
) ENGINE=InnoDB;

-- Table Creation for Multivalued Attribute Volunteer Services Provided
DROP TABLE IF EXISTS volunteer_services_provided;
CREATE TABLE volunteer_services_provided (
	username char(15) NOT NULL,
    service char(20) NOT NULL,
    PRIMARY KEY (username, service),
	CONSTRAINT services_provided_username_constraint FOREIGN KEY (username) REFERENCES volunteer (username)
) ENGINE=InnoDB;

-- Table Creation for Multivalued Attribute Volunteer Services Needed
DROP TABLE IF EXISTS parent_services_needed;
CREATE TABLE parent_services_needed (
	username char(15) NOT NULL,
    service char(20) NOT NULL,
    PRIMARY KEY (username, service),
	CONSTRAINT services_needed_username_constraint FOREIGN KEY (username) REFERENCES parent (username)
) ENGINE=InnoDB;


-- ------------------------------------------------------ Inserting User Data to Database ------------------------------------------------
-- Insert into App Users
INSERT INTO app_user VALUES ('janedoe34','mypassword','Jane','Doe','30308','GA','Atlanta','15 Tech Lane', '404-444-4444', 'janedoe@gatech.edu');
INSERT INTO app_user VALUES ('bobwilson88','mypassword2','Bob','Wilson','30308','GA','Atlanta','10 Buzz Drive', '404-888-8888', 'bobwilson@gatech.edu');
INSERT INTO app_user VALUES ('annasmith20','mypassword3','Anna','Smith','30308','GA','Atlanta','101 Jacket Way', '404-555-5555', 'asmith@gatech.edu');
INSERT INTO app_user VALUES ('joebrown56','mypassword4','Joe','Brown','30308','GA','Atlanta','77 Ferst Drive', '404-999-9999', 'joebrown@gatech.edu');

-- Insert into Volunteer
INSERT INTO parent VALUES ('janedoe34', 'My name is Jane. I have two children aged 8 and 9. I am looking for a tutor in math for both of them', 2);
INSERT INTO parent VALUES ('joebrown56', 'My name is Joe Brown. I have one child aged 5 and am looking for someone to watch her while I am at work. 
I am also looking for someone to tutor her in english', 1);

-- Insert into Parent
INSERT INTO volunteer VALUES ('bobwilson88', 'My name is Bob. I am a volunteer who can tutor in math and science.');
INSERT INTO volunteer VALUES ('annasmith20', 'My name is Anna. I can tutor in english and I can also babysit and do housework.');

-- Insert into Parent Services Needed and Days Available
INSERT INTO parent_services_needed VALUES ('janedoe34', 'tutor');
INSERT INTO parent_days_available VALUES ('janedoe34', 'Monday', '11:30', '15:00');
INSERT INTO parent_days_available VALUES ('janedoe34', 'Wednesday', '11:30', '15:00');
INSERT INTO parent_days_available VALUES ('janedoe34', 'Friday', '11:30', '15:00');

INSERT INTO parent_services_needed VALUES ('joebrown56', 'tutor');
INSERT INTO parent_services_needed VALUES ('joebrown56', 'babysitter');
INSERT INTO parent_days_available VALUES ('joebrown56', 'Tuesday', '11:30', '15:00');
INSERT INTO parent_days_available VALUES ('joebrown56', 'Tuesday', '8:00', '10:45');

-- Insert into Volunteer Services Provided and Days Available
INSERT INTO volunteer_services_provided VALUES ('bobwilson88', 'tutor');
INSERT INTO volunteer_days_available VALUES ('bobwilson88', 'Wednesday', '10:00', '17:00');
INSERT INTO volunteer_days_available VALUES ('bobwilson88', 'Friday', '10:00', '17:00');

INSERT INTO volunteer_services_provided VALUES ('annasmith20', 'tutor');
INSERT INTO volunteer_services_provided VALUES ('annasmith20', 'babysitter');
INSERT INTO volunteer_days_available VALUES ('annasmith20', 'Tuesday', '7:00', '13:00');
INSERT INTO volunteer_days_available VALUES ('annasmith20', 'Friday', '10:00', '17:00');

-- ----------------------------------------------------- Automatic Match Algorithm -------------------------------------------------------
DROP PROCEDURE IF EXISTS parent_automatic_matching;
DELIMITER //

CREATE PROCEDURE parent_automatic_matching(
	   IN i_username varchar(15)
)
BEGIN
SELECT concat(app_user.first_name, ' ', app_user.last_name) as volunteer, 
volunteer_services_provided.service as service,
volunteer_days_available.day_avail as day,
volunteer_days_available.time_begin as start_time, 
volunteer_days_available.time_end as end_time
from volunteer 
join app_user on app_user.username = volunteer.username
join volunteer_days_available on volunteer.username = volunteer_days_available.username
join parent_days_available on volunteer_days_available.day_avail = parent_days_available.day_avail 
join parent on parent.username = parent_days_available.username
join parent_services_needed on parent.username = parent_services_needed.username
join volunteer_services_provided on volunteer.username = volunteer_services_provided.username
where (volunteer_days_available.time_begin <= parent_days_available.time_begin 
and volunteer_days_available.time_end >= parent_days_available.time_end
and volunteer_services_provided.service = parent_services_needed.service
and parent.username = i_username);
END //
DELIMITER ;

CALL parent_automatic_matching('janedoe34');