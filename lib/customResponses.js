function customResponses (rep, res, next) {
  res.notFound = function notFound() {
    const err = new Error('Not Found');
    err.status = 404;
    throw err;
  };

  res.unauthorized = function unauthorized() {
    const err = new Error('Unauthorized');
    err.status = 401;
    throw err;
  };

  next();
}

module.exports = customResponses;