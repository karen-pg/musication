<template>
<body>
  <AppliHeader></AppliHeader>
  <nav class="container">
    <div class="search">
      <input type="text" class="search-text" placeholder="曲名、タグなど" />
    </div>
    <div class="search-switches">
      <router-link :to="{name:'Home'}" class="search-switch" active-class="active">トップ</router-link>
      <router-link :to="{name:'Music'}" class="search-switch" active-class="active">楽曲</router-link>
      <router-link :to="{name:'Genre'}" class="search-switch" active-class="active">ジャンル</router-link>
      <router-link :to="{name:'Board'}" class="search-switch" active-class="active">掲示板</router-link>
    </div>
  </nav>
  <hr />
  <router-view></router-view>
</body>
</template>
<script>
import AppliHeader from "../../components/AppliHeader";
export default {
  components: {
    AppliHeader,
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_files/Appli_scss/Appli.scss";
</style>