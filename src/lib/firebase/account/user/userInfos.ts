
import { auth, db, storage } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getDocs, collection, doc, updateDoc  } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL  } from "firebase/storage";
import type { User } from "../../../../table";
import toast from 'svelte-french-toast';
import { loading } from "../../../store/store";

let userId: string

export const getUser = () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {
                userId = user.uid
                const querySnapshot = await getDocs(collection(db, "users"))
                let userData: User | null = null;
                querySnapshot.forEach((doc) => {
                    userData = doc.data() as User;
                })

                resolve(userData);
            } else {
                // Handle the case when there's no authenticated user
                resolve(null);
            }
        }, (error) => {
            // Handle errors from onAuthStateChanged
            reject(error);
        })
    });
};

export const updateUser = async (updateData: Partial<User>, imageUrl: File) => {
    loading.set(true);
    if(!imageUrl) {
        updateDoc (doc(db, "users", userId), updateData)
        .then(() => {
            loading.set(false);
            toast.success('Profile mise a jour avec success!',{
                duration: 2000,
            });
        });
    }
    else{
        const profileRef = ref(storage, `users/profile/${userId}/${imageUrl.name}`);
        await uploadBytes(profileRef, imageUrl)
        .then((snapshot: any) => {
            getDownloadURL(profileRef)
            .then((url: any) => {
                updateData.imageUrl = url;
                updateDoc (doc(db, "users", userId), updateData)
                .then(() => {
                    loading.set(false);
                    toast.success('Profile mise a jour avec success!',{
                        duration: 2000,
                    });
                });        
        
            })
        })
    }
    
}
