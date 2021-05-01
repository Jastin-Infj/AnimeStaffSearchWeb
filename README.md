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

## Error 1061 Enum member must have initializer.
**原因:**
Enum型の宣言で 初期化がされていないパラメーターが存在している  

解決方法:  
初期値を設定してください。  

## Error 1093 Type annotation cannot appear on a constructor declaration.
**原因**
問題のあるconstructorに 型の return 値を入力している  

解決方法:  
constructorでは return 値は入力出来ません。  
return に返す 型の定義を外してください。  

## Error 1357 An enum member name must be followed by a ',', '=', or '}'
**原因:**
Enum型の宣言で **,**を忘れている可能性あり  

解決方法:  
初期値の後に **,**を追加してください  

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
パラメーター名が存在していない  

解決方法:  
以下の方法を試してください  
・型名のオリジナルに      パラメーター名を追加する  
・型名のオリジナルに対して パラメーター名を拡張する  

## Error 2345 Argument of type '代入値' is not assignable to parameter of type '型名'.
**原因:**
代入する値が 型名の要素になっていない可能性あり  

解決方法:  
代入値を型名と対応している値を計算してください。

## Error 2355 A function whose declared type is neither 'void' nor 'any' must return a value.
**原因:**
void型 any型でもない場合は、return する型を明示的に宣言していない。  

解決方法:  
undefinedを返したい場合           →  **return undefined;** を記載  
関数にreturn を記載したくない場合  →  **void** に設定する  

## Error 2365 Operator '+' cannot be applied to types 'number' and 'boolean'.
**原因**
number型 と boolean型に 加算を行ったため  

解決方法:  
number と boolean型の計算を諦める  

## Error 2371 A parameter initializer is only allowed in a function or constructor implementation.
**原因:**
デフォルト引数の記述場所が誤っている  
**変数名: (型名)**のところでは デフォルト引数は利用出来ません  

解決方法:  
・デフォルト引数値を記述している関数を見直す  

## Error 2393 Duplicate function implementation.
**原因:**
関数名が重複している

解決方法:  
関数を削除する または オーバーロードを行う

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

## Error 2554 Expected 記述されている引数の数 arguments, but got 呼び出し元の引数の数.
**原因:**
この関数を呼び出すための 引数の数に誤りがある。

解決方法:  
実行したい関数のパラメーターを参照し、引数の数を合わせてください。

## Error 2571 Object is of type 'unknown'.
**原因**
型名に unknownになっている。  

解決方法:  
 1. **typeof** で計算 unknownになっている型を検討  
 2. **if typeof** などで ブロックスコープ内で計算・実行させる  

## Error 2741 Property '未定義param名' is missing in type '定義済みparam名' but required in type 'interface型'.
**原因:**
未定義のパラメーターが存在しています。  

解決方法:  
**未定義のparam名**を追加してください。  

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