function Watcher(vm,exp,cb) {
  this.vm = vm
  this.exp = exp
  this.cb = cb
  this.depIds = {}
  this.value = this.get()

}

Watcher.prototype = {
  addDep(dep){
    if(!this.depIds.hasOwnProperty(dep.id)){
      this.depIds[dep.id] = dep
      dep.addSub(this)
    }
  },
  update() {
    var newVal = this.get()
    if(this.value !== newVal) {
      this.cb.call(this.vm,newVal)
    }
  },
  get(){
    Dep.target = this
    var value = this.parseValue(this.exp)
    return value
  },
  parseValue(exp){
    var val = this.vm
    exp = exp.split('.')
    exp.forEach( key => val=val[key])
    return val
  }
}