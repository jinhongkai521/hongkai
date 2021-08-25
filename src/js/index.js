import Vue from 'vue';
import '../less/index.less';
import Index from '../vue/Index.vue';

const vm = new Vue({
    render: h => h(Index)
}).$mount('#app');