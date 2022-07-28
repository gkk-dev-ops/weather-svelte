<script>
  let searchInputPlaceholder = "Search for weather in Wrocław".toUpperCase();
  let searchBtnPlaceholder = "search".toUpperCase();
  function searchForGivenCity() {
    let cityName = document.getElementById("search").value;
    window.location.href = `http://127.0.0.1:5173/city/${cityName}`;
  }
</script>

<div class="input">
  <input
    type="text"
    name="search"
    id="search"
    placeholder={searchInputPlaceholder}
    class="search-input"
  />
  <input
    type="button"
    value={searchBtnPlaceholder}
    class="search-btn"
    placeholder
    on:click|once={searchForGivenCity}
  />
</div>

<style lang="scss">
  @import "Searchbox.scss";
</style>
