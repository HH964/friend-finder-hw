
// module.exports = (app) =>{
//     app.get("/", function(req, res) {
//         res.sendFile(path.join(__dirname, "/../public/home.html"));
//     });

//     app.get("/survey", function(req, res) {
//         res.sendFile(path.join(__dirname, "/../public/survey.html"));
//     });
// }
    

module.exports = (function() {
    'use strict';
    var externalRoutes = require('express').Router();

    externalRoutes.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/home.html"));
    });
    externalRoutes.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, "/../public/survey.html"));
    });

    return externalRoutes;
})();