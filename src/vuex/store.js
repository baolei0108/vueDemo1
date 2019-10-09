import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

//在state中存储数据

var state = {
    count: 1
}

//方法

var mutations = {
    incCount(state) {
        ++state.count;
    },
    incCount2(state, n) {
        state.count + n;
    }

}


var getters = {

    computedCount: (state) => {
         return state.cont*2
    }
}



const store = new Vuex.Store({
    state,
    mutations,
    getters
})



export default store;