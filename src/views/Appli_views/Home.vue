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
          <div class="music__detail">
            <p class="music__detail--title detail-title">{{recomMusic.title}}</p>
            <div class="music__detail__sub detail-sub">
              <p class="music__detail__sub--views">
                <font-awesome-icon icon="play" class="icon" />
                {{recomMusic.views}}
              </p>
              <p class="music__detail__sub--fav">
                <font-awesome-icon icon="heart" class="icon" />
                {{recomMusic.fav}}
              </p>
              <p class="music__detail__sub--genre">
                <font-awesome-icon icon="music" class="icon" />
                {{recomMusic.genre}}
              </p>
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
          <div class="music__detail">
            <p class="music__detail--title detail-title">{{pickupMusic.title}}</p>
            <div class="music__detail__sub detail-sub detail-sub">
              <p class="music__detail__sub--views">
                <font-awesome-icon icon="play" class="icon" />
                {{pickupMusic.views}}
              </p>
              <p class="music__detail__sub--fav">
                <font-awesome-icon icon="heart" class="icon" />
                {{pickupMusic.fav}}
              </p>
              <p class="music__detail__sub--genre">
                <font-awesome-icon icon="music" class="icon" />
                {{pickupMusic.genre}}
              </p>
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
          <div class="user__detail">
            <p class="user__detail--name detail-title">{{populralityUser.name}}</p>
            <div class="usermusic__detail__sub detail-sub">
              <p class="usermusic__detail__sub--followers">
                フォロワー・
                {{populralityUser.followers}}
              </p>
              <p class="user__detail__sub--posts">
                投稿数・
                {{populralityUser.posts}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      recomMusics: [
        {
          id: 1,
          title: "おすすめ1",
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
          title: "ピックアップ",
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
          name: "ユーザー1",
          followers: 12000,
          posts: 32,
        },
        {
          id: 2,
          name: "ユーザー2",
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
          followers: 10000,
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
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_files/Appli_scss/Home.vue_scss/style.scss";
</style>