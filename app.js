import express from 'express';
const app = express();

app.listen(3000, () => {
  console.log("서버 구동 중.. (http://localhost:3000)");
});