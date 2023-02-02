// 3rd Party Modules
const { Router } = require('express');

// Local Modules
const card = require('../controllers/card');

// Initialization
const router = Router();

// Requests 
router.get('/', card.getCard);
router.post('/', card.postCard);

module.exports = router;