<template>
  <div class="pickup">
    <p class="pickup__title">
      <slot name="title"></slot>
    </p>
    <div class="pickup__imgs">
      <div v-for="n in 4" :key="n" class="pickup__imgs--img">
        <img src="../../public/imgs/wondicon-ui-free-music_111271.png" alt="ピックアップジャンルの人気楽曲のサムネイル" />
      </div>
    </div>
    <div class="pickup__detail">
      <p>
        <slot name="detail"></slot>
      </p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
// 全体のモジュール
@import "../assets/scss_files/_import.scss";

// アプリのモジュール
@import "../assets/scss_files/Appli_scss/Appli-child_scss/_import.scss";

.pickup {
  text-align: center;
  background-color: $font-color;
  padding: 15px;
  max-width: 350px;
  margin: auto;
  &__title {
    font-size: 20px;
    margin-bottom: 15px;
  }
  &__imgs {
    width: 80%;
    margin: auto;
    margin-bottom: 15px;
    display: flex;
    flex-wrap: wrap;
    justify-items: center;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.5);
    &--img {
      width: 50%;
      > img {
        width: 100%;
      }
      @for $i from 1 through 4 {
        &:nth-child(#{$i}) {
          background-color: darken($yerrow, $i * 6%);
        }
      }
    }
  }
  &__detail {
    font-size: 15px;
    color: $hr-color;
  }
}
</style>