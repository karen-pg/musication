<template>
  <div class="attention">
    <div class="attention__img">
      <img src="@/assets/imgs/3438372_m.jpg" alt="ニュージャンルのイメージ画像" />
    </div>
    <div class="attention__detail">
      <slot name="attention-detail"></slot>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import "@/assets/scss_files/_import.scss";
.attention {
  border-bottom: 5px solid $sub-font-color;
  &__img {
    position: relative;
    width: 100%;
    height: 170px;
    @media screen and (min-width: 960px) {
      height: 220px;
    }
    &::before {
      position: absolute;
      content: "New Genre";
      display: block;
      top: 30px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 22px;
      color: $sub-font-color;
      opacity: 0.9;
      z-index: 5;
    }
    &::after {
      position: absolute;
      content: "MAKINA";
      display: block;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: 5px;
      letter-spacing: 0.1em;
      font-size: 47px;
      color: $font-color;
      border-bottom: 3px solid $font-color;
      line-height: 0.9em;
      z-index: 5;
    }
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  &__detail {
    margin: 10px;
    text-align: center;
  }
}
</style>