<template>
  <header>
    <div class="wrapper">
      <nav class="navigation">
        <RouterLink class="navigation__link" to="/">НА ГЛАВНУЮ</RouterLink>
      </nav>
    </div>
  </header>
  <main>
    <slot />
  </main>
  <footer>
    <h2>Footer</h2>
  </footer>
</template>

<script>
export default {
  name: "AppLayout",
};
</script>

<style scoped lang="scss">
@import "/src/assets/vars";
.navigation {
  display: flex;
  justify-content: flex-start;

  &__link {
    display: block;
    padding: 10px 20px;
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
