<template>
  <button class="button button--1">
    <span>Lorem ipsum dolor sit amet, consectetur.</span>
    <span>Lorem ipsum dolor sit amet, consectetur.</span>
  </button>

  <button class="button button--2">Lorem ipsum dolor sit amet, consectetur.</button>

  <button class="button button--3">
    <span>Lorem ipsum dolor sit amet, consectetur.</span>
  </button>

  <button class="button button--4">Lorem ipsum dolor sit amet, consectetur.</button>

  <button class="button button--5">Lorem ipsum dolor sit amet, consectetur.</button>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.button {
  font-family: inherit;
  font-size: inherit;
  outline: none;
  border: none;
  background-color: transparent;
  padding: 0;
  margin: 15px;
  cursor: pointer;
  position: relative;
  display: inline-block;

  &--1 {
    color: #ffffff;
    background-color: #007aff;
    padding: 20px 30px;
    overflow: hidden;

    span {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform 300ms ease;
      pointer-events: all;

      &:nth-of-type(1) {
        transform: translateX(0);
      }

      &:nth-of-type(2) {
        background-color: #d5e7fb;
        color: #007aff;
        transform: translateX(-100%);
      }
    }

    &:hover,
    &:focus {
      span {
        &:nth-of-type(1) {
          transform: translateX(100%);
        }
        &:nth-of-type(2) {
          transform: translateX(0);
        }
      }
    }
  }

  &--2 {
    border: 3px solid #007aff;
    color: #007aff;
    padding: 20px 30px;

    &:before {
      content: "";
      position: absolute;
      height: 100%;
      width: 90%;
      display: block;
      top: 0;
      left: 5%;
      background-color: #d5e7fb;
      z-index: -1;
      transform: scaleX(0);
      transition: transform 300ms ease;
    }

    &:hover {
      &:before {
        transform: scaleX(100%);
      }
    }

    &:focus {
      &:before {
        transform: scaleX(110%);
      }
    }
  }

  &--3 {
    color: #000000;
    font-weight: bold;
    padding: 20px 30px;
    background-color: #f2994a;
    overflow: hidden;

    &:before {
      content: "";
      display: block;
      width: 100%;
      height: 90%;
      background-color: #ffffff;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 0;
      transition: transform 500ms ease;
    }

    span {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      transition: color 300ms ease;
    }

    &:hover,
    &:focus {
      span {
        color: #ffffff;
      }

      &:before {
        transform: translateY(-100%);
      }
    }
  }

  &--4 {
    padding: 20px 30px;
    font-weight: 700;
    color: #000000;
    transition: color 300ms ease;

    &:before,
    &:after {
      content: "";
      display: block;
      width: 100%;
      height: 50%;
      z-index: -1;
      position: absolute;
      transition: transform 300ms ease;
    }

    &:before {
      top: 0;
      left: 0;
      background-color: #9534f5;
      transform-origin: left bottom;
      transform: scale(0.6, 0.1);
    }

    &:after {
      right: 0;
      bottom: 0;
      background-color: #fd079b;
      transform-origin: right top;
      transform: scale(0.6, 0.1);
    }

    &:hover,
    &:focus {
      color: #ffffff;

      &:before,
      &:after {
        transform: scale(1);
      }
    }
  }

  &--5 {
    background-color: #f29e0d;
    border: 2px solid #f29e0d;
    padding: 25px 60px 25px 120px;
    border-radius: 10px;
    color: #ffffff;
    transition: background-color 400ms ease, border-color 400ms ease;

    &:before {
      content: "";
      position: absolute;
      height: 100%;
      left: 0;
      top: 0;
      line-height: 3;
      font-size: 140%;
      width: 60px;
      color: #fcad26;
      z-index: 2;
      border-radius: 10px 0 0 10px;
      background: #fff
        url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 14 14' fill='none'%3E%3Cpath d='M0.333328 13.6667V7.83334H6.16666L3.48583 10.5167C4.41079 11.4625 5.67705 11.997 6.99999 12C9.1162 11.9969 11.0013 10.6618 11.7067 8.66667H11.7217C11.8171 8.39552 11.8893 8.11673 11.9375 7.83334H13.6142C13.1942 11.1666 10.3596 13.6666 6.99999 13.6667H6.99166C5.22396 13.672 3.52763 12.9698 2.28083 11.7167L0.333328 13.6667ZM2.06166 6.16667H0.384995C0.804786 2.83467 3.63749 0.335121 6.99583 0.333301H6.99999C8.76802 0.327644 10.4648 1.02987 11.7117 2.28334L13.6667 0.333301V6.16667H7.83333L10.5183 3.48334C9.5924 2.53637 8.32441 2.00179 6.99999 2C4.88379 2.00313 2.99873 3.33815 2.29333 5.33334H2.27833C2.18213 5.60426 2.1099 5.88311 2.06249 6.16667H2.06166Z' fill='%23f29e0d'/%3E%3C/svg%3E")
        no-repeat center;
      background-size: 26px;
    }

    &:after {
      content: "";
      display: block;
      width: 40px;
      height: 40px;
      transform: translateY(-50%) rotate(45deg) scale(1);
      position: absolute;
      left: 20px;
      top: 50%;
      z-index: 1;
      background-color: #ffffff;
      transition: transform 300ms ease;
    }

    &:hover,
    &:focus {
      background-color: #f58500;
      border-color: #f58500;
      &:after {
        transform: translateY(-50%) rotate(45deg) scale(1.3);
      }
    }
  }
}
</style>
