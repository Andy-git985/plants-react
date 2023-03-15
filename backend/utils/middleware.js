// TODO how to handle token expired error

const logger = require('./logger');
const jwt = require('jsonwebtoken');

const requestLogger = (request, response, next) => {
  logger.info('Method:', request.method);
  logger.info('Path:  ', request.path);
  logger.info('Body:  ', request.body);
  logger.info('---');
  next();
};

const errorHandler = (error, request, response, next) => {
  console.log('===================');
  logger.error('error message', error.message);
  console.log('===================');
  console.log('error name', error.name);
  console.log('===================');
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' });
  } else if (error.name === 'TypeError') {
    return response.status(400).send({ message: error.message });
  } else if (error.name === 'JsonWebTokenError') {
    return response.statuse(401).json({
      error: 'invalid token',
    });
  } else if (error.name === 'TokenExpiredError') {
    return response.clearCookie('jwt').status(401).json({
      error: 'token expired',
    });
  }
  next(error);
};

module.exports = {
  requestLogger,
  errorHandler,
};
