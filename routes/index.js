var express = require('express');
var router = express.Router();
var bodyParser = require("body-parser");
var request = require('request');

/* GET home page. */
router.get('/index', function (req, res, next) {
    res.render('index', {title: 'My Form'});
});

router.post('/index', function (req, res, next) {
        var userDataArray = req.body;
        // Set the headers
        var headers = {
            'User-Agent': 'me me me',
            'Content-Type': 'application/json'
        }
        // Configure the request
        var options = {
            url: 'http://localhost:3001/index',
            method: 'POST',
            headers: headers,
        }

        var counter = 0;
        for (index in userDataArray) {
            options.json = userDataArray[index];
            // Start the request
            request(options,
                function (error, response, body) {
                    if (!error && response.statusCode == 200) {
                        userDataArray[counter] = body;
                        // Print out the response body
                        if (++counter >= userDataArray.length) {
                            res.setHeader('Content-Type', 'application/json');
                            res.send(JSON.stringify(userDataArray));
                        }
                    }

                });
        }
    });


module.exports = router;
