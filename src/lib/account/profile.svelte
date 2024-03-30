<script lang="ts">
    import { Link,navigate } from "svelte-routing";
    import { sign } from "../auth/sign/sign";
    import { getUser } from "../firebase/account/user/userInfos";
    import PhotoProfile from "./photoProfile.svelte";
    
    const { signOut } = sign();

    let name: string;
    getUser().then((user: any) => {
        name = user?.name
    })

    const userProfile = (name: string) => {
        navigate(`/user/${name.replace(" ", "-")}`, { replace: true })
    }
  
  </script>

<div class=" relative inline-block text-left dropdown z-10">
    <div class="rounded-md shadow-sm relative border-b-4 border-transparent py-3 flex items-center gap-2"
    >   
    <div class="w-10 h-10">
        <PhotoProfile />
    </div>
    </div>
    <div class="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
        <div class="absolute right-0 w-56 mt-0 origin-top-right shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">
            <div class="py-4 px-4 menu-ul bg-white rounded-md rounded-t-none">
                <ul class="flex flex-col gap-y-2">
                    <button on:click={() => userProfile(name)} class="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-blue-500">
                        <span class="flex items-center text-slate-500  hover:text-blue-500 dark:hover:text-blue-500 group">
                            <span class="mr-3">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                            </span>
                            Mon compte
                        </span>
                    </button>
                    <Link to="/setting/edit-profil" class="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-blue-500">
                        <span class="flex items-center text-slate-500  hover:text-blue-500 dark:hover:text-blue-500 group">
                            <span class="mr-3">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                            </span>
                            Réglages
                        </span>
                    </Link>
                    <hr class="dark:border-gray-700">
                    <button on:click={signOut} class="cursor-pointer flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-500">
                        <span class="flex items-center text-slate-500  hover:text-red-500 dark:hover:text-red-500 group">
                            <span class="mr-3 text-red-500">
                                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                            </span>
                            Déconnexion
                        </span>
                    </button>
                </ul>
            </div>
        </div>
    </div>
</div>

<style scoped>
    .dropdown:focus-within .dropdown-menu {
        opacity:1;
        transform: translate(0) scale(1);
        visibility: visible;
    }
</style>