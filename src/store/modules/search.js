
const search = {

    state: {
        searchInfo: {}, //筛选条件
        fromPath:''
    },

    mutations: {
        saveCondition(state, dic){
            state.searchInfo = dic;
        },

        savePath(state, path){
            state.fromPath = path;
        }
    },

    actions: {
        saveSearchCondition({commit},dic){
            commit('saveCondition', dic);
        },
        
        clearSearchCondition({commit}){
            commit('saveCondition', {});
        },

        saveFromPath({commit}, path){
            commit('savePath', path);
        }
    }
}

export default search;
