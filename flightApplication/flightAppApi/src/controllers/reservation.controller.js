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


exports.getAllReservations = async (req, res) => {
    const con = await connect().catch((err) => {
        throw err;
    });

    const reservation = await query(con, ALL_RESERVATIONS(req.user.userId), []).catch(
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

    const reservation = await query(con, SINGLE_RESERVATIONS(req.user.userId, req.params.resId)).catch(
        serverError(res)
    );

    if (!reservation.length) {
        res.status(400).json({ msg:  'No reservation available for user.'});
    }
    res.json(reservation);
};

exports.createReservation = async (req, res) => {
    
    const user = req.user;

    if (user.userId) {
    
        const con = await connect().catch((err) => {
        throw err;
        });
    
        const reservation = await query(con, 
        CREATE_RESERVATIONS(userId, flightId, resGrpId, resStatus, resLastUpdated)
        ).catch(serverError(res));

        if (reservation.affectedRows != 1) {
            res.status(500).json({ msg: 'Unable to add reservation.'});
        }
        res.json({ msg: 'Reservation Added.'});
    }

};


exports.updateReservation = async (rep, res) => {

    const user = req.user;
        
    if (user.userId) {
        
        const con = await connect().catch((err) => {
        throw err;
        });

        const values = _buildValuesString(req);

        const result = await query(con, UPDATE_RESERVATIONS(req.user.userId, req.params.resId, values)).catch(serverError(res));

        if (result.affectedRows !==1) {
            res.status(500).json({ msg: 'Unable to update Reservation.'});
        }
        res.json(result);
    }
};

export.deleteReservation  = async (req, res) => {
        // establish connection
        const con = await connect().catch((err) => {
          throw err;
        });
      
        // query delete task
        const result = await query(con,DELETE_RESERVATIONS(req.user.userId, req.params.resId)
        ).catch(serverError(res));
      
        if (result.affectedRows !== 1) {
          res
            .status(500)
            .json({ msg: `Unable to delete Reservation` });
        }
        res.json({ msg: 'Deleted successfully.' });
      };
      