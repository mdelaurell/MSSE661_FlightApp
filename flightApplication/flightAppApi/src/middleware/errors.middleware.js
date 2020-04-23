// 404 - NOT FOUND
exports.error404 = (req, res, next) => {
    next({ msg: 'Not Found', status: 404 });
  };
  
 //  500 - Internal Server Error
  exports.error500 = (error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
      error: {
        msg: error.message,
      },
    });
  };