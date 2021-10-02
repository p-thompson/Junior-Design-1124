USE demo_app;
Call register_parent('agbehrend', 'pass1234567890', 'Alyssa', 'Behrend', '30308','GA','Atlanta','77 Ferst Drive', '594-438-8495', 'email@email.com');
Call register_volunteer('abehrend', 'pass1234567890', 'Alyssa', 'Behrend', '30308','GA','Atlanta','77 Ferst Drive', '594-438-8495', 'email@email.com');
select validate_login('janedoe34', 'mypassword1') as username;
select validate_login('janedoe3', 'mypassword1') as username;
select validate_login('janedoe34', 'mypassword2') as username;
select validate_creation('janedoe3') as username;
select validate_creation('janedoe34') as username;

Call alter_info('abehrend','abehrend', 'pass1234567890', 'Alyssa', 'Behrend', '30308','GA','Atlanta','77 Ferst Drive', '594-438-8495', 'new_email@email.com');
Call alter_info_parent('janedoe34', 'janedoe34', 'My name is Jane and this is my new bio');

Call add_parent_availability('janedoe34', 'Monday', '17:00', '18:00');
Call remove_parent_availability('janedoe34', 'Friday', '11:30', '15:00');
Call add_volunteer_availability('bobwilson88', 'Monday', '17:00', '18:00');
Call remove_volunteer_availability('bobwilson88', 'Friday', '10:00', '17:00');

Call alter_parent_services('agbehrend', true, true, false);
Call alter_volunteer_services('abehrend', true, true, false);
