import { db, storage } from '../firebase/firebase';
import { doc, setDoc, getDocs, updateDoc, collection, Timestamp, deleteDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL, deleteObject   } from "firebase/storage";
import { navigate } from 'svelte-routing';
import type { Publication } from '../../table';
import toast, {Toaster} from 'svelte-french-toast';
import { onMount } from 'svelte';


let userId: string,
    imageOfPublication: any;


export const createPublication = async (data: Publication, editorData: any, imagePublication: File, name: string) => {
   userId = data.userId
    editorData.save().then((outputData: any) => {
        imageOfPublication = ref(storage, `Publications/imageOfPublication/${data.userId}/${imagePublication.name}`);
        uploadBytes(imageOfPublication, imagePublication)
        .then(()=>{
            getDownloadURL(imageOfPublication).then((url: any)=>{
                let image =  url;                
                const docRef = doc(collection(db, "publications"))
                setDoc(docRef, {
                    id: docRef.id,
                    authorId: data.userId,
                    title: data.title,
                    imagePublication: image,
                    tags: data.tags,
                    content: outputData,
                    describe: data.describe,
                    date: Timestamp.fromDate(new Date())  
                }).then(() => {
                    data.title = '';
                    data.describe = '';
                    editorData.clear()
                    navigate(`/user/${name}`, { replace: true }); 
                })
            })
        })    
    })
}

export const getPublicationAuthor = async () => {
    let publications: any = [];
    const querySnapshot = await getDocs(collection(db, "publications"));
    querySnapshot.forEach((doc) => {
        publications.push(doc.data())        
    })    
    let newPublications = publications.map((publication: object) => {    
        if(publication.authorId === userId) return publication
        return publication
    })
    return newPublications    
}

export const updatePublication = async (data: Publication, editor: any, title: string, name: string, id: string, loading: boolean) => {    
    editor.save()
    .then(async (outputData: any) => {
        if(typeof data.imagePublication !== 'object') {
            updateDoc  (doc(db, "publications", id), {
                title: title,
                imagePublication: data.imagePublication,
                tags: data.tags,
                content: outputData,
                describe: data.describe,
                date: Timestamp.fromDate(new Date()) 
            })
            .then(()=>{
                toast.success('Modifcation de la publication effectuée!');
                return new Promise(resolve => setTimeout(resolve, 1000));
            })
            .then(()=>{
                navigate(`/user/${name}`, { replace: true });
            }) 
        }  
        else {
            imageOfPublication = ref(storage, `Publications/imageOfPublication/${data.userId}/${data.imagePublication.name}`);
            await uploadBytes(imageOfPublication, data.imagePublication)
            .then(()=>{
                getDownloadURL(imageOfPublication)
                .then((url: any)=>{
                    let image =  url;
                    updateDoc (doc(db, "publications", id), {
                        title: title,
                        imagePublication: image,
                        tags: data.tags,
                        content: outputData,
                        describe: data.describe,
                        date: Timestamp.fromDate(new Date()) 
                    }).then(()=>{
                        navigate(`/user/${name}`, { replace: true });
                    })
                })
            })            
        }    
    })       
}

export const deletePublication = async (id: string) => {
    await deleteDoc(doc(db, "publications", id));
}

// export const getAllPublications = async () => {
//     const querySnapshot = await getDocs(collection(db, "publications"));
//     querySnapshot.forEach((doc) => {
//         console.log(doc.data());
        
//     })    
// }
