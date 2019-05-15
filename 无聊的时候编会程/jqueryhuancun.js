function creatCache(){
  //在keys数组中存储键，有顺序,方便做超出容量的处理
  var keys = []
  function cache(key,value) { 
    if(keys.push(key)>3){
      //只保留最新的数据
      delete cache[keys.shift()]
    }
    // 使用(key + " ") 是为了避免和原生（本地）的原型中的属性冲突
    return cache[key + ' '] = value
  }
  return cache
}

var typeCache = createCache();
typeCache("monitor");
console.log(typeCache["monitor" + " "]);
typeCache("monitor","张学友");
console.log(typeCache["monitor1" + " "]);
typeCache("monitor","刘德华");
console.log(typeCache["monitor2" + " "]);
typeCache("monitor3","彭于晏");
console.log(typeCache["monitor3 "]);