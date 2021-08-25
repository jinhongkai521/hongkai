import Vue from 'vue';
import '../less/Strict.less';
import Strict from '../vue/Strict.vue';
const vm = new Vue({
    render: h => h(Strict)
}).$mount('#app');