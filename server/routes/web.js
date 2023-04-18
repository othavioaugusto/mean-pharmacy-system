var express = require('express'),
    router = express.Router(),
    path = require("path");

var absPath = path.join(__dirname, "../../app");

// route to handle home page
router.get('/', function(req, res, next) {
    res.sendFile(absPath + "/login.html");
});

// route to handle home page
router.get('/teste_retorno_wsa', function(req, res, next) {
    res.send({nome:'othavio', pais:'brasil'})
});

module.exports = router;