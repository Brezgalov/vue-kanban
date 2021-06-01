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
            id: 1,
            name: 'Waiting',
            order: 0,
          },
          {
            id: 2,
            name: 'Active',
            order: 1,
          },
          {
            id: 3,
            name: 'Testing',
            order: 2,
          },
          {
            id: 4,
            name: 'Ready',
            order: 3,
          },         
        ]); 
      }
    },
    mutations: {
      setItems(state, data) {
        state.items = data;
       }
    }
  }