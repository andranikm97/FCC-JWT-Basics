const { StatusCodes } = require('http-status-codes');
const { CustomAPIError } = require('../errors/index');
const errorHandlerMiddleware = (err, req, res, next) => {
  if (err instanceof CustomAPIError) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  console.log(err);
  return res
    .status(StatusCodes.INTERNAL_SERVER_ERROR)
    .json({ msg: 'Something went wrong, try again later', error: err });
};

module.exports = errorHandlerMiddleware;
