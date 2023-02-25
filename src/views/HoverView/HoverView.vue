<template>
  <div class="grid-container">
    <h2 class="fluid">Ссылки соцсетей</h2>
    <div class="container container--3">
      <h3 class="fluid">Hover/Focus v1</h3>
      <hover-version1/>
      <span class="fluid">путь: src/views/HoverView/components/HoverVersion1.vue</span>
    </div>
    <div class="container container--9">
      <h3 class="fluid">Hover/Focus v2</h3>
      <hover-version2/>
      <span class="fluid">путь: src/views/HoverView/components/HoverVersion2.vue</span>
    </div>
    <div class="container container--10">
      <h3 class="fluid">Hover/Focus v3</h3>
      <hover-version3/>
      <span class="fluid">путь: src/views/HoverView/components/HoverVersion3.vue</span>
    </div>
  </div>
</template>

<script setup>
import HoverVersion1 from "@/views/HoverView/components/HoverVersion1.vue";
import HoverVersion2 from "@/views/HoverView/components/HoverVersion2.vue";
import HoverVersion3 from "@/views/HoverView/components/HoverVersion3.vue";
</script>

<style lang="scss" scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: min-content;
  grid-gap: 24px;
}

.fluid {
  display: block;
  word-break: break-all;
  grid-column: 1 / -1;
}

.container {
  grid-column: span 12;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: auto;
  grid-gap: 24px;

  &--3 {
    grid-column: span 3;
    grid-template-columns: 1fr 1fr 1fr;
  }

  &--9 {
    grid-column: span 9;
    grid-template-columns: 1fr 1fr 1fr;
  }

  &--10 {
    grid-column: span 10;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }

  &--3,
  &--9,
  &--10 {
    @media (max-width: 1500px) {
      grid-column: span 12;
    }
  }
}
</style>
