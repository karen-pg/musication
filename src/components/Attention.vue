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
  text-align: center;
  &__img {
    position: relative;
    width: 100%;
    height: 170px;
    background-color: black;
    @media screen and (min-width: 415px) {
      height: 250px;
    }
    &::before {
      position: absolute;
      content: "New Genre";
      display: block;
      top: 30px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 22px;
      font-family: Georgia, "Times New Roman", Times, serif;
      color: $sub-font-color;
      opacity: 0.9;
      z-index: 5;
      @media screen and (min-width: 415px) {
        font-size: 25px;
        top: 50px;
      }
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
      font-family: Georgia, "Times New Roman", Times, serif;
      color: $font-color;
      border-bottom: 2px solid $font-color;
      line-height: 1em;
      z-index: 5;
      @media screen and (min-width: 415px) {
        font-size: 60px;
      }
    }
    > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      max-width: 700px;
    }
  }
  &__detail {
    margin: 10px;
    text-align: center;
  }
}
</style>