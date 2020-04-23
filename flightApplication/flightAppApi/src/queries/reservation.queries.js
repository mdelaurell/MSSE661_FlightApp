exports.CREATE_RESERVATIONS_TABLE = 'CREATE TABLE IF NOT EXISTS \
    `reservation` (`resId` int(11) NOT NULL AUTO_INCREMENT, \
    `userId` int(11) NOT NULL, \
    `flightId` int(11) NOT NULL, \
    `resStatus` char(1) NOT NULL DEFAULT \'R\', \
    `resLastUpdated` datetime NOT NULL, \
    `resCreated` datetime NOT NULL, \
    PRIMARY KEY (`resId`), KEY `userFK_idx` (`userId`), KEY `flghtFK_idx` (`flightId`), \
    CONSTRAINT `flghtFK` FOREIGN KEY (`flightId`) REFERENCES `flightMgr` (`flightMgrId`) ON DELETE NO ACTION ON UPDATE NO ACTION, \
    CONSTRAINT `userFK` FOREIGN KEY (`userId`) REFERENCES `users` (`userId`) ON DELETE NO ACTION ON UPDATE NO ACTION \
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1'; 



exports.ALL_RESERVATIONS = (userId) => `SELECT * FROM reservation WHERE userId = ${userId}`;

exports.SINGLE_RESERVATIONS = (userId, resId) => 
  `SELECT * FROM reservation where ${userId} AND resID = ${resId}`;

exports.CREATE_RESERVATIONS = (userId, flightID, resGrpId, resStatus, resLastUpdated) =>
  `INSERT INTO reservation (userId, flightId, resGrpId, resStatus, resLastUpdated) VALUES (${userId}, ${flightID}, ${resGrpId}, ${resStatus}, ${resLastUpdated})`;

exports.UPDATE_RESERVATIONS = (userId, resID, newValues ) =>
  `UPDATE reservation set ${newValues} WHERE userId = ${userId} AND resId = ${resID}`;

exports.DELETE_RESERVATIONS = (userId, resId) => 
    `UPDATE reservation set resStatus = 'C' where userId = ${userId} AND resId = ${resId}`;