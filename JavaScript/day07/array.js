// 유니코드
const arr1= [12,132,33,4,51];
arr1.sort((a,b)=>b-a);
// console.log(arr1);

const users=[
    {
        id:1,
        name:"김예슬님"
    },
    {
        id:2,
        name:"이지형님"
    },
    {
        id:3,
        name:"홍윤기님"
    }
]

// 기존 배열을 조작한 후 새로운 배열을 반환ㄱ
const newUsers= users.map((users,index)=>{
return {
    ...users,
    nick: `성용이와 아이들 ${index+1}`
}
})

// 내가 원하지 암는 데이터를 제외한 새로운 배열 반환
const filerUsers = users.filter((users)=>users.id !==3);
console.log(filerUsers);