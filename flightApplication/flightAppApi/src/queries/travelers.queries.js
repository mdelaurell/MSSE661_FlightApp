exports.CREATE_TRAVELERS_TABLE = 
'CREATE TABLE IF NOT EXISTS \
CREATE TABLE `traveler` ( \
    `travlerId` int(11) NOT NULL AUTO_INCREMENT, \
    `trvlUsername` varchar(20) NOT NULL, \
    `userId` int(11) NOT NULL, \
    `password` varchar(32) NOT NULL, \
    `trvlFirstName` varchar(25) NOT NULL, \
    `trvlLastName` varchar(30) NOT NULL, \
    `trvlEmailAddress` varchar(50) NOT NULL, \
    `trvlPhoneNumber` varchar(20) DEFAULT NULL, \
    `created_date` datetime DEFAULT CURRENT_TIMESTAMP, \
    `status` varchar(10) DEFAULT 'pending', \
    PRIMARY KEY (`travlerId`) \
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1'; 



exports.ALL_TRAVELERS = 'SELECT * FROM traveler';

exports.SINGLE_TRAVELERS = 'SELECT * FROM traveler where travlerId = ?';

exports.CREATE_TRAVELERS = 'INSERT INTO traveler (name) VALUES (?)';

exports.UPDATE_TRAVELERS = 'UPDATE traveler set name = ?, status = ? WHERE travlerId = ?';

exports.DELETE_TRAVELERS = 'DELETE FROM traveler where travlerId = ?';