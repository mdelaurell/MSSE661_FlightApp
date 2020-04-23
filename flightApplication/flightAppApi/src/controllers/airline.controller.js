const mysql = require('mysql');
const connect = require('../db-config');
const {
    ALL_AIRLINES,
    GET_AIRLINES_NAME_BY_ID,
    GET_AIRLINES_BY_NAME,
} = require('../queries/airline.queries');
const query = require('../utils/query');
const { serverError } = require('../utils/handlers');


exports.getAllAirlines = async (req, res) => {
    const con = await connect().catch((err) => {
        throw err;
    });

    const reservation = await query(con, ALL_AIRLINES(), []).catch(
        serverError(res)
    );

    if (!reservation.length) {
        res.status(400).json({ mgs: 'No reservations available for this user.'});
    }
    res.json(reservation);

};

exports.getAirlineNameById = async (req, res) => {
    const con = await connect().catch((err) => {
        throw err;
    });

    const reservation = await query(con, GET_AIRLINES_NAME_BY_ID(req.params.airlineID)).catch(
        serverError(res)
    );

    if (!reservation.length) {
        res.status(400).json({ msg:  'No flights available for user.'});
    }
    res.json(reservation);
};

exports.getAirlineByName = async (req, res) => {
    const con = await connect().catch((err) => {
        throw err;
    });

    const reservation = await query(con, GET_AIRLINES_BY_NAME(req.params.airlineName)).catch(
        serverError(res)
    );

    if (!reservation.length) {
        res.status(400).json({ msg:  'No flights available for user.'});
    }
    res.json(reservation);
};