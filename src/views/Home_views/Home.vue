<template>
  <div>
    <Header>
      <template v-slot:header-logo>
        <router-link to="/home">
          <h1 id="header-logo">MUSICATION</h1>
        </router-link>
      </template>
      <template v-slot:header-menus>
        <router-link to="/login" class="header-menu">ログイン</router-link>
        <router-link to="/sign" class="header-menu">新規登録</router-link>
        <router-link to="/mobilesearch" style="margin-right: 20px;">
          <font-awesome-icon icon="search" class="header-menu mobile-header-menu" />
        </router-link>
        <router-link to="/board">
          <font-awesome-icon icon="newspaper" class="header-menu mobile-header-menu" />
        </router-link>
      </template>
      <template v-slot:slide-header-menus>
        <router-link to="/login" class="slide-header-menu">ログイン</router-link>
        <router-link to="/sign" class="slide-header-menu">新規登録</router-link>
      </template>
    </Header>
    <SearchBox></SearchBox>
  </div>
</template>
<script>
import Header from "../../components/Header.vue";
import SearchBox from "../../components/SearchBox.vue";
export default {
  components: {
    Header,
    SearchBox
  }
};
</script>
<style lang="scss" src="@/assets/scss_files/Home.vue_scss/style.scss">
</style>