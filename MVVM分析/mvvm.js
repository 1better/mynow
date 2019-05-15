function MVVM(obj) {
  this.obj = obj
  var data = this.data = obj.data
  Object.keys(data).forEach(key=>{
    //数据代理
    this.proxyData(key)
  })
  //数据监视
  observer(data,this)
  new Compile(obj.el,this)
}
MVVM.prototype = {
  proxyData(key) {
    Object.defineProperty(this,key,{
      configurable: false,
      enumerable:true,
      get() {
        return this.data[key]
      },
      set(newVal) {
        this.data[key] = newVal
      }
    })
  }
}