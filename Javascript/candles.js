let cArr = [3,2,1,3]

const max = Math.max.apply(null, cArr)
let count = cArr.filter( item => item === max)
console.log('count', count.length)

