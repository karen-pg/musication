<template>
  <section>
    <div class="container">
      <div v-for="post in posts" :key="post.id" class="post">
        <div class="post__header">
          <div class="post__header--icon">
            <img src="../../../public/imgs/ifn0438.png" alt="ユーザーのサムネイル" />
          </div>
          <div class="post__header--detail">
            <p class="post__header--detail-user">{{post.user}}</p>
            <p class="post__header--detail-date">{{post.date}}</p>
          </div>
        </div>
        <div class="post__main">
          <div class="post__main--title">
            <p>{{post.title}}</p>
          </div>
          <div class="post__main--tags">
            <ul>
              <li v-for="(tag, index) in post.tags" :key="index">{{tag}}</li>
            </ul>
          </div>
          <div class="post__main--text">
            <p>{{post.text|toAbridge(100)}}</p>
          </div>
        </div>
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
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
@import "../../assets/scss_files/Appli_scss/Appli-child_scss/Board_scss/style.scss";
</style>
<script>
import { appliMixin } from "../../appliMixin.js";
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          user: "MUSICATION公式",
          date: "2020/08/11",
          title: "【トピック】を募集します！",
          tags: ["お知らせ"],
          text:
            "MUSICATION公式です。\nいつもMUSICATIONをご利用戴き誠にありがとうございます。このたび、日頃のご愛顧に感謝を込めて、皆様からトップページに掲載する【トピック】を募集致します。\n2020年9月30日までに、お問い合わせページもしくはこの掲示板のコメント欄にご記入ください。",
          comments: 1326,
          goods: 23411,
        },
        {
          id: 2,
          user: "ユーザー2",
          date: "2020/08/10",
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
          date: "2020/08/10",
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
          date: "2020/08/19",
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
          date: "2020/08/19",
          title: "タイトル5",
          tags: ["タグ", "タグ"],
          text:
            "ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文ユーザー5の本文",
          comments: 508,
          goods: 3299,
        },
      ],
    };
  },
  mixins: [appliMixin],
};
</script>