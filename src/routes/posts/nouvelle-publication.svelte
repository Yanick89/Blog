<script lang="ts">
    import HeaderNav from "../../lib/account/header.svelte"
    import Publication from "../../lib/account/publication.svelte"
    import EditorJS from '@editorjs/editorjs'
    import {toolsEditor, dataEditor} from "../../lib/editor/editorDatas"
    import { Toaster } from 'svelte-french-toast';

    
    let url: string = window.location.pathname,
        title: string = '',
        preview: string = '',
        imagePublication: any = '',
        inputFile: any = '',
        describe: string = '',
        tags: string[] = [],
        showDetails: boolean = false,
        editor: any,
        valueButton: string = 'Publier';

    $: showPublication = () =>{
        showDetails = !showDetails
    }

    const imageSelected = (e:any) =>{
      const fileList: any = e.target.files;
      imagePublication = fileList[0];
      for (const file of fileList) {
          const image = URL.createObjectURL(file);
          preview = image
        }           
    }

    const observeData = (title: string, preview: string) =>{
      return title !== '' ? true : false || preview !== '' ? true : false
    }

    $: watchData =  observeData(title, preview)
    
    editor = new EditorJS({
        holder: 'editorjs',
        autofocus: true,
        tools: toolsEditor,
        tunes: ['textVariant'],
        placeholder: 'Commence La rédaction de votre publication ici!',
        data: dataEditor,
    });

    editor.isReady
    .then(() => {
        console.log('Editor.js is ready to work!')
    })
    .catch((reason:any) => {
        console.log(reason)
    });
</script>
<svelte:head>
    <title>Editer ma publication</title>
</svelte:head>
<HeaderNav {watchData} {showDetails} {url} {showPublication} {valueButton}/>

<div id="editorjs">
    <div class="mx-auto w-full max-w-[650px]">
        <input bind:value={title} class="cursor-text w-full text-4xl font-medium my-5 outline-none h-14" type="text" placeholder="Titre">
        <div class="img-photo">
            <div class="container-img">
              <div class="relative h-full w-full">
                <label for="preview" class={ preview === '' ? "flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600" : "absolute top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 z-10 h-full w-full changer cursor-pointer"}>
                  <div class="flex flex-col items-center justify-center pt-5 pb-6 content">
                      <svg class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                      </svg>
                      <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">{preview !== '' ? 'Changer l\'image' : 'Ajouter une image'} de publication</p>
                      <p class="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF </p>
                  </div>
                  <input type="file" id="preview" class="my-image hidden" accept=".jpg, .jpeg, .png, .gif, .webp, image/*"  on:change={(e)=>imageSelected(e)} bind:this={inputFile} />
                </label>
                {#if preview}
                  <div class="w-full min-h-[400px] relative my-5 z-0">
                    <!-- svelte-ignore a11y-img-redundant-alt -->
                    <img class="w-full h-full object-cover absolute left-0 top-0 aspect-square rounded-md" src={preview} alt="photo de publication" />
                  </div>
                {/if}
              </div>
                
            </div>
        </div>        
    </div>
</div>
<Toaster />

{#if showDetails}
    <Publication {showDetails} {editor} {title} {imagePublication} {preview} {describe} {tags} on:close={() => showDetails = !showDetails}/>
{/if}



