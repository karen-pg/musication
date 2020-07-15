<template>
  <div>
    <header>
      <router-link to="/">
        <h1 id="header-logo">MUSICATION</h1>
      </router-link>
      <div>
        <div id="humberger" @click="openMenu()" :class="{open: isOpen}">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="header-menus">
          <router-link to="/home" class="header-menu">始める</router-link>
          <router-link to="/login" class="header-menu">ログイン</router-link>
          <router-link to="/sign" class="header-menu">新規登録</router-link>
        </div>
      </div>
    </header>
    <div id="slide-header-menus">
      <router-link to="/home" class="slide-header-menu">始める</router-link>
      <router-link to="/login" class="slide-header-menu">ログイン</router-link>
      <router-link to="/sign" class="slide-header-menu">新規登録</router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    openMenu() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>
<style lang="scss" scoped>
$base-color: #333;
$font-color: whitesmoke;
* {
  box-sizing: border-box;
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
  margin: 0;
  @media screen and (min-width: 415px) {
    font-size: 1em;
  }
  @media screen and (min-width: 960px) {
    font-size: 1.5em;
  }
}
#humberger {
  span {
    display: block;
    background-color: $font-color;
    width: 25px;
    height: 2px;
    margin-bottom: 8px;
    transition: transform 0.3s ease;
    &:nth-child(3) {
      margin: 0;
    }
    @media screen and (min-width: 415px) {
      display: none;
    }
  }
}
.open {
  span {
    &:nth-child(1) {
      transform: translateY(10px) rotate(45deg);
    }
    &:nth-child(2) {
      transform: translateX(-10px) scale(0);
    }
    &:nth-child(3) {
      transform: translateY(-10px) rotate(135deg);
    }
  }
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
#slide-header-menus {
  padding: 10px;
  background-color: #484848;
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.4);
  display: flex;
  .slide-header-menu {
    flex-grow: 1;
    text-align: center;
    border-right: 1px solid gray;
    &:nth-child(3) {
      border: none;
    }
  }
}
</style>