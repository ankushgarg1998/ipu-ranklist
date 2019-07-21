var allCourses = require('../data/courses.json');
var allInstitutes = require('../data/institutes.json');


// For an array f instis ['msit', mait'], this function returns array of all the instiCodes including the case of shifts where shift can be 'M', 'E', '0' (both)
function getInstiCodes(instis, shift) {
    instis = instis.map(insti => insti.toUpperCase());
    shift = shift.toUpperCase();
    let instiCodes = allInstitutes.reduce((accumulator, currentInsti) => {
        if(instis.includes(currentInsti.abbrev) && (shift == 'M' || shift == '0'))
            accumulator.push(currentInsti.code);
        if(instis.includes(currentInsti.abbrev) && (shift == 'E' || shift == '0'))
            accumulator.push(currentInsti.codeEve);
        return accumulator;
    }, []);
    return instiCodes;
}

// Returns course ka obj as per courses.json
function getCourseObj(branch) {
    branch = branch.toUpperCase();
    let thisCourse = allCourses.find(course => course.branch === branch);
    return thisCourse;
}

function makeListOptions(insti, shift, batch, branch) {
    let options = {};
    if(insti !== '0') {
        let instis = insti.split(',');
        let instiCodes = getInstiCodes(instis, shift);
        options.insti_code = instiCodes;
    }

    let admissionYear = parseInt(batch);
    let courseObj = getCourseObj(branch);
    options['$or'] = [
        {
            course_code: courseObj.code,
            admission_year: admissionYear,
        },
        {
            course_code: courseObj.codeLE,
            admission_year: admissionYear+1,
        }
    ];
    return options;
}

module.exports = { makeListOptions };