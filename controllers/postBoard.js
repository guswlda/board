const database = require('../database/database');

exports.postBoard = async (req, res) => {
  try {
    const post_id = req.params.post_id;
    const { title, author, content } = req.body;

    const result = await database.query(
      `INSERT INTO board (post_id, title, author, content) 
       VALUES ($1, $2, $3, $4);`, // ORDER BY 대신 RETURNING 사용
      [post_id, title, author, content] // post_id는 첫 번째에, 나머지는 그 뒤에
    );

    return res.status(200).json(result.rows[0]); // 삽입된 게시물의 데이터를 반환
  } catch (error) {
    console.error('Database query error:', error); // 추가된 에러 로그
    return res.status(500).json({ error: error.message });
  }
};
