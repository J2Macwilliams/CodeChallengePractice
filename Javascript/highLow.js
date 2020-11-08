let arr = [7,2,6,8,9]
arr.sort()

let low = 0
let high = 0
for(let i = 0; i < 5; i ++){
    if(i < 4){
        low = low + arr[i]
    }
    if(i > 0){
        high = high + arr[i]
    }
}
console.log(low)