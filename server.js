const express = require("express");
const app = express();
const bcrypt = require("bcrypt")
const path = require('path');
require("dotenv").config();

var  { pool , session } = require('./database.js');
require('./terminal.js');

//CREATE TABLE `test`.`project` (`user` INT(7) NOT NULL AUTO_INCREMENT , `password` VARCHAR(255) NOT NULL , `email` VARCHAR(255) NOT NULL , `name` VARCHAR(255) NOT NULL , PRIMARY KEY (`user`), UNIQUE `email` (`email`)) ENGINE = InnoDB;
const Port = process.env.PORT;
app.listen(Port,
    () => console.log(`Server Started on port ${Port}...`));

app.use(express.json())
//middleware to read req.body.<params>

//const sessionStore = new MySQLStore(db);
app.use(session({
    secret: '321af37d-79b1-4f3e-bcf6-012bf57e33bb',
    resave: true,
    saveUninitialized: true
}));

// Static Files
app.use(express.static(path.join(__dirname, 'public')));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/js', express.static(__dirname + 'public/js'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/Hints', express.static(__dirname + 'public/Hints'));
app.use('/Chapter1', express.static(__dirname + 'public/Chapter1'));
app.use('/Chapter2', express.static(__dirname + 'public/Chapter2'));
app.use('/Chapter2ends', express.static(__dirname + 'public/Chapter2ends'));
app.use('/Chapter3', express.static(__dirname + 'public/Chapter3'));
app.use('/Chapter3ends', express.static(__dirname + 'public/Chapter3ends'));
app.use('/Chapter4', express.static(__dirname + 'public/Chapter4'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('views', path.join(__dirname, 'views'));
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
app.get("/quest", (req, res) => res.render("quest"))
app.get("/quest2", (req, res) => res.render("quest2"))
app.get("/quest3", (req, res) => res.render("quest3"))
app.get("/quest4", (req, res) => res.render("quest4"))
app.get("/quest5", (req, res) => res.render("quest5"))
app.get("/quest6", (req, res) => res.render("quest6"))
app.get("/quest7", (req, res) => res.render("quest7"))
app.get("/quest8", (req, res) => res.render("quest8"))

//app.get("/logout", (req, res) => res.redirect("/"))
app.get('/logout', (req, res)=>{
    req.session.destroy(err => {
        if(err){
            return res.redirect('/')
        }
        res.redirect('/login')
    })
})
//app.get("/admin", adminAuth, (req, res) => res.render("admin"))
//app.get("/basic", userAuth, (req, res) => res.render("user"))


//CREATE USER
app.post("/createUser", async (req, res) => {
    const user = req.body.user;
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    const name = req.body.name;
    const email = req.body.email;
    pool.getConnection(async (err, connection) => {
        if (err) throw (err)
        await connection.execute("SELECT * FROM project WHERE user = ?", [user], async (err, result) => {
            if (err) throw (err)
            console.log("------> Search Results")
            console.log(result.length)
            if (result.length != 0) {
                connection.release()
                console.log("------> User already exists")
                res.sendStatus(409)
            }
            else {
                await connection.execute('INSERT INTO project (user, password, name, email) VALUES (?,?,?,?)', [user, hashedPassword, name, email], (err, result) => {
                    connection.release()
                    if (err) throw (err)
                    console.log("--------> Created new User")
                    console.log(result.insertId)
                    res.redirect('/thankyou-page');
                    //res.sendStatus(201)
                })
            }
        }) //end of connection.execute()
    }) //end of pool.getConnection()
}) //end of app.post()


//LOGIN (AUTHENTICATE USER)
app.post("/login", (req, res) => {
    const user = req.body.user
    const password = req.body.password
    pool.getConnection(async (err, connection) => {
        if (err) throw (err)
        await connection.execute("Select * from project where user = ?", [user], async (err, result) => {
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
        }) //end of connection.execute()
    }) //end of pool.connection()
}) //end of app.post()