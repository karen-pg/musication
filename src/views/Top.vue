<template>
  <div id="body">
    <Header id="Header">
      <template v-slot:header-menus>
        <router-link to="/home" class="header-menu">始める</router-link>
        <router-link to="/login" class="header-menu">ログイン</router-link>
        <router-link to="/sign" class="header-menu">新規登録</router-link>
      </template>
      <template v-slot:slide-header-menus>
        <router-link to="/home" class="slide-header-menu">始める</router-link>
        <router-link to="/login" class="slide-header-menu">ログイン</router-link>
        <router-link to="/sign" class="slide-header-menu">新規登録</router-link>
      </template>
    </Header>
    <section id="hero">
      <div id="hero-container">
        <div id="hero-container-title">
          <h1>
            音楽を
            <br />探究しよう
          </h1>
          <p>
            ようこそ、
            <br />新しい音楽の世界へ。
          </p>
        </div>
        <hr />
        <router-link to="/home" class="start-btn link-btn">始める</router-link>
      </div>
    </section>
    <section id="intro">
      <h2>
        音楽の輪を広げる
        <br />プラットフォーム
      </h2>
      <div class="explanation" id="intro-explanation">
        <p class="strong">
          MUSICATIONは、
          創作した音楽の投稿・閲覧ができるプラットフォームコンテンツサービスです。
        </p>
      </div>
    </section>
    <section id="descriptions">
      <div id="description1" class="description">
        <div class="description-img">
          <img
            src="@/assets/imgs/music-guitar-acoustic-guitar-musician-musical-instrument-bassist-singing-sound-guitarist-drums-bass-guitar-singer-songwriter-string-instrument-plucked-string-instruments-slide-guitar-10690.jpg"
            alt="ギター"
          />
        </div>
        <div class="description-wrapper">
          <h3></h3>
          <p></p>
        </div>
      </div>
      <div id="description2" class="description">
        <div class="description-img">
          <img src="@/assets/imgs/utGYwaL0fm.jpg" alt="音楽を聴く女性" />
        </div>
        <div class="description-wrapper">
          <h3></h3>
          <p></p>
        </div>
      </div>
      <div id="description3" class="description">
        <div class="description-img">
          <img
            src="@/assets/imgs/person-music-group-guitar-crowd-concert-musician-barcelona-performance-art-festival-saxophone-performance-singing-guitarist-drummer-entertainment-street-musicians-performing-arts-social-gr.jpg"
            alt="演奏する二人の男性"
          />
        </div>
        <div class="description-wrapper">
          <h3></h3>
          <p></p>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  components: {
    Header
  }
};
</script>
<style lang="scss" src="@/assets/scss_files/Top.vue_scss/style.scss" scoped></style>