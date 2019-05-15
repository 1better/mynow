function getStyle(el,attr){
  if(window.getComputedStyle){
    return window.getComputedStyle(el,null)[attr]
  }else {
    return ele.currentStyle[attr]
  }
} 

function animate(el,obj) {
  clearInterval(el.timer)
  el.timer = setInterval(function(){
    for(var key in obj){
      var bool = true
      if(key!=='opacity'){
          var leader = parseInt(getStyle(el,key)) || 0
          var target = parseInt(obj[key]) 
      }else {
        var leader = parseInt(getStyle(el,key) * 100)  || 0
        console.log(leader)
        var target = parseInt(obj[key] * 100) || 1
      }
      var step = (target - leader) /10
      step = step>0?Math.ceil(step):Math.floor(step);
      leader = leader + step
      if(key ==='opacity'){
        console.log(leader/100)
        el.style[key] = leader/100
      }else if(key === 'zIndex'){
        el.style[key] = target
      }else {
        el.style[key] = leader + 'px'
      }
      if(key==='opacity'){
        if(parseInt(obj[key]*100)!==leader){
          bool = false
        }
      }else {
        if(parseInt(obj[key])!==leader){
          bool = false
        }
      }
      
    }
    if(bool){
      clearInterval(el.timer)
    }
  },50)
  
}