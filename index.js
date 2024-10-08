const port = '8080'; // 8080 포트를 사용
const express = require('express'); // express 모듈 사용
const app = express(); // express 모듈을 app 변수 할당
app.use(express.json()); // req.body를 JSON으로 파싱

app.use(require('./routes/getRoutes')); // getRoutes 사용
app.use(require('./routes/postRoutes')); // postRoutes 사용
app.use(require('./routes/putRoutes')); // updateRoutes 사용
// app.use(require('./routes/deleteRoutes')); // deleteRoutes 사용

app.listen(port, () => console.log(`App running on port ${port}`));
