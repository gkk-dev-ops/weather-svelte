<script context="module">
  let cityName;
  export async function load({ params }) {
    const cityName = params.city;
    return { props: { cityName } };
  }
</script>

<script>
  import { Jumper } from "svelte-loading-spinners";
  import fetchLocation from "../../stores/forecastFromLocation";
  import ForecastTable from "../../components/ForecastTable.svelte";
  export let cityName;
  const [data, loading, error, getForecastForCity] = fetchLocation(cityName);
  let currentOrForecast = "Current";
  function changeForecastLength(duration) {
    currentOrForecast = duration;
    document.querySelectorAll("button").forEach((btn) => {
      btn.style.border = "2px solid transparent";
    });

    document.getElementById(duration + "Btn").style.border =
      "2px solid #E74C3C";
  }
</script>

<div class="container">
  <div class="nav">
    <button id="CurrentBtn" on:click={() => changeForecastLength("Current")}>
      Current
    </button>
    <button id="ForecastBtn" on:click={() => changeForecastLength("Forecast")}>
      Forecast
    </button>
  </div>
  <div class="title">
    <h1>{cityName.charAt(0).toUpperCase() + cityName.slice(1)}</h1>
  </div>
  <div class="forecastTable">
    {#if $loading}
      <Jumper size="240" color="#FF3E00" unit="px" duration="1s" />
    {:else if $error}
      Error: {$error}
    {:else}
      <ForecastTable
        distance={currentOrForecast}
        icon={$data.weather[0].icon}
        unixCurrentTime={$data.dt}
        temperature={[
          $data.main.temp,
          $data.main.temp_min,
          $data.main.temp_max,
        ]}
      />
    {/if}
  </div>
</div>

<style lang="scss">
  @import "../../styles/global";
  @import "../../styles/routes/city";
</style>
