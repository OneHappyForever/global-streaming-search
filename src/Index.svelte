<script>
  import App from "./App.svelte";
</script>

<main>
  <a href="https://wannaflix.com"
    ><img
      src="/images/logo.png"
      alt="github logo"
    /></a
  >
  <App />
</main>

<style>
  img {
    float: right;
    float: top;
    position: relative;
    z-index: 100;
    width: 2rem;
    padding-right: 0.5rem;
    padding-top: calc(100vh / 50);
  }
  :global(body) {
    background-image: linear-gradient(135deg, rgb(16, 24, 44), rgb(44, 16, 16));
    height: max-content;
    margin: 0;
    background-repeat: no-repeat;
    background-attachment: fixed;
    z-index: 0;
  }
</style>
