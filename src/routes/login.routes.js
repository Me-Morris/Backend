const express = require("express");
const router = express.Router();
const loginControllers = require('../controllers/login.controllers')

router.use(express.json());

router.get('/', loginControllers.loginView)
router.post('/', loginControllers.login);




module.exports = router;