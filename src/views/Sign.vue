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
        <p class="heading">新規登録</p>
        <form action="#" mathod="#" class="form-container">
          <div class="form-wrapper">
            <label for="name">ユーザーネーム</label>
            <input type="text" id="name" name="name" />
          </div>
          <div class="form-wrapper">
            <label for="mail">メールアドレス</label>
            <input type="mail" id="mail" name="meil" />
          </div>
          <div class="form-wrapper">
            <label for="password">パスワード ※8文字以上</label>
            <input type="password" id="password" name="password" />
          </div>
          <div class="form-wrapper">
            <label for="password-confirm">パスワード(確認)</label>
            <input type="password" id="password-confirm" name="password-confirm" />
          </div>
          <div class="form-wrapper">
            <input type="submit" value="登録" class="submit" />
          </div>
        </form>
        <hr />
        <router-link to="/login" class="form-link">すでにアカウントをお持ちの方はこちら</router-link>
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
