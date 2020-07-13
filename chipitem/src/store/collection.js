export default {
    namespaced: true,
    state: {
        collectionlist:[]
    },
    mutations: {
        addlike(state,obj){
            state.collectionlist.push(obj);
        },
        removelike(state,index){
            state.collectionlist.splice(index,1);
        }
    },
    actions: {
    },
    modules: {
    }
    
};