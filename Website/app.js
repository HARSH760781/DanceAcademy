require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const app = express()
const mongoose = require('mongoose');
const json = require('express');
mongoose.connect('mongodb+srv://Harsh760781:12345yuiop@cluster0.7wegz.mongodb.net/contactDance', { useNewUrlParser: true, useUnifiedTopology: true });
// console.log(process.env.user);
// console.log(process.env.pass);
// 
// Define mongoose Schema......

var ContactSchema = new mongoose.Schema({
    name: String,
    Age: Number,
    Address: String,
    Email: String,
    tel: Number
});

var Contact = mongoose.model('Contact', ContactSchema);



app.use('/static', express.static('static'));
app.use(express.urlencoded())
    //To set pug template..
app.set('view engine', 'pug')

//Endpoint
app.get('/', (req, res) => {
    res.status(200).render('index.pug')
})
app.get('/home', (req, res) => {
    res.status(200).render('index.pug')
})
app.get('/about', (req, res) => {
    res.status(200).render('about.pug')
})
app.get('/services', (req, res) => {
    res.status(200).render('services.pug')
})
app.get('/contact', (req, res) => {
    res.status(200).render('contact.pug')
})
app.get('/join', (req, res) => {
    res.status(200).render('join class.pug')
})

app.post('/contact', (req, res) => {
    var myData = new Contact(req.body)
    myData.save().then(() => {
            res.status(200).send("Your data is saved to the database...")
        })
        .catch(() => {
            res.send("Your data has not been saved in the database.");
        })
});

let port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log("The website is started successfully");
});