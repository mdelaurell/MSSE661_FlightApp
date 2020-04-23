const mysql = require('mysql');
const connect = require('../db-config');
const {
    ALL_TRAVELERS,
    SINGLE_TRAVELER,
    CREATE_TRAVELER,
    UPDATE_TRAVELER,
    DELETE_TRAVELER,
} = require('../queries/travelers.queries');
const query = require('../utils/query');
const { serverError } = require('../utils/handlers');

exports.getAllTravelers = async(req,res) => {

    const con = await connect().catch((err) => {
        throw err;
    });

    const travelers = await query(con, ALL_TRAVELERS(req.user.id), []).catch(
        serverError(res)
    );

    if (!travelers.length) {
        res.status(4    00).json({msg: 'No travlers available for this user.'});
    }
    res.json(travelers);
};

exports.getTraveler = async (req,res) => {

    const con = await connect().catch((err) => {
        throw err;
    });

    const travelers = await query(con, SINGLE_TRAVELER(req.user.id, req.params.travelerId)).catch(serverError(res));

    if (!travelers.length) {
        res.status(400).json({msg: 'No travlers available for this user.'});
    }
    res.json(travelers);
};


exports.createTravelers = async (req,res) => {

    const con = await connect().catch((err) => {
        throw err;
    });

    // query add task
    const taskName = mysql.escape(req.body.traveler);
    const result = await query(con, CREATE_TRAVELER(user.id, taskName)).catch(
      serverError(res)
    );

    if (result.affectedRows !== 1) {
      res
        .status(500)
        .json({ msg: `Unable to add task: ${req.body.task_name}` });
    }
    res.json({ msg: 'Added task successfully!' });
};

 
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

  exports.updateTraveler = async (req, res) => {
    // establish connection
    const con = await connection().catch((err) => {
      throw err;
    });
    const values = _buildValuesString(req);
  
    // query update task
    const result = await query(
      con,
      UPDATE_TRAVELER(req.user.id, req.params.taskId, values)
    ).catch(serverError(res));
  
    if (result.affectedRows !== 1) {
      res
        .status(500)
        .json({ msg: `Unable to update traveler: '${req.body.travelerFirstName}, ${req.body.travelerLastName}'` });
    }
    res.json(result);
  };

  // http://localhost:3000/tasks/1
exports.deleteTraveler = async (req, res) => {
    // establish connection
    const con = await connection().catch((err) => {
      throw err;
    });
  
    // query delete task
    const result = await query(
      con,
      DELETE_TRAVELER(req.user.id, req.params.travelerId)
    ).catch(serverError(res));
  
    if (result.affectedRows !== 1) {
      res
        .status(500)
        .json({ msg: `Unable to delete task at: ${req.params.travelerId}` });
    }
    res.json({ msg: 'Deleted successfully.' });
  };
  