<template>
<body>
  <AppliHeader class="header"></AppliHeader>
  <div class="main">
    <nav class="container">
      <div class="change">
        <router-link :to="{name:'Home'}" class="change-switch" active-class="active">トップ</router-link>
        <router-link :to="{name:'Music'}" class="change-switch" active-class="active">楽曲</router-link>
        <router-link :to="{name:'Genre'}" class="change-switch" active-class="active">ジャンル</router-link>
        <router-link :to="{name:'Board'}" class="change-switch" active-class="active">掲示板</router-link>
        <router-link :to="{name:'Search'}" class="change-switch search" active-class="active">検索</router-link>
      </div>
    </nav>
    <router-view></router-view>
  </div>
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