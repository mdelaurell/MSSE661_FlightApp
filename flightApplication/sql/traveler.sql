CREATE TABLE IF NOT EXISTS
flightReserve.traveler(
travlerId int NOT NULL AUTO_INCREMENT,
trvlUsername VARCHAR(20) NOT NULL,
userId int NOT NULL, 
password VARCHAR(32) NOT NULL, 
trvlFirstName VARCHAR(25) NOT NULL, 
trvlLastName VARCHAR(30) NOT NULL, 
trvlEmailAddress VARCHAR(50) NOT NULL,
trvlPhoneNumber VARCHAR(20),
created_date DATETIME DEFAULT CURRENT_TIMESTAMP(), 
status varchar(10) DEFAULT 'pending', 
PRIMARY KEY (travlerId));