<template>
  <div class="kanban-column">
    <div class="kanban-column-head">{{ name }} ({{ order }})</div>
    <div class="kanban-column-body">
      <draggable 
        class="tasks-list"
        v-model="dataTasks"
        v-bind="taskDragOptions"
        @start="taskDragStart"
        @end="taskDragEnd"
      >
        <transition-group type="transition">
            <template v-for="task in dataTasks">
              <div class="kanban-task" :key="task.id">
                <div class="kanban-task-head">{{ task.title }} ({{ task.order }})</div>
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
    this.dataTasks = this.tasks;
  },
  props: {
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
    taskDragStart() {
    },
    taskDragEnd() {
    }
  }
}
</script>