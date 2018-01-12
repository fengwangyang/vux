<template>
    <div id="app">
        <loading v-model="isLoading"></loading>
            <router-view></router-view>
    </div>
</template>
<script>
import {
    Loading
} from 'vux'
import {
    mapState
} from 'vuex'
export default {
    data() {
            return {
                name: "app",
                // isLoading:'',
            }
        },
        components: {
            Loading
        },
        computed: {
            ...mapState({
                isLoading: state => state.vux.isLoading
            })
        },
}
</script>
<style lang="less">
@import '~vux/src/styles/reset.less';
body {
    background-color: #fbf9fe;
}
</style>
