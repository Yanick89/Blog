<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import { getUser } from '../firebase/account/user/userInfos';
    import { createPublication, updatePublication } from '../publication/crudPublication';
    import ErrorMessage from '../component/errorMessage.svelte';

    // declare props
    export let showDetails: boolean;
    export let title: string;
    export let editor: any;
    export let preview: string;
    export let imagePublication: any;
    export let tags: string[] = [];
    export let describe: string = ''
    export let url: string = '';
    export let id: string = '';
    
    
    // Init variables
    let userId: string;
    let name: string;
    let tag: string = '';
    let value: string = '';

    let dataPublication: any = {
        imagePublication: imagePublication,
        tags: tags,
        describe: describe
    };
    
    const dispatch = createEventDispatcher();

    getUser().then((user: any) => {
        userId = user?.id as string;
        name = user?.name.replace(" ", "-")
    })

    const addTag = () =>{
        if(tags.length < 3 && tag !== ''){
            tags = [...tags, tag]
        }
        tag = ''
    }

    const removeTag = (tag: string) =>{
        tags = tags.filter((t: string) => t !== tag)
    }


</script>

<div class="details min-h-screen w-full bg-white fixed top-0 left-0 right-0 bottom-0 z-20">
    <div class="mx-auto h-full max-w-7xl px-2 sm:px-6 lg:px-8">
        <div class="flex justify-end mt-8">
            <button on:click={() => dispatch('close', showDetails = false)} class="text-gray-500  hover:bg-gray-300 hover:text-gray-400 rounded-md text-sm font-medium h-10 w-10 relative p-4">
                <svg class="absolute -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4" width="18" height="18" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.7" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                </svg>
            </button>
        </div>
        
        <div class="mx-8  h-screen">
            <div class="flex justify-center items-start flex-col h-full gap-0 md:flex-row md:gap-10 my-[5%]">
                <div class="w-full lg:w-1/3">
                    <h2 class="text-xl leading-6 text-slate-500 font-medium mb-2">Prévisualisation</h2>
                    {#if preview}
                    <div class="relative rounded-xl overflow-hidden h-[200px] bg-slate-400">
                        <img class="w-full h-full object-cover rounded-xl" src={preview} alt="">
                    </div>
                    {:else}
                    <div class="relative rounded-xl overflow-hidden h-[200px] bg-slate-400">
                        <img class="w-full h-full object-cover rounded-xl" src="https://images.unsplash.com/photo-1586232702178-f044c5f4d4b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80" alt="">
                    </div>
                    {/if}
                    <h3 class="text-lg leading-6 text-slate-500 font-medium mt-5">{title}</h3>
                </div>
                <div class="w-full lg:w-1/3 pt-5">
                    <div class="px-4 py-2 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
                        <div class="col-span-full">
                            <input bind:value={title} type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-medium focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3" placeholder="Titre">
                        </div>
                    </div>
                    <div class="w-full px-4 py-2 sm:grid sm:grid-cols-5 sm:gap-4 sm:px-0">
                        <div class="col-span-full">
                            <textarea bind:value={describe} id="about" name="about" rows="3" maxlength="120" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 placeholder:font-medium focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3" placeholder="Ajouter une description"></textarea>
                            {#if describe.length === 120}
                                <ErrorMessage value={`La longueur maximum de caractères est de ${describe.length}`} /> 
                            {/if}
                            <p class="text-sm leading-6 text-gray-400 font-medium text-right">{describe.length}/120 caractères</p>
                        </div>
                    </div>
                    <div class="w-full px-4 py-2 sm:px-0">
                        <form on:submit|preventDefault={addTag}>
                            <input bind:value={tag} type="text" class="peer py-3 px-4 block w-full bg-gray-100 border-transparent rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600" placeholder="Ajouter des tags">
                        </form>
                        <div class="flex items-center flex-wrap gap-2 mt-3">
                            {#each tags as tag}
                                <div class="flex">
                                    <div class="flex flex-nowrap items-center relative z-10 bg-white border border-gray-200 rounded-md p-1 my-1 dark:bg-slate-900 dark:border-gray-700">
                                        <div class="whitespace-nowra font-medium text-sm">{tag}</div>
                                        <button on:click={() => removeTag(tag)} class="inline-flex flex-shrink-0 justify-center items-center h-5 w-5 ms-2 rounded-full text-gray-800 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 text-sm dark:bg-gray-700/50 dark:hover:bg-gray-700 dark:text-gray-400 cursor-pointer" data-remove="">
                                            <svg class="flex-shrink-0 w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
                                        </button>
                                    </div>
                                </div>
                            {/each}
                        </div>
                        {#if tags.length === 3 && tag.length !== 0}
                            <ErrorMessage value={`Le nombre de tags est limité a ${tags.length}`} />
                        {/if}
                    </div>
                    {#if url}
                        <button on:click={()=>{updatePublication({...dataPublication, describe, tags, userId}, editor, title, id)}} class="inline-block rounded-md bg-gray-700 hover:bg-gray-500 px-8 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Modifier
                        </button> 
                    {:else}
                        <button on:click={()=>{createPublication({...dataPublication, describe, tags, userId}, editor, imagePublication, name)}} 
                            class="inline-block rounded-md bg-gray-700 hover:bg-gray-500 px-8 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                            Publier
                        </button>
                    {/if}
                </div>
            </div>
        </div>
    </div>
</div>