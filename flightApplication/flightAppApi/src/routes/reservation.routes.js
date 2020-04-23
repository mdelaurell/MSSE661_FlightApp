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
    .get('/:reservation', controllers.getAllReservations)
    .put('/:reservation', controllers.updateReservations)
    .delete('/:reservation', controllers.deleteAReservations;

module.exports = airlineRoutes;
