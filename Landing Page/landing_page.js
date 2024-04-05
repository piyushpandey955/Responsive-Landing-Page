const btn1 = document.getElementById("1");
const btn2 = document.getElementById("2");
const btn3 = document.getElementById("3");
const btn4 = document.getElementById("4");

btn1.addEventListener('click', (event) => {
    document.body.style.backgroundColor = 'yellow';
    console.log("yes");
});
btn2.addEventListener('click', (event) => {
    document.body.style.backgroundColor = 'blue';
    console.log("yes");
});
btn3.addEventListener('click', (event) => {
    document.body.style.backgroundColor = 'gray';
    console.log("yes");
});
btn4.addEventListener('click', (event) => {
    document.body.style.backgroundColor = 'salmon';
    console.log("yes");
});