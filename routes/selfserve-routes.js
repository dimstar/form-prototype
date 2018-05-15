const applicantController = require('../controllers/applicantController.js');
const exphbs = require('express-handlebars');

module.exports = {
    init: function(app){
        // handlebar middleware
        app.engine('handlebars', exphbs({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');

        // begin the actual routing and handoff to the views
        // self serve routes
        app.get('/merchant/business-information', this.ssOne );
        app.get('/merchant/get-results', this.ssTwo );
        app.get('/merchant/results', this.ssResults );
        
    },
    ssOne: function(request, response){
        console.log('what?')
        applicantController.selfOne(function(renderData){
            console.log(renderData)
            response.render('ss1', renderData);
        });
    },
    ssTwo: function(request, response){
        applicantController.selfTwo(function(renderData){
            console.log(renderData)
            response.render('ss2', renderData);
        });
    },
    ssResults: function(request, response){
        applicantController.selfResults(function(renderData){
            console.log(renderData)
            response.render('ss3', renderData);
        });
    }
}
