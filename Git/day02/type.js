// 타입검사(타입가드)

console.log(typeof null);
//object
// 자바스크립트 초기버전 상의 오류지만, 하위 호환성때매 수정안됨.


function a(number){
    if(typeof number !==number){return console.log('fuck');}
    else{
        console.log('fuckyoutoo');
    }
}

a();
