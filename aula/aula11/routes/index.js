var express = require('express');
const {verificarToken} = require('../middlewares/auth');
var router = express.Router();

/* GET home page. */
router.get('/', verificarToken ,function(req, res, next) {
 res.json("API ESTA ON!");
});



module.exports = router;
