import { getAuth, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export function loginWithGoogle() {
    const auth = getAuth()
    auth.languageCode = 'it'
    const provider = new GoogleAuthProvider()
    return signInWithPopup(auth, provider)
}

export function logout(){
    const auth = getAuth()
    return signOut(auth)
}

export function getUserLogged(){
    return getAuth().currentUser
}