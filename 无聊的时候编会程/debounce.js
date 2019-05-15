function debounce(fn,delay){
  let timer = null
  return function() {
    clearTimeout(timer)
    timer = setTimeout(()=>{
      fn.apply(this,arguments)
    },delay)
  }
}
var num = 0
function srcollNum() {
  num++
  console.log(num)
}
document.addEventListener('scroll',debounce(srcollNum,500))