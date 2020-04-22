exports.CREATE_FLIGHTS_TABLE = 'CREATE TABLE IF NOT EXISTS \
    `flightMgr` ( \
    `flightMgrId` int(11) NOT NULL AUTO_INCREMENT, \
    `airlineId` int(11) DEFAULT NULL, \
    `departAirportId` int(11) DEFAULT NULL, \
    `arrivalAirportId` int(11) DEFAULT NULL, \
    `fltDepartureDate` datetime, \
    `fltDepartTime` datetime NOT NULL, \
    `fltArrivalDate` datetime , \
    `fltArrivalTime` datetime NOT NULL, \
    `dateCreated` datetime NOT NULL, \
    PRIMARY KEY (`flightMgrId`), \
    UNIQUE KEY `flightMgrId_UNIQUE` (`flightMgrId`), \
    KEY `airlineFK_idx` (`airlineId`), \
    KEY `airportFK_idx1` (`departAirportId`,`arrivalAirportId`), \
    KEY `airportArriveFK_idx` (`arrivalAirportId`), \
    CONSTRAINT `airlineFK` FOREIGN KEY (`airlineId`) REFERENCES `airline` (`airlineId`) ON DELETE NO ACTION ON UPDATE NO ACTION, \
    CONSTRAINT `airportArriveFK` FOREIGN KEY (`arrivalAirportId`) REFERENCES `airport` (`airportId`) ON DELETE NO ACTION ON UPDATE NO ACTION, \
    CONSTRAINT `airportDepartFK` FOREIGN KEY (`departAirportId`) REFERENCES `airport` (`airportId`) ON DELETE NO ACTION ON UPDATE NO ACTION \
  ) ENGINE=InnoDB DEFAULT CHARSET=latin1'; 



exports.ALL_FLIGHTS = 'SELECT * FROM flightMgr';

exports.SINGLE_FLIGHT = 'SELECT * FROM flightMgr where flightMgrId = ?';

exports.SELECTED_FLIGHTS_BY_DEPARTURE_AIRPORT_TIME = 'SELECT * from flightMgr WHERE \
    departAirportID = ?  AND  fltDepartTime = ? + or - two hours';

exports.CREATE_FLIGHTS = 'INSERT INTO flightMgr (name) VALUES (?)';

exports.UPDATE_FLIGHTS = 'UPDATE flightMgr set name = ?, status = ? WHERE flightMgrId = ?';

exports.DELETE_FLIGHTS = 'DELETE FROM flightMgr where flightMgrId = ?';