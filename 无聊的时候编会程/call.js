Function.prototype.mycall = function(that,...args){
  var obj = that || window
  obj.fn = this
  var result = obj.fn(...args)
  delete obj.fn
  return result
}

function f(){
  return [].slice.mycall(arguments,2,3)
}
console.log(f(1,2,3,4,5))