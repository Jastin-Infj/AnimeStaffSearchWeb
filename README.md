## Typescriptファイルをコンパイルする
### npx tsc Typescriptファイル
**npx :** ./node_modules/.bin/ を配下のコマンドを省略してくれる  
**tsc :** Typescriptのコンパイルをして Javascriptファイルを生成する  
**node Javascriptファイル :** Javascriptファイルの実行  
* * *
## Typescriptファイルを実行する
### npx ts-node Typescriptファイル
**ts-node :** TypeScriptのコンパイルとJavascriptファイルの実行をしてくれる\n  
※Javascriptファイルの生成および上書きはされない  
* * *

## Typescriptファイルを監視対象に設定する(自動コンパイル)
### npx ts-node-dev --respawn Typescriptファイル
インストール必要: ts-node-dev  
※ 実行され続けるので、 終了したい場合は Ctrl + C をする  
* * *

## tsconfig.jsonを追加したい
### npx tsc --init
* * * 

## インストールした バージョンでコンパイルを行う(VsCode)
・ 右下の Typescriptのバージョンをクリック  
・「Typescriptのバーションを選択」をクリック  
・「ワークスペース」のバーションに合わせる  
* * *

# その他(気になったこと)
 [Type-Alias と interface の違い1](https://zenn.dev/luvmini511/articles/6c6f69481c2d17)  
 [Type-Alias と interface の違い2](https://qiita.com/sotszk/items/efe32e07e52dce329653)  
|                  | Type-alias | interface           | 
| :--------------: | :--------: | :-----------------: | 
| 定義             | 代入       | 宣言                | 
| セミコロン       | あり       | なし                | 
| 定義可能範囲 型  | any        | class または object | 
| パラメーター拡張 | なし       | あり                | 
* * *  

# エラー発生時

## Error 1005 ':' expected.
**原因:**
Object形式になっていません。  

解決方法:  
Object形式を入力したい場合:  
**key: param** の形式で記述してください。
渡しているのがObject形式の場合:  
**{ }**は不要です。削除してください。  

## Error 1061 Enum member must have initializer.
**原因:**
Enum型の宣言で 初期化がされていないパラメーターが存在している  

解決方法:  
初期値を設定してください。  

## Error 1093 Type annotation cannot appear on a constructor declaration.
**原因:**
問題のあるconstructorに 型の return 値を入力している  

解決方法:  
constructorでは return 値は入力出来ません。  
return に返す 型の定義を外してください。  

## Error 1174 Classes can only extend a single class.
**原因:**
extends で派生が可能なクラスは 1つまでです。

解決方法:  
interfaceを複数定義し、**implements** を用いることで 多重継承のように実装する  

## Error 1244 Abstract methods can only appear within an abstract class.
**原因:**
抽象メソッドは 抽象クラス内でしか利用できない。

解決方法:  
**class** の前に **abstract** を付与する  

## Error 1357 An enum member name must be followed by a ',', '=', or '}'
**原因:**
Enum型の宣言で **,**を忘れている可能性あり  

解決方法:  
初期値の後に **,**を追加してください  

## Error 2300 Duplicate identifier '名前'.
**原因:**
識別子が重複している  

解決方法:  
名前を重複しないようにしてください。

## Error 2304 Cannot find name '変数名'.
**原因:**
未定義の 変数名が利用されている  

解決方法:  
問題が出た**変数名の定義** または **削除**する  

## Error 2322 Type '型名' is not assignable to type '型名'.
**原因:**
代入値が 型名と合っていない。  

解決方法:  
型名に対応している値を計算してください。  

## Error 2339 Property 'パラメーター名' does not exist on type 'typeof 型名'.
**原因:**
以下の可能性があります。  
・パラメーター名が存在していない  
・namespaceのネスト に対して export がされていない  

解決方法:  
以下の方法を試してください  
パラメーター名が存在していない場合  
・型名のオリジナルに      パラメーター名を追加する  
・型名のオリジナルに対して パラメーター名を拡張する  
namespaceの場合  
・**export** を 付与してください。  

## Error 2341 Property 'パラメーター名' is private and only accessible within class 'クラス名'.
**原因:**
このパラメーター名は、インスタンスからの参照が出来なくなっています。(private属性に設定されている)

解決方法:  
・内部処理で パラメーター名を記述する  
・private属性を 削除する  

## Error 2345 Argument of type '代入値' is not assignable to parameter of type '型名'.
**原因:**
代入する値が 型名の要素になっていない可能性あり  

解決方法:  
代入値を型名と対応している値を計算してください。

## Error 2349 This expression is not callable. Type '戻り値の型名' has no call signatures.
**原因:**
以下が考えられます。  
・setterやgetter の呼び出しに対して **();**をつけている  

解決方法:  
 setterやgetterの場合  
  **();**の呼び出しを **setterFunctionName;** または **getterFunctionName;** に切り替えてください  

## Error 2355 A function whose declared type is neither 'void' nor 'any' must return a value.
**原因:**
void型 any型でもない場合は、return する型を明示的に宣言していない。  

解決方法:  
undefinedを返したい場合           →  **return undefined;** を記載  
関数にreturn を記載したくない場合  →  **void** に設定する  

## Error 2362 The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
**原因:**
算術演算の右側は、「any」、「number」、「bigint」、または列挙型(配列,Enumなど)に設定されていない  
リテラルは利用出来ません。  

解決方法:  
**「any」、「number」、「bigint」、または列挙型(配列,Enumなど)**に設定する  

## Error 2365 Operator '+' cannot be applied to types 'number' and 'boolean'.
**原因:**
number型 と boolean型に 加算を行ったため  

解決方法:  
number と boolean型の計算を諦める  

## Error 2371 A parameter initializer is only allowed in a function or constructor implementation.
**原因:**
デフォルト引数の記述場所が誤っている  
**変数名: (型名)**のところでは デフォルト引数は利用出来ません  

解決方法:  
・デフォルト引数値を記述している関数を見直す  

## Error 2377 Constructors for derived classes must contain a 'super' call.
**原因:**
子クラスに対して super()の呼び出しがない  

解決方法:  
・子クラスに constructor() 自体 をなくす (内部では コンストラクタの中で super()が呼び出されている状態)  
または  
・constructor()で super()を呼び出す  

## Error 2393 Duplicate function implementation.
**原因:**
関数名が重複している  

解決方法:  
関数を削除する または オーバーロードを行う  

## Error 2411 Property 'パラメーター名' of type 'パラメーターの型名' is not assignable to string index type '型名'.
**原因:**
インデックスシグネチャに定義されている型名ではない  

解決方法:  
インデックスシグネチャに アクセスを可能に型名を追加する  

## Error 2416 Property '抽象メソッド' in type '派生クラス名' is not assignable to the same property in base type '抽象クラス名'. Type '派生クラスの抽象メソッド用に定義した関数' is not assignable to type '抽象メソッドの戻り値'. Type '派生クラスで定義した抽象メソッドの型名' is not assignable to type '抽象クラスで定義したの型名'.
**原因:**
抽象クラスやinterfaceで定義したメソッド と 派生クラスで定義したメソッドの型名が一致していない  
例:  
・戻り値が合っていない  
・引数の数が誤っている  
・引数の型名が誤っている  

例外:  
・抽象メソッドに引数あり で 派生クラスに引数を記述していない場合は通ります。 ※ 順番が違えばエラー  

解決方法:  
抽象メソッドと型名を合わせてください。  

## Error 2420 Class 'interfaceを実装するクラス名' incorrectly implements interface 'interface名'. Property 'interface名.FuncName' is missing in type 'interfaceを実装するクラス名' but required in type 'interface名'.
**原因:**
interfaceで定義されている 関数が実装されていない  

解決方法:  
interfaceで定義されている 関数を定義してください。  

## Error 2445 Property 'パラメーター名' is protected and only accessible within class 'クラス名' and its subclasses.
**原因:**
アクセス修飾子が **protexted**に設定されています。  
インスタンスからの外部参照ができません。

解決方法:  
・派生クラスの内部で参照する  
または  
・**public** に設定する

## Error 2451 Cannot redeclare block-scoped variable '変数名'. '変数名' was also declared here.
**原因:**  
Javascriptではmoduleシステムを導入していない場合  
変数がグローバル空間に宣言することになる  

このエラーが発生しているソースファイルに記述されている変数が、**グローバル変数**として扱わる可能性があります。  
その変数名が、どこかで宣言させている変数名と被ってしまったため、宣言が出来ないですよ。と言っている。  

解決方法:  
module化すれば良い  
方法1  
・問題のあるソースファイルに **export**を追加  
方法2
・問題のあるソースファイルに **import**を追加  

## Error 2515 Non-abstract class '派生クラス名' does not implement inherited abstract member 'FunctionName' from class '抽象クラス名'.
**原因:**
抽象クラスで定義されている 関数を 派生クラス名 で定義をしてません。  

解決方法:  
抽象クラスで定義されている 関数を定義してください。  

## Error 2540 Cannot assign to 'プロパティ名' because it is a read-only property.
**原因:**
読み込み専用のプロパティに設定されている  (readonly や as const)
または  
getter関数で setter のように記述している  

解決方法:  
readonly属性が付与されている場合  
**public**属性に変更 または **protected** 属性に変更  
getter関数で setter のように記述している場合  
**setter**を用意してください。  

## Error 2554 Expected 記述されている引数の数 arguments, but got 呼び出し元の引数の数.
**原因:**
この関数を呼び出すための 引数の数に誤りがある。  

解決方法:  
実行したい関数のパラメーターを参照し、引数の数を合わせてください。  

## Error 2558 Cannot assign to '変数名' because it is a constant.
**原因:**
この変数は const属性(定数)に設定されているため 値の変更が出来ません。  

解決方法:  
・**let** に 変更する  
・**readonly属性(as const)を解除**する  

## Error 2564 Property 'パラメーター名' has no initializer and is not definitely assigned in the constructor.
**原因:**
'パラメーター名'が constructorで初期化をしていない  

解決方法:  
constructorで'パラメーター名'を初期化してください。  

## Error 2571 Object is of type 'unknown'.
**原因**
型名に unknownになっている。  

解決方法:  
 1. **typeof** で計算 unknownになっている型を検討  
 2. **if typeof** などで ブロックスコープ内で計算・実行させる  

## Error 2576 Property 'パラメーター名' is a static member of type 'クラス名'
**原因:**
パラメーター名が static属性になっているので 動的に生成されたクラスにアクセス出来ません。  

解決方法:  
アクセスしたい場合  
**ClassName.パラメーター名** で参照する  

## Error 2662 Cannot find name 'static パラメーター名'. Did you mean the static member 'クラス名.パラメーター名'?
**原因:**
static属性を内部参照する構文が誤っている可能性があります。  

解決方法:  
参照先が 自分の場合  
**this.static パラメーター名**を指定する。  
参照先が 外部の場合  
**クラス名.static パラメーター名**を指定する。  

## Error 2741 Property '未定義param名' is missing in type '定義済みparam名' but required in type 'interface型'.
**原因:**
以下の可能性があります。  
原因１  
・未定義のパラメーターが存在しています。  
原因２  
・型の互換性によって 代入可能だった オブジェクトに対して パラメーターが変化したことで インスタンス化が出来なくなってしまった  
原因３  
・Object型で初期化をする際にパラメーターをoptional("?")に設定していない  
原因４  
・interfaceなどに定義されている必須パラメーターを設定していない

解決方法:  
原因１  
**未定義のparam名**を追加してください。  
原因２  
**未定義のparam名**を追加 または 削除してください。  
原因３  
**param名**にoptionalを付与する。  
または  
インデックスシグネチャを採用する。  
原因４  
**interfaceなどに定義されている必須パラメーター名**を設定してください。  

## Error 2749 '変数名' refers to a value, but is being used as a type here.
**原因:**
型として 表現出来ていない。  

解決方法:  
**typeof** のような役割を持つ 予約語を 変数名に当ててください。  

## Error 2769 No overload matches this call. Overload 'オーバーロード関数の1つ目' of 'オーバーロードの合計', 'オーバーロード関数1の型名', gave the following error. Argument of type 'エラー値' is not assignable to parameter of type '定義可能な引数の型名'. Overload 'オーバーロード関数のnつ目' of 'オーバーロード関数n', 'オーバーロード関数nの型名', gave the following error. Argument of type 'エラー値' is not assignable to parameter of type '定義可能な引数の型名'.
**原因:**
シグネチャに定義されている引数の型名と違う型名を引数に設定している。  

解決方法:  
・問題のあるオーバーロード関数の引数の型名と同じにする  
または  
・引数に割り当てたい型名用の**シグネチャ**を新規で定義する  

## Error 7006 Parameter '引数の変数名' implicitly has an 'any' type.
**原因:**
以下のパターンが考えられます。  
・暗黙的にany型設定されている変数名が存在する  
・引数の変数名に 型を定義していないものが存在する  

解決方法:  
**型を定義** または  問題のある引数名を削除する  

## Error 17009 'super' must be called before accessing 'this' in the constructor of a derived class.
**原因:**
派生クラスのコンストラクタの前にthisでアクセスは出来ません  

解決方法:  
**super()**の前に**this**は利用しない  