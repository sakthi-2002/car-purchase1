const arr = ["https://imgd-ct.aeplcdn.com/1056x660/n/lenp74a_1526117.jpg?q=75",
"https://imgd-ct.aeplcdn.com/1056x660/n/9meq74a_1526135.jpg?q=75",
"https://imgd-ct.aeplcdn.com/1056x660/n/805p74a_1526123.jpg?q=75"];
const res = document.querySelector('#img');
function skyblueCol() {

    res.src = arr[0];
}
function greyCol() {
    res.src = arr[1];
}

function whiteCol() {
    res.src = arr[2];
}

const black = document.querySelector('#skyblue');
black.addEventListener('click',skyblueCol);


const red = document.querySelector('#grey');
red.addEventListener('click', greyCol);

const grey = document.querySelector('#white');
grey.addEventListener('click', whiteCol);


const btn = document.querySelector('#cart');

function fun() {

    btn.innerText = "Your order is confirmed";
}

btn.addEventListener('click', fun);