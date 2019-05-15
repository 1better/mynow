function observer(data,vm) {
  if(!data||typeof data !== 'object') return 
  return new Observer(data)
}

function Observer(data) {
  this.data = data
  Object.keys(data).forEach(key=>{
    this.defineReactive(this.data,key,data[key])
  })
}

Observer.prototype = {
  defineReactive(data,key,val) {
    var dep = new Dep()
    Object.defineProperty(data,key,{
      configurable: false,
      enumerable: true,
      get() {
        if(Dep.target){
          dep.depend()
        }
        return val
      },
      set(newVal) {
        if(val === newVal) return 
        val = newVal
        dep.notify()
      }
    })
  }
}

var uid = 0

function Dep() {
  this.id = uid++;
  this.subs = []
}

Dep.prototype = {
  addSub(sub){
    this.subs.push(sub)
  },
  depend() {
    Dep.target.addDep(this)
  },
  notify() {
    this.subs.forEach( sub => {
      sub.update()
    })
  }
}

Dep.target = null