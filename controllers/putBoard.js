const database = require('../database/database');

exports.patchBoard = async (req, res) => {
  try {
    const post_id = req.params.post_id;
    const { title, author, content } = req.body;

    const result = await database.query(
      'UPDATE board SET title = $1, author = $2, content = $3 WHERE post_id = $4;',
      [title, author, content, post_id]
    );

    return res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error('Database query error:', error);
    return res.status(500).json({ error: error.message });
  }
};
