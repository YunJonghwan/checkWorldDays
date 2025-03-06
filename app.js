const express = require('express');
const { engine } = require('express-handlebars');

const app = express();

//* 참조할 파일 경로 지정
app.use('/', express.static(__dirname + '/public'));

//* handlebars를 사용하기 위한 설정
app.engine('handlebars', engine({
  //* 기본 레이아웃은 main으로 지정
  defaultLayout: "main.handlebars",
  //* 레이아웃 폴더 위치 지정
  layoutsDir: __dirname + '/public/view/layouts',
  //* paritals 폴더 경로 지정 재사용이 가능하도록 paritals를 따로 만들어준다. 
  partialsDir: __dirname + '/public/view/partials'
}));
//* handlebars 엔진 지정
app.set('view engine', 'handlebars');
//* render를 실행할 때 참조할 경로 지정
app.set('views', './public/view');

app.get("/", (req, res) => {
  res.render('home');
});

app.listen(3000, () => {
  console.log("서버 구동 중.. (http://localhost:3000)");
});