// function solution(n) {
//     let answer=0;
//    for(let i=0;i<=n;i++){
//      answer+= i;
//    }
//     return answer;
// }
// console.log(solution(6));
// function solution(n, k) {
//     return (k-Math.floor(n/10)+n*6)*2000;
//  }

// function solution(numbers) {
//     const toNumbers = numbers => numbers.map(Number);
//     toNumbers.sort();
//     return tonumbers[tonumbers.length-1]*tonumbers[tonumbers.length-2];
// }
// console.log(solution([0, 31, 24, 10, 1, 9]));
// function solution(array, height) {
//     const bigthanheight = array.filter(item => item>height);
//     return bigthanheight.length;
// }
// console.log(solution([123,132,154,134,184],100));
// function solution(strlist) {
//     const answer = strlist.map(item => item.length);
//     return answer;
// } 
// console.log(solution(["We", "are", "the", "world!"]));

// function solution(numbers, num1, num2) {
//     let answer = numbers.slice(num1, num2+1);
//     return answer;
// }
// console.log(solution([1, 2, 3, 4, 5],1,3));

// function solution(array, n) {
//     var answer = array.filter(item =>item===n).length;
//     return answer;
// }
// console.log(solution([1, 1, 2, 3, 4, 5],1));

// function solution(price) {
//     // let answer=price%500000>=0? price*0.8 : price%300000>=0? price*0.9 : price%100000>=0? price*0.95:price;
//     let answer= price%100000>=0?(price%300000>=0?(price%500000>=0? price*0.8: price*0.9): price*0.95 ):price;
//     return answer;
// }
// console.log(solution(300000));

// function solution(a) {
//     return a<1?10:a<0?1:0;
// }
// console.log(solution(-1));
// function solution(n) {
//     var answer = 0;
//     for(let i=0;i<=n;i++){
//         for(let j=0;j<=n;j--){
//             if(i*j===n){answer++;}    
//         }
//     }
//     return answer;
// }
// console.log(solution(20));
// function solution(sides) {
//     sides.sort((a,b) =>b-a);
//     console.log(sides)
//     return  sides[0]<sides[1]+sides[2]? 1:2;
// }

// console.log(solution([1, 2, 3]));

// console.log(solution([3, 6, 2]));

// function solution(my_string, letter) {
//     let a=[];
//     my_string.toUpperCase();
//     letter.toUpperCase();
//     a=my_string.split("");
//     for(let i=0;i<my_string.length;i++){
//         if(letter===a[i]){delete a[i];}
//     }
//     answer=a.join('');
//     return answer;
// }

// console.log(solution("abcdef","f"));
// function solution(money) {
//     var answer = new Array(2);
//     let i=0;
//     while(money<5500){
//         i++;
//         money =- 5500;
//     }
//     answer[0]=i;
//     answer[1]=money;
//     return answer;
// }

// console.log(solution(100000));
// function solution(my_string,n) {
//     var answer = '';
//     let my_ar = new Array(my_string.length);
//     for(let i=0;i<my_string.length;i++){
//         my_ar[i]=my_string.charAt(i);
//     }
//     for(let j=0;j<n-1;j++){
//     for(let i=0;i<my_string.length;i++){
//         my_ar[i]+=my_string.charAt(i);
//     }
// }
// for(let i=0;i<my_ar.length;i++){
//    answer+=my_ar[i];
// }
    
//     return answer;
// }
// console.log(solution("hello",3));
// function solution(price) {
//     let result= price%500000>1? (price%300000>1? (price%100000>1? price : price*0.95): price*0.9 ): price*0.8 
//     return result;
// }
// console.log(580000);
// let price=290000;
// let result =price/500000<1?(price/300000<1? (price/100000<1? price : price*0.95): price*0.9 ): price*0.8 ;
// console.log(result);
// function solution(n) {
//     var answer = [];
//     for(let i=0;i<=n;i++){
//         if((i+1)%2===0){answer.push(i);}
//     }
//     return answer;
// }
// console.log(solution(14));
// function solution(s1, s2) {
//     return s1.concat(s2).length-s1.concat(s2).filter((val,i,_values)=>_values.indexOf(val)=== i).length;
// }
// console.log(solution(["a", "b", "c"],["com", "b", "d", "p", "c"]));

// function solution(n) {
   
//     return n.toString().split('').map(Number).reduce((a,b) => (a+b));
// }
// console.log(solution(1234)); , 'e', 'i', 'o', 'u'

// function solution(my_string) {
//     return my_string.split('a').join('').split('e').join('').split('i').join('').split('o').join('').split('u').join('');
// }

// console.log(solution("bus"));
// console.log(solution("nice to meet you"	));

// function solution(my_string) {
//     let x=/[^0-9]/g;
//     return my_string.replace( x,"").split('').map(Number).reduce((a,b)=>(a+b));
// }

// console.log(solution("aAb1B2cC34oOp"));

// function solution(s1, s2) {
//     const intersection = s1.filter((x) => s2.includes(x));
//     return intersection.length;
// }
// console.log(solution(["a", "b", "c"],["com", "b", "d", "p", "c"]));

    // function solution(str1, str2) {
    //     return str1.replace(str2,'').join('') === str1? 1 : 2;
    // }

    // function solution(n) {
    //     return Number.isInteger(Math.sqrt(n))? 1 : 2;
    // }
    // console.log(solution(4));
    // console.log(Number.isInteger(Math.sqrt(144)));


    // function solution(my_string) {
    //     let answer='';
    //     let me= my_string.split('');
    //     for(let x of my_string){
    //         if(x.isUpperCase){
    //             answer += x.tolowerCase;
    //         }else if(x.isLowerCase){
    //             answer += x.toUpperCase;
    //         }else{
    //             answer+=x;
    //         }
    //     }
       
    //     return answer;
    // }

    // console.log(solution("cccCC"));
    function solution(my_string) {
    
        return my_string.split('').map(n =>n=== n.toUpperCase? n.toLowerCase() : n.toUpperCase()).join('');
    }
    console.log(solution("cccCC"));