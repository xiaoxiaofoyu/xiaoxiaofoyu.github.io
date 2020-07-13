export default {
    namespaced: true,
    state: {
        history:[]
    },
    mutations: {
        // 搜索历史
        search(state,place){
            state.history.push(place);
        },
        // 清空搜索历史
        clearhistory(state){
            state.history=[];
        }
    },
    actions: {
    },
    modules: {
    }
    
};