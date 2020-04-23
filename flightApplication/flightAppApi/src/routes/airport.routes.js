const express = require('express');
const {
    getAllAirport,
    getAirportById,
    getAirportByName,
} = require('../controllers/airport.controller');

const canAccess = require('../middleware/auth.middleware');
const airportRoutes = express.Router();

//**************************************** 
// Express routes for Airports
//  Routes for all Airport
//***************************************

airportRoutes.get('/', getAllAirport);



airportRoutes
    .get('/:airport', getAirportById);
/*    .put('/:airport', controllers.updateAirports)
    .delete('/:airport', controllers.deleteAirports); */

module.exports = airportRoutes;
