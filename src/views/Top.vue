<template>
  <div id="body">
    <TopHeader class="header"></TopHeader>
    <div class="sticky-range">
      <section id="hero">
        <div id="hero-container" :class="{ 'fade-animation': fadeAnimation }">
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
        </div>
      </section>
      <section id="intro">
        <h2>
          音楽を
          <br />全力で楽しむ
          <br />プラットフォーム
        </h2>
        <div class="explanation" id="intro-explanation">
          <p>
            MUSICATIONは、
            創作した音楽の投稿・閲覧ができるプラットフォームコンテンツサービスです。
          </p>
          <p>
            自分の音楽を発信したい、新しい音楽を見つけたい、仲間と繋がりたい ―
            <br />音楽を様々な形で、全力で楽しみたい人のために。
          </p>
        </div>
        <router-link to="/appli/home" class="link-btn start-btn">始める</router-link>
      </section>
      <section id="descriptions">
        <div id="description1" class="description">
          <div class="description-container">
            <div class="description-img">
              <img
                src="/imgs/person-music-group-guitar-crowd-concert-musician-barcelona-performance-art-festival-saxophone-performance-singing-guitarist-drummer-entertainment-street-musicians-performing-arts-social-gr.jpg"
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
            </div>
          </div>
        </div>
        <div id="description2" class="description">
          <div class="description-container">
            <div class="description-img">
              <img src="/imgs/utGYwaL0fm.jpg" alt="音楽を聴く女性" />
            </div>
            <div class="description-wrapper explanation">
              <h3>
                新しい
                <br />音楽と
                <br />出会う
              </h3>
              <p class="strong">たくさんのジャンルから音楽を探すことができます。</p>
              <p>ユーザーが作成した個性あふれる楽曲から、最高の音楽と出会いましょう。</p>
            </div>
          </div>
        </div>
        <div id="description3" class="description">
          <div class="description-container">
            <div class="description-img">
              <img
                src="/imgs/person-music-group-guitar-crowd-concert-musician-barcelona-performance-art-festival-saxophone-performance-singing-guitarist-drummer-entertainment-street-musicians-performing-arts-social-gr.jpg"
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
    </div>
    <section id="close">
      <div class="close-container">
        <div class="close-text">
          <p>
            音楽を探求する
            <br />旅に出よう
          </p>
        </div>
        <div class="close-btns">
          <router-link to="/appli/home" class="link-btn start-btn">始める</router-link>
          <router-link to="/signin" class="link-btn login-btn">ログイン</router-link>
          <router-link to="/signup" class="link-btn sign-btn">新規登録</router-link>
        </div>
      </div>
    </section>
    <Footer class="footer"></Footer>
  </div>
</template>
<script>
import TopHeader from "@/components/TopHeader.vue";
import Footer from "@/components/Footer.vue";
export default {
  components: {
    TopHeader,
    Footer,
  },
  data() {
    return {
      fadeAnimation: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.fadeOut);
  },
  methods: {
    fadeOut() {
      const intro = document.querySelector("#intro");
      const introH = intro.getBoundingClientRect().top;
      introH < window.innerHeight / 2.5
        ? (this.fadeAnimation = true)
        : (this.fadeAnimation = false);
    },
  },
};
</script>
<style
  lang="scss"
  src="@/assets/scss_files/Top.vue_scss/style.scss"
  scoped
></style>
