const mysql = require("mysql2");
const session = require('express-session');
require("dotenv").config();

const {
    DB_HOST,
    DB_DATABASE,
    DB_PASSWORD,
    DB_USER,
    DB_PORT
} = require("./config");

const options = {
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT
}

const pool = mysql.createPool(options);

pool.getConnection((err, connection) => {
    if (err) throw (err)
    console.log("Database connected successfully: " + connection.threadId);
    var sql = "CREATE TABLE IF NOT EXISTS `project` (`Serial` INT NOT NULL AUTO_INCREMENT, `user` VARCHAR(15) NOT NULL, `password` VARCHAR(255) NOT NULL , `email` VARCHAR(255) NOT NULL , `name` VARCHAR(255) NOT NULL , INDEX `Serial`(`Serial`), PRIMARY KEY (`user`), UNIQUE `email` (`email`));";
    pool.query(sql, function (err, result) {
        if (err) throw (err);
        console.log("Table created");
    });
});

module.exports = { pool, session };
