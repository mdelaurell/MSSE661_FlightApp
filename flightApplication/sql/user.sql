CREATE TABLE IF NOT EXISTS 
flightREserve.users(
userId int NOT NULL AUTO_INCREMENT, 
userUsername VARCHAR(50) NOT NULL, 
userPassword VARCHAR(25) NOT NULL,
userFirstName VARCHAR(50) NOT NULL,
userMiddleName VARCHAR(50),
userLastName VARCHAR(50) NOT NULL,
userEmailAddress VARCHAR(100) NOT NULL, 
userPhoneNumber VARCHAR(20) NOT NULL,
activeUser BOOLEAN DEFAULT true, 
created_date DATETIME DEFAULT CURRENT_TIMESTAMP(), 
PRIMARY KEY (userId)); 