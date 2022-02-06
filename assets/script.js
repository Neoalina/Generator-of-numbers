
let arr = [];
for (let i=0; i<10; i++) {
    let number= Math.round((Math.random()*10)+(Math.random()*-10));
    arr.push(number);
}
document.getElementById('numbers').innerHTML=arr;
document.getElementById('minimum').innerHTML=Math.min(...arr);
document.getElementById('maximum').innerHTML=Math.max(...arr);

let sum=0;
for (let a of arr) {
    sum=sum+a;
}

let multipl=1;
for (let a of arr) {
    multipl=multipl*a;
}
console.log(sum)
document.getElementById('average').innerHTML=sum/arr.length;

document.getElementById('sum').innerHTML=sum;
document.getElementById('multipl').innerHTML=multipl;