// 자판기라는 함수를 정의

// 자판기 함수는 처음에 실행되었을 때 자판기가 가동되었습니다가 출력
// 자판기 함수의 파라미터는 coin, menu

// 자판기 함수의 반환값은

// // 잔돈이 0원이면 음료수 이름을 반환
// 잔돈이 있으면 음료수 이름과 잔돈을 반환
// 음료수보다 금액이 적을 경우 금액이 부족합니다 반환
// 없는 메뉴를 파라미터로 전달하였을 때에는 존재하지 않는 상품입니다. 반환

// 메뉴
// 솔의눈 : 300원
// 비타500 : 500원
// 콜라 : 1000원

// 문제2


// function drinks(name, price){
// this.name = name;
// this.price = price;
// }
// let drink1 = new drinks("솔의눈", 300);
// let drink2 = new drinks("비타500", 500);
// let drink3 = new drinks("콜라", 1000);

// function vendingMachine(coin,menu){
// let drinks = {솔의눈:300, 비타500:500,콜라:1000}
// console.log("실행되었습니다.");
//     if(!drinks[menu]){
//     return "없는 물건입니다."
//     }
//     if(drinks[menu]>coin){
//     return "돈이 부족합니다.";
//     }
//     if(drinks[menu]===coin){
//     return menu;
//     }
//     if(drinks[menu]<coin){
//     return coin-drinks[menu]+', '+menu;
//     }
// }

// console.log(vendingMachine(10000,'솔d의눈'));

function hidephone(phoneNumber){
    let test = phoneNumber.split('-').replace();
    // let a = test.splice(1,1,'****');

    return test.join('-') ;
}
console.log(hidephone("010-1234-1234"));

// ** 정규표현식을 이용한 replace로 문자열 데이터 치환하기


