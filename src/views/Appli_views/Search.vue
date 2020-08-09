<template>
  <section>
    <div class="container">
      <form action="#">
        <div class="search">
          <input type="text" v-model="val" class="search-bar" placeholder="キーワードを入力" />
          <font-awesome-icon
            v-show="val.length"
            @click="clear()"
            icon="times-circle"
            class="search-cansel"
          />
        </div>
      </form>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      val: "",
    };
  },
  methods: {
    clear() {
      this.val = "";
    },
  },
};
</script>
<style lang="scss" scoped>
@import "../../assets/scss_files/_import.scss";
@import "../../assets/scss_files/Appli_scss/Appli-child_scss/_import.scss";
.container {
  padding: 20px;
}
.search {
  position: relative;
  height: 35px;
  &-bar {
    width: 100%;
    height: 100%;
    font-size: 15px;
    padding: 5px;
    border-radius: 10px;
    border: 2px solid $sub-font-color;
    @media screen and (min-width: 960px) {
      width: 400px;
    }
    &::placeholder {
      color: $sub-font-color;
    }
    &:focus {
      border: 2px solid $red;
    }
  }
  &-cansel {
    position: absolute;
    top: 50%;
    right: 8px;
    transform: translateY(-50%);
    color: $sub-font-color;
    &:hover {
      cursor: pointer;
    }
  }
}
</style>
