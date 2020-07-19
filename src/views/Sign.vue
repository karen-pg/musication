<template>
  <div>
    <Header>
      <template v-slot:header-menus>
        <router-link to="/home" class="header-menu">始める</router-link>
        <router-link to="/login" class="header-menu">ログイン</router-link>
        <router-link to="/sign" class="header-menu">新規登録</router-link>
      </template>
      <template v-slot:slide-header-menus>
        <router-link to="/home" class="slide-header-menu">始める</router-link>
        <router-link to="/login" class="slide-header-menu"
          >ログイン</router-link
        >
        <router-link to="/sign" class="slide-header-menu">新規登録</router-link>
      </template>
    </Header>
    <h1>Sign.vue</h1>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
export default {
  components: {
    Header,
  },
};
</script>
<style
  lang="scss"
  src="@/assets/scss_files/Top.vue_scss/style.scss"
  scoped
></style>
