<script>
  export let distance;
  export let temperature;
  export let icon;
  export let unixCurrentTime;
  let currentTime = new Date(unixCurrentTime * 1000);

  function getTemperature(idx) {
    return Number.parseFloat(Math.round(temperature[idx] - 273.15)).toFixed(2);
  }
</script>

<div class="wrapper">
  {#if distance === "Current"}
    <img src="http://openweathermap.org/img/wn/{icon}.png" alt="some weather" />
    <h2>{getTemperature(0)} °C</h2>
    <h2>{currentTime.toDateString()}</h2>
  {:else if distance === "Forecast"}
    <div class="general">
      <div class="general-items">
        {currentTime.toDateString()}
        <img
          src="http://openweathermap.org/img/wn/{icon}.png"
          alt="some weather"
        />
      </div>
      <div class="general-items">
        <p>
          Avg temperature: {getTemperature(0)} °C
        </p>
        <p>
          Min temperature: {getTemperature(1)} °C
        </p>
        <p>
          Max temperature: {getTemperature(2)} °C
        </p>
      </div>
    </div>
    <div class="following-days">
      <div class="day">
        <div class="day-weather-icon">
          <img
            src="http://openweathermap.org/img/wn/{icon}.png"
            alt="some weather"
          />
        </div>
        <div class="day-number">12:00</div>
        <div class="day-temperature">21 °C</div>
      </div>
      <div class="day">
        <div class="day-weather-icon">
          <img
            src="http://openweathermap.org/img/wn/{icon}.png"
            alt="some weather"
          />
        </div>
        <div class="day-number">15:00</div>
        <div class="day-temperature">23 °C</div>
      </div>
      <div class="day">
        <div class="day-weather-icon">
          <img
            src="http://openweathermap.org/img/wn/{icon}.png"
            alt="some weather"
          />
        </div>
        <div class="day-number">18:00</div>
        <div class="day-temperature">27 °C</div>
      </div>
      <div class="day">
        <div class="day-weather-icon">
          <img
            src="http://openweathermap.org/img/wn/{icon}.png"
            alt="some weather"
          />
        </div>
        <div class="day-number">21:00</div>
        <div class="day-temperature">29 °C</div>
      </div>
      <div class="day">
        <div class="day-weather-icon">
          <img
            src="http://openweathermap.org/img/wn/{icon}.png"
            alt="some weather"
          />
        </div>
        <div class="day-number">0:00</div>
        <div class="day-temperature">26 °C</div>
      </div>
    </div>
  {:else}
    {distance} - We don't support such forecast as for now.
  {/if}
</div>

<style lang="scss">
  @import "ForecastTable";
</style>
