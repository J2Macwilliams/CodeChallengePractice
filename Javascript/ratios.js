let mArr = [1,-1,0,-2,-3]
let len = mArr.length
let pos = 0
let neg = 0
let z = 0
mArr.forEach(i => {
    if(i === 0){
        z ++
    }
    if(i < 0){
        neg ++
    }
    if(i > 0){
        pos ++
    }
})
console.log('pos', (pos/len).toFixed(6))
console.log('neg' , (neg/len).toFixed(6) )
console.log('z', (z/len).toFixed(6))