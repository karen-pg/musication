<template>
<body>
  <AppliHeader></AppliHeader>
  <nav class="container">
    <div class="search">
      <input type="text" class="search-text" placeholder="曲名、タグなど" />
    </div>
    <div class="search-switches">
      <router-link :to="{name:'Home'}" class="search-switch">トップ</router-link>
      <router-link :to="{name:'Popurality'}" class="search-switch">人気</router-link>
      <router-link :to="{name:'New'}" class="search-switch">新着</router-link>
      <router-link :to="{name:'Genre'}" class="search-switch">ジャンル</router-link>
      <router-link :to="{name:'Board'}" class="search-switch">掲示板</router-link>
    </div>
  </nav>
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
@import "@/assets/scss_files/_import.scss";
.container {
  padding: 20px;
}
.search {
  border-bottom: 1px $sub-font-color;
  margin-bottom: 20px;
  &-text {
    padding: 5px;
    width: 100%;
    border-radius: 10px;
  }
}
.search {
  &-switches {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
  }
}
</style>