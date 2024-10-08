const router = require('express').Router();
const { deleteBoards } = require('../controllers/deleteBoards');

router.get('/get_boards/:post_id', deleteBoards);

module.exports = router; // router 모듈 내보내기
