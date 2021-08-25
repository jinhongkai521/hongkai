<template>
  <div class="module-slide">
    <div class="mask" @click="change()"></div>
    <div class="side-slip">
      <div class="header">
        <a href="javascript:;">
          <img src="../img/Logo.png" alt="" class="Logo">
        </a>
        <div class="switch">
          <img src="../img/sun.png" alt="" class="sun">
          <img src="../img/moon.png" alt="" class="moon">
        </div>
      </div>
      <ul class="sidebar">
        <li class="items" :class="{ active0: selected === 'index' }">
          <a href="../strict.html" @click="setSelect('index')">首页</a>
        </li>
        <li class="property items" :class="{ active0: selected === 'asset' }">
          <a href="javascript:;" @click="setSelect('asset')">资产看板</a></li>
        <li class="DeFi items" :class="{ active0: selected === 'DeFi' }">
          <a href="javascript:;" class="layout" @click="setSelect('DeFi')">
            <span>DeFi</span>
            <img src="../img/Rectangle01.png" alt="" class="operator operator1" @click="unfold()" v-if="!isShow">
            <img src="../img/Rectangle0.png" alt="" class="operator operator0" @click="shrink()" v-if="isShow">
          </a>
          <ul class="DeFi-list" v-if="isShow">
            <li>
              <a href="javascript:;" class="inventory">DeFi项目列表</a>
            </li>
            <li>
              <a href="javascript:;" class="market">DeFi行情</a>
            </li>
            <li>
              <a href="javascript:;" class="ranking">DeFi排行榜</a>\
            </li>
          </ul>
        </li>
        <li class="wallet items" :class="{ active0: selected === 'wallet' }">
          <a href="javascript:;" @click="setSelect('wallet')">钱包下载</a>
        </li>
        <li class="dapp items" :class="{ active0: selected === 'dapp' }">
          <a href="../index.html" @click="setSelect('dapp')">Dapp入驻</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "Slip",
  props: {
    // 第一种方法props传参
    onHide: {
      type: Function,
      default: () => {}
    }
  },
  data() {
    return {
      isShow: false,
      selected: 'index',
    }
  },
  methods: {
    setSelect(name) {
      this.selected = name;
    },
    change() {
      // 第一种方法传参
      this.onHide();
      // 第二种方法子$emit向父传参
      // this.$emit('onHide');
    },
    unfold() {
      this.isShow = true
    },
    shrink() {
      this.isShow = false
    }
  }
}
</script>

<style lang="less">
@import "../less/var";

.module-slide {
  .side-slip {
    position: absolute;
    display: block;
    width: 60%;
    height: 100%;
    border: 0.1rem solid #FFFFFF;
    padding: 3rem 0rem;
    background-color: @layout-bg-color;
    z-index: 99;
    animation: move 1s ease-out forwards;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0rem 1.2rem 0rem 3rem;
      .Logo {
        width: 8.4rem;
        height: 2.7rem;
      }
      .sun {
        width: 1.6rem;
        height: 1.6rem;
        border: 0.1rem dashed hsla(0, 0%, 0%, 1);
      }
      .moon {
        width: 1.6rem;
        height: 1.6rem;
        background: rgba(0, 0, 0, 0.06);
        border: 0.1rem dashed hsla(0, 0%, 0%, 1);
      }

      .switch {
        text-align: right;
      }
    }

    .sidebar {
      list-style: none;
      margin-top: 3rem;

      li {
        padding: 1.4rem 1.2rem 1.4rem 3rem;

        a {
          text-decoration: none;
          color: hsla(218, 17%, 9%, 1);
          padding: 1.4rem 0rem;
        }
      }

      .DeFi {
        list-style: none;
        padding: 0;

        .layout {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1.4rem 1.2rem 1.4rem 3rem;
        }

        .operator {
          width: 1.2rem;
          height: 1.2rem;
          background: rgba(0, 0, 0, 0.06);
          border: 0.1rem dashed hsla(0, 0%, 0%, 1);
        }

        .operator0 {
          //display: none;
        }

        .DeFi-list {
          padding: 1rem 0rem 1rem 4.4rem;
          background: rgba(34, 160, 121, 0.06);

          li {
            padding: 0.6rem 0rem;

            &:last-child {
              padding: 0.6rem 0rem 0rem;
            }
          }
        }
      }

      .active0 {
        border-left: 0.2rem solid #22A079;
        background: rgba(34, 160, 121, 0.06);
      }
    }
  }
}



@keyframes move {
  from {
    left: -100%;
  }
  to {
    left: 0;
  }
}
</style>