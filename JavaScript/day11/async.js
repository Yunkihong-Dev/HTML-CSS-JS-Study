
const callback = (number) =>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            number +=1;
            if(numeber<5){return resolve(number);
            reject('err')
            }
        },3000)
    
    })

}


const asyncAddNumber = async (number) =>{
    try {
        const result = await callback(5)
    } catch (error) {
        console.log(err)
    }

}