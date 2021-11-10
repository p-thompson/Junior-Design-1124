USE demo_app;
-- ------------------- Create User Procedure ----------
DROP PROCEDURE IF EXISTS register_user;
DELIMITER //
CREATE PROCEDURE register_user(
	   IN i_username VARCHAR(20),
       IN i_password VARCHAR(50),
	   IN i_fname VARCHAR(30),
       IN i_lname VARCHAR(30),
       in i_zip char(5),
	   in i_state char(2),
	   in i_city char(30),
	   in i_street char(30),
       IN i_cell varchar(15),
       in i_email VARCHAR(30), 
       in i_user_type ENUM('parent', 'volunteer')
)
BEGIN
INSERT INTO app_user (username, pass, first_name, last_name, zip, state, city, street, cell, email, user_type)
select i_username, Md5(i_password), i_fname, i_lname, i_zip, i_state, i_city, i_street, i_cell, i_email, i_user_type;

END //
DELIMITER ;
-- --------------------------- Validate Login Func ----------------------------------
DROP FUNCTION IF EXISTS validate_login;
CREATE FUNCTION validate_login (i_username varchar(20), i_password varchar(50))
RETURNS VARCHAR(50) DETERMINISTIC
RETURN (SELECT username
from app_user
where i_username = username and i_password = pass);


-- ---------------------------Validate Account Creation --------------------------------
DROP FUNCTION IF EXISTS validate_creation;
CREATE FUNCTION validate_creation (i_username varchar(20))
RETURNS VARCHAR(50) DETERMINISTIC
RETURN (SELECT username
from app_user
where i_username = username);

-- -------------------------------- Alter Account Info Generic ------------------------------------
DROP PROCEDURE IF EXISTS alter_info;
DELIMITER //
CREATE PROCEDURE alter_info(
	   IN i_id int,
	   IN i_username VARCHAR(20),
       IN i_password VARCHAR(50),
	   IN i_fname VARCHAR(30),
       IN i_lname VARCHAR(30),
       in i_zip char(5),
	   in i_state char(2),
	   in i_city char(30),
	   in i_street char(30),
       IN i_cell varchar(15),
       in i_email VARCHAR(30),
       in i_bio text
)
BEGIN
UPDATE app_user 
SET username=i_username, pass=Md5(i_password), first_name=i_fname, last_name=i_lname, zip=i_zip, state=i_state, city=i_city, street=i_street, cell=i_cell, email=i_email, bio=i_bio
where id=i_id;
END //
DELIMITER ;

-- -------------------------------- Add Parent Availability ------------------------------------
DROP PROCEDURE IF EXISTS add_parent_availability;
DELIMITER //
CREATE PROCEDURE add_parent_availability(
	   IN i_username VARCHAR(20),
       IN i_day_avail char(20),
       IN i_time_begin time,
       IN i_time_end time
)
BEGIN
INSERT INTO parent_days_available (username, day_avail, time_begin, time_end)
select i_username, i_day_avail, i_time_begin, i_time_end;
END //
DELIMITER ;

-- -------------------------------- Remove Parent Availability ------------------------------------
DROP PROCEDURE IF EXISTS remove_parent_availability;
DELIMITER //
CREATE PROCEDURE remove_parent_availability(
	   IN i_username VARCHAR(20),
       IN i_day_avail char(20),
       IN i_time_begin time,
       IN i_time_end time
)
BEGIN
DELETE FROM parent_days_available 
where username=i_username and day_avail=i_day_avail and time_begin=i_time_begin and time_end=i_time_end;
END //
DELIMITER ;

-- -------------------------------- Add Volunteer Availability ------------------------------------
DROP PROCEDURE IF EXISTS add_volunteer_availability;
DELIMITER //
CREATE PROCEDURE add_volunteer_availability(
	   IN i_username VARCHAR(20),
       IN i_day_avail char(20),
       IN i_time_begin time,
       IN i_time_end time
)
BEGIN
INSERT INTO volunteer_days_available (username, day_avail, time_begin, time_end)
select i_username, i_day_avail, i_time_begin, i_time_end;
END //
DELIMITER ;

-- -------------------------------- Remove Volunteer Availability ------------------------------------
DROP PROCEDURE IF EXISTS remove_volunteer_availability;
DELIMITER //
CREATE PROCEDURE remove_volunteer_availability(
	   IN i_username VARCHAR(20),
       IN i_day_avail char(20),
       IN i_time_begin time,
       IN i_time_end time
)
BEGIN
DELETE FROM volunteer_days_available 
where username=i_username and day_avail=i_day_avail and time_begin=i_time_begin and time_end=i_time_end;
END //
DELIMITER ;

-- -------------------------------- Alter Parent Services ------------------------------------
DROP PROCEDURE IF EXISTS alter_parent_services;
DELIMITER //
CREATE PROCEDURE alter_parent_services(
	   IN i_username VARCHAR(20),
       IN i_tutor boolean,
       IN i_babysit boolean,
       IN i_transportation boolean
)
BEGIN
UPDATE parent_services_needed
SET tutor=i_tutor, babysit=i_babysit, transportation=i_transportation
where username=i_username;
END //
DELIMITER ;

-- -------------------------------- Alter Volunteer Services  ------------------------------------
DROP PROCEDURE IF EXISTS alter_volunteer_services;
DELIMITER //
CREATE PROCEDURE alter_volunteer_services(
	   IN i_username VARCHAR(20),
       IN i_tutor boolean,
       IN i_babysit boolean,
       IN i_transportation boolean
)
BEGIN
UPDATE volunteer_services_provided
SET tutor=i_tutor, babysit=i_babysit, transportation=i_transportation
where username=i_username;
END //
DELIMITER ;