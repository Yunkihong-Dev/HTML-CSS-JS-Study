//  1번문제
// function nums(sortArr, maxvalue){
//     this.sortArr=sortArr;
//     this.maxvalue=maxvalue;
// }
// function maxvalue(numbers){
//     nums.sortArr = numbers.sort((a,b) => b-a);
//     nums.maxvalue = Math.max(...numbers);
//     return nums;
// }
// const a = maxvalue([1,2,3,4,5]);

// console.log(a);

// 2번 문제

// let store = {"야채곱창" : 5, "바나나우유":10,"삼각김밥":15,"도시락":10,"샌드위치":10};

// function solution(item,num){
// if(store.hasOwnProperty(item) &&store[item] === num){
// return "전사표와 일치합니다";
// }else if(store.hasOwnProperty(item) && store[item] !== num){
// return "전사표와 일치하지 않습니다.";
// }else{
// return item;
// }
// }

// console.log(solution("야곱",5));

// 문제 3
// function 함수명(arr,num){
// array=arr.map(item => item+10);
// return array.find(i =>i===num) ===num? array.filter(item => item !==num):"찾으시는 값이 없습니다";

// }
// const arr = [1,2,3,4,5];
// const a =함수명(arr, 1);
// console.log (a);

//  문제 4
// function solution(arr){
// return [arr.filter(item=>item%2 ===0).length,arr.filter(item=>(item+1)%2 ===0).length]
// }
// const arr = [1,2,3,4,5]
// const a = solution(arr)
// console.log(a)

// 문제 5




function car(distance){
    let startstop = false;
    drive(distance);
    function onOff(){
      startstop=  !startstop;
     return startstop;
    }
    
    function drive(distance){
        onOff();
        if(startstop){
            console.log("부릉부릉");
            
        if(distance<=40){
        return a = setInterval(function(){
        if(distance <=0){
        
        clearInterval(a);
        console.log("주행종료");
        return ;
        }else{
            console.log("주행중..."+distance+"km 남았습니다");
            distance--;
        }},1000);
        }else{
            console.log("안전 위험으로 시동을 종료합니다.");
            onOff();
            console.log(startstop);
        return;
        }
    }else{
        console.log("시동이 꺼졌습니다");
        return;
    }   
    
}
}

car(40);


