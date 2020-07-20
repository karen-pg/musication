<template>
  <div>
    <header>
      <router-link to="/">
        <h1 id="header-logo">MUSICATION</h1>
      </router-link>
      <div>
        <div id="humberger" @click="openMenu()" :class="{ open: isOpen }">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div id="header-menus">
          <slot name="header-menus"></slot>
        </div>
      </div>
    </header>
    <div id="slide-header-menus" :class="{ slide: isOpen }">
      <slot name="slide-header-menus"></slot>
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
@import "@/assets/scss_files/_import.scss";
header {
  background-color: $base-color;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 20;
}
#header-logo {
  color: $font-color;
  font-size: 0.8em;
  margin: 0;
  @media screen and (min-width: 415px) {
    font-size: 1.1em;
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

#slide-header-menus {
  position: absolute;
  width: 100%;
  padding: 10px;
  background-color: #484848;
  box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.4);
  display: flex;
  z-index: 10;
  transform: translateY(-100%);
  transition: transform 0.3s ease;
  @media screen and (min-width: 415px) {
    display: none;
  }
  .slide-header-menu {
    color: $font-color;
    flex-grow: 1;
    text-align: center;
    border-right: 1px solid gray;
    &:nth-child(3) {
      border: none;
    }
  }
  &.slide {
    transform: translateY(0);
  }
}
</style>
