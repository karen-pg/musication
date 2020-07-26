<template>
<body>
  <AppliHeader></AppliHeader>
  <nav class="container">
    <SearchBar class="search-bar"></SearchBar>
    <div class="change">
      <router-link :to="{name:'Home'}" class="change-switch" active-class="active">トップ</router-link>
      <router-link :to="{name:'Music'}" class="change-switch" active-class="active">楽曲</router-link>
      <router-link :to="{name:'Genre'}" class="change-switch" active-class="active">ジャンル</router-link>
      <router-link :to="{name:'Board'}" class="change-switch" active-class="active">掲示板</router-link>
    </div>
  </nav>
  <hr />
  <router-view></router-view>
</body>
</template>
<script>
import AppliHeader from "../../components/AppliHeader";
import SearchBar from "../../components/SearchBar";
export default {
  components: {
    AppliHeader,
    SearchBar,
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_files/Appli_scss/Appli.scss";
</style>