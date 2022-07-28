<script>
  import Searchbox from "../components/Searchbox.svelte";
</script>

<svelte:head>
  <title>Your weather wherever u are 🌦🌪⛅</title>
</svelte:head>
<div class="container">
  <div class="title">
    <h1>Weather App</h1>
  </div>
  <img src="/weather.png" alt="weather icon" />
  <Searchbox />
</div>

<style lang="scss">
  @import "../styles/routes/index.scss";
</style>
