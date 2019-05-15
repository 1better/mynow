function MyPromise(fn){
  this.age = 111
}
MyPromise.all = function(arr){
  console.log(this.status)
}

var arr = [1,3,5,7,9]

MyPromise.all(arr)