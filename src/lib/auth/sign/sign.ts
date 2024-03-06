import { auth } from "../../firebase/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { navigate } from "svelte-routing";
import { loading } from "../../store/store";
import toast from 'svelte-french-toast';


export function sign(){
    const userSignIn = async (email:string, password:string) =>{
        loading.set(true);
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            loading.set(false);
            toast.success('Connexion reussie!')
            return new Promise((resolve) => setTimeout(resolve, 1000))
        })
        .then(() => {
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