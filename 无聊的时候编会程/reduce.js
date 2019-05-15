var arr = ['zd','zd','lisi','wu']

var obj = arr.reduce((obj,num)=>{
  if(obj[num]){
    obj[num] ++
  }else {
    obj[num] = 1
  }
  return obj
},{})

var obj2 = { "+arr[0]+" : "2"}


console.log(obj2)