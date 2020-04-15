require('./config/config');

const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cache = require('memory-cache');
const path = require('path');

var { mongoose } = require('./db/mongoose');

const courses = require('./data/courses.json');
const institutes = require('./data/institutes.json')

var { Student } = require('./models/student');
var { BcaStudent } = require('./models/bcaStudent');
var { BbaStudent } = require('./models/bbaStudent');
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
        console.log(`[B Tech] List Hit @ ${JSON.stringify(req.query)}`);
        let insti = req.query.insti || 'MSIT';
        let shift = req.query.shift || 'M';
        let batch = req.query.batch || '16';
        let branch = req.query.branch || 'CSE';
        let sem = parseInt(req.query.sem || '1');

        let options = helper.makeListOptions(insti, shift, batch, branch);
        // console.log(options);

        Student.find(options).then(students => {
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
            console.log(`=> Data of ${students.length} students sent.\n`);
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
        if(!req.query.enroll) {
            throw Error('No Enrollment No was sent in API Request');
        }
        let enroll = req.query.enroll;
        let courseCode = enroll.substring(6, 9);

        if(courseCode === '020') {
            console.log(`[BCA] Student Hit @ ${JSON.stringify(req.query)}`);
            BcaStudent.find({
                enroll_no: enroll
            }).then(student => {
                console.log(`=> Response sent.\n`);
                res.send(student);
            }).catch((err) => {
                res.send(`[Caught]There was an error in fetching data from the database. ${err}`);
            });
        } else if (courseCode === '017' || courseCode === '018' || courseCode === '019') {
            console.log(`[BBA] Student Hit @ ${JSON.stringify(req.query)}`);
            BbaStudent.find({
                enroll_no: enroll
            }).then(student => {
                console.log(`=> Response sent.\n`);
                res.send(student);
            }).catch((err) => {
                res.send(`[Caught]There was an error in fetching data from the database. ${err}`);
            });
        }else {
            console.log(`[B Tech] Student Hit @ ${JSON.stringify(req.query)}`);
            Student.find({
                enroll_no: enroll
            }).then(student => {
                console.log(`=> Response sent.\n`);
                res.send(student);
            }).catch((err) => {
                res.send(`[Caught]There was an error in fetching data from the database. ${err}`);
            });
        }

    } catch (err) {
        console.log('SERVER ERROR', err);
        res.status(500).send(err);
    }
});

// BCA RankList
app.get('/api/bca-list', cacheMiddleware(500), (req, res) => {
    try {
        console.log(`[BCA] List Hit @ ${JSON.stringify(req.query)}`);
        let insti = req.query.insti || 'MSI';
        let batch = req.query.batch || '16';
        let sem = parseInt(req.query.sem || '1');

        let options = helper.makeBcaListOptions(insti, batch);
        // console.log(options);

        BcaStudent.find(options).then(students => {
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
            console.log(`=> Data of ${students.length} students sent.\n`);
            res.send(newStudents);
        }).catch((err) => {
            res.send(`[Caught]There was an error in fetching data from the database. ${err}`);
        });
    } catch (err) {
        console.log('SERVER ERROR', err);
        res.status(500).send(err);
    }
});

// BBA RankList (Not complete yet)
app.get('/api/bba-list', cacheMiddleware(500), (req, res) => {
    try {
        console.log(`[BBA] List Hit @ ${JSON.stringify(req.query)}`);
        let insti = req.query.insti || 'MSI';
        let batch = req.query.batch || '16';
        let branch = req.query.branch || 'G';
        let sem = parseInt(req.query.sem || '1');

        let options = helper.makeBbaListOptions(insti, batch, branch);
        // console.log(options);

        BbaStudent.find(options).then(students => {
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
            console.log(`=> Data of ${students.length} students sent.\n`);
            res.send(newStudents);
        }).catch((err) => {
            res.send(`[Caught]There was an error in fetching data from the database. ${err}`);
        });
    } catch (err) {
        console.log('SERVER ERROR', err);
        res.status(500).send(err);
    }
});

app.use(express.static('dist'));

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log('Server started on port ' + port);
});

module.exports = { app };