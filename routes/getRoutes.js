const router = require('express').Router();
const { getBoards } = require('../controllers/getBoards');

router.get('/get_boards/:post_id', getBoards);

module.exports = router; // router 모듈 내보내기
