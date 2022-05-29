// 引入Vue
import Vue from "vue"
// 引入Vuex
import Vuex from "vuex"
// 应用Vuex插件
Vue.use(Vuex)

// 准备actions对象-响应组件中用户的动作
const actions = {
    addobj(context, value) {
        context.commit('ADDOBJ', value)
    },
    chgobj(context, value) {
        context.commit('CHGOBJ', value)
    },
    dltobj(context, value) {
        context.commit('DLTOBJ', value)
    },
    chcall(context, value) {
        context.commit('CHCALL', value)
    }
}

// 准备mutation对象-修改state中的数据
const mutations = {
    ADDOBJ(state, value) {
        state = state.todoObj.unshift(value)
    },
    CHGOBJ(state, value) {
        state.todoObj.forEach(element => {
            if (element.id == value) {
                element.done = !element.done
            }
        });
    },
    DLTOBJ(state, value) {
        state.todoObj = state.todoObj.filter((todo) => {
            return todo.id != value
        })
    },
    CHCALL(state, value) {
        if (value) {
            state.todoObj.forEach((e) => {
                e.done = true;
            })
        } else {
            state.todoObj.forEach((e) => {
                e.done = false;
            })
        }
    },
    // 删除已完成
    DLTSUC(state) {
        state.todoObj = state.todoObj.filter((e) => {
            return e.done == false
        })
    }

}

// 准备state对象-保存具体的数据
const state = {
    todoObj: [
        { id: '001', name: '吃饭', done: false },
        { id: '002', name: '睡觉', done: false },
        { id: '003', name: '打豆豆', done: true },
    ]
}

export default new Vuex.Store({     //创建并暴露store
    actions,
    mutations,
    state
})