const express = require('express');

const router = express.Router();

// Import controller
const resourceOneController = require('../controllers/resource1');

router.get('/', resourceOneController.get);
router.get('/:id', resourceOneController.getOne);
router.post('/', resourceOneController.post);
router.put('/:id', resourceOneController.put);
router.delete('/:id', resourceOneController.delete);

module.exports = router;
