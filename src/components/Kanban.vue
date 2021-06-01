<template>
  <div>
    <draggable
      class="kanban-sheet"
      v-model="columns"
      v-bind="columnDragOptions"
      @start="columnDragStart"
      @end="columnDragEnd"
      @change="updateColumn"
    >
      <transition-group type="transition">
        <column 
          v-for="column in columns" 
          :key="column.id"
          :id="column.id"
          :name="column.name"
          :order="column.order"
        ></column>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Column from './kanban/Column.vue';

export default {
  components: { Column, draggable },
  name: 'Kanban',
  computed: {
    columns: {
      get() {
        return [...this.$store.state.columns.items];
      },
      set(value) {
        this.$store.dispatch('columns/setItems', value);
      }      
    },
    columnDragOptions() {
      return {
        animation: 200,
        group: "columns",
        disabled: false,
        ghostClass: "ghost",
        draggable: ".kanban-column",
        handle: ".kanban-column-head",
      };
    }
  },
  methods: {
    columnDragStart() {
      console.log('start');
    },
    columnDragEnd() {
      console.log('end');
    },
    updateColumn() {
      console.log('changeEvent');
      
      this.columns.map((item, index) => {
        const newSort = index + 1;
        // also add in a new property called has changed if you want to style them / send an api call
        let hasChanged = item.order !== newSort;

        console.log(item, hasChanged, item.order, newSort);
        if (hasChanged) {
          // item.order = newSort;
          this.$store.dispatch('columns/setColumn', {id: item.id, order: newSort});
        }

        return item;
      });
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
