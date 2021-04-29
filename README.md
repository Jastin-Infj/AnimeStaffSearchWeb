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


# エラー発生時

## Error 2322 Type '型名' is not assignable to type '型名'.
**原因:**
代入値が 型名と合っていない。  

解決方法:  
型名に対応している値を計算してください。  

## Error 2345 Argument of type '代入値' is not assignable to parameter of type '型名'.
**原因**
代入する値が 配列の要素になっていない可能性あり  

解決方法:  
代入値を型名(配列)と対応している値を計算してください。

## Error 2451 Cannot redeclare block-scoped variable '変数名'. '変数名' was also declared here.
**原因:**  
Javascriptではmoduleシステムを導入していない場合  
変数がグローバル空間に宣言することになる  

このエラーが発生しているソースファイルに記述されている変数が、**グローバル変数**として扱わる可能性があります。  
その変数名が、どこかで宣言させている変数名と被ってしまったため、宣言が出来ないですよ。と言っている。  

解決方法:  
問題のあるソースファイルに exportを追加してmodule化すれば良い  

## Error 2741 Property '未定義param名' is missing in type '定義済みparam名' but required in type 'interface型'.
**原因:**
未定義のパラメーターが存在しています。  

解決方法:  
未定義のparam名を追加してください。