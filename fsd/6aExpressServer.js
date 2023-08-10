
//ExpressServer.js:

const express = require('express'); // Include ExpressJS
const app = express(); // Create an ExpressJS app
const bodyParser = require('body-parser'); // Middleware
app.use(bodyParser.urlencoded({ extended: false }));
// Route to Homepage
app.get('/', (req, res) => {
 res.sendFile(__dirname + '/Index.html');
});
// Route to Login Page
app.get('/login', (req, res) => {
 res.sendFile(__dirname + '/RegistrationForm.html');
});
app.post('/login', (req, res) => {
 // Insert Login Code Here
 let fname = req.body.fname;
 let lfname = req.body.lname;
 let course = req.body.scourse;
 let gender = req.body.gender;
 let phone = req.body.phone;
 let address = req.body.address;
 let email = req.body.email;
 let password = req.body.pass;
 res.send(`Name: ${fname}${lfname} \
 Course: ${course} \
 Gender: ${gender} \
 Phone: ${phone} \
 Address: ${address} \
 Email: ${email} \
 Password: ${password} `);
 console.log(`Name: ${fname}+${lfname} \n\
 Course: ${course} \n\
 Gender: ${gender} \n\
 Phone: ${phone} \n\
 Address: ${address} \n\
 Email: ${email} \n\
 Password: ${password} `);
});
const port = 5000 // Port we will listen on
// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port${port}`));