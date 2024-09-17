<script lang="ts">
  import Blog from "./routes/posts/nouvelle-publication.svelte"
  import Posts from './routes/posts/[id].svelte'
  import Page from "./routes/index.svelte";
  import Header from "./lib/Header.svelte";
  import Register from "./routes/register.svelte";
  import SignIn from "./routes/signIn.svelte";
  import Profil from "./routes/user/[name].svelte";
  import Modification from "./routes/posts/[id]/modification-publication.svelte";
  import EditProfil from "./routes/setting/edit-profil.svelte";
  import "../index.css"
  import { Router, Route } from "svelte-routing";

  export let url = "";
  
  
</script>
<Router {url}>
    <div>
      <Route path="/blog" component={Blog} />
      <Route path="/register" component={Register} />
      <Route path="/signIn" component={SignIn} />
      <Route path="/user/:name" component={Profil} />
      <Route path="/setting/edit-profil" component={EditProfil} />
      <Route path="/" component={Page} />
    </div>
    <div>
       <Route path="/posts/:id/modification-publication" let:params>
          {#if params.id}
          <Modification id="{params.id}"/>
          {:else}
            <p>Article non trouvé</p>
          {/if}
        </Route>
       <Route path="/blog/:id" let:params>
          {#if params.id}
          <Posts id="{params.id}"/>
          {:else}
            <p>Article non trouvé</p>
          {/if}
        </Route>
    </div>
    
</Router>




