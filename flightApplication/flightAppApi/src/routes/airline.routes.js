const express = require('express');

const {
    getAllAirlines,
    getAirlineNameById,
    getAirlineByName,
} = require('../controllers/airline.controller');

const canAccesss = require('../middleware/auth.middleware');
const airlineRoutes = express.Router();

//**************************************** 
// Express routes for Travelers
//  Routes for all Travelers
//***************************************

airlineRoutes.get('/', getAllAirlines);



travelersRoutes
    .get('/:airlines', getAllAirlines);
   /* .put('/:airlines', updateAirlines)
    .delete('/:airlines', deleteAirlines);*/

module.exports = airlineRoutes;

