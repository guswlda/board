const express = require('express');
const router = express.Router();
const { patchBoard } = require('../controllers/putBoard');

// /put_board/:post_id 라우팅
router.post('/path_board/:post_id', patchBoard);

module.exports = router;
