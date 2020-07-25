<template>
  <section>
    <div class="container">
      <h1>
        おすすめ楽曲
        <font-awesome-icon icon="chevron-right" class="icon" />
      </h1>
      <div class="musics-wrapper">
        <div v-for="recomMusic in recomMusics" :key="recomMusic.id" class="music">
          <div class="music__img">
            <img src="@/assets/imgs/wondicon-ui-free-music_111271.png" alt="楽曲のサムネイル" />
          </div>
          <div class="music__detail detail">
            <p class="music__detail--title detail-title">{{recomMusic.title|toAbridge(15)}}</p>
            <div class="music__detail__sub detail-sub">
              <p class="music__detail__sub--genre">
                <font-awesome-icon icon="music" class="icon" />
                {{recomMusic.genre}}
              </p>
              <div class="music__detail__sub--num">
                <p class="music__detail__sub--num--views">
                  <font-awesome-icon icon="play" class="icon" />
                  {{recomMusic.views|attachUnit}}
                </p>
                <p class="music__detail__sub--num-fav">
                  <font-awesome-icon icon="heart" class="icon" />
                  {{recomMusic.fav|attachUnit}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h1>
        ピックアップ
        <font-awesome-icon icon="chevron-right" class="icon" />
      </h1>
      <div class="musics-wrapper">
        <div v-for="pickupMusic in PickupMusics" :key="pickupMusic.id" class="music">
          <div class="music__img">
            <img src="@/assets/imgs/wondicon-ui-free-music_111271.png" alt="楽曲のサムネイル" />
          </div>
          <div class="music__detail detail">
            <p class="music__detail--title detail-title">{{pickupMusic.title |toAbridge(15)}}</p>
            <div class="music__detail__sub detail-sub detail-sub">
              <p class="music__detail__sub--genre">
                <font-awesome-icon icon="music" class="icon" />
                {{pickupMusic.genre}}
              </p>
              <div class="music__detail__sub--num">
                <p class="music__detail__sub--num--views">
                  <font-awesome-icon icon="play" class="icon" />
                  {{pickupMusic.views|attachUnit}}
                </p>
                <p class="music__detail__sub--num--fav">
                  <font-awesome-icon icon="heart" class="icon" />
                  {{pickupMusic.fav|attachUnit}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h1>
        人気ユーザー
        <font-awesome-icon icon="chevron-right" class="icon" />
      </h1>
      <div class="users-wrapper">
        <div v-for="populralityUser in populralityUsers" :key="populralityUser.id" class="user">
          <div class="user__img">
            <img src="@/assets/imgs/ifn0438.png" alt="ユーザーのサムネイル" />
          </div>
          <div class="user__detail detail">
            <p class="user__detail--name detail-title">{{populralityUser.name|toAbridge(15)}}</p>
            <div class="usermusic__detail__sub detail-sub">
              <p class="usermusic__detail__sub--followers">
                フォロワー・
                {{populralityUser.followers|attachUnit}}
              </p>
              <p class="user__detail__sub--posts">
                投稿数・
                {{populralityUser.posts|attachUnit}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import { appliMixin } from "@/appliMixin";
export default {
  data() {
    return {
      recomMusics: [
        {
          id: 1,
          title: "おすすめおすすめおすすめおすすめおすすめ1",
          user: "ユーザー",
          views: 100000,
          fav: 3500,
          genre: "ジャンル",
        },
        {
          id: 2,
          title: "おすすめ2",
          user: "ユーザー",
          views: 60000,
          fav: 2000,
          genre: "ジャンル",
        },
        {
          id: 3,
          title: "おすすめ3",
          user: "ユーザー",
          views: 50000,
          fav: 2400,
          genre: "ジャンル",
        },
        {
          id: 4,
          title: "おすすめ4",
          user: "ユーザー",
          views: 48000,
          fav: 1300,
          genre: "ジャンル",
        },
        {
          id: 5,
          title: "おすすめ5",
          user: "ユーザー",
          views: 23000,
          fav: 800,
          genre: "ジャンル",
        },
      ],
      PickupMusics: [
        {
          id: 1,
          title: "ピックアップ1",
          user: "ユーザー",
          views: 60000,
          fav: 1200,
          genre: "ジャンル",
        },
        {
          id: 2,
          title: "hogehogehogehogehogehoge",
          user: "ユーザー",
          views: 30000,
          fav: 3200,
          genre: "ジャンル",
        },
        {
          id: 3,
          title: "ピックアップ3",
          user: "ユーザー",
          views: 10000,
          fav: 830,
          genre: "ジャンル",
        },
        {
          id: 4,
          title: "ピックアップ4",
          user: "ユーザー",
          views: 50000,
          fav: 790,
          genre: "ジャンル",
        },
        {
          id: 5,
          title: "ピックアップ5",
          user: "ユーザー",
          views: 37000,
          fav: 1100,
          genre: "ジャンル",
        },
      ],
      populralityUsers: [
        {
          id: 1,
          name: "ユーザーユーザーユーザー1",
          followers: 112000,
          posts: 42,
        },
        {
          id: 2,
          name: "hogehogehogehogehogehogehoge2",
          followers: 10000,
          posts: 35,
        },
        {
          id: 3,
          name: "ユーザー3",
          followers: 20000,
          posts: 30,
        },
        {
          id: 4,
          name: "ユーザー4",
          followers: 9000,
          posts: 12,
        },
        {
          id: 5,
          name: "ユーザー5",
          followers: 13000,
          posts: 28,
        },
        {
          id: 6,
          name: "ユーザー6",
          followers: 23000,
          posts: 38,
        },
      ],
    };
  },
  mixins: [appliMixin],
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_files/Appli_scss/Appli-child_scss/Home-Music_scss/style.scss";
</style>