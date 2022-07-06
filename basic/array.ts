// 定义方式

let arr:string[] = ['a','b','c'];
let arr2:Array<string> = ['a','b','c'];

// 定义联合类型

let arr3:(string|number)[] = ['a','b','c',1,2,3];

// 定义指定对象成员的数组
interface arrObj { // 接口
  name:string
  age:number
}

let arr4:arrObj[] = [{name:'haha',age:1},{name:'b',age:2}];


console.log(arr4);