<template>
  <Header>
    <template v-slot:header-logo>
      <router-link to="/Appli/home">
        <h1 id="header-logo">MUSICATION</h1>
      </router-link>
    </template>
    <template v-slot:header-menus>
      <router-link to="/login" class="header-menu">ログイン</router-link>
      <router-link to="/sign" class="header-menu">新規登録</router-link>
      <router-link :to="{name: 'Search'}">
        <font-awesome-icon icon="search" class="header-menu mobile-header-menu" />
      </router-link>
    </template>
    <template v-slot:slide-header-menus>
      <router-link :to="{name:'Home'}" class="slide-header-menu">トップ</router-link>
      <router-link to="/login" class="slide-header-menu">ログイン</router-link>
      <router-link to="/sign" class="slide-header-menu">新規登録</router-link>
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
@import "@/assets/scss_files/_header-opt.scss";
</style>
