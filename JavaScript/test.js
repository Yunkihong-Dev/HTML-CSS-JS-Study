// function solution(cipher, code) {
//     return  cipher.split('').filter((item,if) =>{
//         for(let i=0;i<cipher.length;i++){ 
//         if(if===(code*i+(code-1))){return item;}
//     }     
//     }).join('');
// }

// console.log(solution("dfjardstddetckdaccccdegk",4));
// console.log(solution("pfqallllabwaoclk",2));


// function solution(my_string) {
//     return my_string.sort((a,b) => a+b);
// }
// console.log(solution("hi12392"));

// function solution(my_string) {
//     return my_string.split("").toNumber();
// }
// console.log(solution("hi12392"));
// function solution(my_string, num1, num2) {
//     return my_string.split('').map((item,if)=>{
//         if(if ===num1){
//         if=num2;
        
//     }
// });
// }
// console.log(solution("hello",1,2));
// function solution(n) {
//     for(let i=0;i<n;i++){};
//     return  
// }


// function solution(array) {
//     return array.sort((a,b) => a-b).
// }
// console.log(solution([1, 8, 3]));

// function solution(array) {
//     let result= [Math.max(...array),array.ifOf(Math.max(...array))];
//     return result;
// }

// 

// console.log([numbers[numbers.length-1],numbers.slice(0,numbers.length-1)].flat());

// function solution(numbers, direction) {
//     return direction==="right" ?  [numbers[numbers.length-1],numbers.slice(0,numbers.length-1)].flat(): [numbers.slice(1,numbers.length),numbers[0]].flat()
// }


// console.log(solution([1, 8, 3],"right"));

// function solution(n) {
//   for(let i=1;i<=n;i++){
//       if(i*6%n===0){ 
//       return i;
  
//       }
      
//   }
 
// }
// console.log(solution(14));


// function solution(age) {
//   return age.toString().split('').map(item => String.fromCharCode(Number(item)+97)).join('');
// }
// console.log(solution(14));

// function solution(order) {
//   return order.toString().split('').filter(item => item ==='3'  ||item ==='6'||item === '9').length;
// }
// console.log(solution(567854123));
// function solution(n) {
//   var answer = [];
//   let i=0;
//   while(true){
//       i++; 
//       if(n%i===0){answer.push(i)}
//       if(i>n){break;}         
//   }
//   return answer;
// }

// function solution(letter) {
//   let answer = "";
//     let morse = [ 
//   '.-','-...','-.-.','-..','.','..-.',
//   '--.','....','..','.---','-.-','.-..',
//   '--','-.','---','.--.','--.-','.-.',
//   '...','-','..-','...-','.--','-..-',
//   '-.--','--..'];
//   return letter.split(" ").map(item => String.fromCodePoint(morse.ifOf(item)+97)).join('');
// }


// console.log(solution(".... . .-.. .-.. ---"));
// function solution(before, after) {
//   return before.split("").map(item=> item.charCodeAt(0)).reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//   ) === after.split("").map(item=> item.charCodeAt(0)).reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//   )? 1:0;
// }

// function solution(before, after) {
//   return before.split('').sort().join('') == after.split('').sort().join('') ? 1:0;
// }


// console.log(solution("olleh","hello"));


// function solution(num_list, n) {
//   const length = num_list.length;
//   const divide = Math.floor(length / n) + (Math.floor( length % n ) > 0 ? 1 : 0);
//   const newArray = [];
//   for (let i = 0; i < divide; i++) {
//     // 배열 0부터 n개씩 잘라 새 배열에 넣기
//     newArray.push(num_list.splice(0, n)); 
//   }
//   return newArray;
// }
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8],1	));
// function test() {
//   let sum = 0;
//   for (let i = 1; i <= 1000000; i++) {
//     sum = sum + i;
//   }
// }
// let start = new Date(); // 시작
// test();
// let end = new Date(); // 종료

// console.log(end - start); // 경과시간(밀리초)

// function solution(num_list, n) {
  
//   return division(num_list,n);
// }
// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8],2));
// let a = [1,2,3,4];
// let b = a.splice(2,2);
// let c = a.slice(2,4);
// // let d = [];
// // console.log(b);
// // console.log(c);
// // console.log([b,c]);
// console.log(a.reverse());
// console.log(a);


// function solution(array, n) {
//   return array[(array.sort((a,b)=>a-b).map(i => Math.abs(i-n)).ifOf(Math.min(...array.sort((a,b)=>a-b).map(i => Math.abs(i-n)))))];
//  }
// console.log(solution([12, 3, 4, 10, 13], 11));

