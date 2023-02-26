<template>
  <button class="btn btn--1" type="button">transform</button>
  <button class="btn btn--2" type="button">transform</button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.btn {
  position: relative;
  padding: 10px;
  font-weight: 500;
  font-size: 28px;
  line-height: 100%;
  color: #ffffff;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;

  &--1 {
    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #ffffff;
      transform: scaleX(0);
      transition: transform 0.4s ease;
      transform-origin: right;
    }

    &:hover {
      &:before {
        transform: scaleX(1);
        transform-origin: left;
      }
    }

    &:focus-visible {
      outline: none;
      &:before {
        transform: scaleX(1);
        transform-origin: left;
      }
    }
  }

  &--2 {
    &:before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: #ffffff;
      transform: scaleX(0);
      transition: transform 0.4s ease;
      transform-origin: center;
    }

    &:hover {
      &:before {
        transform: scaleX(1);
      }
    }

    &:focus-visible {
      outline: none;
      &:before {
        transform: scaleX(1);
      }
    }
  }
}
</style>
