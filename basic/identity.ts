// 函数的参数可以是任何值，返回值就是将参数原样返回，并且其只能接受一个参数
function identity<T>(arg: T): T {
    return arg;
}

// 其中 T 代表 Type，在定义泛型时通常用作第一个类型变量名称。但实际上 T 可以用任何有效名称代替。除了 T 之外，以下是常见泛型变量代表的意思：

// K（Key）：表示对象中的键类型；
// V（Value）：表示对象中的值类型；
// E（Element）：表示元素类型。

// 泛型约束

// function identity1<T>(arg: T): T {
//   return arg.size; // Error: Property 'size' does not exist on type 'T'
// }

interface Sizeable {
  size: number;
}
// 使用 extends 关键字可以做到这一点。简单来说就是你定义一个类型，然后让 T 实现这个接口即可
function identity1<T extends Sizeable>(arg: T): T {
  console.log(arg.size);
  return arg;
}

// typeof

interface Person {
  name: string;
  age: number;
}
const sem: Person = { name: "semlinker", age: 30 };
type Sem = typeof sem; // type Sem = Person

// 在上面代码中，我们通过 typeof 操作符获取 sem 变量的类型并赋值给 Sem 类型变量，之后我们就可以使用 Sem 类型：

const lolo: Sem = { name: "lolo", age: 5 }

// keyof ,该操作符可以用于获取某种类型的所有键，其返回类型是联合类型。
interface Person1{
  name:string
  age:number
}


type K1 = keyof Person; // "name" | "age"
type K2 = keyof Person[]; // "length" | "toString" | "pop" | "push" | "concat" | "join" 
type K3 = keyof { [x: string]: Person };  // string | number


type Todo = {
  id: number;
  text: string;
  done: boolean;
}

const todo: Todo = {
  id: 1,
  text: "Learn TypeScript keyof",
  done: false
}

function prop<T extends object, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const id = prop(todo, "id"); // const id: number
const text = prop(todo, "text"); // const text: string
const done = prop(todo, "done"); // const done: boolean

// const date=prop(todo,'date') // Argument of type '"date"' is not assignable to parameter of type '"id" | "text" | "done"'.

// in 用来遍历枚举类型

type Keys = "a" | "b" | "c"

type Obj =  {
  [p in Keys]: any
} // -> { a: any, b: any, c: any }