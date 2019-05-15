Function.prototype.mybind = function(that,...args){
  var context = this
  return function(){
    var arg = Array.from(arguments)
    return context.apply(that,args.concat(arg))
  }
}
function f(){
  return [].slice.bind(arguments,0,3)
}
console.log(f(1,2,3,4,5)())