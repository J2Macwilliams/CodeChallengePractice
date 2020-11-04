let myArr = [[1,2,3],[4,5,6],[7,8,9]]
let len = myArr.length 

let inc = 0
let dec = len - 1
left = 0
right = 0
for(let i = 0; i< len; i++){
  left += myArr[i][inc]
  right += myArr[i][dec]
  inc ++
  dec --
}

console.log(Math.abs(left - right))