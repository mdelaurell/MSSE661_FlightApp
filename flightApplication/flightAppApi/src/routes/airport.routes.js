const controllers = require('../controllers/airport.controller');
const express = require('express');

const airportRoutes = express.Router();

//**************************************** 
// Express routes for Travelers
//
//  Routes for all Travelers
//***************************************

airportRoutes.get('/', controllers.getAllAirport).post('/', controllers.createAirport);

// Routes for a task by id Evaluates to '/travelers/:travelersID/

travelersRoutes
    .get('/:taskId', controllers.getAllAirports)
    .put('/:taskId', controllers.updateAirports)
    .delete('/:taskId', controllers.deleteAirports);

module.exports = airportRoutes;
