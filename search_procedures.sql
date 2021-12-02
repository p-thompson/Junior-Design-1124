use demo_app;

-- -------------------------------- Add Parent Availability ------------------------------------
DROP PROCEDURE IF EXISTS add_task;
DELIMITER //
CREATE PROCEDURE add_task(
	   IN i_username VARCHAR(20),
       IN i_day_avail char(20),
       IN i_time_begin time,
       IN i_time_end time,
       IN i_service ENUM('tutor', 'babysit', 'transportation')
)
BEGIN
INSERT INTO task (username, day_avail, time_begin, time_end, service)
select i_username, i_day_avail, i_time_begin, i_time_end, i_service;
END //
DELIMITER ;

-- Call add_task('janedoe34', 'Monday', '11:30', '15:00', 'babysit');

-- -------------------------------- Remove Task  ------------------------------------
DROP PROCEDURE IF EXISTS remove_task;
DELIMITER //
CREATE PROCEDURE remove_task(
	   IN i_id int
)
BEGIN
DELETE FROM task
where id=i_id;
END //
DELIMITER ;

-- -------------------------------- Add Requester ------------------------------------
DROP PROCEDURE IF EXISTS add_requester;
DELIMITER //
CREATE PROCEDURE add_requester(
       IN i_curr_user int,
       IN i_requester int
)
BEGIN
INSERT INTO requests (curr_user, requester)
select i_curr_user, i_requester;
END //
DELIMITER ;

Call add_requester(1, 5);
Call add_requester(1, 2);

-- -------------------------------- Remove Requester ------------------------------------
DROP PROCEDURE IF EXISTS remove_requester;
DELIMITER //
CREATE PROCEDURE remove_requester(
       IN i_curr_user int,
       IN i_requester int
)
BEGIN
DELETE FROM requests
WHERE curr_user = i_curr_user and requester = i_requester;
END //
DELIMITER ;

-- Call remove_requester(1, 2);

-- -------------------------------- Add Connection ------------------------------------
DROP PROCEDURE IF EXISTS add_connection;
DELIMITER //
CREATE PROCEDURE add_connection(
       IN i_curr_user int,
       IN i_connected int
)
BEGIN
INSERT INTO connections (curr_user, connected)
select i_curr_user, i_connected;
END //
DELIMITER ;

Call add_connection(3, 6);
Call add_connection(3, 4);


-- ----------------------------------------------------- Automatic Match Algorithm -------------------------------------------------------
DROP PROCEDURE IF EXISTS parent_automatic_matching;
DELIMITER //

CREATE PROCEDURE parent_automatic_matching(
	   IN i_username varchar(15)
)
BEGIN
SELECT volunteer.username
-- task.service as service,
-- volunteer_days_available.day_avail as day,
-- volunteer_days_available.time_begin as start_time, 
-- volunteer_days_available.time_end as end_time
from app_user as volunteer
join volunteer_days_available on volunteer.username = volunteer_days_available.username
join task on volunteer_days_available.day_avail = task.day_avail 
join app_user as parent on parent.username = task.username
join volunteer_services_provided on volunteer.username = volunteer_services_provided.username
where (volunteer_days_available.time_begin <= task.time_begin 
and volunteer_days_available.time_end >= task.time_end
and ((task.service = 'babysit' and volunteer_services_provided.babysit = true) 
		or (task.service = 'tutor' and volunteer_services_provided.tutor = true)
        or (task.service = 'transportation' and volunteer_services_provided.transportation = true))
and parent.username = i_username);
END //
 DELIMITER ;

 CALL parent_automatic_matching('janedoe34');
 select * from app_user;