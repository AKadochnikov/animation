<template>
  <article class="shoes__card shoes-card" data-brand="Converse">
    <div class="shoes-card__img shoes-card__img--gold">
      <img :src="shoesCard1" width="322" height="274" alt="Кеды">
    </div>
    <div class="shoes-card__content">
      <button class="shoes-card__buy-btn" type="button">Купить</button>
    </div>
  </article>
  <article class="shoes__card shoes-card" data-brand="Puma">
    <div class="shoes-card__img shoes-card__img--green">
      <img :src="shoesCard2" width="322" height="274" alt="Кеды">
    </div>
    <div class="shoes-card__content">
      <button class="shoes-card__buy-btn" type="button">Купить</button>
    </div>
  </article>
  <article class="shoes__card shoes-card" data-brand="DC">
    <div class="shoes-card__img shoes-card__img--red">
      <img
        :src="shoesCard3"
        width="322"
        height="274"
        alt="Кеды"
      />
    </div>
    <div class="shoes-card__content">
      <button class="shoes-card__buy-btn" type="button">Купить</button>
    </div>
  </article>
</template>

<script setup>
import shoesCard1 from "@/statics/img/shoes-card-1.png";
import shoesCard2 from "@/statics/img/shoes-card-2.png";
import shoesCard3 from "@/statics/img/shoes-card-3.png";
</script>

<style scoped lang="scss">
.shoes-card {
  $parent: &;
  position: relative;
  width: 322px;
  flex-shrink: 0;
  padding: 24px 0;
  overflow: hidden;
  font-family: "Montserrat", "Arial", sans-serif;
  background-color: #242524;
  border-radius: 10px;
  justify-self: center;

  &:before {
    content: attr(data-brand);
    position: absolute;
    bottom: 22%;
    left: 50%;
    z-index: 1;
    font-weight: 700;
    font-size: 64px;
    line-height: 100%;
    text-align: center;
    color: rgba(36, 37, 36, 0.5);
    white-space: nowrap;
    transform: translate(-50%, 0);
    pointer-events: none;
    opacity: 0;
    visibility: hidden;
    transition: opacity 300ms ease;
  }

  &__img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 274px;
    margin-bottom: 20px;
    transition: transform 300ms ease;

    img {
      z-index: 1;
    }

    &:before {
      content: "";
      position: absolute;
      width: 192px;
      height: 192px;
      background-color: #68bf2c;
      border-radius: 50%;
      transition: transform 300ms ease;
    }

    &--gold {
      &:before {
        background-color: #ffd215;
      }
    }

    &--red {
      &:before {
        background-color: #fd0740;
      }
    }

    &--green {
      &:before {
        background-color: #68bf2c;
      }
    }
  }

  &__content {
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
  }

  &__buy-btn {
    padding: 8px 24px;
    font-weight: 500;
    font-size: 24px;
    line-height: 150%;
    font-family: inherit;
    color: #ffffff;
    background-color: #0066ff;
    border: none;
    border-radius: 100px;
    cursor: pointer;
    transition-property: background-color, box-shadow;
    transition-duration: 200ms, 300ms;
    transition-timing-function: ease;
    box-shadow: 0 0 0 0 #0066ff;

    &:hover,
    &:focus {
      box-shadow: 0 0 20px 0 #0066ff;
    }
  }

  &:hover,
  &:focus-within {
    &:before {
      visibility: visible;
      opacity: 1;
    }

    #{$parent}__buy-btn {
      background-color: #012e72;
    }

    #{$parent}__img {
      transform: rotate(-25deg);
      &:before {
        transform: scale(3);
        transition: transform 600ms ease;
      }
    }
  }
}
</style>
