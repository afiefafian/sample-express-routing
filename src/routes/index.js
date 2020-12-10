// routes/index.js
const express = require('express');

// Import routes
const resource1 = require('./resource1');
const resource2 = require('./resource2');

const router = express.Router();

router.use('/resource-1', resource1);
router.use('/resource-2', resource2);

module.exports = router;
