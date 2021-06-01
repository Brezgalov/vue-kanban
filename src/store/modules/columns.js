export default {
    namespaced: true,
    state: {
        items: [],
    },
    getters: {
      getById(state) {
        return (id) => {
          let result = state.items.filter(item => item.id === id);

          return result.length > 0 ? result.pop() : null;
        }
      }
    },
    mutations: {
      setItems(state, data) {
        state.items = data;
      },
      setColumn(state, column) {
        if (column.id) {
          let columnFound = this.getters['columns/getById'](column.id);
          
          console.log('seyup', {column, columnFound});
          
          // update column in array
        }        
      }
    },
    actions: {
      fetchAll(context) {
        // api call for data

        context.commit('setItems', [
          {
            id: 1,
            name: 'Waiting',
            order: 1,
          },
          {
            id: 2,
            name: 'Active',
            order: 2,
          },
          {
            id: 3,
            name: 'Testing',
            order: 3,
          },
          {
            id: 4,
            name: 'Ready',
            order: 4,
          },         
        ]); 
      },
      setColumn(context, data) {
        console.log('api call setColumn', data);

        context.commit('setColumn', data);

        // api call for update
      },
      setItems(context, data) {
        console.log('api call setItems', data);

        context.commit('setItems', data);
      }
    }
  }