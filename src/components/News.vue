<template>
    <div class="mynews">

        <!--使用header组件-->
        <v-header></v-header>

        <br>


        <h3>这是一个新闻组件</h3>
        <!--<ul>
            <li>
                1111
            </li>
            <li>
                2222
            </li>
        </ul>-->
        <ul>
            <li v-for="(value, key) in list">
                <router-link  :to="'/content/'+key">{{key}}---{{value}}</router-link>
            </li>
        </ul>
    </div>
</template>


<script>
    //引入头部组件
    import Header from './Header.vue'
    //引入中间vue  用于非父子传值
    import VueEvent from '../model/VueEvent.js'

    export default {
        data() {
            return {
                msg: "我是一个新闻组件",
                list: ['111', '222', '333']
            }
        },
        methods: {
            
        },
         //注册组件
        components: {
            'v-header': Header
        },
        mounted() {
            //接收home组件传过来的值
          VueEvent.$on('to-news', function(data) {
              console.log('接收home组件广播过来的值-----------')
              console.log(data)

          })  
        },
    }
</script>


<style lang="scss">

    .mynews {
        border:1px solid red;

    }

    

</style>