<script lang="ts">
    import { getUser } from "../firebase/account/user/userInfos";

    export let imageUrl: string;

    getUser().then((user: any) => {
        imageUrl = user?.imageUrl
    })
</script>
    <button type="button" class="relative h-full w-full rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
        {#if imageUrl}
        <span class="rounded-full overflow-hidden border-2">
            <img src="{imageUrl}" alt="" class="absolute top-0 left-0 w-full h-full rounded-full object-cover">
        </span>
        {:else}
        <svg class="h-full w-full text-gray-300" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" clip-rule="evenodd" />
        </svg>
        {/if}
    </button>

