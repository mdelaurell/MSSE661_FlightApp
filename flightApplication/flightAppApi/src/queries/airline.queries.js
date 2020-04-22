exports.CREATE_AIRLINE_TABLE = 'CREATE TABLE IF NOT EXISTS \
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



exports.ALL_AIRLINES = 'SELECT * FROM airlines';

exports.SINGLE_AIRLINE = 'SELECT * FROM airlines where id = ?';

exports.GET_AIRLINES_BY_COUNTRY = 'SELECT * FROM airlines where airlineCountry = ?';

exports.CREATE_AIRLINE = 'INSERT INTO airlines (name) VALUES (?)';

exports.UPDATE_AIRLINE = 'UPDATE airlines set name = ?, status = ? WHERE id = ?';

exports.DELETE_AIRLINE = 'UPDATE airlines set airlineStatus = "D" WHERE airlineId = ?';