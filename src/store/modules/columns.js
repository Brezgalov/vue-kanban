export default {
    namespaced: true,
    state: {
        loaded: false,
        items: [],
    },
    getters: {
      loaded(state) {
        return state.loaded;
      },
      getById(state) {
        return (id) => {
          let result = state.items.filter(item => item.id === id);

          return result.length > 0 ? result.pop() : null;
        }
      }
    },
    mutations: {
      setLoaded(state, value) {
        state.loaded = value;
      },
      setItems(state, data) {
        state.items = data;
      },
      setColumn(state, newColumnData) {
        if (newColumnData.id) {
          let columnFound = this.getters['columns/getById'](newColumnData.id);
          
          // update column in array
          for (let prop in newColumnData) {
            if (prop === 'id') {
              continue;
            }

            columnFound[prop] = newColumnData[prop];
          }        
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

        context.commit('setLoaded', true);
      },
      setColumn(context, data) {
        console.log('api call setColumn', data);

        context.commit('setColumn', data);

        // api call for update
      },
      setItemsLocal(context, payload) {
        // no api call, mutation only
        context.commit('setItems', payload);
      }
    }
  }