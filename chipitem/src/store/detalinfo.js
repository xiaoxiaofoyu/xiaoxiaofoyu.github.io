export default {
    namespaced: true,
    state: {
        // 存储酒店信息
        shopcar: [],
        index: 0,
    },
    mutations: {
        // 1.0 加购酒店
        add(state, obj) {

            // 1.0 将传递数据添加至数组
            let hoteId = new Date();
            obj.hoteId = hoteId.getTime();
            state.shopcar.push(obj);
            // 获取当前索引值
            state.index = state.shopcar.length-1;
        },
        // 2.0 添加时间
        addTime(state, { starttimes, endtimes }) {
            state.shopcar[state.index].starttimes = starttimes;
            state.shopcar[state.index].endtimes = endtimes;
        },
        // 3.0 添加人数
        addman(state, { humannum, childnum, babynum }) {
            state.shopcar[state.index].humannum = humannum;
            state.shopcar[state.index].childnum = childnum;
            state.shopcar[state.index].babynum = babynum;
        },
        // 4.0 刷新价格
        updateprice(state,{price,hotelnum}){
            state.shopcar[state.index].price = price;
            state.shopcar[state.index].hotelnum = hotelnum;
        }
    },
    actions: {
    },
    modules: {
    }

};