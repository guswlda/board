const database = require('../database/database'); // database 모듈 불러오기

exports.getBoards = async (req, res) => {
  const post_id = req.params.post_id;

  try {
    const result = await database.query(
      'SELECT * FROM board WHERE post_id =$1',
      [post_id]
    );
    return res.status(200).json(result.rows); // result.rows : 실제 사용할 내용
  } catch (error) {
    console.error('Database query error:', error); // 추가된 에러 로그
    return res.status(500).json({ error: error.message });
  }
};
