const hello: string = 'hello';
console.log(hello);

// カーソル合わせると,tsコンパイラが動いて方を表示してくれる(tscが動いてる)
//　型注釈
let hasValue: boolean = false;
let count: number = 10;
let single: string = "hello";

// let hello: string;
// hello = 2;
// hello = 'hello';
// hello = true;

// 型推論（基本的には推論を使う、宣言時は型注釈）
let num = 1;


// オブジェクトの型推論（これもカーソル合わせれば型見れる）
const person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
}

// 配列
const fruits: string[] = ['りんご', 'ぶどう', 'なし'];
fruits.push[22222];

// たぷる（要素番号に厳密な型を指定できる）
const book: [string, number, false] = ['bussiness', 1500, false];

// enum オブジェクトに代入できる範囲を狭めたい
enum Size {
    SHORT = 'SHORT',
    TALL = 'TALL',
    MIDDLE = 'MIDDLE'
}

const coffee = {
    hot: true,
    size: Size.SHORT
}
coffee.size = Size.TALL;

// any方　なんでも入る、極力使いたくない
let anything: any = true;
anything = 'hello';
anything = ['hello', 1, true];
anything = {};
anything = 'hello';

// union型
let union: number | string = 10;
let unionList: (number | string)[] = [21, 'hello']
union = 'hello'

// literal型、それしか入れられなくなる。これはunion方も使ってる
let clothSize: 'small' | 'medium' | 'large' = 'small';
const cloth: {
    color: string;
    size: 'small' | 'medium' | 'large'
} = {
    color: 'white',
    size: 'medium'
}

// type alias 、型を変数に入れることができる。上のやつをもとに
type clothSize ='small' | 'medium' | 'large'

// 関数に型を使う
function add(num1: number, num2: number): number{
    return num1 + num2
}
// 戻り値は型推論してくれるが、引数は片注釈しないとanyになってしまうから片注釈すること
// 引数も戻り値も型注釈するべし
function add(num1: number, num2: number){
    return num1 + num2
}

// void
function say(): void{
    console.log(1111);
}

// 関数方
const anotherAdd: (n1: number, n2: number) => number = function (num1: number, num2: number): number {
    return num1 + num2
}
// 左辺の片注釈省略してもOKだし、右辺省略してもOK.どっちか書けばOK
const anotherAdd = function (num1: number, num2: number): number {
    return num1 + num2
}
const anotherAdd: (n1: number, n2: number) => number = function (num1, num2){
    return num1 + num2
}
// 左辺の片注釈省略してもOKだし、右辺省略してもOK.どっちか書けばOK
const double = num => num * 2;
const double = (num: number): number => num *2;
const double: (num: number) => number = num => num * 2;

// コールバック関数の型, 戻り値がvoid型の時点で無視してエラー出さないundifiendとかnull型だと出してくる
function doubleHandle: (num: number, cb: (num: number) => void): void {
    const doubleNum = cb(num * 2);
    console.log(doubleNum);
}
doubleHandle(21, doubelNum => { return doubelNum});

// unknown型とnever型もやったが、とりあえず使わないからあとで