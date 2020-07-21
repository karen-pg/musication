<template>
  <div>
    <div class="search">
      <input type="text" class="search-text" placeholder="曲名、ユーザー名、タグなど" />
    </div>
    <div class="search-switches">
      <router-link to="/home">トップ</router-link>
      <router-link to="/popurality">人気</router-link>
      <router-link to="/new">新着</router-link>
      <router-link to="/board">掲示板</router-link>
    </div>
  </div>
</template>