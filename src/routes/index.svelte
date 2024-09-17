<script lang="ts">
    // importations
    import { UseTableData } from '../table'
    import Blogs from '../lib/blogs.svelte'
    import Header from '../lib/Header.svelte';
    import Top from '../lib/blog/topList.svelte';
    import CurrentList from '../lib/blog/currentList.svelte';
    import Blog from './posts/nouvelle-publication.svelte'

    // declarations
  let message: string = '',
      newMessage: string = '',
      title: string = '',
      current: number = 0,   
      { blogs, ListsCurrent, ListsTop } = UseTableData()

  const addPost = () =>{
    current = Math.floor(Math.random() * 10)

    const id = new Date().getTime().toString(),
          currentDate = new Date(),
          currentImage = 'https://source.unsplash.com/200x200/?fashion?' + current

    const note: any = {
      id: id,
      title: title,
      content: message,
      date: currentDate,
      img: currentImage,
      view: '0'
    }
    blogs = [note, ...blogs]  
    title = ''
  }
</script>
<Header />
<main>       
     
    <div class="w-full max-w-2xl mx-6 mt-5 md:mx-auto">    
        <form>
            <div class="w-full mb-4 border border-gray-200 rounded bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
                <div class="flex items-center justify-between px-3 py-2 border-b dark:border-gray-600">
                    <div class="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse dark:divide-gray-600">
                        <div class="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                            <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 20">
                                    <path stroke="currentColor" stroke-linejoin="round" stroke-width="2" d="M1 6v8a5 5 0 1 0 10 0V4.5a3.5 3.5 0 1 0-7 0V13a2 2 0 0 0 4 0V6"/>
                                </svg>
                                <span class="sr-only">Attach file</span>
                            </button>
                            <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path d="M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
                                </svg>
                                <span class="sr-only">Embed map</span>
                            </button>
                            <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z"/>
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z"/>
                                </svg>
                                <span class="sr-only">Upload image</span>
                            </button>
                            <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z"/>
                                    <path d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z"/>
                                </svg>
                                <span class="sr-only">Format code</span>
                            </button>
                            <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM13.5 6a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm-7 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm3.5 9.5A5.5 5.5 0 0 1 4.6 11h10.81A5.5 5.5 0 0 1 10 15.5Z"/>
                                </svg>
                                <span class="sr-only">Add emoji</span>
                            </button>
                        </div>
                        <div class="flex flex-wrap items-center space-x-1 rtl:space-x-reverse sm:ps-4">
                            <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 18">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 3h9.563M9.5 9h9.563M9.5 15h9.563M1.5 13a2 2 0 1 1 3.321 1.5L1.5 17h5m-5-15 2-1v6m-2 0h4"/>
                                </svg>
                                <span class="sr-only">Add list</span>
                            </button>
                            <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M18 7.5h-.423l-.452-1.09.3-.3a1.5 1.5 0 0 0 0-2.121L16.01 2.575a1.5 1.5 0 0 0-2.121 0l-.3.3-1.089-.452V2A1.5 1.5 0 0 0 11 .5H9A1.5 1.5 0 0 0 7.5 2v.423l-1.09.452-.3-.3a1.5 1.5 0 0 0-2.121 0L2.576 3.99a1.5 1.5 0 0 0 0 2.121l.3.3L2.423 7.5H2A1.5 1.5 0 0 0 .5 9v2A1.5 1.5 0 0 0 2 12.5h.423l.452 1.09-.3.3a1.5 1.5 0 0 0 0 2.121l1.415 1.413a1.5 1.5 0 0 0 2.121 0l.3-.3 1.09.452V18A1.5 1.5 0 0 0 9 19.5h2a1.5 1.5 0 0 0 1.5-1.5v-.423l1.09-.452.3.3a1.5 1.5 0 0 0 2.121 0l1.415-1.414a1.5 1.5 0 0 0 0-2.121l-.3-.3.452-1.09H18a1.5 1.5 0 0 0 1.5-1.5V9A1.5 1.5 0 0 0 18 7.5Zm-8 6a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7Z"/>
                                </svg>
                                <span class="sr-only">Settings</span>
                            </button>
                            <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M18 2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2ZM2 18V7h6.7l.4-.409A4.309 4.309 0 0 1 15.753 7H18v11H2Z"/>
                                    <path d="M8.139 10.411 5.289 13.3A1 1 0 0 0 5 14v2a1 1 0 0 0 1 1h2a1 1 0 0 0 .7-.288l2.886-2.851-3.447-3.45ZM14 8a2.463 2.463 0 0 0-3.484 0l-.971.983 3.468 3.468.987-.971A2.463 2.463 0 0 0 14 8Z"/>
                                </svg>
                                <span class="sr-only">Timeline</span>
                            </button>
                            <button type="button" class="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z"/>
                                    <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z"/>
                                </svg>
                                <span class="sr-only">Download</span>
                            </button>
                        </div>
                    </div>
                    <button type="button" data-tooltip-target="tooltip-fullscreen" class="p-2 text-gray-500 rounded cursor-pointer sm:ms-auto hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600">
                        <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 19 19">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 1h5m0 0v5m0-5-5 5M1.979 6V1H7m0 16.042H1.979V12M18 12v5.042h-5M13 12l5 5M2 1l5 5m0 6-5 5"/>
                        </svg>
                        <span class="sr-only">Full screen</span>
                    </button>
                    <div id="tooltip-fullscreen" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
                        Show full screen
                        <div class="tooltip-arrow" data-popper-arrow></div>
                    </div>
                </div>
                <div class="px-4 py-2 bg-white rounded-b-lg dark:bg-gray-800">
                    <label for="editor" class="sr-only">Ecrit ton post</label>
                    <textarea bind:value={title} rows="8" class="block w-full px-0 text-sm text-gray-800 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400" placeholder="Write an article..." required></textarea>
                </div>
            </div>
            <button on:click|preventDefault={addPost} class={!title ? "opacity-50 bg-blue-700 cursor-not-allowed inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white  rounded" : "opacity-100 cursor-pointer inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"} disabled={!title}>
                Publier
            </button>
        </form>
    </div>
      
    <section class="py-6 sm:py-12 dark:bg-gray-800 dark:text-gray-100">
        <div class="container p-6 mx-auto space-y-8">
        <hr>
            <div class="space-y-2 text-center">
                <h2 class="text-3xl font-bold">Partem reprimique an pro</h2>
                <p class="font-serif text-sm dark:text-gray-400">Qualisque erroribus usu at, duo te agam soluta mucius.</p>
            </div>
            <div class="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                {#each blogs as blog} 
                    <Blogs {...blog}>
                        <article class="flex flex-col dark:bg-gray-900">
                            <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum">
                              <img alt="" class="object-cover w-full h-52 dark:bg-gray-500" src={blog.img}>
                            </a>
                            <div class="flex flex-col flex-1 p-6">
                              <a rel="noopener noreferrer" href="#" aria-label="Te nulla oportere reprimique his dolorum"></a>
                              <a rel="noopener noreferrer" href="#" class="text-xs tracki uppercase hover:underline dark:text-violet-400">Convenire</a>
                              <h3 class="flex-1 py-2 text-lg font-semibold">{title}</h3>
                              <div class="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-400">
                                <span>{blog.date}</span>
                                <span>{blog.view} views</span>
                              </div>
                            </div>
                        </article>
                    </Blogs>
                {/each}
            </div>
        </div>
    </section> 
    <div class="article flex flex-col md:flex-row gap-16">
        <div class="list-md flex-1">    
            {#each ListsCurrent as regular}    
                <Blogs {...regular}>
                    <div class="dark:bg-gray-800 dark:text-gray-50 list-left">
                        <div class="container flex items-center mx-auto dark:bg-gray-900">
                            <!-- <div class="bg-no-repeat bg-cover dark:bg-gray-700 col-span-full lg:col-span-4 rounded-md h-24 w-14" style:background-image= "url('{regular.img}')" style="background-position: center center; background-blend-mode: multiply; background-size: cover;"></div> -->
                            <div class="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
                                <div class="flex justify-start">
                                    <!-- <span class="px-2 py-1 text-xs rounded-full dark:bg-violet-400 dark:text-gray-900">Label</span> -->
                                    <div class="flex space-x-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 dark:text-gray-400">
                                            <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
                                        </svg>
                                        <span class="self-center text-sm">by Leroy Jenkins</span>
                                    </div>
                                </div>
                                <h1 class="text-3xl font-semibold">Lorem ipsum dolor sit.</h1>
                                <p class="flex-1 pt-2 text-slate-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, reprehenderit adipisci tempore voluptas laborum quod.</p>
        
                                <div class="flex items-center justify-between pt-2">
                                    <div class="flex space-x-2">
                                        <span class="self-center text-sm">Dec 7· 4 min</span>
                                    </div>
                                    <span class="text-xs">3 min read</span>
                                </div>
                            </div>
                            <div class="bg-no-repeat bg-cover dark:bg-gray-700 col-span-full lg:col-span-4 rounded-md h-32 w-36" style:background-image= "url('{regular.img}')" style="background-position: center center; background-blend-mode: multiply; background-size: cover;"></div>
                        </div>
                    </div>
                </Blogs>
            {/each}
        </div>
        <div class="list-sm basis-[100%] md:basis-2/5 sticky lg:w-full lg:h-full lg:bg-gradient-to-r lg:from-gray-50 lg:via-transparent lg:to-transparent dark:from-slate-800">
            {#each ListsTop as top, index }
                <Blogs {...top}>
                    <div class="px-6 lg:px-10 py-4">
                        <div class="flex items-start">
                            <span class="font-bold text-2xl text-slate-300 -mt-2">{index + 1}</span>
                            <div class="flex justify-start lg:py-2">
                                <svg width="28" height="29" viewBox="0 0 28 29" fill="none" class="ji ah"><path fill="#fff" d="M0 .8h28v28H0z"></path><g opacity="0.8" clip-path="url(#trending_svg__clip0)"><path fill="#fff" d="M4 4.8h20v20H4z"></path><circle cx="14" cy="14.79" r="9.5" stroke="#000"></circle><path d="M5.46 18.36l4.47-4.48M9.97 13.87l3.67 3.66M13.67 17.53l5.1-5.09M16.62 11.6h3M19.62 11.6v3" stroke="#000" stroke-linecap="round"></path></g><defs><clipPath id="trending_svg__clip0"><path fill="#fff" transform="translate(4 4.8)" d="M0 0h20v20H0z"></path></clipPath></defs></svg>
                                <span class="self-center text-sm  font-medium">Trending on Blog</span>
                            </div>
                        </div>
                        <div class="dark:bg-gray-800 dark:text-gray-50">
                            <div class="container grid grid-cols-12 mx-auto dark:bg-gray-900">
                                <div class="flex flex-col col-span-full row-span-full lg:col-span-8 lg:py-2">
                                    <div class="flex justify-start">
                                        <div class="flex space-x-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 dark:text-gray-400">
                                                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clip-rule="evenodd"></path>
                                            </svg>
                                            <span class="self-center text-sm">by Leroy Jenkins</span>
                                        </div>
                                    </div>
                                    <h1 class="text-xl font-semibold">{top.title}</h1>
                                    <div class="flex items-center justify-between pt-2">
                                        <div class="flex space-x-2">
                                            <span class="self-center text-sm text-slate-400">Dec 7· 4 min</span>
                                        </div>
                                        <span class="text-xs text-slate-400">3 min read</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Blogs>
            {/each}
        </div>
    </div>
</main>

<style>
    .list-left{
        margin: 50px 0;
    }
</style>