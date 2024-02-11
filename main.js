const numbers =[2,-5,4,-7,-8,-20,14,2,10,15,30]
let sum =0
for(let start =0 ; start<numbers.length;start++){
    if(numbers[start] > 0 ){
        sum+= numbers[start];
    }
}
console.log(sum)