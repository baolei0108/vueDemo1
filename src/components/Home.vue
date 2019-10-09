<template>
    <div class="home">

        <v-life></v-life>
        <!--使用header组件-->
        <!--:title="title" :run="run" :home="this" 是父子件向字组件传值  :home="this"传自己-->
        <v-header :title="title" :run="run" :home="this" ref="header"></v-header>
        <button @click="getZizujian()">父组件获取子组件header的数据</button>

        <br>

        <h2 class="h2">这是一个home组件 -- {{msg}}---{{this.$store.state.count}}---{{this.$store.getters.computedCount}}</h2>
        <button @click="intCount()">改变store的值</button>
        <button @click="run()">按钮</button>

        <button @click="getData()">获取数据</button>
        <br>
        <div>
            {{list}}
        </div>


        <br>
        <button @click="emitNews()">给news新闻组件传值</button>
        <hr>
        <button @click="goNews()">跳转news页面</button>


        <ul>
            <li v-for="(value, key) in list2">
                 <router-link :to="'/pcontent?id='+value.aid">{{value.title}}</router-link>
            </li>
        </ul>





        


    </div>
</template>


<script>
    //引入头部组件
    import Header from './Header.vue'
    import Life from './Life.vue'

    //引入axios
    import Axios from 'axios'

    //引入中间vue  用于非父子传值
    import VueEvent from '../model/VueEvent.js'


    /*  父子组件之间的传值

    1)父组件主动获取子组件的数据和方法
    1.首页引用子组件的时候 定义一个ref
    <v-header ref="header"></v-header>

    2.使用数据
    this.$refs.header.属性
    this.$refs.header.方法

    2)子组件主动获取父组件的数据和方法

    在子组件中:
    this.$parent.属性
    this.$parent.方法


    3)父组件通过props和子组件进行传值
    <v-header :title="title"></v-header>  父

    props: ["title"]

    
    
     非父子组件的之间传值
        :通过新建一个vue实例


    */
    
    //引入store
    import store from "../vuex/store.js"



//注册
    export default {
        data() {
            return {
                msg: 'this is home msg',
                list: '',
                title: 'home',
                arr: '我是home的arr',
                list2: ['商品1', '商品2', '商品3']
            }
        },
        store,
        methods: {
            run(data) {
                alert(this.msg + data);
            },
            //使用vue-resource  获取数据
            getData() {
                var that = this;
                var api = ''
                this.$http.get(api).then(function(res) {
                    console.log(res);

                    //将请求得到的数据赋值给list  可以实现动态改变数据
                    that.list = res;

                }, function(err) {
                    console.log(err)

                })

            },
            //使用axios请求数据
            getData2() {
                var url = ''
                Axios.get(url).then( (response)=> {
                    console.log('axios', response);
                })
                .catch( (err)=> {

                })

            },

            //获取子组件数据和方法
            getZizujian() {
                var zimsg = this.$refs.header.msg;
                alert(zimsg);

                this.$refs.header.run();
            },
            //非父子组件传值
            emitNews() {

                VueEvent.$emit("to-news", this.msg)

            },

            //请求 数据 
            requestFun() {
                var api = 'http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
                this.$http.jsonp(api).then((response)=> {
                    console.log(response)
                    this.list2 = response.body.result;

                },(err)=> {
                    console.log(err)

                })

            },

            //编程施跳转
            goNews() {
                // this.$router.push({ path: "news"});
                this.$router.push({ path: "/pcontent?id=495"})
            },

            intCount() {
                this.$store.commit("incCount") //表示触发store里面的incCount方法
            }

            
        },
        //注册组件
        components: {
            'v-header': Header,
            'v-life': Life
        },
        //刷新即执行
        mounted() {
            this.getData2();

            this.requestFun();


        },
        
    }
</script>


<!--scoped表示样式仅限于局部-->
<style lang="scss" scoped>
    .h2{
        color:red;
    }

    .home{
        border:1px solid blue;
    }

</style>