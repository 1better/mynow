Function.prototype.myapply = function(obj,arr){
  var obj = obj || window
  obj.fn = this
  var result = obj.fn(...arr)
  delete obj.fn
  return result
}

function f(){
  return [].slice.myapply(arguments,[2,3])
}
console.log(f(1,2,3,4,5))