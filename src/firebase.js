//ラッパー作成
import {Constants} from 'expo';
import firebase from 'firebase';
import 'firebase/firestore';

class Firebase{
    constructor(config = {}){
        firebase.initializeApp(config);

        //ユーザーの作成 start

        //Timestapm型を扱えるようにしておく
        firebase.firestore().settings({
            timestampsInsSnapshots:true
        });

        //userコレクションへの参照を取得
        this.user = firebase.firestore().collection('user');
    }

    //匿名ログインユーザーを取得する async function init()
    init = async() => new Promise(resolve => 
        firebase.auth().onAuthStateChanged(async (user) => {
            if(!user){
                //匿名ログインでのログインを行う
                //await 非同期処理が終了するまで待機
                await firebase.auth().signInAnonymously();

                this.uid = (firebase.auth().currentUser || {}).uid;
                //ユーザードキュメントを作成または上書きする

                this.user.doc(`{${this.uid}}`).set({
                    name: Constants.deviceName
                });
            }else{
                this.uid = user.uid;
            }

            return resolve(this.uid);
        })
    );
}

/** @see {json} app.json apikey情報 */
const fire = new Firebase(Constants.manifest.extra.firebase);

export default fire;