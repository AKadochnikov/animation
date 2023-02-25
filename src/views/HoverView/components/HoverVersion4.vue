<template>
  <button class="btn btn--1" type="button">transform</button>
  <button class="btn btn--2" type="button">transform</button>
  <button class="btn btn--3" type="button">
    <span>yes</span>
    <span>transform</span>
  </button>
  <button class="btn btn--4" type="button">
    <span>yes</span>
    <span>transform</span>
  </button>
</template>

<script setup></script>

<style scoped lang="scss">
.btn {
  position: relative;
  z-index: 1;
  width: 100%;
  min-height: 38px;
  padding: 10px;
  margin: 20px;
  overflow: hidden;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
  background-color: rgba(0, 0, 0, 0);
  border: none;
  cursor: pointer;

  &:before,
  &:after {
    content: "";
    position: absolute;
    z-index: -1;
  }

  &--1 {
    color: #8c8686;

    &:before {
      top: 0;
      left: 0;
      width: 250%;
      height: 100%;
      background: linear-gradient(-45deg, #9534f5 50%, #f2c94c 50%);
      transform: translateX(-30%);
      transition: transform 0.6s ease;
    }

    &:hover {
      color: #f7f3f3;
    }

    &:hover {
      &:before {
        transform: translateX(-55%);
      }
    }
  }

  &--2 {
    background-color: #18a1cc;

    &:before {
      top: 0;
      left: 0;
      width: 200%;
      height: 100%;
      background: linear-gradient(44deg, #18a1cc, #92d1ff, #18a1cc);
      transform: translateX(0%);
      transition: transform 0.3s ease;
    }

    &:hover,
    &:focus {
      &:before {
        transform: translateX(-50%);
      }
    }
  }

  &--3 {
    span {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      transition: transform 0.3s ease;
      pointer-events: all;

      &:nth-of-type(1) {
        color: #006c84;
        background-color: #ffccbb;
        transform: translateY(-100%);
      }

      &:nth-of-type(2) {
        color: #ffccbb;
        background-color: #006c84;
      }
    }

    &:hover,
    &:focus {
      span {
        &:nth-of-type(1) {
          transform: translateY(0);
        }

        &:nth-of-type(2) {
          transform: translateY(100%);
        }
      }
    }
  }

  &--4 {
    span {
      position: absolute;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      transition: transform 0.3s ease;
      pointer-events: all;

      &:nth-of-type(1) {
        z-index: 1;
        width: 56px;
        color: #006c84;
        background-color: #ffccbb;
        transform: translateX(-100%);
      }

      &:nth-of-type(2) {
        color: #ffccbb;
        background-color: #006c84;
      }
    }

    &:hover,
    &:focus {
      span {
        &:nth-of-type(1) {
          transform: translateX(0);
        }

        &:nth-of-type(2) {
          transform: translateX(28px);
        }
      }
    }
  }
}
</style>
