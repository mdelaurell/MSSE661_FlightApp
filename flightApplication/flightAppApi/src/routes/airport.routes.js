const controllers = require('../controllers/airport.controller');
const express = require('express');

const airportRoutes = express.Router();

//**************************************** 
// Express routes for Travelers
//
//  Routes for all Travelers
//***************************************

airportRoutes.get('/', controllers.getAllAirport).post('/', controllers.createAirport);



travelersRoutes
    .get('/:airportId', controllers.getAllAirports)
    .put('/:airportId', controllers.updateAirports)
    .delete('/:airportId', controllers.deleteAirports);

module.exports = airportRoutes;
