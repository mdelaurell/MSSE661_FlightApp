exports.CREATE_TRAVELERS_TABLE = 
'CREATE TABLE IF NOT EXISTS \
CREATE TABLE `traveler` ( \
    `travlerId` int(11) NOT NULL AUTO_INCREMENT, \
    `userId` int(11) NOT NULL, \
    `trvlFirstName` varchar(25) NOT NULL, \
    `trvlLastName` varchar(30) NOT NULL, \
    `trvlEmailAddress` varchar(50) NOT NULL, \
    `trvlPhoneNumber` varchar(20) DEFAULT NULL, \
    `created_date` datetime DEFAULT CURRENT_TIMESTAMP, \
    `status` varchar(10) DEFAULT \'pending\', \
    PRIMARY KEY (`travlerId`) \
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1'; 



exports.ALL_TRAVELERS = (travelerId) => `SELECT * FROM traveler where userId = ${userId}`;

exports.SINGLE_TRAVELER = (userId, travelerId) => 
  `SELECT * FROM traveler where userId = ${userId} AND travlerId = ${taskId}`;

exports.CREATE_TRAVELER = (userId, travelerId) => 
  `INSERT INTO traveler (userId, trvlFirstName, trvlLastName, trvlEmailAddress, trvlPhoneNumber) VALUES  
    (${userId}, ${trvlFirstName}, ${trvlLastName}, ${trvlEmailAddress}, ${trvlPhoneNumber})`;

exports.UPDATE_TRAVELER =(userId, travelerId, newValues) => `UPDATE traveler SET ${newValues} WHERE userId = ${userId} AND travlerId = ${travlerId}`;

exports.DELETE_TRAVELER = (userId, travelerId) => `DELETE FROM traveler where userId = ${userId} AND travlerId = ${travlerId}`;