
import { auth, db, storage } from "../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { getDocs, collection, doc, updateDoc  } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL  } from "firebase/storage";
import type { User } from "../../../../table";

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
    const profileRef = ref(storage, `users/profile/${userId}/${imageUrl.name}`);
    
    await uploadBytes(profileRef, imageUrl)
    .then((snapshot: any) => {
        getDownloadURL(profileRef).then((url: any) => {
            updateData.imageUrl = url;
            updateDoc (doc(db, "users", userId), updateData);        
            console.log('Uploaded a blob or file! Check Storage', updateData.imageUrl, updateData);
        })
    }), (error: any) => {
        console.log(error);
    };
}
