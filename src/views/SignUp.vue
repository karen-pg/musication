<template>
  <div class="body">
    <TopHeader class="header"></TopHeader>
    <div class="main">
      <div class="form">
        <p class="heading">新規登録</p>
        <form action="#" mathod="#" class="form-container">
          <div class="form-wrapper">
            <label for="name">ユーザー名</label>
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
        <router-link to="/signin" class="form-link">すでにアカウントをお持ちの方はこちら</router-link>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import TopHeader from "../components/TopHeader.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    TopHeader,
    Footer,
  },
};
</script>
<style
  lang="scss"
  src="../assets/scss_files/Sign-Login.vue_scss/style.scss"
  scoped
></style>
