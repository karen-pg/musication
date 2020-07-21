<template>
  <div>
    <Header>
      <template v-slot:header-menus>
        <router-link to="/login" class="header-menu">ログイン</router-link>
        <router-link to="/sign" class="mobile-header-menu header-menu">新規登録</router-link>
        <router-link to="/mobilesearch" class="mobile-header-menu header-menu">
          <font-awesome-icon icon="search" class="fa-2x" />
        </router-link>
        <router-link to="/board" class="header-menu">
          <font-awesome-icon icon="newspaper" class="fa-2x" />
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