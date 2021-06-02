<template>
  <div class="kanban-column">
    <div class="kanban-column-head">{{ name }} ({{ order }})</div>
    <div class="kanban-column-body">
      <draggable 
        class="tasks-list"
        v-model="dataTasks"
        v-bind="taskDragOptions"
        @change="updateTask"
      >
        <transition-group type="transition">
            <template v-for="task in dataTasks">
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
  mounted() {
    console.log(this.tasks)
    this.dataTasks = this.tasks;
  },
  props: {
    id: Number,
    name: String,
    order: Number,
    tasks: Array,
  },
  computed: {
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
  data() {
    return {
      dataTasks: [],
    };
  },
  methods: {
    updateTask() {
      const newList = [...this.dataTasks].map((item, index) => {     
        item.order = index + 1;
        item.column_id = this.id
        return item;
      });

      this.dataTasks = newList;
    }
  }
}
</script>