<template>
  <div class="kanban-column">
    <div class="kanban-column-head">{{ name }} ({{ order }})</div>
    <div class="kanban-column-body">
      <draggable 
        class="tasks-list"
        v-model="localTasks"
        v-bind="taskDragOptions"
        @change="updateTask"
      >
        <transition-group type="transition">
            <template v-for="task in localTasks">
              <div class="kanban-task" :key="task.id">
                <div class="kanban-task-head">ColumnID: {{task.column_id}} / {{ task.title }} ({{ task.order }})</div>
                <div class="kanban-task-body">{{ task.description }}</div>
              </div>
            </template>
          </transition-group>
      </draggable>
    </div>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: 'Column',
  components: { draggable },
  props: {
    id: Number,
    name: String,
    order: Number,
    tasks: Array,
  },
  computed: {
    localTasks: {
      get() {
        return this.tasks;
      },
      set(value) {
        if (value.length > 0) {
          value.forEach((task) => this.$store.dispatch('tasks/setTask', {id: task.id, column_id: this.id}));
        }        
      }
    },
    taskDragOptions() {
      return {
        animation: 200,
        group: "tasks",
        disabled: false,
        ghostClass: "ghost",
        draggable: ".kanban-task",
        //handle: ".kanban-task-head",
      };
    }
  },
  methods: {
    updateTask() {
      this.tasks.map((item, index) => {     
        let newOrder = index + 1;

        if (item.order != newOrder || item.column_id != this.id) {
          console.log('tasks/setTask', {
            id: item.id,
            order: newOrder,
            column_id: this.id,
          });
          // item.order = newOrder;
          // item.column_id = this.id;
          this.$store.dispatch('tasks/setTask', {
            id: item.id,
            order: newOrder,
            column_id: this.id,
          });
        }

        return item;
      });
    }
  }  
}
</script>