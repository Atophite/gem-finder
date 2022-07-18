<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
  <script type="text/javascript" src="https://cdnjs.buymeacoffee.com/1.0.0/button.prod.min.js" data-name="bmc-button" data-slug="Atophite" data-color="#ffffff" data-emoji="" data-font="Cookie" data-text="Buy me a coffee" data-outline-color="#000000" data-font-color="#000000" data-coffee-color="#FFDD00" ></script>

</svelte:head>
<script>


  import router from "page"
  import Mainpage from "./pages/Mainpage.svelte"

  let page;
  let params;

  router('/', (ctx) => page = Mainpage);


  router.start()
</script>

<main>

  <Mainpage/>

</main>

<style>

  main{
    background-color: #3C3C3C;
    min-height: 100vh;
    min-width: 100px;
  }
</style>