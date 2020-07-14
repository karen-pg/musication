<template>
  <header>
    <router-link to="/">
      <h1 id="header-logo">MUSICATION</h1>
    </router-link>
    <div id="humberger">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <div>
      <router-link to="/home" class="header-menu">始める</router-link>
      <router-link to="/login" class="header-menu">ログイン</router-link>
      <router-link to="/sign" class="header-menu">新規登録</router-link>
    </div>
  </header>
</template>
<style lang="scss" scoped>
$base-color: #333;
$font-color: whitesmoke;
* {
  text-decoration: none;
  color: $font-color;
}
header {
  background-color: $base-color;
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
#header-logo {
  font-size: 0.8em;
  @media screen and (min-width: 415px) {
    font-size: 1em;
  }
  @media screen and (min-width: 960px) {
    font-size: 1.5em;
  }
  margin: 0;
}
.header-menu {
  display: none;
  @media screen and (min-width: 415px) {
    font-size: 0.8em;
    margin-right: 20px;
    display: inline-block;
  }
  @media screen and (min-width: 960px) {
    margin-right: 40px;
    font-size: 1.3em;
  }
}
</style>