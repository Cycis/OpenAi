const express = require('express');
const router = express.Router();
const { generateImage } = require('../controllers/openController')

router.post('/generateImage', generateImage)

module.exports = router;