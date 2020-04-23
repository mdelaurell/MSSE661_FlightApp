exports.serverError = (res) => (err) => {
    console.log(err);
    res.status(500).json({
      error: {
        msg: err.message,
      },
      msg: 'Cannot process response at the time. Please try again shortly.',
    });
  };
  
  /** Build up values string.
  *
  * @example
  * 'key1 = value1, key2 = value2, ...'
  * "task_name = \'Task 1\', status = \'complete\', date = \'<today's_date>\'"
  */
  exports._buildValuesString = (req) => {
     const body = req.body;
     const values = Object.keys(body).map(
       // [task_name, status].map()
       (key) => `${key} = ${mysql.escape(body[key])}` // 'New 1 task name'
     );
   
     values.push(`created_date = NOW()`); // update current date and time
     values.join(', '); // make into a string
     return values;
   };
  