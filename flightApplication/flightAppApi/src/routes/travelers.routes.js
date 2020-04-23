const express = require('express');

const  {
    getAllTravelers,
    getTraveler,
    createTravelers,
    updateTraveler,
    deleteTraveler,
} = require('../controllers/travelers.controller');

    const canAccess = require('../middleware/auth.middleware');
    travelersRoutes = express.Router();
//**************************************** 
// Express routes for Travelers
//  Routes for all Travelers
//***************************************

travelersRoutes.get('/', canAccess, getAllTravelers).post('/', createTravelers);

// Routes for a task by id Evaluates to '/travelers/:travelersID/

travelersRoutes
    .get('/:travelers', getTraveler)
    .put('/:travelers', updateTraveler)
    .delete('/:travelers', deleteTraveler);

module.exports = travelersRoutes;