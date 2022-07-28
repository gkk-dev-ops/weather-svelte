<slot />
<div class="wrapper">
  <div class="footer">
    Copyright &copy; 2022 G::KK at <a href="https://github.com/gkk-dev-ops">
      Github</a
    >
  </div>
</div>

<style lang="scss">
  @import "../styles/vars";
  .wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .footer {
    padding: 10px;
    width: 75%;
    border-top: solid 2px $color-dark-1;
    color: $color-dark-1;
    font-size: 12px;
  }

  a {
    text-decoration: none;
    color: $color-dark-1;
  }
</style>
