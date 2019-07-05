require('./config/config');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');

const courses = require('./data/courses.json');
const institutes = require('./data/institutes.json')

var { Student } = require('./models/student');

var app = express();
app.use(cors());
app.options('*', cors());
const port = process.env.PORT;

app.use(bodyParser.json());

app.get('/api/list/:institute/:shift/:batch/:course/:sem', (req, res) => {
    console.log(req.params);
    let institute = institutes.find(insti => {
        return insti.abbrev.toUpperCase() === req.params.institute.toUpperCase();
    });
    // console.log(institute);
    let instiCode = (req.params.shift.toUpperCase() === 'M'? institute.code: institute.codeEve);
    let batch = parseInt(req.params.batch);
    let course = courses.find(c => {
        return c.branch.toUpperCase() === req.params.course.toUpperCase();
    })
    // console.log(course);
    let courseCode = course.code, courseCodeLE = course.codeLE;
    let sem = parseInt(req.params.sem);

    Student.find({
        insti_code: instiCode,
        admission_year: batch,
        course_code: courseCode
    }).then(students => {
        res.send(students);
    })
})

app.listen(port, () => {
    console.log('Server started on port ' + port);
});

module.exports = { app };