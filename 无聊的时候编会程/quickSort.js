function quickSort(arr) {
  if(arr.length<=1) return arr
  let mid = Math.floor(arr.length/2)
  let arrMid = arr[mid]
  arr.splice(mid,1)
  let left = []
  let right = []
  arr.forEach(item=>{
    if(item<arrMid) left.push(item)
    if(item>arrMid) right.push(item)
  })

  return quickSort(left).concat(arrMid,quickSort(right))
}

var arr = [1,35,8,7,9,2,3,4]

console.log(quickSort(arr))