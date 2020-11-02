function hourglassSum(arr) {
  var hrGls = []

  // loop for maneuvering through 2d array
  for (let i = 0; i < 6; i++) {
    // vars for block level string manipulation
    let p = 0
    let j = 1
    let h = 2
    // nested loop for grabbing slices
    for (let x = 3; x < 7; x++) {
      // check for constraint on array size
      if (arr[i + 2]) {
        let nums = arr[i].slice(p, x)
        let mid = arr[i + 1].slice(j, h)
        let nums2 = arr[i + 2].slice(p, x)
        var pieces = nums.concat(mid, nums2)
        var added = pieces.reduce((counter, item) => {
          return counter + item
        }, 0)
        hrGls.push(added)
        p++
        j++
        h++
      }
    }
  }
  return  Math.max(...hrGls)
}

console.log(hourglassSum([[1, 1, 1, 0, 0, 0], [0, 1, 0, 0, 0, 0], [1, 1, 1, 0, 0, 0], [0, 0, 2, 4, 4, 0], [0, 0, 0, 2, 0, 0], [0, 0, 1, 2, 4, 0]]))