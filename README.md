Flight Application;

Provide User Registration and authentication using jwt tokes.

Provide the ability to search for two segments of a flight, save reservation, cancel and purchase reservations.
This will require:
Search for Reservation
Create reservation
Update Reservation
Cancel Reservation
Purchase Reservation - No CC data will be provided

Provide the ablitity to review all reservations for your given user
Review all current reservations

Provide email confirmation of your flight purchase.



Utilizing mysql database with flight and airport data within the database to search for flights based on a limited departure and arrival airports.


05-APR-2020

To get the application running:

Running MySQL 5.7

run the following docker command:

docker run -p 3306:3306 --name some-mysql -v /the/mysql/directory/in/this/project/mysql:/var/lib/mysql -e MYSQL_ROOT_PASSWORD=password -d mysql:5.7

The database will become be running and exposed on port 3306 and the volume will be exposed so the database will exist on startup.  

Will be creating a database intially called 'mikedb', this will be updated and the intial tables be available through mysql.

From within the fllightAppApi folder- run node srv/index.js for the api application.
From within the flightAppWeb - run 'npm start' to start up the web server.   While thing have been stubbed out, the functionality is very limited at this time.