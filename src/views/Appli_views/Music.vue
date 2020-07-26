<template>
  <section>
    <div class="container">
      <h1>
        人気
        <font-awesome-icon icon="chevron-right" class="icon" />
      </h1>
      <div class="musics-wrapper">
        <div v-for="popMusic in popMusics" :key="popMusic.id" class="music">
          <div class="music__img">
            <img src="@/assets/imgs/wondicon-ui-free-music_111271.png" alt="楽曲のサムネイル" />
          </div>
          <div class="music__detail detail">
            <p class="music__detail--title detail-title">{{popMusic.title|toAbridge(15)}}</p>
            <div class="music__detail__sub detail-sub">
              <p class="music__detail__sub--genre">
                <font-awesome-icon icon="music" class="icon" />
                {{popMusic.genre}}
              </p>
              <div class="music__detail__sub--num">
                <p class="music__detail__sub--num--views">
                  <font-awesome-icon icon="play" class="icon" />
                  {{popMusic.views|attachUnit}}
                </p>
                <p class="music__detail__sub--num-fav">
                  <font-awesome-icon icon="heart" class="icon" />
                  {{popMusic.fav|attachUnit}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h1>
        急上昇
        <font-awesome-icon icon="chevron-right" class="icon" />
      </h1>
      <div class="musics-wrapper">
        <div v-for="soaringMusic in soaringMusics" :key="soaringMusic.id" class="music">
          <div class="music__img">
            <img src="@/assets/imgs/wondicon-ui-free-music_111271.png" alt="楽曲のサムネイル" />
          </div>
          <div class="music__detail detail">
            <p class="music__detail--title detail-title">{{soaringMusic.title |toAbridge(15)}}</p>
            <div class="music__detail__sub detail-sub detail-sub">
              <p class="music__detail__sub--genre">
                <font-awesome-icon icon="music" class="icon" />
                {{soaringMusic.genre}}
              </p>
              <div class="music__detail__sub--num">
                <p class="music__detail__sub--num--views">
                  <font-awesome-icon icon="play" class="icon" />
                  {{soaringMusic.views|attachUnit}}
                </p>
                <p class="music__detail__sub--num--fav">
                  <font-awesome-icon icon="heart" class="icon" />
                  {{soaringMusic.fav|attachUnit}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <h1>
        新着
        <font-awesome-icon icon="chevron-right" class="icon" />
      </h1>
      <div class="musics-wrapper">
        <div v-for="newMusic in newMusics" :key="newMusic.id" class="music">
          <div class="music__img">
            <img src="@/assets/imgs/wondicon-ui-free-music_111271.png" alt="楽曲のサムネイル" />
          </div>
          <div class="music__detail detail">
            <p class="music__detail--title detail-title">{{newMusic.title|toAbridge(15)}}</p>
            <div class="music__detail__sub detail-sub">
              <p class="music__detail__sub--genre">
                <font-awesome-icon icon="music" class="icon" />
                {{newMusic.genre}}
              </p>
              <div class="music__detail__sub--num">
                <p class="music__detail__sub--num--views">
                  <font-awesome-icon icon="play" class="icon" />
                  {{newMusic.views|attachUnit}}
                </p>
                <p class="music__detail__sub--num-fav">
                  <font-awesome-icon icon="heart" class="icon" />
                  {{newMusic.fav|attachUnit}}
                </p>
              </div>
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
      popMusics: [
        {
          id: 1,
          title: "人気の楽曲1",
          user: "ユーザー",
          views: 100000,
          fav: 3500,
          genre: "ジャンル",
        },
        {
          id: 2,
          title: "人気の楽曲2",
          user: "ユーザー",
          views: 60000,
          fav: 2000,
          genre: "ジャンル",
        },
        {
          id: 3,
          title: "人気の楽曲3",
          user: "ユーザー",
          views: 50000,
          fav: 2400,
          genre: "ジャンル",
        },
        {
          id: 4,
          title: "人気の楽曲4",
          user: "ユーザー",
          views: 48000,
          fav: 1300,
          genre: "ジャンル",
        },
        {
          id: 5,
          title: "人気の楽曲5",
          user: "ユーザー",
          views: 23000,
          fav: 800,
          genre: "ジャンル",
        },
        {
          id: 6,
          title: "人気の楽曲6",
          user: "ユーザー",
          views: 100000,
          fav: 3500,
          genre: "ジャンル",
        },
        {
          id: 7,
          title: "人気の楽曲7",
          user: "ユーザー",
          views: 60000,
          fav: 2000,
          genre: "ジャンル",
        },
        {
          id: 8,
          title: "人気の楽曲8",
          user: "ユーザー",
          views: 50000,
          fav: 2400,
          genre: "ジャンル",
        },
        {
          id: 9,
          title: "人気の楽曲9",
          user: "ユーザー",
          views: 48000,
          fav: 1300,
          genre: "ジャンル",
        },
        {
          id: 10,
          title: "人気の楽曲10",
          user: "ユーザー",
          views: 23000,
          fav: 800,
          genre: "ジャンル",
        },
      ],
      soaringMusics: [
        {
          id: 1,
          title: "急上昇の楽曲1",
          user: "ユーザー",
          views: 60000,
          fav: 1200,
          genre: "ジャンル",
        },
        {
          id: 2,
          title: "急上昇の楽曲2",
          user: "ユーザー",
          views: 30000,
          fav: 3200,
          genre: "ジャンル",
        },
        {
          id: 3,
          title: "急上昇の楽曲3",
          user: "ユーザー",
          views: 10000,
          fav: 830,
          genre: "ジャンル",
        },
        {
          id: 4,
          title: "急上昇の楽曲4",
          user: "ユーザー",
          views: 50000,
          fav: 790,
          genre: "ジャンル",
        },
        {
          id: 5,
          title: "急上昇の楽曲5",
          user: "ユーザー",
          views: 37000,
          fav: 1100,
          genre: "ジャンル",
        },
        {
          id: 6,
          title: "急上昇の楽曲6",
          user: "ユーザー",
          views: 60000,
          fav: 1200,
          genre: "ジャンル",
        },
        {
          id: 7,
          title: "急上昇の楽曲7",
          user: "ユーザー",
          views: 30000,
          fav: 3200,
          genre: "ジャンル",
        },
        {
          id: 8,
          title: "急上昇の楽曲8",
          user: "ユーザー",
          views: 10000,
          fav: 830,
          genre: "ジャンル",
        },
        {
          id: 9,
          title: "急上昇の楽曲9",
          user: "ユーザー",
          views: 50000,
          fav: 790,
          genre: "ジャンル",
        },
        {
          id: 10,
          title: "急上昇の楽曲10",
          user: "ユーザー",
          views: 37000,
          fav: 1100,
          genre: "ジャンル",
        },
      ],
      newMusics: [
        {
          id: 1,
          title: "新着の楽曲1",
          user: "ユーザー",
          views: 7000,
          fav: 130,
          genre: "ジャンル",
        },
        {
          id: 2,
          title: "新着の楽曲2",
          user: "ユーザー",
          views: 7000,
          fav: 200,
          genre: "ジャンル",
        },
        {
          id: 3,
          title: "新着の楽曲3",
          user: "ユーザー",
          views: 4000,
          fav: 100,
          genre: "ジャンル",
        },
        {
          id: 4,
          title: "新着の楽曲4",
          user: "ユーザー",
          views: 8000,
          fav: 200,
          genre: "ジャンル",
        },
        {
          id: 5,
          title: "新着の楽曲5",
          user: "ユーザー",
          views: 9000,
          fav: 130,
          genre: "ジャンル",
        },
        {
          id: 6,
          title: "新着の楽曲6",
          user: "ユーザー",
          views: 7000,
          fav: 130,
          genre: "ジャンル",
        },
        {
          id: 7,
          title: "新着の楽曲7",
          user: "ユーザー",
          views: 7000,
          fav: 200,
          genre: "ジャンル",
        },
        {
          id: 8,
          title: "新着の楽曲8",
          user: "ユーザー",
          views: 4000,
          fav: 100,
          genre: "ジャンル",
        },
        {
          id: 9,
          title: "新着の楽曲9",
          user: "ユーザー",
          views: 8000,
          fav: 200,
          genre: "ジャンル",
        },
        {
          id: 10,
          title: "新着の楽曲10",
          user: "ユーザー",
          views: 9000,
          fav: 130,
          genre: "ジャンル",
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