//REST PARAMETERS
function restParamter(a, ...b){
    console.log(a);
    console.log(b);
}
restParamter(2,3,4,5,6,7,8,9);

//DEFAULT PARAMETERS
function add(a, b=0){
    return a+b;
}
console.log(add(2));
console.log(add(2,3));

let car=prompt("enter your fav car");
let carCollection={
    [car]:4,
}
console.log(carCollection);  