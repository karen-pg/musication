<template>
  <div>
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
            新しい音楽を
            <br class="br" />探究しよう
          </h1>
          <p>
            音楽の輪を広げる
            <br class="br" />プラットフォーム
          </p>
        </div>
        <hr />
        <router-link to="/home" class="start-btn link-btn">始める</router-link>
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