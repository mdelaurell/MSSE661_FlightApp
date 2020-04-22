exports.CREATE_AIRPORTS_TABLE = 'CREATE TABLE IF NOT EXISTS \
 `airport`(  \
    `airportId` int(11) NOT NULL AUTO_INCREMENT, \
    `airportName` varchar(45) NOT NULL, \
    `airportNameIdent` varchar(4) NOT NULL, \
    `airportElevation_ft` int(11) NOT NULL, \
    `airportCountry` varchar(4) NOT NULL, \
    `airportRegion` varchar(10) NOT NULL, \
    `airportCity` varchar(45) NOT NULL, \
    `airportCoordinates` varchar(100) NOT NULL, \
    PRIMARY KEY (`airportId`) \
  ) ENGINE=InnoDB AUTO_INCREMENT=454 DEFAULT CHARSET=latin1';
  



exports.ALL_AIRPORTS = 'SELECT * FROM airport';

exports.SINGLE_AIRPORT = 'SELECT * FROM airport where airportId = ?';

exports.CREATE_TRAVELERS = 'INSERT INTO airport (name) VALUES (?)';

exports.UPDATE_TRAVELERS = 'UPDATE airport set name = ?, status = ? WHERE id = ?';

exports.DELETE_TRAVELERS = 'DELETE FROM airport where id = ?';