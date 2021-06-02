export default {
    namespaced: true,
    state: {
        loaded: false,
        items: [],
    },
    getters: {
      byColumn(state) {
        return (columnId) => state.items.filter(item => item.column_id == columnId);
      },
      loaded(state) {
        return state.loaded;
      }
    },
    mutations: {
      setItems(state, data) {
        state.items = data;
      },
      addItems(state, taksPayload) {
        taksPayload.forEach(function(task) {
          let indexFound = state.items.findIndex(function(i) {
            return i.id === task.id;
          });

          state.items.splice(indexFound, 1);

          state.items.push(task);
        });
      },
      setLoaded(state, value) {
        state.loaded = value;
      }
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

        context.commit('setLoaded', true);
      },
      addItemsLocal(context, payload) {
        context.commit('addItems', payload);
      },
    },
  }