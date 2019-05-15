function saveTime(fn,delay) {
  let canDou = true
  return function() {
    if(!canDou){
      return 
    } 
    canDou = false
    timer = setTimeout(()=>{
      console.log(timer)
      canDou = true
    },delay)
  }
}


// function saveTime(fn){
//   let preTime = Date.now()
//   return function(){
//     let nowTime = Date.now()
//     if(nowTime-preTime>1000){
//       fn.apply(this,arguments)
//       preTime = nowTime
//     }
//   }
// }
var num = 0
function srcollNum() {
  num++
  console.log(num)
}
document.addEventListener('scroll',saveTime(srcollNum,500))