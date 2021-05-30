<template>
    <div class="kanban-column">
        <div class="kanban-column-name">{{ name }}</div>
        {{ order }}
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