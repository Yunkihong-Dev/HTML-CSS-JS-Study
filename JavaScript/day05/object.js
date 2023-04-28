let yunki = {
    name : "홍윤기",
    age:20,
    height:190,
    hobby:"컴퓨터"
}

// 실제 데이터는 메모리 힙에 저장되고
// 변수/상수에는 메모리 힙이 주소값에 저장됨.
// 따라서 객체가 사웃로 선언되었다고 해도 주소값이 수정되는게 아니라 상수로 선언해도 재할당이 가능하다.
const post = {
    title : "example title 1",
    content : "example content 2",
    User : yunki
}

console.log(post);
console.log(post.title);
console.log(post.content);
console.log(post["User"]);

post.User = {
name : "지형님"
}

console.log(post.User);

let kong = new Object();

