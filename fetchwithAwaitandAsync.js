async function loaddata(){
var re = await fetch("https://jsonplaceholder.typicode.com/todos");
var da = await re.json();
console.log(da);
var a = JSON.stringify(da);//displaying result in the browser
document.write(a);
}

loaddata();
