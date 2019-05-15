function getType(obj){
  return Object.prototype.toString.call(obj).slice(8,-1)
}

function deepClone(obj){
  var result
  if(getType(obj)==='Object'){
    result = {}
  }else  if(getType(obj)==='Array'){
    result = []
  }else {
    return obj
  }
  for(var k in obj){
    var value = obj[k]
    if(getType(value)==='Object'||'Array'){
      result[k] = deepClone(value)
    }else {
      result[k] = value
    }
  }
  return result
}

var obj = [{name:'zd'},18,16,function(){},'lisi']

var obj2 = deepClone(obj)

// console.log(obj2)

obj2[0].name = 'lisi'

console.log(obj2)
console.log(obj)