const express = require('express');

const {
    getAllReservations,
    getReservation,
    createReservation,
    updateReservation,
    deleteReservation,
    } = require('../controllers/reservation.controller');

const canAccess = require('../middleware/auth.middleware');

const reservationRoutes = express.Router();

//**************************************** 
// Express routes for Travelers
//
//  Routes for all Travelers
//***************************************

reservationRoutes.get('/', getAllReservations).post('/', createReservation);

// Routes for a task by id Evaluates to '/travelers/:travelersID/

reservationRoutes
    .get('/:reservation', getReservation)
    .put('/:reservation', updateReservation)
    .delete('/:reservation', deleteReservation);

module.exports = reservationRoutes;
