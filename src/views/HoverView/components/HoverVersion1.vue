<template>
  <a href="#" class="btn btn--1">
    <span class="visually-hidden">facebook</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="36"
      viewBox="0 0 9 18"
    >
      <path
        d="M6.5 3H9V0H5.6C2.8 0 2 1.7 2 4.2V6H0V9H2V18H5V9H8.3L8.9 6H5V4.5C5 3.7 5.3 3 6.5 3Z"
      />
    </svg>
  </a>
  <a href="#" class="btn btn--2">
    <span class="visually-hidden">instagram</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 16 16"
    >
      <path
        d="M14.7 1.3C13.8 0.4 12.7 0 11.3 0H4.7C1.9 0 0 1.9 0 4.7V11.3C0 12.7 0.4 13.9 1.4 14.7C2.3 15.6 3.4 16 4.7 16H11.3C12.7 16 13.9 15.6 14.7 14.7C15.5 13.8 16 12.7 16 11.3V4.7C16 3.3 15.6 2.1 14.7 1.3ZM8 12.1C5.8 12.1 3.9 10.3 3.9 8C3.9 5.7 5.8 3.9 8 3.9C10.2 3.9 12.1 5.7 12.1 8C12.1 10.3 10.2 12.1 8 12.1ZM12.6 4.7C11.9 4.7 11.3 4.2 11.3 3.4C11.3 2.6 11.8 2.1 12.6 2.1C13.3 2.1 13.9 2.7 13.9 3.4C13.9 4.1 13.3 4.7 12.6 4.7Z"
      />
    </svg>
  </a>
  <a href="#" class="btn btn--3">
    <span class="visually-hidden">twitter</span>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="28"
      viewBox="0 0 15 14"
    >
      <path
        d="M9.7 0.099998C11.2 -0.400002 12.3 0.399998 12.9 1.2C13.4 0.999998 14 0.799998 14.6 0.599998C14.6 1.4 14.1 2 13.8 2.2C14.5 2.4 15 1.8 15 1.8C14.9 2.7 14.1 3.5 13.6 3.7C13.4 10 10.8 14.1 4.7 14C4.2 14 4.8 14 4.3 14C4 14 0.6 13.6 0 12.2C2 12.4 3.4 11.8 4.1 11.1C3.3 10.8 1.7 10.7 1.5 8.3C1.8 8.5 2 8.6 2.6 8.5C1.5 7.7 0.3 7 0.4 5C0.7 5.3 1.3 5.5 1.6 5.4C1 5.2 -0.2 2.3 0.8 0.799998C2.4 2.5 4.1 4.2 7.1 4.3C7.3 2.2 8.1 0.799998 9.7 0.099998Z"
      />
    </svg>
  </a>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.btn {
  font-family: inherit;
  color: inherit;
  text-decoration: none;

  width: 80px;
  height: 80px;
  padding: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: none;
  border-radius: 50%;

  &--1 {
    background-color: rgba(255, 255, 255, 0.3);
    outline: 5px solid #444444;
    outline-offset: -1px;
    transition-property: outline-color, background-color;
    transition-duration: 300ms;
    transition-timing-function: ease;

    svg {
      fill: #444444;
      transition-property: fill;
      transition-duration: 300ms;
      transition-timing-function: ease;
    }

    &:hover {
      background-color: #ffc700;
    }

    &:focus {
      outline-color: #af4fff;

      svg {
        fill: #ffffff;
      }
    }
  }

  &--2 {
    background-color: #fff;
    outline: 4px solid #ffffff;
    outline-offset: -4px;
    transition-property: outline-color, outline-offset;
    transition-duration: 300ms;
    transition-timing-function: ease;

    &:hover,
    &:focus {
      outline-color: #444444;
      outline-offset: -10px;
    }
  }

  &--3 {
    background-color: transparent;
    fill: #ffffff;
    outline: 4px solid #ffffff;
    outline-offset: 0;
    transition-property: outline-offset, box-shadow;
    transition-duration: 300ms;
    transition-timing-function: ease;

    &:hover,
    &:focus {
      outline-offset: -10px;
      box-shadow: 0 0 0 10px rgba(255, 255, 255, 0.3);
    }
  }
}
</style>
