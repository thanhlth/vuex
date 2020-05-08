import stocks from '../../data/stocks';
const state = {
    stocks:[]
};
const getters = {
    stocks: state => {
        return state.stocks;
    }
};
const mutations = {
    'SET_STOCKS' (state, stocks){
        state.stocks = stocks;
    },
    'RND_STOCK' (state) {
        state.stocks.forEach(stock =>{
            stock.price = Math.round(stock.price *(0.5+Math.random()));
        });
    }

};

const actions = {
    buyStock: ({commit}, order) => {
        commit('BUY_STOCK', order);

    },
    initStocks: ({commit}) => {
        commit('SET_STOCKS', stocks);
    },
    randomizeStocks: ({commit}) => {
        commit('RND_STOCKS');
    }
};

export default {
    state,
    mutations,
    actions,
    getters
}