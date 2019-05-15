function Compile(el,vm) {
  this.vm = vm
  this.el = document.querySelector(el)
  this.$fragment = this.fragment(this.el)
  this.compileElement(this.$fragment)
  this.el.appendChild(this.$fragment)
}
Compile.prototype = {
  fragment(el){
    var fragment = document.createDocumentFragment(),child
    while(child = el.firstChild){
      fragment.appendChild(child)
    }
    return fragment
  },
  compileElement(el) {
    var nodeArr = el.childNodes
    ;[].slice.call(nodeArr).forEach(node=>{
      var text = node.textContent
      var reg = /\{\{(.*)\}\}/
      if(this.isElementNode(node)){
        this.compile(node)
      }else if(this.isTextNode(node)&&reg.test(text)){
        compileUtil.bind(this.vm,node,RegExp.$1.trim(),'text')
      }
      if(node.childNodes&&node.childNodes.length) {
        this.compileElement(node)
      }
    })
  },
  compile(node){
    var attrs = node.attributes
    ;[].slice.call(attrs).forEach(attr => {
      var dir = attr.name
      var exp = attr.value
      if(this.isDirective(dir)){
        dir = dir.substring(2)
        if(this.isEventHandler(dir)){
          dir = dir.substring(3)
          this.EventHandler(this.vm,node,exp.trim(),dir)
        }else {
          if(dir==='model')
            compileUtil.model(this.vm,node,exp.trim(),dir)
          else 
            compileUtil.bind(this.vm,node,exp.trim(),dir)
        }
      }
    })
  },
  //事件处理
  EventHandler(vm,node,exp,dir){
    var fn = vm.obj.methods && vm.obj.methods[exp]
    if(fn&&dir){
      node.addEventListener(dir,fn.bind(vm),false)
    }
  },
  isElementNode(node) {
    return node.nodeType === 1
  },
  isTextNode(node) {
    return node.nodeType === 3
  },
  isDirective(dir) {
    return dir.indexOf('v-') === 0
  },
  isEventHandler(dir) {
    return dir.indexOf('on:') === 0
  }
}
var compileUtil = {
  model(vm,node,exp,dir){
    this.bind(vm,node,exp,dir)
    node.addEventListener('input',e=>{
      var newVal = e.target.value
      this.setValue(vm,exp,newVal)
    })
  },
  bind(vm,node,exp,dir){
    var updaterFn = updater[dir]
    updaterFn && updaterFn(node,this.getValue(vm,exp))
    new Watcher(vm,exp,function(val){
      updaterFn && updaterFn(node,val)
    })
  },
  getValue(vm,exp){
    var val = vm
    var exps = exp.split('.')
    exps.forEach(key=> val=val[key])
    return val
  },
  setValue(vm,exp,newVal){
    var val = vm
    var exps = exp.split('.')
    for(var i=0;i<exps.length-1;i++){
      val = val[exps[i]]
    }
    if(val[exps[exps.length-1]]!==newVal)
    val[exps[exps.length-1]]=newVal
  }
}
var updater = {
  text(node,value){
    node.textContent = typeof value === 'undefined' ? '':value
  },
  html(node,value){
    node.innerHTML = typeof value === 'undefined' ? '':value
  },
  model(node,value){
    node.value = typeof value === 'undefined' ? '':value
  }
}