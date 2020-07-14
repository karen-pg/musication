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
* {
  text-decoration: none;
  // color: white;
}
</style>