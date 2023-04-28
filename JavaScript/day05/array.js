// const arr=[];
// arr[1] = "1";
// arr[3] = 3;
// console.log(arr.length);//4
// <empty>,"1",<empty>,3

// const arr2 = ['김성용', '종문님', '지형님'];
// if(arr.includes('종문님')){
// arr.push("예솔님");
// }
// console.log(arr2); //김성용 종문님 지형님 예솔님

/**split*/
// const phone = '010-1234-1234'

// console.log(phone.replaceAll('-',''));
/* 01012341234 */
// phone.split('-'); ['010','1234','1234']

// 내장함수
// push
// const arr3 = [1,2];
// arr3.push(4,5); //[1,2,4,5]

// concat
// 특정 배열에 인자로 들어온 배열을 합칠 때 사용한다. ex) 인피니트 스크롤링
// const arr4 = [1,2];
// const arr5 = [3,4];

// const result = arr4.concat(arr5);

// pop
// const arr6 = [1,2,3,4,5];
// const deleteEl = arr6.pop();
// console.log(deleteEl,arr6);

// slice(start,end)
// start번째 인덱스부터 시작해 end 직전까지 인덱스 요소만을 복사해 반환

const apart = ['성용', '성경님','지형님','윤기님','예슬님','오수님'];
// console.log(apart.slice(1,4));
// console.log(apart.slice(1));
// console.log(apart.slice(1,1));
// console.log(apart.slice(2));
// console.log(apart.slice(-4));
// i === i - 배열.length
// splice(start,deleteCount,item)
// splice의 주 용도는 내가 원하는 요소의 삭제를 하기 위함임
const deleteArr = apart.splice(0,1,"text");
console.log(apart);

function parent(number, action){
    for(let i=0;i<number;i++){
        action(i)
    }
}
parant(5,(index) =>{
    console.log(index*2);
})

// callback
// 부모에게 전달받은 파라미터를 내 마음대로 로직을 작성할 수 있게 하기위해서(재사용)

// callback 함수를 사용하지않으면 부모 함수 내에서 직접 로직을 수정해야하고
// 재사용이 불가능하다.


