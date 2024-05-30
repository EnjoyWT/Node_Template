const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');


router.post('/create', userController.createUser);
router.post('/update', userController.updateUser);
router.get('/getuser',userController.getUser)
module.exports = router;
