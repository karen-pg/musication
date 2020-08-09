<template>
  <Header class="header">
    <template v-slot:header-logo>
      <router-link to="/top">
        <h1 id="header-logo">MUSICATION</h1>
      </router-link>
    </template>
    <template v-slot:header-menus>
      <router-link to="/appli/home" class="header-menu">始める</router-link>
      <router-link to="/signin" class="header-menu">ログイン</router-link>
      <router-link to="/signup" class="header-menu">新規登録</router-link>
    </template>
    <template v-slot:slide-header-menus>
      <router-link to="/appli/home" class="slide-header-menu">始める</router-link>
      <router-link to="/signin" class="slide-header-menu">ログイン</router-link>
      <router-link to="/signup" class="slide-header-menu">新規登録</router-link>
    </template>
  </Header>
</template>
<script>
import Header from "./Header.vue";
export default {
  components: {
    Header,
  },
};
</script>
<style lang="scss" scoped>
@import "../assets/scss_files/_header-opt.scss";
</style>
