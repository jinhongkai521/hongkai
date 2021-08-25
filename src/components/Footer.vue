<template>
  <div class="module-footer">
    <div class="picture0">
      <a href="javascript:;">
        <img src="../img/Logo.png" alt="" class="Logo">
      </a>
      <ul class="picture list">
        <li>
          <a href="javascript:;">
            <img src="../img/a.png" class="nn" />
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="../img/c.png" class="nn"/>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <img src="../img/b.png" class="nn"/>
          </a>
        </li>
      </ul>
    </div>
    <ul class="footer-down list">
      <li>
        <a href="javascript:;">
          <span>关于我们</span>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <span>免责声明</span>
        </a>
      </li>
      <li>
        <a href="javascript:;">
          <span>免责声明</span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: "Footer",
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style scoped lang="less">
@import "../less/ui";
@import "../less/var";

.module-footer {
  padding: 1.6rem 1.6rem 3rem 1.6rem;
  background: #FAFAFA;
  box-shadow: 0rem 0.2rem 1rem 0rem rgba(0, 0, 0, 0.06);
  .Logo {
    width: 8.4rem;
    height: 2.6rem;
  }
  .picture0 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 2.4rem;
  }
  .list {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    list-style: none;
  }
  .picture {
    li{
      margin-left: 2.4rem;
    }
    .nn {
      width: 2.4rem;
      height: 2.4rem;
    }
  }
  .footer-down li {
    margin-right: 3rem;
  }
  .list a{
    font-size: 1.2rem;
  }
}

</style>