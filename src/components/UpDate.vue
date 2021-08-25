<template>
  <modal
      title="购买项目"
      @cancel="cancel"
      @ok="ok"
  >
      <div class="table-content">
        <div class="name">
          <span>锁仓项id：</span>
          <input type="text" class="list-a p" v-model="detail.id"/>
        </div>
        <div class="price">
          <span>项目名称：</span>
          <input type="text" class="list-b p" v-model="detail.name"/>
        </div>
        <div class="lock-notice qq" v-if="name.isShow">{{ name.errorText }}</div>
        <div class="count">
          <span>网站地址：</span>
          <input type="text" class="list-c p" v-model="detail.website"/>
        </div>
        <div class="user-notice qq" v-if="website.isShow">{{ website.errorText }}</div>
        <div class="price">
          <span>购买价格：</span>
          <input type="text" class="list-d p" v-model="detail.image_url"/>
        </div>
        <div class="price-notice qq"></div>
        <div class="count">
          <span>购买数量：</span>
          <input type="text" class="list-e p" v-model="detail.chain"/>
        </div>
        <div class="count-notice qq1" v-if="chain.isShow">{{ chain.errorText }}</div>
      </div>
  </modal>
</template>

<script>
import Modal from "./Modal.vue";
export default {
  name: 'update',
  components: {
    Modal
  },
  props: ['data'],

  data() {
    return {
      isShow: true,
      detail: {},
      name: {
        errorText: '',
        isShow: false,
      },
      website: {
        errorText: '',
        isShow: false,
      },
      chain: {
        errorText: '',
        isShow: false,
      },
    }
  },
  created() {
    this.detail = {
      ...this.data
    };
  },
  methods: {
    cancel() {
      this.$emit('cancel');
    },
    ok() {
      if (this.detail.name === '') {
        this.name.errorText = '不能为空';
        this.name.isShow = true;
        return;
      } else {
        this.name.isShow = false;
      }
      if (this.detail.website === '') {
        this.website.errorText = '不能为空';
        this.website.isShow = true;
        return;
      } else if (/^[a-z]{3}.[a-z]+.[a-z]{2,3}$/.test(this.detail.website) === false) {
        this.website.errorText = '请输入正确格式网址';
        this.website.isShow = true;
        return;
      } else {
        this.website.isShow = false;
      }
      ;
      if (this.detail.chain === '') {
        this.chain.errorText = '不能为空';
        this.chain.isShow = true;
        return;
      } else if (/^[0-9]+$/.test(this.detail.chain) === false) {
        this.chain.errorText = '请输入数字';
        this.chain.isShow = true;
        return;
      } else {
        this.chain.isShow = false;
        this.$emit('ok', this.detail);
      }
      ;
    }
  }
}


</script>

<style scoped lang="less">
@import "../less/ui";
@import "../less/var";

.layout-dialog {
  .table-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.1rem solid gray;

    img {
      width: 1.2rem;
      height: 1.2rem;
      cursor: pointer;
    }
  }

  .table-content {
    border-bottom: 0.1rem solid gray;

    .name {
      width: 28rem;
      margin: 1rem auto 0rem;
      display: flex;
      align-items: center;
    }

    .price {
      width: 28rem;
      margin: 1rem auto 0rem;
      display: flex;
      align-items: center;
    }

    .qq {
      width: 20rem;
      margin: 1rem auto 0rem 13rem;
      font-size: 1.2rem;
      color: red;
    }

    .qq1 {
      width: 20rem;
      margin: 1rem auto 2rem 13rem;
      font-size: 1.2rem;
      color: red;

    }

    .count {
      width: 28rem;
      margin: 1rem auto;
      display: flex;
      align-items: center;
    }

    .p {
      flex: 1;
      height: 2rem;
      padding: 0.2rem 0.5rem;

    }
  }

  .table-footer {
    text-align: right;

    .t {
      border-color: #57A2A1;
      font-size: 1.4rem;
      margin-top: 0.5rem;
      cursor: pointer;
    }
  }
}
</style>