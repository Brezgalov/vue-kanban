export default {
    namespaced: true,
    state: {
        loaded: false,
        items: [],
    },
    getters: {
      byId(state) {
        return (id) => {
          let result = state.items.filter(item => item.id == id);
          return result.length > 0 ? result[0] : null;
        };
      },
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
      },
      setTask(state, data) {
        let taskFound = this.getters['tasks/byId'](data.id);
console.log('tf', taskFound);
        if (taskFound) {
          for(let prop in data) {
            if (prop === 'id') {
              continue;
            }

            taskFound[prop] = data[prop];
            console.log('tf', taskFound);
          }
        } else {
          state.items.push(data);
        }

        this.commit('tasks/orderTasks');
      },
      orderTasks(state) {
        state.items.sort((a, b) => (a.order === b.order ? 0 : (a.order > b.order ? 1 : -1)));
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
      setItems(context, payload) {
        context.commit('setItems', payload);
      },
      setTask(context, data) {
        console.log('api call updateTask', data);

        context.commit('setTask', data);
      }
    },
  }