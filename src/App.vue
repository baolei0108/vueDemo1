<template>

<!-- vue的模板里面 所有的内容要被一个根节点包含起来  -->

  <div id="app">

      <!--使用vue-router 动态添加路由和组件-->
      <router-link to="/home">首页</router-link>
      <router-link to="/news">新闻</router-link>
      <hr>
      <router-view></router-view>


  </div>
</template>

<script>
    // import Home from "./components/Home.vue"
    // import News from "./components/News.vue"
    var storage = require('./model/storage.js')
    export default {     
      data () {  /*业务逻辑里面定义的数据*/
        return {
          msg: '你好vue',
          obj:{
            name:"张三"
          },
          list:['111','222','333'],
          list1:[
            {'title':'11111'},
            {'title':'222'},
            {'title':'333333'},
            {'title':'44444'}
          ],
          list2:[
              {
                "cate":"国内新闻",
                "list":[

                   {'title':'国内新闻11111'},
                   {'title':'国内新闻2222'}
                ]
              },
              {
                "cate":"国际新闻",
                "list":[

                   {'title':'国际新闻11111'},
                   {'title':'国际新闻2222'}
                ]
              }

          ],
          title: "this is title",
          h: "<h2>我是h2</h2>",
          flag: true,
          mywidth:200,
          dat: '789',
          newlist: [],
          todo: '',
          todolist: [
            {
              title: '数学',
              checked: false
            },
            {
              title: '语文',
              checked: true
            }
          ]

        }
      },
      methods: {
        getDat() {
          alert('dat：'+ this.dat)
        },
        setDat() {
          this.dat = '123456';
        },
        getInputvalue() {
          console.log(this.$refs.userinfo);

          this.$refs.box.style.color = 'red';
          alert(this.$refs.userinfo.value)
        },
        run1() {
          alert('方法1')
        },
        run2() {
          alert('方法2')
        },
        getList() {
          for(var i= 0;i< 5; i++) {
            this.newlist.push('这是第' + i + "个数据");
          }
        },

        fun1(val) {
          alert('传来的值是： ' + val);

        },
        eventFn(e) {
          console.log(e);
          //e.srcElement 表示dom节点
          var dom = e.srcElement
          e.srcElement.style.color = 'red';
          //打印 自定义属性
          console.log(dom.dataset.aid)

        },
        addTodo() {
          //alert('addTodo');
          //首先获得input值 然后将值push到todolist当中
          this.todolist.push({
            title: this.todo,
            checked: false
          });
          this.todo = '';

          //  localStorage.setItem('list', JSON.stringify(this.todolist))
           storage.set('list', this.todolist);
        },
        addTodo2(e) {
          //alert('addTodo');
          //首先获得input值 然后将值push到todolist当中
          // console.log(e.keyCode); 13表示enter

          if(e.keyCode == 13) {
            this.todolist.push({
            title: this.todo,
            checked: false
            });
            this.todo = '';

          }

          // localStorage.setItem('list', JSON.stringify(this.todolist))
          storage.set('list', this.todolist);


          
        },
        removeTodo(key) {
          this.todolist.splice(key, 1);

          // localStorage.setItem('list', JSON.stringify(this.todolist))
          storage.set('list', this.todolist);


        },
        saveList() {
          // localStorage.setItem('list', JSON.stringify(this.todolist))
          storage.set('list', this.todolist);
        }
      },
      mounted() {
        //mounted是生命周期函数 页面刷新就会存在
        // var list = JSON.parse(localStorage.getItem('list'));
        var list = storage.get('list')
        if(list) {
          this.todolist = list;
        }
      },
      components: {
        // 'v-home': Home,
        // 'v-news': News
      }
    }
</script>


<style lang="scss">

.red{
  color:red;
}

.blue {
  color:blue
}

.box{
  height:100px;
  width:100px;
  background:red;
}

.finish {
  li {
    background: #eee;
  }
}


</style>
