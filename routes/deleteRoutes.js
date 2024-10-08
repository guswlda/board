const router = require('express').Router();
const { deleteBoards } = require('../controllers/deleteBoards');

router.delete('/delete_boards/:post_id', deleteBoards);

module.exports = router; // router 모듈 내보내기
