<script lang="ts">
  import Header from "../lib/account/header.svelte"
  import { Link, navigate } from "svelte-routing";
  import { getUser } from "./firebase/account/user/userInfos";

  let userId: string;
  getUser().then((user: any) => {
    userId = user?.id as string
  })

  const directionUrl = () =>{
    if(userId){
      navigate('/blog')
    } else{
      navigate('/signIn')
    }
  }

</script>


{#if !userId}
<header class="flex flex-wrap sm:justify-end sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 dark:bg-gray-800 dark:border-gray-700">
  <div class="mx-auto w-full max-w-7xl px-2 sm:px-6 lg:px-8">
    <div class="relative flex h-16 items-center justify-between">
      <div class="flex items-center justify-center sm:items-stretch sm:justify-start">
        <div class="flex flex-shrink-0 items-center">
          <Link to="/" class="flex items-center space-x-3 rtl:space-x-reverse">
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Educ-Ga-Sciences</span>
          </Link>
        </div>
      </div>
      
      <div class="relative hidden sm:flex gap-3">
        <button on:click={directionUrl} class="text-gray-500  hover:bg-gray-100 hover:text-white rounded-md  text-sm font-medium h-10 w-10 relative">
          <svg class="absolute -translate-x-2/4 -translate-y-2/4 top-2/4 left-2/4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20"><path d="M16.7574 2.99666L14.7574 4.99666H5V18.9967H19V9.2393L21 7.2393V19.9967C21 20.5489 20.5523 20.9967 20 20.9967H4C3.44772 20.9967 3 20.5489 3 19.9967V3.99666C3 3.44438 3.44772 2.99666 4 2.99666H16.7574ZM20.4853 2.09717L21.8995 3.51138L12.7071 12.7038L11.2954 12.7062L11.2929 11.2896L20.4853 2.09717Z" fill="rgba(107,114,128,1)"></path></svg>
        </button>
        <Link to="/register" class="flex w-full justify-center rounded-md bg-gray-700 hover:bg-gray-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm">
          Inscription
        </Link>
        <!-- <Link to="/user/profil" class="bg-gray-700 text-white hover:bg-gray-500 rounded-md px-3 py-2 text-sm font-medium">
          profil
        </Link> -->
        <Link to="/signIn" class="flex w-full justify-center text-gray-500 bg-gray-200 hover:bg-gray-300 hover:text-white rounded-md px-3 py-1.5 text-sm font-medium">
          Connexion
        </Link>
      </div>
      <div class="absolute inset-y-0 right-0 left-auto flex items-center sm:hidden">
        <!-- Mobile menu button-->
        <div class="sm:hidden">
          <button type="button" class="hs-collapse-toggle w-9 h-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-collapse="#navbar-collapse-with-animation" aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
            <svg class="hs-collapse-open:hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
            </svg>
            <svg class="hs-collapse-open:block flex-shrink-0 hidden w-4 h-4" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Mobile menu, show/hide based on menu state. -->
  <div class="sm:hidden" id="mobile-menu">
    <div class="space-y-1 px-2 pb-3 pt-2 block w-full">
      <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
      <div class="flex flex-col gap-y-3">
        <Link to="/blog" class="text-gray-500 flex items-center hover:bg-gray-100 hover:text-white rounded-full  text-sm font-medium relative">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16"><path d="M16.7574 2.99666L14.7574 4.99666H5V18.9967H19V9.2393L21 7.2393V19.9967C21 20.5489 20.5523 20.9967 20 20.9967H4C3.44772 20.9967 3 20.5489 3 19.9967V3.99666C3 3.44438 3.44772 2.99666 4 2.99666H16.7574ZM20.4853 2.09717L21.8995 3.51138L12.7071 12.7038L11.2954 12.7062L11.2929 11.2896L20.4853 2.09717Z" fill="rgba(107,114,128,1)"></path></svg>
          <span>Ecrire</span>
        </Link>
        <Link to="/register" class="bg-gray-700 text-white hover:bg-gray-500 rounded-md px-3 py-2 text-sm font-medium">
          Inscription
        </Link>
        <Link to="/user/profil" class="bg-gray-700 text-white hover:bg-gray-500 rounded-md px-3 py-2 text-sm font-medium">
          profil
        </Link>
        <Link to="/signIn" class="text-gray-500 bg-gray-200 hover:bg-gray-300 hover:text-white rounded-md px-3 py-2 text-sm font-medium">
          Connexion
        </Link>
      </div>
    </div>
  </div>
</header>
{:else}
<Header />
{/if}




