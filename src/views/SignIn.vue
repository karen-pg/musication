<template>
  <div class="body">
    <TopHeader class="header"></TopHeader>
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
        <a href="#" class="form-link">パスワードを忘れた場合</a>
        <router-link to="/sign" class="form-link">新しいアカウントを作成</router-link>
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
  src="@/assets/scss_files/Sign-Login.vue_scss/style.scss"
  scoped
></style>
