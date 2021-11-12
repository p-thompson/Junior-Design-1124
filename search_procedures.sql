-- ----------------------------------------------------- Automatic Match Algorithm -------------------------------------------------------
DROP PROCEDURE IF EXISTS parent_automatic_matching;
DELIMITER //

CREATE PROCEDURE parent_automatic_matching(
	   IN i_username varchar(15)
)
BEGIN
SELECT concat(volunteer.first_name, ' ', volunteer.last_name) as volunteer, 
task.service as service,
volunteer_days_available.day_avail as day,
volunteer_days_available.time_begin as start_time, 
volunteer_days_available.time_end as end_time
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