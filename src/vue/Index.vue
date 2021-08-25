<template>
  <div class="module-index">
    <v-header></v-header>
    <div class="layout-container">
      <h1>Dapp入驻</h1>
      <div class="layout-account">
        <div class="item0">
          <h2>项目名称</h2>
          <input type="text" placeholder="输入项目名称" class="name item" v-model="name.value"/>
          <p class="hint name0" v-if="name.isShow">{{ name.errorText }}</p>
        </div>
        <div class="item0">
          <h2>底层公链</h2>
          <input type="text" placeholder="输入底层公链" class="chain item" v-model="chain.value"/>
          <p class="hint chain0" v-if="chain.isShow">{{ chain.errorText }}</p>
        </div>
        <div class="item0">
          <h2>DApp合约地址</h2>
          <input type="text" placeholder="输入DApp合约地址" class="site item" v-model="site.value"/>
          <p class="hint site0" v-if="site.isShow">{{ site.errorText }}</p>
        </div>
        <div class="item0">
          <h2>DApp网址</h2>
          <input type="text" placeholder="输入DApp网址" class="url item" v-model="url.value"/>
          <p class="hint url0" v-if="url.isShow">{{ url.errorText }}</p>
        </div>
        <div class="item0">
          <h2>联系Email</h2>
          <input type="email" placeholder="输入联系Email" class="email item" v-model="email.value"/>
          <p class="hint email0" v-if="email.isShow">{{ email.errorText }}</p>
        </div>
        <div class="item0">
          <h2>简介</h2>
          <textarea cols="30" rows="10" placeholder="输入简介" class="introduction" v-model="introduction.value"></textarea>
          <p class="hint introduction0" v-if="introduction.isShow">{{ introduction.errorText }}</p>
        </div>
        <div class="item0">
          <h2>DApp图标(200*200像素，支持jpg、jpeg、png)</h2>
          <div class="upload">
            <div class="click">
              <img src="../img/add.png" alt="" class="add"/>
              <p>点击上传</p>
            </div>
            <input type="file"
                   capture="camera"
                   accept="image/jpg,image/png,image/jpeg"
                   class="picture1"
                   id="picture3"
                   @change="changePath"/>
          </div>
          <p class="hint picture0" v-if="upload.isShow">{{ upload.errorText }}</p>
        </div>
        <button class="ui-btn" @click="submit()">提交</button>
      </div>
    </div>
    <v-footer></v-footer>
  </div>
</template>

<script>
import VHeader from '../components/Header.vue';
import VFooter from "../components/Footer.vue";
export default {
  name: "index",
  components: {
    VHeader,
    VFooter
  },
  data() {
    return {
      name: {
        value: '',
        errorText: '',
        isShow: false,
      },
      chain: {
        value: '',
        errorText: '',
        isShow: false,
      },
      site: {
        value: '',
        errorText: '',
        isShow: false,
      },
      url: {
        value: '',
        errorText: '',
        isShow: false,
      },
      email: {
        value: '',
        errorText: '',
        isShow: false,
      },
      introduction: {
        value: '',
        errorText: '',
        isShow: false,
      },
      upload: {
        value: '',
        errorText: '',
        isShow: false,
        imageUrl: ''
      },
    }
  },
  methods: {
    changePath(event) {
      debugger;
      const file = event.target.files[0];
      // TODO 将file这个对象，转变成可以展示的图片路径
      this.upload.value = file.name;
    },
    submit() {
      if (this.name.value === '') {
        this.name.errorText = '不能为空';
        this.name.isShow = true;
        return;
      } else {
        this.name.isShow = false;
      }
      if(this.chain.value === '') {
        this.chain.errorText = '不能为空';
        this.chain.isShow = true;
        return;
      } else if (/^[0-9a-zA-Z]+$/.test(this.chain.value) === false) {
        this.chain.errorText = '公链只能为数字字母组合';
        this.chain.isShow = true;
        return;
      } else {
        this.chain.isShow = false;
      };
      if(this.site.value === '') {
        this.site.errorText = '不能为空';
        this.site.isShow = true;
        return;
      } else if (/^[0-9a-zA-Z]+$/.test(this.site.value) === false) {
        this.site.errorText = '合约地址为数字字母组合';
        this.site.isShow = true;
        return;
      } else {
       this.site.isShow = false;
      };
      if(this.url.value === '') {
        this.url.errorText = '不能为空';
        this.url.isShow = true;
        return;
      } else if (/\w+\.[a-z]{2,3}$/.test(this.url.value) === false) {
        this.url.errorText = '请输入正确格式网址例如baidu.com';
        return;
      } else {
        this.url.isShow = false;
      };
      if(this.email.value === '') {
        this.email.errorText = '不能为空';
        this.email.isShow = true;
        return;
      } else if (/\w+@[a-z]{2}\.[a-z]{2,3}$/.test(this.email.value) === false) {
        this.email.errorText = '请输入正确格式email例如dapp163@.com';
        this.email.isShow = true;
        return;
      } else {
        this.email.isShow = false;
      }
      if(this.introduction.value === '') {
        this.introduction.errorText = '简介不能为空';
        this.introduction.isShow = true;
        return;
      } else {
       this.introduction.isShow = false;
      };
      if(this.upload.value === '') {
       this.upload.errorText = '请上传图片';
       this.upload.isShow = true;
        return;
      } else {
       this.upload.isShow = false;
        window.location.href = '../strict.html'
      }
      // 真正的提交

    }
  }
}
</script>

<style scoped lang="less">
@import "../less/var";
.module-index {
  .layout-container {
    h1 {
      font-size: 2rem;
      color: hsla(161, 65%, 38%, 1);
      font-weight: bold;
      margin-bottom: 2rem;
    }
    .layout-account {
      .item0 {
        font-size: @font-size;
        color: hsla(217, 18%, 63%, 1);
        padding-top: 2rem;
      }
      h2 {
        color: hsla(218, 17%, 9%, 1);
      }
      .item, .introduction {
        width: 100%;
        background-color: #F2F3F6;
        border: none;
        border-radius: 1.2rem;
        padding: 1.2rem 1.2rem;
        margin-top: 1rem;
        resize: none;
      }
      .item:focus, .introduction:focus {
        outline: none;
      }
      .hint {
        font-size: @font-sub-size;
        width: 100%;
        color: red;
        padding: 0rem 1.2rem;
      }
      .upload {
        position: relative;
        width: 14rem;
        height: 14rem;
        border: 0.1rem dashed green;
        margin: 1rem 0rem 4rem 0rem;
        .click {
          position: absolute;
          top:50%;
          left:50%;
          text-align: center;
          transform: translate(-50%,-50%);
          .add{
            width: 1.6rem;
            height: 1.6rem;
            border: 0.1rem dotted gray;
          }
          p {
            font-size: 1.4rem;
            color: hsla(161, 65%, 38%, 1);
          }
        }
        .picture1 {
          width: 100%;
          height: 100%;
          opacity: 0;
        }
        .image {
          position: absolute;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
}
</style>