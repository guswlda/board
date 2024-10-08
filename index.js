const port = '8080'; // 8080 포트를 사용
const express = require('express'); // express 모듈 사용
const app = express(); // express 모듈을 app 변수 할당
app.use(express.json()); // req.body를 JSON으로 파싱

// app.get('/', (req, res) => {
//   res.send('hello world');
// });

// app.delete('/delete_board', async (req, res) => {
//   try {
//     const result = await pool.query('DELETE FROM board WHERE post_id = 1;;');
//     return res.status(200).json({ message: 'Board Put Successfully' });
//   } catch (error) {
//     return res.status(500).json({ message: 'Update Completed Fail' + error });
//   }
// });

app.use(require('./routes/getRoutes')); // getRoutes 사용
app.use(require('./routes/postRoutes')); // postRoutes 사용
app.use(require('./routes/putRoutes')); // updateRoutes 사용
// app.use(require('./routes/deleteRoutes')); // deleteRoutes 사용

app.listen(port, () => console.log(`App running on port ${port}`));
