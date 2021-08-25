<template>
  <div>
<!--    第一种方法-->
    <v-slip v-if="isShow" :on-hide="hideSlip" />
<!--    第二种方法-->
<!--    <v-slip v-if="isShow" @onHide="hideSlip" />-->
    <div class="module-header">
      <div class="nav-left">
        <a href="javascript:;">
          <img src="../img/menu.png" alt="" class="menu" @click="change()">
        </a>
        <a href="javascript:;">
          <img src="../img/Logo.png" alt="" class="Logo">
        </a>
      </div>
      <div class="nav-right">
        <input type="text" placeholder="输入搜索名称" class="input"/>
        <a href="javascript:;">
          <img src="../img/search.png" alt="" class="search">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import VSlip from '../components/Slip.vue';

export default {
  name: "Header",
  components: {
    VSlip,
  },
  data() {
    return {
      isShow: false
    }
  },
  methods: {
    change() {
      this.isShow = !this.isShow;
    },
    hideSlip() {
      this.isShow = false;
    }
  }
}
</script>

<style scoped lang="less">
@import "../less/ui";
@import "../less/var";

.module-header {
  padding: 1.6rem 1.6rem 2rem;
  display: flex;
  justify-content: space-between;
  background-color: @layout-bg-color;
  box-shadow: 0rem 0.2rem 1rem 0rem rgba(0, 0, 0, 0.06);

  .nav-left {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    .menu {
      margin-right: 1.6rem;
      width: 2.4rem;
      height: 2.4rem;
    }

    .Logo {
      width: 8.4rem;
      height: 2.6rem;
    }
  }

  .nav-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .input {
      width: 12.6rem;
      height: 2.4rem;
      margin-right: 0.9rem;
      padding-left: 2.4rem;
      border: 0.1rem solid #22A079;
      border-radius: 2rem;
      font-size: @font-sub-size;
      color: @font-color;
      background-color: @layout-bg-color;

      &:focus {
        outline: none;
      }
    }

    .search {
      width: 2.4rem;
      height: 2.4rem;
      vertical-align: bottom;
    }
  }
}
</style>