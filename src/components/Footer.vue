<template>
  <footer>
    <div class="footer-link">
      <font-awesome-icon :icon="['fab', 'twitter']" class="fa-2x" />
      <font-awesome-icon :icon="['fab', 'facebook']" class="fa-2x" />
      <font-awesome-icon :icon="['fab', 'instagram']" class="fa-2x" />
    </div>
    <div class="footer-contact">
      <ul>
        <li>利用規約</li>
        <span>｜</span>
        <li>プライバシーポリシー</li>
        <span>｜</span>
        <li>お問い合わせ</li>
      </ul>
    </div>
    <p class="footer-logo">&copy;MUSICATION</p>
  </footer>
</template>
<style lang="scss" scoped>
footer {
  padding: 30px 50px;
  background-color: $base-color;
  text-align: center;
  .footer {
    &-link {
      width: 200px;
      display: flex;
      justify-content: space-between;
      margin: 0 auto 30px;
    }
    &-contact {
      margin-bottom: 30px;
      ul {
        padding: 0;
        li {
          list-style: none;
          display: inline-block;
          font-size: 12px;
        }
      }
    }
  }
}
@media screen and(min-width:415px) {
  footer {
    .footer {
      &-link {
        width: 230px;
      }
      &-contact {
        ul li {
          font-size: 15px;
        }
      }
    }
  }
}
</style>