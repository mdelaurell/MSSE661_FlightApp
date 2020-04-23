const mysql = require('mysql');
const connect = require('../db-config');
const {
    GET_ALL_AIRPORTS,
    GET_AIRPORT_BY_ID,
    GET_AIRPORT_BY_NAME,
} = require('../queries/airport.queries');
const query = require('../utils/query');
const { serverError } = require('../utils/handlers');

/**
 * Build up values string.
 *
 * @example
 * 'key1 = value1, key2 = value2, ...'
 * "task_name = \'Task 1\', status = \'complete\', date = \'<today's_date>\'"
 */
const _buildValuesString = (req) => {
    const body = req.body;
    const values = Object.keys(body).map(
      // [task_name, status].map()
      (key) => `${key} = ${mysql.escape(body[key])}` // 'New 1 task name'
    );
  
    values.push(`created_date = NOW()`); // update current date and time
    values.join(', '); // make into a string
    return values;
  };


exports.getAllAirport = async (req, res) => {
    const con = await connect().catch((err) => {
        throw err;
    });

    const reservation = await query(con, GET_ALL_AIRPORTS(), []).catch(
        serverError(res)
    );

    if (!reservation.length) {
        res.status(400).json({ mgs: 'No reservations available for this user.'});
    }
    res.json(reservation);

};

exports.getAirportById = async (req, res) => {
    const con = await connect().catch((err) => {
        throw err;
    });

    const reservation = await query(con, GET_AIRPORT_BY_ID(req.params.airportID)).catch(
        serverError(res)
    );

    if (!reservation.length) {
        res.status(400).json({ msg:  'No flights available for user.'});
    }
    res.json(reservation);
};

exports.getAirportByName = async (req, res) => {
    const con = await connect().catch((err) => {
        throw err;
    });

    const reservation = await query(con, GET_AIRPORT_BY_NAME(req.params.airportName)).catch(
        serverError(res)
    );

    if (!reservation.length) {
        res.status(400).json({ msg:  'No flights available for user.'});
    }
    res.json(reservation);
};