<template>
  <header>
    <div class="wrapper">
      <nav class="navigation">
        <RouterLink class="navigation__link" to="/hover">HOVER</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <slot />
  </main>
</template>

<script>
export default {
  name: "AppLayout",
};
</script>

<style scoped lang="scss">
@import "/src/assets/vars";
main {
  padding: 24px;
}
.router-link-active {
  background-color: #38786a;

  &:hover {
    color: $textColor !important;
    background-color: #38786a !important;
  }
}
.navigation {
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: flex-start;

  &__link {
    display: block;
    padding: 28px 20px;
    text-decoration: none;
    color: $textColor;
    font-size: 16px;
    line-height: 1.4;
    font-weight: 500;
    transition-property: background-color, color;
    transition-duration: 600ms;
    transition-timing-function: ease;

    &:hover {
      color: $textColorHover;
      background-color: $buttonColorHovered;
    }
  }
}
</style>
