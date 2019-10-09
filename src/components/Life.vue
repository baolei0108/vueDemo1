<template>
    <div class="life">
        <div>生命周期函数</div>


    </div>
</template>


<script>
    export default {
        data() {
            return {
                msg: 'this is home组件'
            }
        },
        methods: {
            run() {
                alert(this.msg);
            }
        },
        beforeCreate() {
            console.log('被创建之前3')

        },
        mounted() {
            console.log('被创建4')
        }
    }
</script>


<!--scoped表示样式仅限于局部-->
<style lang="scss" scoped>
    

</style>