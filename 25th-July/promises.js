//async await
function product(laptop){
    return new Promise(resolve, reject => {
        console.log("Searching for the product");
        setTimeout(() => {
            if (laptop){
                const details = {
                    brand: "LENOVO",
                    price: "RS. 50,000",
                    features: ["Intel Processor, Ram 8GB, SSD 512GB, Graphic card 4GB, noise cancelling speakers"]
                }
                resolve(details); //resolve
            }
            else{
                    reject("Product unavailable"); //reject 
                }
            }, 3000)
    })
}

//FOR EMOJIS PRESS WINDOWS + . (DOT)

async function getProductDetails() {
    try {
        let details = await product(true);
        console.log(`Brand of the laptop is: ${details.brand}`);
        console.log(`Price of the laptop is: ${details.price}`);    
        console.log(`Features of the laptop are: ${details.features.join(", ")}`);
    } 
    catch (error) {
        console.log(error);
    }
}

//LOGIN VALIDATION
function login(username, password) {
    return new Promise((resolve, reject) => {
        console.log("Validating login credentials...");
        setTimeout(() => {
            if (username === "Aasrita" && password === "1234") {
                resolve("Login successful!"); //resolve
            } else {
                reject("Invalid username or password."); //reject
            }
        }, 2000);
    });
}
function data() {
    return new Promise((resolve, reject) => {
        console.log("Fetching user data...");
        setTimeout(() => {
            if (username === "Aasrita") {
                resolve({ name: "Aasrita", role:"SDE Intern", age: 18, email: "aasritasanganipro07@gmail.com" }); //resolve
            } else {
                reject("User not found."); //reject
            }
        }, 2000);
    })
}
async function data1(params){
    try{
        let d = await login("Aasrita", "1234");
        console.log(d);
        let r = await data();
        console.log(r);
    }
    catch(err) {
        console.log(`your data was not fetched because: ${err}`);
    }
}