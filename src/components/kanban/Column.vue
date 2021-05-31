<template>
  <div class="kanban-column">
    <div class="kanban-column-head">{{ name }} ({{ order }})</div>
    <div class="kanban-column-body">
      <template v-for="task in tasks">
        <div class="kanban-task" :key="task.id">
          <div class="kanban-task-head">{{ task.title }} ({{ task.order }})</div>
          <div class="kanban-task-body">{{ task.description }}</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Column',
  props: {
    name: String,
    order: Number,
    tasks: Array,
  },
  data() {
    return {
    };
  }
}
</script>