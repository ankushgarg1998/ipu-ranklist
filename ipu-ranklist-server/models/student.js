var mongoose = require('mongoose');

var StudentSchema = new mongoose.Schema({
    enroll_no: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    sid: String,
    scheme_id: String,
    class_roll_no: String,
    insti_code: String,
    course_code: String,
    admission_year: Number,
    semesters: [{
        semester_no: Number,
        subject_count: Number,
        subjects: [{
            paper_id: {
                type: String,
                required: true,
            },
            name: String,
            credits: Number,
            minor: Number,
            major: Number,
            marks: {
                type: Number,
                required: true,
            },
            grade: String
        }],
        total_marks: Number,
        max_marks: Number,
        total_credits: Number,
        max_credits: Number,
        total_credit_marks: Number,
        max_credit_marks: Number,
        percentage: Number,
        credit_percentage: Number
    }]
});

StudentSchema.index({
    insti_code: 1,
    course_code: 1,
    admission_year: 1
});

StudentSchema.path('enroll_no').validate((enrollno) => {
    return enrollno && enrollno.length === 11;
}, 'Invalid Enrollment Number (must be 11 characters)');

StudentSchema.pre('save', function (next) {
    var student = this;
    student.class_roll_no = student.enroll_no.substring(0, 3);
    student.insti_code = student.enroll_no.substring(3, 6);
    student.course_code = student.enroll_no.substring(6, 9);
    student.admission_year = parseInt(student.enroll_no.substring(9, 11), 10);
    next();
});

var Student = mongoose.model('Student', StudentSchema);

module.exports = { Student };