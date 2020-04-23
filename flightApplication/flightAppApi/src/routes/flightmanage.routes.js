const controllers = require('../controllers/airline.controller');
const express = require('express');

const airlineRoutes = express.Router();

//**************************************** 
// Express routes for Travelers
//
//  Routes for all Travelers
//***************************************

airlineRoutes.get('/', controllers.getAllAirlines).post('/', controllers.createAirline);

// Routes for a task by id Evaluates to '/travelers/:travelersID/

travelersRoutes
    .get('/:flight', controllers.getAllFlights)
    .put('/:flight', controllers.updateFlight)
    .delete('/:flight', controllers.deleteFlights);

module.exports = airlineRoutes;
