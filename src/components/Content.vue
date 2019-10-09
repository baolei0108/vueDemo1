<template>
    <div id="content">
        <p>我是详情页</p>

        


    </div>
</template>


<script>
    export default {
        data() {
            return {
                list: ['111', '222', '333']
            }
        },
        mounted() {
            console.log('22')
            console.log(this.$route.params)
        }
    }
</script>