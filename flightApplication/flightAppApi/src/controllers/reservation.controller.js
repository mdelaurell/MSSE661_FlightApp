const mysql = require('mysql');
const connect = require('../db-config');
const {
    ALL_RESERVATIONS,
    SINGLE_RESERVATIONS,
    CREATE_RESERVATIONS,
    UPDATE_RESERVATIONS,
    DELETE_RESERVATIONS,
} = require('../queries/reservation.queries');
const query = require('../utils/query');
const { serverError } = require('../utils/handlers');


exports.getAllReservations = async (req, res) => {
    const con = await connect().catch((err) => {
        throw err;
    });

    const reservation = await query(con, ALL_RESERVATIONS(req.user.id), []).catch(
        serverError(res)
    );

    if (!reservation.length) {
        res.status(400).json({ mgs: 'No reservations available for this user.'});
    }
    res.json(reservation);

};

exports.getReservation = async (req, res) => {
    const con = await connect().catch((err) => {
        throw err;
    });

    const reservation = await query(con, SINGLE_RESERVATIONS(req.user.id, req.params.resId)).catch(
        serverError(res)
    );

    if (!reservation.length) {
        res.status(400).json({ msg:  'No reservation available for user.'});
    }
    res.json(reservation);
};

exports.createReservation = async (req, res) => {
    const con = await connect().catch((err) => {
        throw err;
    });

    const reservation = await query(con, CREATE_RESERVATIONS(userId, flightId, resGrpId, resStatus, resLastUpdated)).catch(serverError(res);
    if (user.id)
    )

};