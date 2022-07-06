// 函数声明
function sum(x: number, y: number): number {
    return x + y;
}

// 函数表达式
let sum2:(x:number,y:number)=>number = function(x:number,y:number):number {
    return x+y;
}

// 可选参数（可选参数后面不允许再出现必需参数）
function buildName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');

console.log(tomcat,tom);

// 剩余参数
function push(Array:number[],...items:number[]){
	items.forEach(item=>Array.push(item));
}

let a: number[] = [];
push(a,1,2,3);

// 函数重载

// 函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力。

type Types = number | string
function add(a:number,b:number):number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a:Types, b:Types) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
const result = add('Semlinker', ' Kakuqo');
result.split(' ');

// void 
// 方法没有返回值将得到undefined，但是我们需要定义成void类型，而不是undefined类型。否则将报错:
 function fun():void{
	console.log('hello');
 }