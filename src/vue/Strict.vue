<template>
  <div class="module-index">
    <v-header></v-header>
    <div class="layout-container">
      <div class="layout-account">
        <div class="items-up">
          <div class="items-left">优质项目</div>
          <div class="items-right">
            <a href="javascript:;">更多</a>
            <img src="../img/Rectangle15.png"/>
          </div>
        </div>
        <div class="items-down" id="content">
          <div class="items-down-row"
               v-for="(item, index) in list">
            <button class="btn" @click="popup(item)">+</button>
            <a href="javascript:;" class="row-first">
              <img :src="item.logo"/>
              <div>
                <p class="text-a">{{item.name}}</p>
                <p class="text-b">{{item.id}}</p>
              </div>
            </a>
            <div class="text">
              <div class="row-second">
                <p class="text-a text-c">网址</p>
                <p class="text-d">{{item.website}}</p>
              </div>
              <div class="row-third">
                <p class="text-b">说明</p>
                <p class="text-e">{{item.introduction}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <v-footer></v-footer>
    <up-date
        v-if="isShow"
        :data = "data"
        @cancel="hideDialog"
        @ok="confirm"
    />
  </div>
</template>

<script>
import $ from 'jquery';
import VHeader from '../components/Header.vue';
import VFooter from '../components/Footer.vue';
import UpDate from '../components/UpDate.vue';
import AIBEE from "../img/AIBEE.png";
import Bee from "../img/Bee.png";
import SWF from "../img/SWF.png";
import SOVI from "../img/SOVI.png";
import EDC from "../img/EDC.png";
import STC from "../img/STC.png";
import Hero from "../img/Hero.png";
import VHOT from "../img/VHOT.png";

export default {
  name: "strict",
  components: {
    UpDate,
    VHeader,
    VFooter,
  },
  data() {
    return {
      visible: false,
      isShow: false,
      data:'',
      list: []
    }
  },
  created() {
    $.ajax({
      url: 'https://api.coinhub.org/api/v1/coinhub/project',
      type: 'get',
      data: {},
      success: (rep) => {
        if (rep.code === 200) {
          this.list = rep.data.slice(0, 10);
        }
      }
    });
  },
  methods: {
    popup(data) {
      this.isShow = true;
      this.data = data;
    },
    hideDialog() {
      this.isShow = false;
    },
    confirm(detail) {
      this.isShow = false;
      const result = [];
      for(let i = 0, len = this.list.length; i < len; i++) {
        let item = this.list[i];
        if (item.id === detail.id) {
          result.push(detail);
        } else {
          result.push(item);
        }
      }
      this.list = result;
    }
  }
}
</script>

<style scoped lang="less">
@import "../less/var";

.module-index {
  background-color: #fefefe;

  .layout-container {
    .layout-account {
      padding-top: 1.6rem;

      .items-up {
        display: flex;
        justify-content: space-between;

        .items-left {
          font-size: 2rem;
        }

        .items-right {
          display: flex;
          align-items: center;
          font-size: @font-sub-size;
          color: @font-sub-color;
          cursor: pointer;

          a {
            color: #909DB2;
          }

          img {
            width: 1.2rem;
            height: 1.2rem;
          }
        }
      }

      .items-down {
        height: 56.6rem;
        overflow: auto;
        display: flex;
        flex-wrap: wrap;
        margin-top: 2.4rem;

        .items-down-row {
          display: flex;
          position: relative;
          width: 47rem;
          justify-content: space-between;
          align-items: center;
          padding: 2.4rem 0rem 2.4rem 0rem;
          border-bottom: 0.1rem solid rgba(0, 0, 0, 0.1);

          .btn {
            position: absolute;
            width: 6.4rem;
            height: 2.4rem;
            top: 0rem;
            right: 0rem;
            border: 0.1rem solid #22A079;
          }

          .row-first {
            display: flex;
            justify-content: flex-start;
            align-items: center;
            text-decoration: none;
            width: 24rem;
          }

          .row-first {
            flex: 1;
          }

          .row-first img {
            width: 6.4rem;
            height: 6.4rem;
            margin-right: 2rem;
          }

          .text {
            flex: 1;
          }

          .row-second {
            display: flex;
            justify-content: space-between;
          }

          .row-third {
            display: flex;
            justify-content: space-between;
          }

          .text-d {
            font: normal bold 1.4rem 'inter Regular';
            color: #14171C;
          }

          .text-e {
            font: normal bold 1.4rem 'inter Regular';
            color: #14171C;
            width: 10rem;
            height: 5rem;
            overflow: auto;
          }

          .text-a {
            font-size: 1.6rem;
            color: #14171C;
            margin-bottom: 0.8rem;
            margin-top: 0rem;
          }

          .text-b {
            font-size: 1.4rem;
            color: #909DB2;
            margin-top: 0rem;
            margin-bottom: 0rem;
          }

          .text-c {
            font-size: 1.4rem;
            color: #909DB2;
            /*margin-bottom: 8rem;*/
          }
        }
      }
    }

  }
}
</style>