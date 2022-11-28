const express = require("express")
const app = express()
const bcrypt = require("bcrypt")
const path = require('path');
const session = require('express-session');
const mysql = require('mysql2');
const dotenv = require("dotenv").config()

const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DATABASE = process.env.DB_DATABASE
const DB_PORT = process.env.DB_PORT
const db = mysql.createPool({
    connectionLimit: 100,
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
    port: DB_PORT
})

db.getConnection((err, connection) => {
    if (err) throw (err)
    console.log("Connection has been established successfully: " + connection.threadId)
})

//CREATE TABLE `test`.`project` (`user` INT(7) NOT NULL AUTO_INCREMENT , `password` VARCHAR(255) NOT NULL , `email` VARCHAR(255) NOT NULL , `name` VARCHAR(255) NOT NULL , PRIMARY KEY (`user`), UNIQUE `email` (`email`)) ENGINE = InnoDB;
const port = process.env.PORT
app.listen(port,
    () => console.log(`Server Started on port ${port}...`))

app.use(express.json())
//middleware to read req.body.<params>

app.use(session({
    secret: '321af37d-79b1-4f3e-bcf6-012bf57e33bb',
    resave: true,
    saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'static')));

app.set("view engine", "ejs")
// Route to Homepage
app.get("/", (req, res) => res.render("index"))
// Route to Register Page
app.get("/createUser", (req, res) => res.render("register"))
// Route to Login Page
app.get("/login", (req, res) => res.render("login"))
// Route to Dashboard Page
app.get("/dashboard", (req, res) => {
    if (req.session.user) {
        res.render("dashboard", { user: req.session.user })
    } else {
        res.send("Unauthorize User")
    }
})

app.get("/thankyou-page", (req, res) => res.render("thankyou-page"))

app.get("/logout", (req, res) => res.redirect("/"))
//app.get("/admin", adminAuth, (req, res) => res.render("admin"))
//app.get("/basic", userAuth, (req, res) => res.render("user"))


//CREATE USER
app.post("/createUser", async (req, res) => {
    const user = req.body.user;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const name = req.body.name;
    const email = req.body.email;
    db.getConnection(async (err, connection) => {
        if (err) throw (err)
        await connection.query("SELECT * FROM project WHERE user = ?", [user], async (err, result) => {
            if (err) throw (err)
            console.log("------> Search Results")
            console.log(result.length)
            if (result.length != 0) {
                connection.release()
                console.log("------> User already exists")
                res.sendStatus(409)
            }
            else {
                await connection.query('INSERT INTO project (user, password, name, email) VALUES (?,?,?,?)', [user, hashedPassword, name, email], (err, result) => {
                    connection.release()
                    if (err) throw (err)
                    console.log("--------> Created new User")
                    console.log(result.insertId)
                    res.redirect('/thankyou-page');
                    //res.sendStatus(201)
                })
            }
        }) //end of connection.query()
    }) //end of db.getConnection()
}) //end of app.post()


//LOGIN (AUTHENTICATE USER)
app.post("/login", (req, res) => {
    const user = req.body.user
    const password = req.body.password
    db.getConnection(async (err, connection) => {
        if (err) throw (err)
        await connection.query("Select * from project where user = ?", [user], async (err, result) => {
            connection.release()

            if (err) throw (err)
            if (result.length == 0) {
                console.log("--------> User not found")
                res.sendStatus(404)
            }
            else {
                const hashedPassword = result[0].password
                //get the hashedPassword from result
                if (await bcrypt.compare(password, hashedPassword)) {
                    console.log("---------> Login Successful")
                    req.session.loggedin = true;
                    req.session.user = user;
                    //res.send(`${user} is logged in!`)
                    res.redirect('/dashboard');
                }
                else {
                    console.log("---------> Password Incorrect")
                    res.send("Password incorrect!")
                } //end of bcrypt.compare()
            }//end of User exists i.e. results.length==0
        }) //end of connection.query()
    }) //end of db.connection()
}) //end of app.post()