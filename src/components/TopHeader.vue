<template>
  <Header class="header">
    <template v-slot:header-logo>
      <router-link to="/">
        <h1 id="header-logo">MUSICATION</h1>
      </router-link>
    </template>
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
</template>
<script>
import Header from "./Header.vue";
export default {
  components: {
    Header
  }
};
</script>

