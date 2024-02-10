<script lang="ts">
    import { getUser, updateUser } from "../firebase/account/user/userInfos";
    import PhotoProfile from "./photoProfile.svelte";
    import LoadingButton from "../component/loadingButton.svelte";
    import { Toaster } from 'svelte-french-toast';
    
    let inputFile : any;
    let imageUrl: any = '';
    let imageName : any = ''

    // profile object
    let datasUser: any = {
        name: '',
        userName: '',
        imageUrl: '',
        aboutMe: '',
        linkedin: '',
        facebook: '',
        twitterX: '',
        youtube: ''
    }

    getUser().then((user: any) => {
        datasUser = {
            name: user.name,
            userName: user.userName,
            imageUrl: user.imageUrl,
            aboutMe: user.aboutMe,
            linkedin: user.linkedin,
            facebook: user.facebook,
            twitterX: user.twitterX,
            youtube: user.youtube
        }
    })

    const imageSelected = (e:any) =>{
      const fileList: File = e.target.files[0];
      imageName = fileList
      imageUrl = URL.createObjectURL(fileList);

    }          
</script>

<form on:submit|preventDefault class="flex flex-col md:flex-row container w-full mx-auto gap-5 max-w-3xl">
    <div class="col-span-full basis-[20%] bg-white border-r">
        <h2 class="text-base font-semibold leading-7 text-gray-900 mt-3 text-center">Profile</h2>        
        <div class="flex flex-col items-center gap-2">
            <div class="h-24 w-24 rounded-full relative container-profil overflow-hidden"> <!--- bg-[#d1d5db] --->
                <PhotoProfile {imageUrl} />
                <label for="imageUrl" class="absolute top-0 left-0 h-full w-full z-10 rounded-full cursor-pointer flex justify-center items-center">
                    <div class="flex justify-center items-center w-full h-full rounded-full font-medium change text-sm">Modifier</div>
                    <input type="file" id="imageUrl" class="my-image hidden" accept="image/*" on:change={(e)=>imageSelected(e)} bind:this={inputFile}/>
                </label>
            </div>
        </div>
    </div>
    <div class="space-y-12 w-full">
        <div class="border-b border-gray-900/10 pb-12">
        <div class="mt-6 border-t border-gray-100">
            <div class="mt-10 flex flex-col gap-x-6 gap-y-4 sm:grid-cols-6">

                <div class="px-4 py-2 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
                    <div class="col-span-full">
                        <input bind:value={datasUser.name} type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-medium focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3" placeholder="Nom">
                    </div>
                </div>
                <div class="px-4 py-2 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
                    <div class="col-span-full">
                        <input bind:value={datasUser.userName} type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-medium focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3" placeholder="@Nom utilisateur">
                    </div>
                </div>

                <div class="w-full px-4 py-2 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
                    <div class="col-span-full">
                        <textarea bind:value={datasUser.aboutMe} id="about" name="about" rows="3" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-medium focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3" placeholder="Mini biographie"></textarea>
                        <p class="text-sm leading-6 text-gray-400 font-medium">Rédigez quelques phrases sur vous-même..</p>
                    </div>
                </div>
                <!-- socials medias links -->
                <hr>
                <div>
                    <h5 class="text-sm leading-6 text-gray-400 font-medium">Ajoute ton réseau social</h5>
                    <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                        <div class="w-full px-4 py-2 sm:col-span-3 sm:gap-4 sm:px-0">
                            <div class="col-span-full ">
                                <div class="flex border-0 rounded-l-md shadow-sm ring-1 ring-inset ring-gray-300">
                                    <span class="flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md dark:bg-gray-700 text-gray-400">
                                        <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="15" height="15"><path d="M4.00098 3H20.001C20.5533 3 21.001 3.44772 21.001 4V20C21.001 20.5523 20.5533 21 20.001 21H4.00098C3.44869 21 3.00098 20.5523 3.00098 20V4C3.00098 3.44772 3.44869 3 4.00098 3ZM5.00098 5V19H19.001V5H5.00098ZM7.50098 9C6.67255 9 6.00098 8.32843 6.00098 7.5C6.00098 6.67157 6.67255 6 7.50098 6C8.3294 6 9.00098 6.67157 9.00098 7.5C9.00098 8.32843 8.3294 9 7.50098 9ZM6.50098 10H8.50098V17.5H6.50098V10ZM12.001 10.4295C12.5854 9.86534 13.2665 9.5 14.001 9.5C16.072 9.5 17.501 11.1789 17.501 13.25V17.5H15.501V13.25C15.501 12.2835 14.7175 11.5 13.751 11.5C12.7845 11.5 12.001 12.2835 12.001 13.25V17.5H10.001V10H12.001V10.4295Z" fill="rgba(203,213,219,1)"></path></svg>
                                    </span>
                                    <input bind:value={datasUser.linkedin} type="text" name="url" id="url"  class="flex flex-1 border-0 py-1.5 rounded-r-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-medium focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3" placeholder="https://">
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 py-2 sm:col-span-3 sm:gap-4 sm:px-0">
                            <div class="col-span-full ">
                                <div class="flex border-0 rounded-l-md shadow-sm ring-1 ring-inset ring-gray-300">
                                    <span class="flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md dark:bg-gray-700 text-gray-400">
                                        <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M14 19H19V5H5V19H12V14H10V12H12V10.3458C12 9.00855 12.1392 8.52362 12.4007 8.03473C12.6622 7.54584 13.0458 7.16216 13.5347 6.9007C13.9174 6.69604 14.3922 6.57252 15.2217 6.51954C15.551 6.49851 15.9771 6.52533 16.5 6.6V8.5H16C15.0827 8.5 14.7042 8.54332 14.4779 8.66433C14.3376 8.73939 14.2394 8.83758 14.1643 8.97793C14.0433 9.20418 14 9.42853 14 10.3458V12H16.5L16 14H14V19ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z" fill="rgba(203,213,219,1)"></path></svg>
                                    </span>
                                    <input bind:value={datasUser.facebook} type="text" name="url" id="url"  class="flex flex-1 border-0 py-1.5 rounded-r-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-medium focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3" placeholder="https://">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
                        <div class="w-full px-4 py-2 sm:col-span-3 sm:gap-4 sm:px-0">
                            <div class="col-span-full ">
                                <div class="flex border-0 rounded-l-md shadow-sm ring-1 ring-inset ring-gray-300">
                                    <span class="flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md dark:bg-gray-700 text-gray-400">
                                        <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="12" height="12"><path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z" fill="rgba(203,213,219,1)"></path></svg>
                                    </span>
                                    <input bind:value={datasUser.twitterX} type="text" name="url" id="url"  class="flex flex-1 border-0 py-1.5 rounded-r-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-medium focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3" placeholder="https://">
                                </div>
                            </div>
                        </div>
                        <div class="w-full px-4 py-2 sm:col-span-3 sm:gap-4 sm:px-0">
                            <div class="col-span-full ">
                                <div class="flex border-0 rounded-l-md shadow-sm ring-1 ring-inset ring-gray-300">
                                    <span class="flex items-center px-3 pointer-events-none sm:text-sm rounded-l-md dark:bg-gray-700 text-gray-400">
                                        <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M19.6069 6.99482C19.5307 6.69695 19.3152 6.47221 19.0684 6.40288C18.6299 6.28062 16.501 6 12.001 6C7.50098 6 5.37252 6.28073 4.93225 6.40323C4.68776 6.47123 4.4723 6.69593 4.3951 6.99482C4.2863 7.41923 4.00098 9.19595 4.00098 12C4.00098 14.804 4.2863 16.5808 4.3954 17.0064C4.47126 17.3031 4.68676 17.5278 4.93251 17.5968C5.37252 17.7193 7.50098 18 12.001 18C16.501 18 18.6299 17.7194 19.0697 17.5968C19.3142 17.5288 19.5297 17.3041 19.6069 17.0052C19.7157 16.5808 20.001 14.8 20.001 12C20.001 9.2 19.7157 7.41923 19.6069 6.99482ZM21.5442 6.49818C22.001 8.28 22.001 12 22.001 12C22.001 12 22.001 15.72 21.5442 17.5018C21.2897 18.4873 20.547 19.2618 19.6056 19.5236C17.8971 20 12.001 20 12.001 20C12.001 20 6.10837 20 4.39637 19.5236C3.45146 19.2582 2.70879 18.4836 2.45774 17.5018C2.00098 15.72 2.00098 12 2.00098 12C2.00098 12 2.00098 8.28 2.45774 6.49818C2.71227 5.51273 3.45495 4.73818 4.39637 4.47636C6.10837 4 12.001 4 12.001 4C12.001 4 17.8971 4 19.6056 4.47636C20.5505 4.74182 21.2932 5.51636 21.5442 6.49818ZM10.001 15.5V8.5L16.001 12L10.001 15.5Z" fill="rgba(203,213,219,1)"></path></svg>
                                    </span>
                                    <input bind:value={datasUser.youtube} type="text" name="url" id="url"  class="flex flex-1 border-0 py-1.5 rounded-r-md text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-medium focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3" placeholder="https://">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>   
        <div class="flex items-center justify-end gap-x-6">
            <button on:click={()=>{ updateUser(datasUser, imageName)}} class="flex gap-1 rounded-md bg-gray-700 hover:bg-gray-500 px-8 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Modifier
                <LoadingButton />
            </button>
        </div>
    </div>
</form>
<Toaster />

<style>
    .change{
        display: none;
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        transition: all 0.5s ease;
    }
    .container-profil:hover .change{
        display: block;
        transition: background 0.5s ease;
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>