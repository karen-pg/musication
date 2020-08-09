<template>
  <div class="genre-wrapper">
    <div v-for="val in array" :key="val.name" class="genre">
      <div class="genre__img">
        <img src="../../public/imgs/370354_s.jpg" alt="ジャンルごとの人気楽曲のサムネイル" />
      </div>
      <p class="genre__name">{{val.name}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["array"],
};
</script>
<style lang="scss" scoped>
@import "../assets/scss_files/Appli_scss/Appli-child_scss/_import.scss";
@import "../assets/scss_files/_import.scss";
.genre-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0 20px;
}
.genre {
  position: relative;
  width: 50%;
  padding: 5px;
  @media screen and (min-width: 550px) {
    width: calc(100% / 3);
  }
  &__img {
    width: 100%;
    height: 90px;
    border-radius: 10px;
    overflow: hidden;
    background-color: $base-color;
    > img {
      width: 100%;
      height: 100%;
      vertical-align: bottom;
      opacity: 0.7;
    }
  }
  &__name {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 85%;
    text-align: center;
    font-size: 18px;
    color: $font-color;
    z-index: 5;
  }
}
</style>