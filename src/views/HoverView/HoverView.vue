<template>
  <div class="grid-container">
    <h2 class="fluid">Ссылки соцсетей</h2>
    <div class="container-3">
      <h3 class="fluid">Hover/Focus v1</h3>
      <hover-version1/>
      <span class="fluid">путь: src/views/HoverView/components/HoverVersion1.vue</span>
    </div>
    <div class="container-9">
      <h3 class="fluid">Hover/Focus v2</h3>
      <hover-version2/>
      <span class="fluid">путь: src/views/HoverView/components/HoverVersion2.vue</span>
    </div>
  </div>
</template>

<script setup>
import HoverVersion1 from "@/views/HoverView/components/HoverVersion1.vue";
import HoverVersion2 from "@/views/HoverView/components/HoverVersion2.vue";
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

.container-3 {
  grid-column: span 3;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 24px;
}

.container-9 {
  grid-column: span 9;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 24px;
}
</style>
