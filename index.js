var hello = 'hello';
console.log(hello);
// カーソル合わせると,tsコンパイラが動いて方を表示してくれる(tscが動いてる)
//　型注釈
var hasValue = false;
var count = 10;
var single = "hello";
// let hello: string;
// hello = 2;
// hello = 'hello';
// hello = true;
// 型推論（基本的には推論を使う、宣言時は型注釈）
var num = 1;
// オブジェクトの型推論（これもカーソル合わせれば型見れる）
var person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
// 配列
var fruits = ['りんご', 'ぶどう', 'なし'];
fruits.push[22222];
console.log(fruits);
