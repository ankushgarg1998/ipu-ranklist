require('./config/config');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cache = require('memory-cache');

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

// configure cache middleware
let memCache = new cache.Cache();
let cacheMiddleware = (duration) => {
    return (req, res, next) => {
        let key =  '__express__' + req.originalUrl || req.url
        let cacheContent = memCache.get(key);
        if(cacheContent){
            res.send( cacheContent );
            return
        }else{
            res.sendResponse = res.send
            res.send = (body) => {
                memCache.put(key,body,duration*1000);
                res.sendResponse(body)
            }
            next()
        }
    }
}

// branch and batch and compulsory query params;
app.get('/api/list', cacheMiddleware(500), (req, res) => {
    try {
        console.log(`List Hit @ ${JSON.stringify(req.query)}`);
        let insti = req.query.insti || 'MSIT';
        let shift = req.query.shift || 'M';
        let batch = req.query.batch || '16';
        let branch = req.query.branch || 'CSE';
        let sem = parseInt(req.query.sem || '1');

        let options = helper.makeListOptions(insti, shift, batch, branch);
        // console.log(options);

        Student.find(options).then(students => {
            console.log('db query resolved');
            let newStudents = students.map(stu => {
                stu = stu.toObject();
                if(sem === 0) {
                    stu.semesters.forEach(sem => {
                        sem.subjects = [];
                    })
                } else {
                    stu.semester = stu.semesters[sem-1];
                    stu.semesters = null;
                }
                return stu;
            });
            console.log(`=> Data of ${students.length} students sent.`);
            res.send(newStudents);
        }).catch((err) => {
            res.send(`[Caught]There was an error in fetching data from the database. ${err}`);
        });
    } catch (err) {
        console.log('SERVER ERROR', err);
        res.status(500).send(err);
    }
});

app.get('/api/student', cacheMiddleware(500), (req, res) => {
    try {
        console.log(req.query);
        if(!req.query.enroll) {
            throw Error('No Enrollment No was sent in API Request');
        }
        let enroll = req.query.enroll;

        Student.find({
            enroll_no: enroll
        }).then(student => {
            // console.log(student);
            res.send(student);
        }).catch((err) => {
            res.send(`[Caught]There was an error in fetching data from the database. ${err}`);
        });
    } catch (err) {
        console.log('SERVER ERROR', err);
        res.status(500).send(err);
    }
});

app.get('/api/university-list', (req, res) => {
    try {
        console.log(`University List Hit @ ${JSON.stringify(req.query)}`);
        let batch = req.query.batch || '16';
        let branch = req.query.branch || 'CSE';
        let sem = parseInt(req.query.sem || '1');
        let temp = `semesters.${sem}.total_marks`;
        let tempObj = {};
        tempObj[temp] = -1;

        let options = helper.makeUniListOptions(batch, branch, sem);

        Student.find(options, null, {sort: tempObj, limit: 100}).then(students => {
            console.log('UniList query resolved');
            console.log(`=> Data of ${students.length} students sent.`);
            // res.send(students.map(stu => stu.name));
            let newStudents = students.map(stu => {
                stu = stu.toObject();
                if(sem === 0) {
                    stu.semesters.forEach(sem => {
                        sem.subjects = [];
                    })
                } else {
                    stu.semester = stu.semesters[sem-1];
                    stu.semesters = null;
                }
                return stu;
            });
            res.send(newStudents);
        }).catch((err) => {
            res.send(`[Caught]There was an error in fetching data from the database. ${err}`);
        });
    } catch(err) {
        console.log('SERVER ERROR', err);
        res.status(500).send(err);
    }
});

app.listen(port, () => {
    console.log('Server started on port ' + port);
});

module.exports = { app };