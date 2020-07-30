<template>
  <div class="musics-wrapper">
    <div v-for="val in array" :key="val.id" class="music">
      <div class="music__img">
        <img src="@/assets/imgs/wondicon-ui-free-music_111271.png" alt="楽曲のサムネイル" />
      </div>
      <div class="music__detail detail">
        <p class="music__detail--title">{{val.title|toAbridge(15)}}</p>
        <div class="music__detail__sub">
          <p class="music__detail__sub--genre">
            <font-awesome-icon icon="music" class="icon" />
            {{val.genre}}
          </p>
          <div class="music__detail__sub--num">
            <p class="music__detail__sub--num--views">
              <font-awesome-icon icon="play" class="icon" />
              {{val.views|attachUnit}}
            </p>
            <p class="music__detail__sub--num-fav">
              <font-awesome-icon icon="heart" class="icon" />
              {{val.fav|attachUnit}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { appliMixin } from "@/appliMixin.js";
export default {
  props: ["array"],
  mixins: [appliMixin],
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_files/Appli_scss/Appli-child_scss/_import.scss";
@import "@/assets/scss_files/_import.scss";
.container {
  overflow: hidden;
}
.musics-wrapper {
  position: relative;
  height: 400px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  overflow-x: scroll;
  @media screen and (min-width: 550px) {
    height: 300px;
  }
  @media screen and (min-width: 800px) {
    height: 370px;
    overflow-x: hidden;
  }
}
.music {
  display: flex;
  padding: 5px;
  width: 95%;
  @media screen and (min-width: 550px) {
    width: 48%;
  }
  @media screen and (min-width: 800px) {
    width: calc(100% / 3);
  }
  &__img {
    width: 80px;
    height: 80px;
    margin-right: 10px;
    background-color: $yerrow;
    > img {
      width: 100%;
    }
  }
  &__detail {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 1;
    &--title {
      word-break: break-all;
      font-size: 15px;
    }
    &__sub {
      color: gray;
      font-size: 12px;
      &--num {
        display: flex;
        &--views {
          margin-right: 8px;
        }
      }
    }
  }
}
</style>