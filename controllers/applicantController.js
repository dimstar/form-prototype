const applicant = require('../models/applicant.js');
const log = console.log;

module.exports = {
    firstStep: function(cb){
        applicant.form((data)=>{
            log('form data: ', data);
            let handlebars = {
                stepOne: 'active',
                nextStep: '/more-questions'
            }
            cb(handlebars);
        });
    },
    secondStep: function(cb){
        applicant.form((data)=>{
            log('form data: ', data);
            let handlebars = {
                stepTwo: 'active',
                nextStep: '/get-your-results'
            }
            cb(handlebars);
        });
    },
    thirdStep: function(cb){
        applicant.form((data)=>{
            log('form data: ', data);
            let handlebars = {
                stepThree: 'active',
                nextStep: ''
            }
            cb(handlebars);
        });
    }
}