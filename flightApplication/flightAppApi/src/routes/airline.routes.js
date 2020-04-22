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
    .get('/:taskId', controllers.getAllAirlines)
    .put('/:taskId', controllers.updateAirlines)
    .delete('/:taskId', controllers.deleteAirlines;

module.exports = airlineRoutes;

