
import { auth, db, storage } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getDocs, collection, doc, updateDoc, getDoc  } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL  } from "firebase/storage";
import type { User } from "../../../../table";
import toast from 'svelte-french-toast';
import { loading } from "../../../store/store";

export let currentId: string;

export const getUser = () => {
    return new Promise((resolve, reject) => {
        onAuthStateChanged(auth, async (user) => {
            if (user) {           
                currentId = user.uid;
                let userData: User | null = null;
                const docRef = doc(db, "users", currentId);
                const docSnap = await getDoc(docRef);
                userData = docSnap.data() as User;                                                            
                resolve(userData);
            } else {
                resolve(null);
            }
        }, (error) => {
            reject(error);
        })
    });
};

export const getAllUsers = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    })
}

export const updateUser = async (updateData: Partial<User>, imageUrl: File) => {
    loading.set(true);
    if(!imageUrl) {
        updateDoc (doc(db, "users", currentId), updateData)
        .then(() => {
            loading.set(false);
            toast.success('Profile mise a jour avec success!',{
                duration: 2000,
            });
        });
    }
    else{
        const profileRef = ref(storage, `users/profile/${currentId}/${imageUrl.name}`);
        await uploadBytes(profileRef, imageUrl)
        .then((snapshot: any) => {
            getDownloadURL(profileRef)
            .then((url: any) => {
                updateData.imageUrl = url;
                updateDoc (doc(db, "users", currentId), updateData)
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



