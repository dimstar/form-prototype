const applicant = require('../models/applicant.js');
const log = console.log;

module.exports = {
    firstStep: function(cb){
        applicant.form((data)=>{
            log('form data: ', data);
            let handlebars = {
                stepOne: 'active',
                nextStep: '/activate/business-information',
                continueButton: 'Activate Account'
            }
            cb(handlebars);
        });
    },
    secondStep: function(cb){
        applicant.form((data)=>{
            log('form data: ', data);
            let handlebars = {
                stepTwo: 'active',
                nextStep: '/activate/get-results',
                continueButton: 'Continue'
            }
            cb(handlebars);
        });
    },
    thirdStep: function(cb){
        applicant.form((data)=>{
            log('form data: ', data);
            let handlebars = {
                stepThree: 'active',
                nextStep: '/activate/results',
                continueButton: 'Get Results'
            }
            cb(handlebars);
        });
    }
}