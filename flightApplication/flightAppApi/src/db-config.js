const mysql = require('mysql');
const travelersQueries = require('./queries/travelers.queries');
const authQueries = require('./queries/auth.queries');
const userQueries = require('./queries/user.queries');
const airlineQueries = require('./queries/travelers.queries');
const airportQueries = require('./queries/travelers.queries');
const flightmanageQueries = require('./queries/travelers.queries');
const reservationQueries = require('./queries/travelers.queries');


// Get the Host from Environment
//const host = process.env.DB_HOST || 'localhost';
//const user = process.env.DB_USER || 'root';
//const password = process.env.DB_PASSWORD || 'password';
//const database = process.env.DB_DATABASE || 'mikeDB';
const host = 'localhost';
const user = 'root';
const password = 'M1k3s0upy';
const database = 'flightReserve';

const con = mysql.createConnection({
    host,
    user,
    password,
    database
});

// Connect to the database
con.connect(function(err) {
    if (err) throw err;
    console.log('Connected!');

    con.query(authQueries.CREATE_USERS_TABLE, function(err, result){
        if (err) throw err;
        console.log('Table users created or exists already!');
    });

    con.query(travelersQueries.CREATE_TRAVELERS_TABLE, function(err, result) {
        if (err) throw err;
        console.log('Table Traveler created or exists already!');
    });
   
    con.query(airlineQueries.CREATE_AIRLINE_TABLE, function(err, result) {
        if (err) throw err;
        console.log('Table Airline created or exists already!');
    });
    con.query(airportQueries.CREATE_AIRPORTS_TABLE, function(err, result) {
        if (err) throw err;
        console.log('Table Airports created or exists already!');
    });
    con.query(flightmanageQueries.CREATE_FLIGHTS_TABLE, function(err, result) {
        if (err) throw err;
        console.log('Table Flight created or exists already!');
    });
    con.query(reservationQueries.CREATE_RESERVATIONS_TABLE, function(err, result) {
        if (err) throw err;
        console.log('Table Reservation created or exists already!');
    });
    
});

module.exports = con;