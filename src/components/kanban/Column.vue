<template>
    <div class="kanban-column">
      <div class="kanban-column-head">{{ name }}</div>
      <div class="kanban-column-body">
        <template v-for="task in tasks">
          <div class="kanban-task" :key="task.id">
            ({{ task.order }}) {{ task.text }}
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