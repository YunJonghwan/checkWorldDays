/**
 * @description json파일을 받아와서 데이터를 화면에 표시해주는 함수
 */
function makeList() {
  //* 월드 추가 버튼
  const btn = document.getElementsByClassName('btn')[0];

  /**
   * * 월드 추가 버튼을 누를경우 display 변환
   * * 기존에 보여줫던 list를 none으로 바꿔주고 modal을 block으로 바꿔준다.
   */
  btn.addEventListener('click', () => {
    const modal = document.getElementsByClassName('addWorld')[0];
    const list = document.getElementsByClassName('list')[0];
    list.style.display = 'none';
    modal.style.display = 'block';
  })

  /**
   * * 이후 json데이터를 활용하게 될 예정
   * * 임의의 값을 지정하여 데이터를 넣어줌
   */
  for(let i=170; i<173; i++) {
    const list = document.getElementsByClassName('listContent')[0];
    const mainDiv = document.createElement('div');
    const div = [document.createElement('div'), document.createElement('div'), document.createElement('div'), document.createElement('div')];
    div[0].textContent = "example" + i;
    div[1].textContent = i;
    div[2].textContent = 180 - i;
    //* 입력을 했을때 지정한 날짜와 남은 날짜를 계산하여 달력으로 표기
    div[3].textContent = "03/04 (화)";
    div.forEach((element) => {
      mainDiv.append(element);
    })
    list.append(mainDiv);
  }
}

makeList();