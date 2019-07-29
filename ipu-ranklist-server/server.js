require('./config/config');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');

const courses = require('./data/courses.json');
const institutes = require('./data/institutes.json')

var { Student } = require('./models/student');
var helper = require('./helpers/helper');

var app = express();
app.use(cors());
app.options('*', cors());
const port = process.env.PORT;

app.use(bodyParser.json());

// branch and batch and compulsory query params;
app.get('/api/list', (req, res) => {
    try {
        console.log(req.query);
        let insti = req.query.insti || '0';
        let shift = req.query.shift || '0';
        let batch = req.query.batch || '16';
        let branch = req.query.branch || 'CSE';
        let sem = parseInt(req.query.sem) || 1;

        let options = helper.makeListOptions(insti, shift, batch, branch);
        console.log('List Hit. Options:');
        console.log(options);

        Student.find(options).then(students => {
            let newStudents = students.map(stu => {
                stu = stu.toObject();
                stu.semester = stu.semesters[sem-1];
                stu.semesters = null;
                return stu;
            });
            console.log(`Data of ${students.length} students sent.`);
            res.send(newStudents);
        }).catch((err) => {
            res.send(`[Caught]There was an error in fetching data from the database. ${err}`);
        });
    } catch (err) {
        console.log('SERVER ERROR', err);
        res.status(500).send(err);
    }
})

app.listen(port, () => {
    console.log('Server started on port ' + port);
});

module.exports = { app };