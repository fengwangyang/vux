<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2></h2>
        <Badge text="30"></Badge>
        <Blur :blur-amount=100000 :url="url">
            <p class="center"><img :src="url"></p>
        </Blur>
        <button-tab>
            <button-tab-item selected>{{$t('lang.hello')}}</button-tab-item>
            <button-tab-item @click.native="handleClick" >{{change }}</button-tab-item>
        </button-tab>
    </div>
</template>
<script>
import {
    Badge,
    Blur,
    ButtonTab,
    ButtonTabItem,
} from 'vux'
export default {
    components: {
        Badge,
        Blur,
        ButtonTab,
        ButtonTabItem,
    },
    data() {
        return {
            msg: 'Welcome to Your Vue.js App',
            num: '30',
            change: '切换',
            url: 'https://o3e85j0cv.qnssl.com/tulips-1083572__340.jpg',
        }
    },
    mounted() {
        // 显示
        // this.$vux.alert.show({
        //         title: 'Vux is Cool',
        //         content: 'Do you agree?',
        //         onShow() {
        //             console.log('Plugin: I\'m showing')
        //         },
        //         // onHide() {
        //         //     console.log('Plugin: I\'m hiding')
        //         // }
        //     })
        // 隐藏
        // this.$vux.alert.hide()
    },
    methods: {
        handleClick() {
          console.log(32134234)
            this.$i18n.locale = this.$i18n.locale == 'zn' ? 'en' : 'zn'
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.center {
    text-align: center;
    padding-top: 20px;
    color: #fff;
    font-size: 18px;
}

.center img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 4px solid #ececec;
}
</style>
