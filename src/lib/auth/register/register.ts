import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { navigate } from "svelte-routing";

export let name: string = '';
export let userId: string = ''

export function Register() {
    const userRegister = (email:string, password:string, name:string) =>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(async (data) => {
            const user = data.user;
            await setDoc(doc(db, 'users', user.uid),{
                id: user.uid,
                imageUrl: '',
                name: name,
                userName: '',
                aboutMe: '',
                linkedin: '',
                facebook: '',
                twitterX: '',
                youtube: ''
            });
            navigate(`/user/${name}`, { replace: true });         
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });                
    }

    return{
        userRegister
    }
}
    
    