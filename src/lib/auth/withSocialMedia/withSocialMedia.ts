import { auth, db } from "../../firebase/firebase";
import { doc, setDoc } from 'firebase/firestore';
import { GoogleAuthProvider, signInWithPopup, getAdditionalUserInfo , linkWithPopup } from "firebase/auth";
import { navigate } from "svelte-routing";


let provider = new GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' });
export const authSocialMedia = () =>{
    signInWithPopup(auth, provider)
    .then(async(result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const { isNewUser } = getAdditionalUserInfo(result) 
        const user = result.user;
        const token = credential.accessToken;
        if(isNewUser){
            await setDoc(doc(db, 'users', user.uid),{
                id: user.uid,
                imageUrl: user.photoURL,
                name: user.displayName,
                userName: '',
                aboutMe: '',
                linkedin: '',
                facebook: '',
                twitterX: '',
                youtube: ''
            })
            const name = user.displayName?.replace(' ', '-')
            navigate(`/user/${name}`, { replace: true }); 
        } else{
            navigate(`/`, { replace: true });
        }      
        
      }).catch((error) => {
        // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
      });    
}