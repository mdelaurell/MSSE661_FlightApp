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
    .get('/:taskId', controllers.getAllReservations)
    .put('/:taskId', controllers.updateReservations)
    .delete('/:taskId', controllers.deleteAReservations;

module.exports = airlineRoutes;
