<template>
    <div>
        <a href="#">这是一个头部header 子组件---{{title}}</a>
        <button @click="run(123)">调用home run方法</button>

        <button @click="getParme()">获取home的数据和方法</button>

        <button @click="getParent()">子组件获取父组件的数据和方法</button>
       
    </div>
</template>


<script>
    export default {
        data() {
            return {
                msg: "我是一个子组件header组件"
            }
        },
        methods: {
            getParme() {
                alert(this.home.title)
            },
            run44() {
                alert('我是子组件的run方法')
            },
            getParent() {
                alert(this.$parent.msg);
                this.$parent.run('123');
            }
            
        },
        props: ['title', 'run', 'home']
    }
</script>


<style lang="sass">

</style>