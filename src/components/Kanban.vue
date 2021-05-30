<template>
  <div class="kanban-sheet">
    <column 
      v-for="column in columns" 
      :key="column.id" 
      :name="column.name"
      :order="column.order"
    ></column>
  </div>
</template>

<script>
import Column from './kanban/Column.vue';

export default {
  components: { Column },
  name: 'Kanban',
  props: {
    columns: Array,
    tasks: Array,
  },
  data() {
    return {
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .kanban-sheet {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .kanban-column {
    width: 24%;
    padding: .5%;
  }
</style>
