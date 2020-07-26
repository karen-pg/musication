<template>
  <section>
    <div class="container">
      <SearchBar></SearchBar>
    </div>
  </section>
</template>
<script>
import SearchBar from "../../components/SearchBar.vue";
export default {
  components: {
    SearchBar,
  },
};
</script>
<style lang="scss" scoped>
@import "@/assets/scss_files/_import.scss";
@import "@/assets/scss_files/Appli_scss/Appli-child_scss/_import.scss";
</style>
