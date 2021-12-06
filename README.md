# It Takes a Village
> A website to connect single parents with others who can provide services to alleviate the stresses of single parenthood.

It Takes a Village is a website designed speicifcally for single parents in the West End neighborhood of Atlanta to find others within the community who can provide services such as child care, tutoring, and transportation. The website allows parents to create multiple tasks which detail the day and time range they request the service and details the service in need. For example a parent who needs their child picked up from soccer practices on Thursdays at 5:00.
##

## Technologies

- JavaScript v1.7
  - React v17.0.2
  - Node.js v14.17.6

- MySQL v8.0.26 (This includes MySQL Workbench)
- Apache Tomcat v9.0.54
- Apache Maven v3.8.3
- Code Editor of choice 
  - VS Code v1.62.2

## Installation 

### *Step 1: Pre-requisites*

Ensure that the aforementioned technologies have been downloaded.

### *Step 2: Dependent Libraries*

While this project does use dependent libraries, these are provided in the It Takes a Village source code in the repository. 

You can find these under `lib` folder and include: `javax.ws.rs-api-2.1.1.jar` , `junit-4.10.jar`, `mysql-connector-java-8.0.26.jar`.

The last library listed, `mysql-connector-java-8.0.26.jar`, does require further installtion which will be detailed further in Step 4.


### *Step 3: Download Instructions*

The code can be downloaded through this GitHub in your own preffered form (i.e. downloading the zipped file, using GitHub desktop, or opening in your preffered code editor).
Once downloaded, open the file in your code editor. 


### *Step 4: Installation/Build Instructions*
Before your first deployment of Tomcat, ensure the `mysql-connector-java-8.0.26.jar` file is in your Tomcat `lib` folder. If it is not, copy it from our project's `lib` folder, and paste it into tomcat's `lib` folder. 

To run the system, the server must be built and deployed. To do this, open a Terminal and navigate to the `backend` folder of the project. Run `mvn clean build` or `mvn clean install`. This will create a `target` folder in `backend`. In `target` there will be a file called `backend.war`. Copy this and paste it into the `webapps` folder of your Tomcat installation. For each additional deployment, remember to delete `work` folder in the tomcat directory, as it is auto-generated with each deployment. Then start up Tomcat by navigating to the `bin` folder within the Tomcat Installation and running the command "startup", and the server will run.

To prepare the client-side to run, open a terminal and navigate to the `my-app` folder in our project directory. Run `npm install` to install the relevant dependencies.

Another thing that needs to be built before running our website is the local database. In order to do this, you must add the demo_app database to your MySQL Workbench. Do this by opening the file Junior_Design_Final_Demo.sql in workbench and running the file. You will also need to add all predefined SQL procedures to the database. After you have added the demo_app database, run the files account_procedures.sql and search_procedures.sql. After running all of these files, your local database will be successfully built!

### *Step 5: Run Instructions*
Ensure the server is running (step 4). Run the client-side by running `npm run start` in the `my-app` folder in our project directory. This will open our website in your default browser, and you can start using it!

### *Step 6: Troubleshooting*

#### Environment Variables:
The most common installation error you could run into is not having the necessary environment variables set.
In order to learn where and how to edit your environment variables on your operating system see: https://www.schrodinger.com/kb/1842 

`JAVA_HOME`: This environment variable is necessary in order to run the Apache Tomcat server. Either ensure that this exists in your system variables already, or create a new system variable under the title ‘JAVA_HOME’. The path for this variable should be the location of your Java installation directory. If you didn’t relocate it upon installation it should be ‘C:\Program Files\Java\jdk1.8.0_65’.

`MAVEN_HOME`: This environment variable is necessary in order to run Apache Maven. If you have already used Maven in the past this environment variable should be set, however make sure to double check. The system variable title should be ‘MAVEN_HOME’ and the path should be the location of Maven installation which can be found by putting ‘where mvn’ in your command line. 

#### Google Chrome Extension:
Another potential error could be that the web browser doesn’t trust the server. To fix this issue you can download the extension `Moesif Origin & CORS Changer` in order to directly send the cross-domain request without receiving the Cross Origin Error. This extension acts a proxy between the web browser and server by telling the browser the server is ok to contact. We applied this fix because we had built the server so it can be trusted.

The extension can be accessed here : https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc/related?hl=en-US 


## Release Notes

It Takes a Village has been recently released for the first time, and is on **version 1.0**. 
This project has undergone many major changes in order to bring new features and updates to this release. 

Some of the new features include the overhaul of the task system, which now allows users to create tasks which include a title, date, and time, and are added to their task board and posted to the database upon submission. 
In addition, manual search was created to allow users to be able to search for other users with overlapping availability whether they are volunteers or parents. Automatic matching is also now available for users to be effortlessly matched with other users who match their pre-entered availability. Once matched, users can request other users’ contact information which is made available once the request is accepted.
The last main functionality of this release was the ability of users to connect with one another. Any type of user, volunteer or parent, can login and request to connect with other users. They can also accept pending requests in their user dashboard.

Known defects of this application include the inability to delete tasks from the database from the UI layer. Other defects occur as a result of the asynchronous nature of certain states in our application, which can sometimes cause information to be updated at a slower pace and not update in the UI automatically.

Corrected defects of this application include the inability for tasks to disappear from the UI when clicked. Additionally, when users click “accept request” on a user’s contact information request, the accepted profile will automatically pop up on their dashboard, which before would require refreshing in order to view changes.

## Contributors 

This project was outsourced to Georgia Tech students from Mine Hashas-Degertekin. 
The students who built this project are: Alyssa Behrend, Meghan Kast, Rachel Mills, Tyler Scaramastro, and Paige Thompson.

## License

It Takes a Village is licensed under the terms of GPLv2.


