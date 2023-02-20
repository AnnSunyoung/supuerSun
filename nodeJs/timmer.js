const timeout = setTimeout(() => {
    console.log('1초 후에 시작됩니다.');
}, 1000);

const interval = setInterval(() => {
    console.log('1초마다 실행됩니다.');
}, 1000); // setInterval run

const immediate = setImmediate(() => {
    console.log('setImmediate() 함수 호출 뒤에 오는 모든 코드를 먼저 실행하고 바로 다음에 실행합니다.')
}); // second run
console.log('setImmediate 보다 먼저 실행됩니다.'); // first run

// setInterval End
setTimeout(() => {
    clearInterval(interval); // 변수명이 interval인 1초마다 콘솔창에 출력하기 위해 정의한 setInterval 함수를 종료합니다.
}, 3000);