//alert("testing");
function calc(){
  let v1 = document.getElementById("v1");
  let v2 = document.getElementById("v2");
  let op = document.getElementById("op");
  
  
  console.log(v1, v2, op);

  let v1Val = v1.value;
  let v2Val = v2.value;
  let opVal = op.value;
  console.log(v1Val, v2Val, opVal);
  //input value가 string(문자)임
  console.log(typeof(v1Val), typeof(v2Val));

  //숫자(정수, 실수)로 형변환
  v1Val = Number(v1Val);
  v2Val = Number(v2Val);

  let result = 0;  //계산 결과값
  switch(opVal){
    case '+':
      result = v1Val + v2Val; break;
    case '-':
      result = v1Val - v2Val; break;
    case '*':
      result = v1Val * v2Val; break;
    case '/':
      result = v1Val / v2Val; break;
  }
  console.log(result);

  //계산된 결과(result) 결과 input에 출력
  let res = document.getElementById("res");
  res.value = result;
}

//취소하기(초기화) 함수 정의
function reset(){
  //빈 문자열로 초기화 함
  document.getElementById("v1").value = "";
  document.getElementById("v2").value = "";
  document.getElementById("op").value = "";
  document.getElementById("res").value = "";
}
