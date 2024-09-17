import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { navigate } from "svelte-routing";


export function sign(){
    const userSignIn = (email:string, password:string) =>{
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('utilisateur:', user);
            navigate(`/`, { replace: true })
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        });
    };
    const signOut = () =>{
        auth.signOut();
        navigate(`/`, { replace: true })
    }
    return{
        userSignIn,
        signOut
    }
}