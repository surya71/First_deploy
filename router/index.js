const express = require('express');
const router = express.Router();

router.use(require('./shipper.js'));
router.use(require('./transporter.js'));

module.exports = router;