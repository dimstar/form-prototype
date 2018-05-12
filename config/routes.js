const applicantController = require('../controllers/applicantController.js');
const exphbs = require('express-handlebars');

module.exports = {
    init: function(app){
        // handlebar middleware
        app.engine('handlebars', exphbs({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

        // begin the actual routing and handoff to the views
        app.get('/', this.stepOne );
        app.get('/more-questions', this.stepTwo );
        app.get('/get-your-results', this.stepThree );
        
    },
    stepOne: function(request, response){
        applicantController.firstStep(function(renderData){
            console.log(renderData)
            response.render('step1', renderData);
        });
    },
    stepTwo: function(request, response){
        applicantController.secondStep(function(renderData){
            console.log(renderData)
            response.render('step2', renderData);
        });
    },
    stepThree: function(request, response){
        applicantController.thirdStep(function(renderData){
            console.log(renderData)
            response.render('step3', renderData);
        });
    }
}
