<template>
  <div class="grid-container">
    <h2 class="fluid">Анимации по Hover и Focus</h2>
    <div class="container container--6">
      <h3 class="fluid">Hover/Focus v1</h3>
      <hover-version1/>
      <span class="fluid">путь: src/views/HoverView/components/HoverVersion1.vue</span>
    </div>
    <div class="container container--3">
      <h3 class="fluid">Hover/Focus v2</h3>
      <hover-version2 />
      <span class="fluid">путь: src/views/HoverView/components/HoverVersion2.vue</span>
    </div>
    <div class="container container--5">
      <h3 class="fluid">Hover/Focus v3</h3>
      <hover-version3 />
      <span class="fluid">путь: src/views/HoverView/components/HoverVersion3.vue</span>
    </div>
    <div class="container container--6">
      <h3 class="fluid">Hover/Focus v4</h3>
      <hover-version4 />
      <span class="fluid">путь: src/views/HoverView/components/HoverVersion4.vue</span>
    </div>
    <div class="container container--6">
      <h3 class="fluid">Hover/Focus v5</h3>
      <hover-version5 />
      <span class="fluid">путь: src/views/HoverView/components/HoverVersion5.vue</span>
    </div>
    <div class="container container--12">
      <h3 class="fluid">Hover/Focus v6</h3>
      <hover-version6 />
      <span class="fluid">путь: src/views/HoverView/components/HoverVersion6.vue</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import HoverVersion1 from "@/views/HoverView/components/HoverVersion1.vue";
import HoverVersion2 from "@/views/HoverView/components/HoverVersion2.vue";
import HoverVersion3 from "@/views/HoverView/components/HoverVersion3.vue";
import HoverVersion4 from "@/views/HoverView/components/HoverVersion4.vue";
import HoverVersion5 from "@/views/HoverView/components/HoverVersion5.vue";
import HoverVersion6 from "@/views/HoverView/components/HoverVersion6.vue";
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

  &--1 {
    grid-template-columns: repeat(1, 1fr);
  }

  &--2 {
    grid-template-columns: repeat(2, 1fr);
  }

  &--3 {
    grid-template-columns: repeat(3, 1fr);
  }

  &--4 {
    grid-template-columns: repeat(4, 1fr);
  }

  &--5 {
    grid-template-columns: repeat(5, 1fr);
  }

  &--6 {
    grid-template-columns: repeat(6, 1fr);
  }

  &--7 {
    grid-template-columns: repeat(7, 1fr);
  }

  &--8 {
    grid-template-columns: repeat(8, 1fr);
  }

  &--9 {
    grid-template-columns: repeat(9, 1fr);
  }

  &--10 {
    grid-template-columns: repeat(10, 1fr);
  }

  &--11 {
    grid-template-columns: repeat(11, 1fr);
  }

  &--12 {
    grid-template-columns: repeat(12, 1fr);
  }
}
</style>
