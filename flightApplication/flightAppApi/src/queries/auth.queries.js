exports.CREATE_USERS_TABLE = 'CREATE TABLE IF NOT EXISTS \
CREATE TABLE `users` (`userId` int(11) NOT NULL AUTO_INCREMENT, \
    `userUsername` varchar(50) NOT NULL, \
    `userPassword` varchar(25) NOT NULL, \
    `userFirstName` varchar(50) NOT NULL, \
    `userMiddleName` varchar(50) DEFAULT NULL, \
    `userLastName` varchar(50) NOT NULL, \
    `userEmailAddress` varchar(100) NOT NULL, \
    `userPhoneNumber` varchar(20) NOT NULL, \
    `activeUser` tinyint(1) DEFAULT 1, \
    `created_date` datetime DEFAULT CURRENT_TIMESTAMP, \
    PRIMARY KEY (`userId`) \
    ) ENGINE=InnoDB DEFAULT CHARSET=latin1;'; 

exports.INSERT_NEW_USER = 'INSERT INTO users \
                            (username, password, \
                             userFirstName, userMiddleName, userLastName, \
                             userEmailAddress, userPhoneNumber, activeUser) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

exports.UPDATE_USER = 'UPDATE users SET username = ?, email = ?, password = ?, active_user = "true" WHERE userId = ?';

exports.DEACTIVATE_USER = 'UPDATE users SET activeUser = 0 WHERE userId = ?';

exports.DELETE_USER = 'UPDATE users SET active_user = "false" where userId = ?';