// function solution(i, j, k) {
//   return Array(j-i+1).fill(0).map((item,if,items) => item+if+i).toString().split(",").join("").split("").map(item => parseInt(item)).filter(item => item ===k).length;
// }
// console.log(solution(1,13,1));

// function solution(emergency) {
//   // emergency 깊은 복사
//   let original =emergency.slice();
//   emergency.sort((a,b) => b-a);
//   let rank = new Array();
//   for (let i = 0; i < emergency.length; i++) {
//     rank[i] = emergency.indexOf(original[i])+1;
//   }
//   return rank;
// } 

// console.log(solution([3, 76, 24]));
// 중복으로 나온 것들
  // function solution(s) {
    
  //   return s.split('').filter((item,i)=> s.split('').lastIndexOf(item) === s.split('').indexOf(item)).sort().join('');
  // }console.log(solution("zabcbcdc"));

//   function solution(my_string) {
//     const regExp = /^[0-9]*$/;
//     return my_string.split(/[^0-9]/g).map(item => Number(item)).reduce((a,b) => a+b);
// }
// console.log(solution("aAb1B2cC34oOp"));

// function solution(bin1, bin2) {
//   return (parseInt(Number(bin1),2)+parseInt(Number(bin2),2)).toString(2);
// }
// console.log(solution("10","11"));


// 남의 풀이
// function solution(bin1, bin2) {
//   let temp = Number(bin1) + Number(bin2);
//   temp = [...temp.toString()].reverse().map((v) => +v);
//   for (let i = temp.length; i < 11; i++) {
//     temp.push(0);
//   } 
//   for (let i = 0; i < temp.length; i++) {
//     if (temp[i] === 2) {
//       temp[i] = 0;
//       temp[i + 1]++;
//     } else if (temp[i] === 3) {
//       temp[i] = 1;
//       temp[i + 1]++;
//     }
//   }
//   return Number(temp.reverse().join("")).toString();
// }
// console.log(solution("1001","1111"));

// function solution(n) {
//   // 소인수분해한 배열을 담고 1은 제외하고 소수만 담기
//   return  Array(n).fill(1).map((item,i,array) => array[i] = i+1).filter(item => n%item === 0 && item !==1 && Math.sqrt(item) !== Math.floor(Math.sqrt(item) &&item !== item+item ));
// }
// console.log(solution(12));

// function isPrime(num) {
//   if (n == 1) {
//     return false;
//   }
  
//   for (let i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }
// console.log(isPrime(12));
// function job1(){
// return new Promise(function(resolve,reject){
// setTimeout(function(){resolve('resolved ok!');},2000);
// });
// }
// function job2(){
// return new Promise(function(resolve,reject){
// setTimeout(function(){resolve('job2 ok!');},2000);
// });
// }
// job1().then(function(data){
// console.log('data1',data);
// return job2();
// })
 
// .catch(function(reason){
// console.log('reason',reason);
//   return Promise.reject(reason);
// })
// .then(function(data){
// console.log('data2',data);
// })
/* 
function solution(n) {
  // 소인수분해한 배열을 담고 1은 제외
  return Array(n).fill(1).map((item,i,array) => array[i] = i+1).filter(item => n%item === 0 && item !==1);
}

console.log(solution(12));
*/

// function solution(array) {
//   const reg = new RegExp(/[7]+/, "g");
//   return array.join("").match(reg).join("").length;
// }

// console.log(solution([7, 77, 17]));


// function solution(numbers, k) {
//     var answer = 1;
//     for (let i = 1; i <k; i++) {
//         answer +=2;
//         if(answer>numbers.length){answer -= numbers.length;}
//         console.log(answer);
//     }
//     return answer;
// }

// console.log(solution([1, 2, 3, 4],2));
// console.log(solution([1, 2, 3, 4, 5, 6],5));
// console.log(solution([1, 2, 3],5));
// function solution(s) {
//   var answer = 0;
   
//     let tmp = s.split(' ');

//     for(let i=0; i<tmp.length; i++){

//         if(tmp[i] == "Z"){
//             answer -= parseInt(tmp[i-1]);
//         } else {
//             answer += parseInt(tmp[i]);
//         }
//     }

//     return answer;
// }
// console.log(solution("1 2 Z 3"));
// console.log(solution("10 20 30 40"));

// function solution(numbers) {
//   numbers.
  
//   var answer = 0;
  
//   return answer;
// }
// console.log(solution("onetwothreefourfivesixseveneightnine"));
