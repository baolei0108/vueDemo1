<template>
    <div id="content">
        <p>我是pcontent详情页</p>

        <p>{{list.title}}</p>

        <div v-html="list.content">
            
        </div>

        


    </div>
</template>


<script>
    export default {
        data() {
            return {
                list: []
            }
        },
        mounted() {
            console.log('33333')
            console.log(this.$route.query.id)
            var aid = this.$route.query.id;
            this.requestData(aid)

        },
        methods: {
            requestData(aid) {
                var api = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+ aid;
                this.$http.jsonp(api).then( (res)=> {
                    console.log(res);

                    this.list = res.body.result[0]

                }, (err)=> {
                    console.log(err)

                })

            }
        },
    }
</script>