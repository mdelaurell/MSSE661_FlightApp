exports.CREATE_RESERVATIONS_TABLE = 'CREATE TABLE IF NOT EXISTS \
    `reservation` (`resId` int(11) NOT NULL AUTO_INCREMENT, \
    `userId` int(11) NOT NULL, \
    `flightId` int(11) NOT NULL, \
    `resGrpId` int(11) NOT NULL, \
    `resReserved` tinyint(4) NOT NULL DEFAULT '1', \
    `resPurchased` tinyint(4) NOT NULL DEFAULT '0', \
    `resCancelled` tinyint(4) NOT NULL DEFAULT '0', \
    `resLastUpdated` datetime NOT NULL, \
    `resCreated` datetime NOT NULL, \
    PRIMARY KEY (`resId`), KEY `userFK_idx` (`userId`), KEY `flghtFK_idx` (`flightId`), \
    CONSTRAINT `flghtFK` FOREIGN KEY (`flightId`) REFERENCES `flightMgr` (`flightMgrId`) ON DELETE NO ACTION ON UPDATE NO ACTION, \
    CONSTRAINT `userFK` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION \
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1'; 



exports.ALL_TRAVELERS = 'SELECT * FROM reservation';

exports.SINGLE_TRAVELERS = 'SELECT * FROM reservation where resId = ?';

exports.CREATE_TRAVELERS = 'INSERT INTO reservation (name) VALUES (?)';

exports.UPDATE_TRAVELERS = 'UPDATE reservation set name = ?, status = ? WHERE resId = ?';

exports.DELETE_TRAVELERS = 'DELETE FROM reservation where resId = ?';