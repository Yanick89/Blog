<script lang="ts">
    import Side from "../../lib/account/side.svelte";
    import Header from "../../lib/account/header.svelte";
    import { navigate, Router, Link } from 'svelte-routing';
    import { getPublicationAuthor, deletePublication } from "../../lib/publication/crudPublication";

    export let url: string = "";

    let publications: any = [];
    const locale = navigator.language || navigator.userLanguage;
    const options = {year: "numeric", month: "long", day: "numeric"};

    const watch: any = (count: number) =>{
        return count > 0 ? 'Publications' : 'Publication'
    }

    $: obersveCounte = watch(publications.length)
    
    getPublicationAuthor().then((data: any) => {
        publications = data
    })
    
    const deletePost = (id: string) =>{
        publications = publications.filter((post: any) => post.id !== id)
        deletePublication(id)        
    }

    const redirection = (id: string) =>{
        if(id) navigate(`/posts/${id}/modification-publication`, { replace: true })
    }
    

</script>

<svelte:head>
    <title>Mon profil</title>
</svelte:head>

<Header />
<div class="container w-full max-w-7xl px-2 sm:px-6 lg:px-8 mx-auto flex">
    <div class="mt-6 border-t border-gray-100 space-y-12 w-full">
        {#each publications as publication, i}
            <article class="flex items-start space-x-6 p-6">
                {#if publication.imagePublication}
                    <img src={publication.imagePublication} alt="" width="60" class="flex-none rounded-md bg-slate-100 min-h-[85px] aspect-[3/4] object-cover" />
                {:else}
                    <img src=https://www.rbspraytech.com/wp-content/uploads/2014/02/placeholder-860x567.jpg} alt="" width="60" class="flex-none rounded-md bg-slate-100 min-h-[85px] aspect-[3/4] object-cover" />
                {/if}
                <div class="min-w-0 relative flex-auto">
                    <Router {url}>
                        <Link to={`/blog/${publication.id}`} class="focus:outline-none hover:underline">
                            <h2 class="font-semibold text-lg text-slate-900 truncate pr-20">{publication.title}</h2>
                        </Link>
                      </Router>
                <!-- <h2 class="font-semibold text-lg text-slate-900 truncate pr-20">{publication.title}</h2> -->
                <dl class="mt-2 flex flex-wrap flex-1 text-sm leading-6 font-medium">

                    <div>
                        <dt class="sr-only">Year</dt>
                        <dd class="text-slate-400">Publié le {publication.date.toDate().toLocaleDateString(locale, options)}</dd>
                    </div>
                    <div class="flex items-center gap-x-4 w-full mt-2 font-normal">
                        <button on:click={() => redirection(publication.id)} class="inline-flex items-center border-0 border-b border-blue-400 hover:border-blue-500 text-sm text-start font-medium text-blue-400 -mt-px first:mt-0 hover:text-blue-500 dark:border-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            Modifier
                        </button>
                        <button on:click={() => deletePost(publication.id)} type="button" class="inline-flex items-center border-0 border-b border-red-400  hover:border-red-500 text-sm text-start font-medium text-red-400 -mt-px first:mt-0 hover:text-red-500 dark:border-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            Supprimer
                        </button>
                    </div>
                </dl>
                </div>
                <div class="min-w-0 relative flex-auto">
                    <div class="flex items-center justify-center gap-x-5">
                        <div class="flex items-center justify-center flex-col mt-2 font-normal">
                            <dd class="text-slate-400 text-sm">0</dd>
                            <dd class="text-slate-400 text-sm">Commentaires</dd>
                        </div>
                        <div class="flex items-center justify-center flex-col mt-2 font-normal border-r border-l px-5">
                            <dd class="text-slate-400 text-sm">0</dd>
                            <dd class="text-slate-400 text-sm">J'aime</dd>
                        </div>
                    </div>
                </div>
            </article>
        {/each}
        <!-- waiting for api -->
        {#if publications.length === 0}
            <div class="text-gray-500 bg-gray-200 rounded-md px-3 py-2 text-sm font-medium mx-auto mt-4 w-3/4 text-center">Vous n'avez pas encore de {obersveCounte}</div>
        {/if}
        
    </div>
    <div class="col-span-full bg-white border-l mx-auto h-screen basis-auto lg:basis-96 pt-3">     
        <Side {obersveCounte} {publications} />
    </div>
</div>
  