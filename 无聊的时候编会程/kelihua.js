// 隐式转换先调用 默认的toString 方法   如果主动定义隐式转换的返回结果则由我们自己控制了
// 其中valueOf的优先级会toString高一点

// 柯里化（英语：Currying），又称为部分求值，是把接受多个参数的函数变换成接受一个单一参数（最初函数的第一个参数）的函数，并且返回一个新的函数的技术，新函数接受余下参数并返回运算结果。

/* 接收单一参数，因为要携带不少信息，因此常常以回调函数的理由来解决。
将部分参数通过回调函数等方式传入函数中
返回一个新函数，用于处理所有的想要传入的参数 */

// function add(){
//   // 第一次执行时，定义一个数组专门用来储存所有的参数
//   var args = [].slice.call(arguments);
//   // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
//   var fn = function(){
//       var fn_args = [].slice.call(arguments);

//       return add.apply(null, args.concat(fn_args));
//   }
//   // 利用隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
//   fn.toString = function(){
//       return args.reduce(function(acc, prev){
//           return acc + prev;
//       })
//   }

//   return fn;
// }

// console.log(add(1,3)(2)+0)
// console.log(add(1,2,3,4))

// function sum(){
//   var cur = [].slice.call(arguments).reduce(function(a,b){return a+b;},0);
//   function innerSum(){
//     var next = [].slice.call(arguments).reduce(function(a,b){return a+b;},0);
//     cur += next;
//     return innerSum;
//   }
//   innerSum.toString = function(){
//     return cur;
//   }
//   return innerSum;
// }
// console.log(sum(1,2,3));       //6
// console.log(sum(2,3)(2));      //7
// console.log(sum(1)(2)(3)(4));  //10
// console.log(sum(2)(4,1)(2));   //9

var currying = function(fn) {
  // 主要还是收集所有需要的参数到一个数组中，便于统一计算
  var args = [].slice.call(arguments, 1);
  return function(){
      var _args = args.concat([].slice.call(arguments));
      return fn.apply(null, _args);
  }
}

var sum = function(){
  var args = [].slice.call(arguments);
  return args.reduce(function(a, b) {
      return a + b;
  });
};

var sum10 = currying(sum, 10);
console.log(sum10(20, 10));  // 40
console.log(sum10(10, 5));   // 25