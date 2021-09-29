import firebase from "firebase/compat/app"
import "firebase/compat/auth"


export async function loginApi(mail:string, pass:string){
    const user = await firebase.auth()
    .signInWithEmailAndPassword(mail, pass).catch(error=>{
        throw error;
    }) // ログイン実行
    return user;
}