export default {
    namespaced: true,
    state: {
        items: [],
    },
    actions: {
      fetchAll(context) {
        // api call for data

        context.commit('setItems', [
          {
            column_id:1,
            description:"lorem ipsum dollar sit amet",
            id:1,
            order:2,
            title:"Task 1",
          },
          {
            column_id:1,
            description:"lorem ipsum dollar sit amet",
            id:2,
            order:1,
            title:"Task 2",
          },
          {
            column_id:3,
            description:"lorem ipsum dollar sit amet",
            id:3,
            order:1,
            title:"Task 3",
          },
        ]);
      }
    },
    mutations: {
      setItems(state, data) {
        state.items = data;
       }
    },
    getters: {
      byColumn(state, columnId) {
        return state.items.filter(item => item.column_id === columnId);
      }
    }
  }