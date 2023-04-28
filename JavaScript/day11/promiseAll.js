const pr1 = new Promise((resolve) =>{
    setTimeout(()=>{
    resolve(1)
    },1000)
})
const pr2 = new Promise((resolve) =>{
    setTimeout(()=>{
    resolve(2)
    },2000)
})
const pr3 = new Promise((resolve) =>{
    setTimeout(()=>{
    resolve(3)
    },3000)
})


Promise.all([pr1,pr2,pr3]).then((result) => console.log(result)).catch((err)=>{console.log(err)})