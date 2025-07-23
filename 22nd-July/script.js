// //PRIME NUMBERS PROGRAM 
function primenums(num){
    if (num <= 1){
    alert("Not a prime");
    return false;
    }
    for(let i = 2; i < num; i++){
        if ((num % i) == 0){
        alert("Not a prime");
        return false;
    }
}
alert("Prime number");
 return true;
}

//PROMISES 3 STATES
function product(mobile){
    return new Promise((resolve, reject) => {
        console.log("search for the product...");//pending
        setTimeout(() => {
            if(mobile){
                resolve("product is delivered");//resolve
            }
            else{
                reject("product unavailable");//reject
            }
        }, 2000);
    });
}
product(false)
.then(msg => console.log(msg))
.catch(err => console.log(err)   )