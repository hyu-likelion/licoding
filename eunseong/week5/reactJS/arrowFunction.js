// function plusTwo(s) {
//     return s*2
// }

// plusTwo = (s) => {
//     return s*2
// }

plusTwo = (s) => s*2

console.log(plusTwo(10))

arr = [1,2,3,4,5,6,1234,3142,7894561]

// arr_map = arr.map(function(value){return value*2})
// arr_map = arr.map(v => {return v*2})
arr_map = arr.map(v => v*2)

console.log(arr_map)


arr_filter = arr.arr_filter(v => v > 10)
console.log(arr_filter)
