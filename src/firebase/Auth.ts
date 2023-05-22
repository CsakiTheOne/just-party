import { app } from "./firebase";
import { GoogleAuthProvider, User, getAuth, signInWithPopup, signOut } from "firebase/auth";

export default class Auth {
    static auth = getAuth(app);
    static provider = new GoogleAuthProvider();

    static loginWithPopup(): Promise<User> {
        return signInWithPopup(this.auth, this.provider)
            .then(res => {
                return res.user;
            })
            .catch(err => {
                alert(err.message);
                return Promise.reject(err.message);
            });
    }

    static logout() {
        signOut(this.auth);
    }
}