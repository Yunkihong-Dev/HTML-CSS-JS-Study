let kor_score = 100;
let math_score = 100;
let eng_score =100;
let bio_explorer = 100;
let earth_explorer = 100;
let avg_score= (kor_score+math_score+eng_score+bio_explorer+earth_explorer)/5;
let score="";
const name="ksi";
    if(avg_score>=90){
        score="A";
    }else if(avg_score>=80 && avg_score<90){
        score="B";
    }else if(avg_score>=70 && avg_score<80){
        score="C";
    }else {
        score="less than C";
}

    switch(score){
        case "A" :
            console.log(`${name} your score ${score} is Very Good niggar`);
            break;
        case "B" :
            console.log(score+" is pretty Good");
            break;
        case "C" :
            console.log(score+"is little bad");
            break;
        default :
            console.log(score+"? You've got this shit? Just go to hell MF" );
            break;
}

function avg(math_score, eng_score, bio_explorer, earth_explorer){
    let avg_score= (kor_score+math_score+eng_score+bio_explorer+earth_explorer)/5;
}

