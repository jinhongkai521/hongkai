<template>
  <div class="module-slide">
    <div class="mask"></div>
    <div class="layout-dialog">
      <div class="table-header">
        <span>{{ title }}</span>
        <img src="../img/x.png" alt="" @click="cancel">
      </div>
      <slot></slot>
      <div class="table-footer">
        <button class="cancel t" @click="cancel">取消</button>
        <button class="confirm t" @click="ok">确定</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: ['title', 'content'],
  data() {
    return {
      isShow: true,
    }
  },
  created() {

  },
  methods: {
    cancel() {
      this.$emit('cancel');
    },
    ok() {
        this.$emit('ok',);
    }
  }
}


</script>

<style scoped lang="less">

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