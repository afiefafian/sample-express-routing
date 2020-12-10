const express = require('express');

const router = express.Router();

// Import controller
const resourceTwoController = require('../controllers/resource2');

router.get('/', resourceTwoController.get);
router.get('/:id', resourceTwoController.getOne);
router.post('/', resourceTwoController.post);
router.put('/:id', resourceTwoController.put);
router.delete('/:id', resourceTwoController.delete);

module.exports = router;
