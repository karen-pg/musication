<template>
  <section>
    <div class="container">
      <div v-for="post in posts" :key="post.id" class="post">
        <div class="post__header">
          <div class="post__header--icon">
            <img src="@/assets/imgs/ifn0438.png" alt />
          </div>
          <div class="post__header--detail">
            <p class="post__header--detail-user">{{post.user}}</p>
            <p class="post__header--detail-date">{{post.date}}</p>
          </div>
        </div>
        <hr />
        <div class="post__main">
          <div class="post__main--title">
            <p>{{post.title}}</p>
          </div>
          <div class="post__main--tags">
            <ul>
              <li>タグ</li>
              <li>タグ</li>
            </ul>
          </div>
          <div class="post__main--text">{{post.text|toAbridge(40)}}</div>
        </div>
        <hr />
        <div class="post__footer">
          <div class="post__footer--icons">
            <p>
              <font-awesome-icon icon="comment" class="icon" />
              {{post.comments|attachUnit}}
            </p>
            <div class="post__footer--icons-comment">
              <p>
                <font-awesome-icon icon="thumbs-up" class="icon" />
                {{post.goods|attachUnit}}
              </p>
            </div>
            <div class="post__footer--icons-food"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import "@/assets/scss_files/Appli_scss/Appli-child_scss/Board_scss/style.scss";
</style>
<script>
import { appliMixin } from "@/appliMixin.js";
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          user: "ユーザー1",
          date: "2020/07/25",
          title: "タイトル1",
          tags: ["タグ", "タグ"],
          text:
            "ユーザー1の本文ユーザー1の本文ユーザー1の本文ユーザー1の本文ユーザー1の本文ユーザー1の本文ユーザー1の本文ユーザー1の本文ユーザー1の本文ユーザー1の本文ユーザー1の本文ユーザー1の本文ユーザー1の本文ユーザー1の本文ユーザー1の本文ユーザー1の本文ユーザー1の本文",
          comments: 12,
          goods: 530,
        },
        {
          id: 2,
          user: "ユーザー2",
          date: "2020/07/23",
          title: "タイトル2",
          tags: ["タグ", "タグ"],
          text:
            "ユーザー2の本文ユーザー2の本文ユーザー2の本文ユーザー2の本文ユーザー2の本文ユーザー2の本文ユーザー2の本文ユーザー2の本文ユーザー2の本文ユーザー2の本文ユーザー2の本文ユーザー2の本文ユーザー2の本文ユーザー2の本文ユーザー2の本文ユーザー2の本文ユーザー2の本文",
          comments: 54,
          goods: 836,
        },
        {
          id: 3,
          user: "ユーザー3",
          date: "2020/07/20",
          title: "タイトル3",
          tags: ["タグ", "タグ"],
          text:
            "ユーザー3の本文ユーザー3の本文ユーザー3の本文ユーザー3の本文ユーザー3の本文ユーザー3の本文ユーザー3の本文ユーザー3の本文ユーザー3の本文ユーザー3の本文ユーザー3の本文ユーザー3の本文ユーザー3の本文ユーザー3の本文ユーザー3の本文ユーザー3の本文ユーザー1の本文",
          comments: 81,
          goods: 1023,
        },
        {
          id: 4,
          user: "ユーザー4",
          date: "2020/07/19",
          title: "タイトル4",
          tags: ["タグ", "タグ"],
          text:
            "ユーザー4の本文ユーザー4の本文ユーザー4の本文ユーザー4の本文ユーザー4の本文ユーザー4の本文ユーザー4の本文ユーザー4の本文ユーザー4の本文ユーザー4の本文ユーザー4の本文ユーザー4の本文ユーザー4の本文ユーザー4の本文ユーザー4の本文ユーザー4の本文ユーザー4の本文",
          comments: 508,
          goods: 3299,
        },
        {
          id: 5,
          user: "ユーザー5",
          date: "2020/07/15",
          title: "タイトル5",
          tags: ["タグ", "タグ"],
          text:
            "ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文",
          comments: 1326,
          goods: 23411,
        },
      ],
    };
  },
  mixins: [appliMixin],
};
</script>