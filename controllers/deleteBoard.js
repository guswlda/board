const database = require('../database/database'); // database 모듈 불러오기

exports.deleteBoards = async (req, res) => {
  const post_id = req.params.post_id;

   try {
    const result = await database.query('DELETE FROM board WHERE post_id = 1;;');
    return res.status(200).json({ message: 'Board Put Successfully' });
  } catch (error) {
    return res.status(500).json({ message: 'Update Completed Fail' + error });
  }
};
