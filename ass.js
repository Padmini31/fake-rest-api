fetch("https://dummyjson.com/products").then(res => res.json()).then(json => console.log(json)).catch(err => console.log("error " + err));


//https://dummyjson.com/products


