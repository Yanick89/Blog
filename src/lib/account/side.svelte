<script lang="ts">
    import type { User } from "../../table";
    import { getUser } from "../firebase/account/user/userInfos";
    import PhotoProfile from "./photoProfile.svelte";

    export let obersveCounte: number;
    export let publications: [];

    // profile variables
    let name: string = '',
        userName: string ='',
        imageUrl: string = '',
        linkedin: string = '',
        facebook: string = '',
        twitterX: string = '',
        youtube: string = '';
    

    getUser().then((user: any) => {
        name = user?.name
        userName = user?.userName,
        imageUrl = user?.imageUrl,
        linkedin = user?.linkedin,
        facebook = user?.facebook,
        twitterX = user?.twitterX,
        youtube = user?.youtube
    })

</script>


<div class="w-full ml-5 flex flex-col items-start gap-y-3">
    <div class="flex flex-col items-center">  
        <div class="w-20 h-20">
            <PhotoProfile />
        </div>
        {#if userName === ''}
        <span class="text-slate-500 font-medium text-lg ml-3">@{name}</span>
        {:else}
        <span class="text-slate-500 font-medium text-lg ml-3">@{userName}</span>
        {/if}
    </div>
    <span class="text-slate-500 font-normal text-base ml-3">{name}</span>
    <span class="text-slate-500 font-normal text-base ml-3">{publications.length} {obersveCounte}</span>
    <a href="/setting/edit-profil" class="text-gray-500 bg-gray-200 hover:bg-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium ml-3">Modifier</a>
    
    {#if youtube || linkedin || facebook || twitterX}
        <div class="mt-2">
            <span class="font-normal text-slate-500 text-base ml-3">Mes résaux</span>
            <ul class="flex items-center gap-x-1 mt-1 ml-3">
                {#if linkedin}
                <li>
                    <a href={linkedin} target="_blank">
                        <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"><path d="M4.00098 3H20.001C20.5533 3 21.001 3.44772 21.001 4V20C21.001 20.5523 20.5533 21 20.001 21H4.00098C3.44869 21 3.00098 20.5523 3.00098 20V4C3.00098 3.44772 3.44869 3 4.00098 3ZM5.00098 5V19H19.001V5H5.00098ZM7.50098 9C6.67255 9 6.00098 8.32843 6.00098 7.5C6.00098 6.67157 6.67255 6 7.50098 6C8.3294 6 9.00098 6.67157 9.00098 7.5C9.00098 8.32843 8.3294 9 7.50098 9ZM6.50098 10H8.50098V17.5H6.50098V10ZM12.001 10.4295C12.5854 9.86534 13.2665 9.5 14.001 9.5C16.072 9.5 17.501 11.1789 17.501 13.25V17.5H15.501V13.25C15.501 12.2835 14.7175 11.5 13.751 11.5C12.7845 11.5 12.001 12.2835 12.001 13.25V17.5H10.001V10H12.001V10.4295Z" fill="rgba(203,213,219,1)"></path></svg>
                    </a>
                </li>
                {/if}
                {#if facebook}
                <li>
                    <a href={facebook} target="_blank">
                        <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"><path d="M14 19H19V5H5V19H12V14H10V12H12V10.3458C12 9.00855 12.1392 8.52362 12.4007 8.03473C12.6622 7.54584 13.0458 7.16216 13.5347 6.9007C13.9174 6.69604 14.3922 6.57252 15.2217 6.51954C15.551 6.49851 15.9771 6.52533 16.5 6.6V8.5H16C15.0827 8.5 14.7042 8.54332 14.4779 8.66433C14.3376 8.73939 14.2394 8.83758 14.1643 8.97793C14.0433 9.20418 14 9.42853 14 10.3458V12H16.5L16 14H14V19ZM4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z" fill="rgba(203,213,219,1)"></path></svg>
                    </a>
                </li>   
                {/if}
                {#if twitterX}
                <li>
                    <a href={twitterX} target="_blank">
                        <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18"><path d="M8 2H1L9.26086 13.0145L1.44995 21.9999H4.09998L10.4883 14.651L16 22H23L14.3917 10.5223L21.8001 2H19.1501L13.1643 8.88578L8 2ZM17 20L5 4H7L19 20H17Z" fill="rgba(203,213,219,1)"></path></svg>
                    </a>
                </li>
                {/if}
                {#if youtube}
                <li>
                    <a href={youtube} target="_blank">
                        <svg class="mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22"><path d="M19.6069 6.99482C19.5307 6.69695 19.3152 6.47221 19.0684 6.40288C18.6299 6.28062 16.501 6 12.001 6C7.50098 6 5.37252 6.28073 4.93225 6.40323C4.68776 6.47123 4.4723 6.69593 4.3951 6.99482C4.2863 7.41923 4.00098 9.19595 4.00098 12C4.00098 14.804 4.2863 16.5808 4.3954 17.0064C4.47126 17.3031 4.68676 17.5278 4.93251 17.5968C5.37252 17.7193 7.50098 18 12.001 18C16.501 18 18.6299 17.7194 19.0697 17.5968C19.3142 17.5288 19.5297 17.3041 19.6069 17.0052C19.7157 16.5808 20.001 14.8 20.001 12C20.001 9.2 19.7157 7.41923 19.6069 6.99482ZM21.5442 6.49818C22.001 8.28 22.001 12 22.001 12C22.001 12 22.001 15.72 21.5442 17.5018C21.2897 18.4873 20.547 19.2618 19.6056 19.5236C17.8971 20 12.001 20 12.001 20C12.001 20 6.10837 20 4.39637 19.5236C3.45146 19.2582 2.70879 18.4836 2.45774 17.5018C2.00098 15.72 2.00098 12 2.00098 12C2.00098 12 2.00098 8.28 2.45774 6.49818C2.71227 5.51273 3.45495 4.73818 4.39637 4.47636C6.10837 4 12.001 4 12.001 4C12.001 4 17.8971 4 19.6056 4.47636C20.5505 4.74182 21.2932 5.51636 21.5442 6.49818ZM10.001 15.5V8.5L16.001 12L10.001 15.5Z" fill="rgba(203,213,219,1)"></path></svg>
                    </a>
                </li>
                {/if}
            </ul>
        </div>
    {/if}
</div>