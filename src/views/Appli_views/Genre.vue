<template>
  <section>
    <Attention>
      <template v-slot:attention-detail>
        <p>
          90年代初頭に誕生したダンスミュージック
          <br />「マキナ」を体感しよう
        </p>
      </template>
    </Attention>
    <div class="container">
      <p>
        ジャンル一覧
        <font-awesome-icon icon="chevron-right" class="icon" />
      </p>
    </div>
    <div class="container">
      <h1>
        人気のジャンル
        <font-awesome-icon icon="chevron-right" class="icon" />
      </h1>
      <GenreWrapper :array="popGenres"></GenreWrapper>
    </div>
    <div class="container">
      <h1>
        急上昇ジャンル
        <font-awesome-icon icon="chevron-right" class="icon" />
      </h1>
      <GenreWrapper :array="soaringGenres"></GenreWrapper>
    </div>
    <div class="container">
      <h1>
        今週のピックアップ
        <font-awesome-icon icon="chevron-right" class="icon" />
      </h1>
      <div class="pickup">
        <p class="pickup__title">VOCALOID</p>
        <div class="pickup__imgs">
          <div v-for="n in 4" :key="n" class="pickup__imgs--img">
            <img
              src="../../../public/imgs/wondicon-ui-free-music_111271.png"
              alt="ピックアップジャンルの人気楽曲のサムネイル"
            />
          </div>
        </div>
        <div class="pickup__detail">
          <p>
            音声合成技術を用いた
            <br />デスクトップミュージック
          </p>
        </div>
      </div>
    </div>
    <div class="container">
      <h1>
        マイナージャンル
        <font-awesome-icon icon="chevron-right" class="icon" />
      </h1>
      <GenreWrapper :array="minerGenres"></GenreWrapper>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import "../../assets/scss_files/Appli_scss/Appli-child_scss/Genre_scss/style.scss";
</style>
<script>
import GenreWrapper from "../../components/GenreWrapper";
import Attention from "../../components/Attention";
export default {
  components: {
    Attention,
    GenreWrapper,
  },
  data() {
    return {
      popGenres: [
        { name: "人気のジャンル1" },
        { name: "人気のジャンル2" },
        { name: "人気のジャンル3" },
        { name: "人気のジャンル4" },
        { name: "人気のジャンル5" },
        { name: "人気のジャンル6" },
      ],
      soaringGenres: [
        { name: "急上昇のジャンル1" },
        { name: "急上昇のジャンル2" },
        { name: "急上昇のジャンル3" },
        { name: "急上昇のジャンル4" },
        { name: "急上昇のジャンル5" },
        { name: "急上昇のジャンル6" },
      ],
      minerGenres: [
        { name: "マイナージャンル1" },
        { name: "マイナージャンル2" },
        { name: "マイナージャンル3" },
      ],
    };
  },
};
</script>