// 빌트인 객체
/* 내장 객체 
네이티브 객체 => Object, Number, Array 객체 생성과 관련된 함수객체와 메소드로 구성되어있다.
호스트 객체 => window, Location, history, document (전역 객체)

==> 

Array.prototype.division = function(){
    . . .
}
const arr = [1,2,3,4,5]
arr.division
모든 객체는 prototype을 상속받기에 이렇게 함수를 prototype으로 정의하면 다 갖다 쓸 수 있다.

---> 자바스크립트에서 정의하지 않아도 편의성을 위해서 자체적으로 만들어둔 내장 기능.


*/


// 베열의 생성
// Array.from 
// *유사 배열 객체 : 객체이지만(Object) 배열과 관련된 속성값을 가지고 있는 객체
let obj = {
    0:"1",
    1:"2",
    length:2
}
obj.length
obj[0]

const arr = Array.from(obj);

// 콜백함수가 return하는 값을 요소로 삼는 배열 생성  
const newArr = Array.from({length:5},(el,index, originArr)=>{
return index;
});
// 유사배열 객체를 배열로 바꿔줌
console.log(arr);
console.log(newArr);
// Array.of
// ()인자로 들어온 값을 요소로 삼는 배열 생성

// Array.fill
// fill (value, start, end)
// end 인덱스 직전까지의 값을 채움
const fillArr = Array(10).fill(0,0,10);
console.log(fillArr)
// 배열 검사

const fillArr2 = Array(10).fill().map((el,index) => {
    return index;
    });
console.log(fillArr2)