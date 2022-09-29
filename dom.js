let countEL = document.getElementById("e")
let amountEL = document.getElementById("f")
let sizeEL = document.getElementById("g")
let qtyEL = document.getElementById("h")
let cartprizeEL = document.getElementById("cart-price")
let count = 0;
let amount = 0;
let size = 0;
let qty = 0;
let total = 0;
let total1 = 0;
let total2 = 0;
let total3 = 0;
let total4 = 0;
function increment(){
    count += 1
    countEL.innerText = count
}
function increment1(){
    amount += 1
    amountEL.innerText = amount
    cartpriceEL.innerText += 350
}
function increment2(){
    size += 1
    sizeEL.innerText = size
    
}
function increment3(){
    qty += 1
    qtyEL.innerText = qty
    
}
function decrement(){
    if (count>1){
        count--
        
    }
    countEL.innerText = count
}
function decrement1(){
    if (amount>1){
        amount--
        
    }
    amountEL.innerText = amount
}
function decrement2(){
    if (size>1){
        size--
        
    }
    sizeEL.innerText = size
}
function decrement3(){
    if (qty>1){
        qty--
       
    }
    qtyEL.innerText = qty
}
console.log(amount)
console.log(qty)
console.log(count)
console.log(size)


