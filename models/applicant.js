// disabled the db connection
// const orm = require('../config/orm.js');
const log = console.log;

const Applicant = {
    form: function(callback){
        callback();
        // orm.selectAll( 'applicant', function(ormResponse){
        //     log('orm response: ', ormResponse);
        //     callback(ormResponse);
        // });
    }
}

module.exports = Applicant;