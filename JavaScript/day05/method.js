/* 
    method
    객체의 속성값이 홤수일 경우 일반 함수와 구분하기 위해 메소드라고 합니다.
*/
const PrintServise= {
    on(){
    console.log("실행되었습니다.")
    },
    off : function(){
    console.log("종료되었습니다")
    },
    ready: () =>{
        console.log("준비되었습니다.")
    }
}

PrintServise.on();
PrintServise.off();
PrintServise.ready();

/* 비슷한 속성의 함수들을 하나의 객체로 묶어서 한번에 관리하기 위함임 */



