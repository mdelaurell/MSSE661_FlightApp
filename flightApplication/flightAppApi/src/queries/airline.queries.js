exports.CREATE_AIRLINE_TABLE = 
'CREATE TABLE IF NOT EXISTS \
    `airlines` ( \
    `airlineId` int(11) NOT NULL AUTO_INCREMENT, \
    `airlineName` varchar(45) NOT NULL, \
    `airlineCode` varchar(6) NOT NULL, \
    `airlineCountry` varchar(45) NOT NULL, \
    `airlineStatus` varchar(1) NOT NULL DEFAULT \'A\', \
    `airlineKnownStatus` varchar(255) DEFAULT NULL, \
    PRIMARY KEY (`airlineId`), \
    UNIQUE KEY `airlineId_UNIQUE` (`airlineId`), \
    UNIQUE KEY `airlineName_UNIQUE` (`airlineName`), \
    UNIQUE KEY `airlineCode_UNIQUE` (`airlineCode`) \
  ) ENGINE=InnoDB AUTO_INCREMENT=3732 DEFAULT CHARSET=latin1'; 



exports.GET_ALL_AIRLINES = () => `SELECT * FROM airlines`;
exports.GET_AIRLINES_NAME_BY_ID = (airlineId) => `SELECT airlineName FROM airlines where airlineId = ${airlineId}`;
exports.GET_AIRLINES_BY_NAME = (airlineName) => `SELECT airlineID, airlineName FROM airlines where airlineName = ${airlineName}`;
