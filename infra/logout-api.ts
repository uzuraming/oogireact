import firebase from "firebase/compat/app"
import "firebase/compat/auth"

export async function logoutApi(){
    const response = await firebase.auth()
    .signOut().catch(error=>{
        throw error;
    }) 
    return response;
}

