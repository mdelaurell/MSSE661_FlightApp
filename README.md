Flight Application;

Provide User Registration and authentication.
Provide the ability to search for two segments of a flight, save reservation, cancel and purchase reservations.
Provide the ablitity to review all reservations for your given user
Provide email confirmation of your flight purchase.

While I had higher hopes to provide additional functionality into the application in managing the flights, I will only be adding minor functionality to add, and cancel flights.

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