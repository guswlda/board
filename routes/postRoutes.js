const router = require('express').Router();
const { postBoard } = require('../controllers/postBoard');

// controller post 방식으로 postgresql에서 데이터를 가져오면 route를 통해 index.js로 보내줌
router.post('/post_board/:post_id', postBoard);

module.exports = router;
