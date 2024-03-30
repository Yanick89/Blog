import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../firebase/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { navigate } from "svelte-routing";
import { loading } from "../../store/store";
import toast from 'svelte-french-toast';

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
            })
            .then(()=>{
                loading.set(false);
                toast.success('Connexion reussie!',{
                    duration: 2000,
                })
                return new Promise((resolve) => setTimeout(resolve, 1000))
            })
            .then(()=>{
                navigate(`/user/${name.replace(' ', '-')}`, { replace: true });  
            })       
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
    
    