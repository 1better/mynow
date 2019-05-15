function merge(left,right) {
  let k = []
  while(left.length&&right.length)
  {
    if(left[0]<=right[0]) k.push(left.shift())
    else k.push(right.shift())
  }
  return k.concat(left,right)
}

function mergeSort(arr) {

  if(arr.length===1) return arr
  
  let mid = Math.floor(arr.length/2),left = arr.slice(0,mid),right = arr.slice(mid)

  return merge(mergeSort(left),mergeSort(right))
}

var arr = [1,35,8,7,9,2,3,4]

console.log(mergeSort(arr))