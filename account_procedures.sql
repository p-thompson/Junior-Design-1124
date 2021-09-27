USE demo_app;
-- ------------------- Create Parent Procedure ----------
DROP PROCEDURE IF EXISTS register_parent;
DELIMITER //
CREATE PROCEDURE register_parent(
	   IN i_username VARCHAR(20),
       IN i_password VARCHAR(50),
	   IN i_fname VARCHAR(30),
       IN i_lname VARCHAR(30),
       in i_zip char(5),
	   in i_state char(2),
	   in i_city char(30),
	   in i_street char(30),
       IN i_cell varchar(15),
       in i_email VARCHAR(30)
)
BEGIN
INSERT INTO app_user (username, pass, first_name, last_name, zip, state, city, street, cell, email)
select i_username, Md5(i_password), i_fname, i_lname, i_zip, i_state, i_city, i_street, i_cell, i_email;

INSERT INTO Parent (Username)
select i_username;
END //
DELIMITER ;

-- ------------------- Create Volunteer Procedure ----------
DROP PROCEDURE IF EXISTS register_volunteer;
DELIMITER //
CREATE PROCEDURE register_volunteer(
	   IN i_username VARCHAR(20),
       IN i_password VARCHAR(50),
	   IN i_fname VARCHAR(30),
       IN i_lname VARCHAR(30),
       in i_zip char(5),
	   in i_state char(2),
	   in i_city char(30),
	   in i_street char(30),
       IN i_cell varchar(15),
       in i_email VARCHAR(30)
)
BEGIN
INSERT INTO app_user (username, pass, first_name, last_name, zip, state, city, street, cell, email)
select i_username, Md5(i_password), i_fname, i_lname, i_zip, i_state, i_city, i_street, i_cell, i_email;

INSERT INTO Volunteer (Username)
select i_username;
END //
DELIMITER ;