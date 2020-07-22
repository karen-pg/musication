<template>
  <div id="body">
    <TopHeader class="header"></TopHeader>
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
        <div class="description-container">
          <div class="description-img">
            <img
              src="@/assets/imgs/music-guitar-acoustic-guitar-musician-musical-instrument-bassist-singing-sound-guitarist-drums-bass-guitar-singer-songwriter-string-instrument-plucked-string-instruments-slide-guitar-10690.jpg"
              alt="ギター"
            />
          </div>
          <div class="description-wrapper explanation">
            <h3>
              あなたの
              <br />音楽を
              <br />世界へ
            </h3>
            <p class="strong">オリジナル楽曲を作成して世界に発信しましょう。</p>
            <p>あなたのアイディアで新しい音楽を生み出しましょう。</p>
          </div>
        </div>
      </div>
      <div id="description2" class="description">
        <div class="description-container">
          <div class="description-img">
            <img src="@/assets/imgs/utGYwaL0fm.jpg" alt="音楽を聴く女性" />
          </div>
          <div class="description-wrapper explanation">
            <h3>
              ジャンルは
              <br />無限大
            </h3>
            <p class="strong">ユーザーのアイディアが、新しいジャンルを生み出します。</p>
            <p>ユーザーが作成した個性あふれる楽曲から、最高の音楽と出会いましょう。</p>
          </div>
        </div>
      </div>
      <div id="description3" class="description">
        <div class="description-container">
          <div class="description-img">
            <img
              src="@/assets/imgs/person-music-group-guitar-crowd-concert-musician-barcelona-performance-art-festival-saxophone-performance-singing-guitarist-drummer-entertainment-street-musicians-performing-arts-social-gr.jpg"
              alt="演奏する二人の男性"
            />
          </div>
          <div class="description-wrapper explanation">
            <h3>
              新しい
              <br />仲間と
              <br />繋がる
            </h3>
            <p class="strong">掲示板で仲間を探すことができます。</p>
            <p>同じ音楽が好きな仲間はもちろん、一緒に創作活動をする仲間も探すことができます。</p>
          </div>
        </div>
      </div>
    </section>
    <section id="close">
      <div class="close-container">
        <div class="close-text">
          <p>
            さあ
            <br />音楽を探求する
            <br />旅に出よう
          </p>
        </div>
        <div class="close-btns">
          <router-link to="/home" class="link-btn start-btn">始める</router-link>
          <router-link to="/login" class="link-btn login-btn">ログイン</router-link>
          <router-link to="/sign" class="link-btn sign-btn">新規登録</router-link>
        </div>
      </div>
    </section>
    <Footer></Footer>
  </div>
</template>
<script>
import TopHeader from "@/components/TopHeader.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    TopHeader,
    Footer
  }
};
</script>
<style
  lang="scss"
  src="@/assets/scss_files/Top.vue_scss/style.scss"
  scoped
></style>
