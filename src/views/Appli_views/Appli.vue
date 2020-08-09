<template>
<body>
  <AppliHeader class="header"></AppliHeader>
  <div class="main">
    <nav class="container">
      <div class="change">
        <router-link to="/appli/home" class="change-switch" active-class="active">
          <font-awesome-icon icon="home" class="change-icon" />トップ
        </router-link>
        <router-link to="/appli/music" class="change-switch" active-class="active">
          <font-awesome-icon icon="music" class="change-icon" />楽曲
        </router-link>
        <router-link to="/appli/genre" class="change-switch" active-class="active">
          <font-awesome-icon icon="map-signs" class="change-icon" />ジャンル
        </router-link>
        <router-link to="/appli/board" class="change-switch" active-class="active">
          <font-awesome-icon icon="copy" class="change-icon" />掲示板
        </router-link>
        <router-link to="/appli/search" class="change-switch search" active-class="active">
          <font-awesome-icon icon="search" class="change-icon" />検索
        </router-link>
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
@import "../../assets/scss_files/Appli_scss/Appli.scss";
</style>