<template>
  <div id="body">
    <Header class="header">
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
    <div class="main">
      <div class="form">
        <p class="heading">ログイン</p>
        <form action="#" class="form-container">
          <div class="form-wrapper">
            <label for="mail">メールアドレス</label>
            <input type="mail" id="mail" />
          </div>
          <div class="form-wrapper">
            <label for="password">パスワード</label>
            <input type="password" id="password" />
          </div>
          <div class="form-wrapper">
            <input type="submit" value="ログイン" class="submit" />
          </div>
        </form>
        <hr />
        <a href="#" class="form-link">パスワードを忘れた場合</a>
        <router-link to="/sign" class="form-link">新しいアカウントを作成</router-link>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style
  lang="scss"
  src="@/assets/scss_files/Top.vue_scss/style.scss"
  scoped
></style>
<style
  lang="scss"
  src="@/assets/scss_files/Sign-Login.vue_scss/style.scss"
  scoped
></style>
