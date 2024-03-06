<script lang="ts">
    // importations
    import { UseTableData } from '../table'
    import Blogs from '../lib/blogs.svelte'
    import Header from '../lib/Header.svelte';
    import { getAllPublications } from "../lib/publication/crudPublication";
    

    // declarations
    let message: string = '',
      newMessage: string = '',
      title: string = '',
      current: number = 0,   
      { blogs, ListsCurrent, ListsTop } = UseTableData();
    let publications: any = [];

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
  getAllPublications()
    .then((datas: any)=>{
        publications = datas;
        console.log("les publications - 1: ", publications);   
    });
</script>
<Header />
<main>       
     
    <div class="w-full max-w-2xl mx-6 mt-5 md:mx-auto">    
        
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
            {#each publications as regular}    
                <Blogs {...regular}>
                    <div class="dark:bg-gray-800 dark:text-gray-50 list-left">
                        <div class="container flex items-center mx-auto dark:bg-gray-900">
                            <div class="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
                                <div class="flex justify-start">
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
        <!-- <div class="list-md flex-1">    
            {#each ListsCurrent as regular}    
                <Blogs {...regular}>
                    <div class="dark:bg-gray-800 dark:text-gray-50 list-left">
                        <div class="container flex items-center mx-auto dark:bg-gray-900">
                            <div class="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
                                <div class="flex justify-start">
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
        </div> -->
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