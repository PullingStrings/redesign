const port = process.env.PORT || 4000;
const dbURI = process.env.MONGODB_URI || 'mongodb://localhost/birds';
const secret = process.env.SECRET || 'tito';

module.exports = { port, dbURI, secret };
