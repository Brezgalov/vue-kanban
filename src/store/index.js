import Vue from 'vue'
import Vuex from 'vuex'

import columns from './modules/columns.js';
import tasks from './modules/tasks.js';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    columns,
    tasks,
  },
  state: {
  },
  actions: {
    init(context) {
      context.dispatch('columns/fetchAll');
      context.dispatch('tasks/fetchAll');
    }
  },
});













//   pullColumns() {
      //     this.state.columns = [
      //       {
      //         id: 1,
      //         name: 'Waiting',
      //         order: 0,
      //       },
      //       {
      //         id: 2,
      //         name: 'Active',
      //         order: 1,
      //       },
      //       {
      //         id: 3,
      //         name: 'Testing',
      //         order: 2,
      //       },
      //       {
      //         id: 4,
      //         name: 'Ready',
      //         order: 3,
      //       },            
      //     ];
      //   },
      //   pullTasks() {
      //     let store = this;

      //     this.commit('pullColumns');
  
      //     let tasksIdIncrement = 1;
      //     let tasksPattern = [
      //         {
      //           title: "Task 1",
      //           description: "lorem ipsum dollar sit amet",
      //           order: 1
      //         },
      //         {
      //           title: "Task 2",
      //           description: "lorem ipsum dollar sit amet",
      //           order: 2
      //         },
      //         {
      //           title: "Task 3",
      //           description: "lorem ipsum dollar sit amet",
      //           order: 3
      //         },
      //     ];
      
      //     store.state.tasks = [];
  
      //     store.state.columns.forEach(function(column) {
      //       tasksPattern.forEach(function(taskPattern) {
      //         store.state.tasks.push({
      //           id: tasksIdIncrement++,
      //           column_id: column.id,
      //           title: "Column #" + column.name + " / " + taskPattern.title,
      //           description: taskPattern.description,
      //           order: taskPattern.order
      //         });
      //       });
      //     });
      //   },
      // }