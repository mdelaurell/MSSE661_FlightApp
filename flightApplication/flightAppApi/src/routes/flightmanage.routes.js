const {
    getAllFlights,
    searchFlights,
    } = require('../controllers/flightmanage.controller');
const express = require('express');

const canAccess = require('../middleware/auth.middleware');
const flightRoutes = express.Router();

//**************************************** 
// Express routes for Travelers
//
//  Routes for all Travelers
//***************************************

flightRoutes.get('/', canAccess, getAllFlights)

// Routes for a task by id Evaluates to '/travelers/:travelersID/

flightRoutes
    .get('/:flight', getAllFlights)
  //  .put('/:flight', updateFlight)
    .delete('/:flight', searchFlights);

module.exports = flightRoutes;
