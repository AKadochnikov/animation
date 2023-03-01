<template>
  <div class="link-wrapper">
    <a href="#" class="link link--1">Lorem ipsum dolor sit amet, consectetur.</a>
  </div>

  <div class="link-wrapper">
    <a href="#" class="link link--2">Lorem ipsum dolor sit amet, consectetur.</a>
  </div>

  <div class="link-wrapper">
    <a href="#" class="link link--4">
      Lorem ipsum dolor sit amet, consectetur.
    </a>
  </div>

  <div class="link-wrapper">
    <a href="#" class="link link--5">Lorem ipsum dolor sit amet, consectetur.</a>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.warning {
  color: coral;
}

.link-wrapper {
  display: flex;
  align-items: center;
}

.link {
  font-family: inherit;
  font-size: inherit;
  outline: none;
  text-decoration: none;
  display: inline-block;
  position: relative;
  margin: 15px 25px;
  text-transform: uppercase;

  &--1 {
    color: #435a6b;

    &:before,
    &:after {
      display: inline-block;
      opacity: 0;
      transition-property: opacity, transform;
      transition-duration: 100ms, 600ms;
      transition-timing-function: ease;
    }

    &:before {
      content: "[";
    }

    &:after {
      content: "]";
    }

    &:hover,
    &:focus {
      &:before,
      &:after {
        opacity: 1;
      }

      &:before {
        transform: translateX(-8px);
      }

      &:after {
        transform: translateX(8px);
      }
    }
  }

  &--2 {
    color: #f19f0f;
    padding: 8px 0;

    &:before {
      content: "";
      display: block;
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #d88f0d;
      transform: translateY(8px);
      opacity: 0;
      transition-property: transform, opacity;
      transition-duration: 600ms, 300ms;
      transition-timing-function: ease;
    }

    &:hover,
    &:focus {
      &:before {
        opacity: 1;
        transform: translateY(0);
      }
    }
  }

  &--4 {
    color: #435a6b;
    padding: 8px 20px;
    line-height: 1.4;

    &:before,
    &:after {
      content: "";
      height: 100%;
      position: absolute;
      display: inline-block;
      width: 2px;
      background-color: #435a6b;
      opacity: 0.5;
      transition-property: transform, opacity, left, right;
      transition-duration: 300ms;
      transition-timing-function: ease;
    }

    &:before {
      left: 0;
      top: 0;
    }

    &:after {
      right: 0;
      bottom: 0;
    }

    &:hover,
    &:focus {
      &:before {
        opacity: 1;
        left: 50%;
        transform: translate(50%, 50%) rotate(90deg);
      }

      &:after {
        opacity: 1;
        right: 50%;
        transform: translate(-50%, -50%) rotate(90deg);
      }
    }
  }

  &--5 {
    padding: 10px 20px;
    color: #0e83cd;

    &:before,
    &:after {
      content: "";
      position: absolute;
      top: -3px;
      left: -3px;
      width: 100%;
      height: 100%;
      border: 3px solid #07446a;
      transition-property: opacity, transform;
      transition-duration: 300ms;
      transition-timing-function: ease;
    }

    &:after {
      opacity: 0;
      border-color: #0e83cd;
      transform: translate(6px, -7px);
    }

    &:hover,
    &:focus {
      &:before {
        opacity: 0;
        transform: translate(-5px, 5px);
      }

      &:after {
        opacity: 1;
        transform: translate(0, 0);
      }
    }
  }
}
</style>
