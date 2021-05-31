<template>
  <div>
    <draggable
      class="kanban-sheet"
      v-model="dataColumns"
      v-bind="dragOptions"
      @start="columnDragStart"
      @end="columnDragEnd"
      @change="updateListSortOrder"
    >
      <transition-group type="transition" :name="!drag ? 'flip-list' : null">
        <column 
          v-for="column in dataColumns" 
          :key="column.id"
          :name="column.name"
          :order="column.order"
          :tasks="dataTasks"
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
  props: {
    columns: Array,
    tasks: Array,
  },
  mounted() {
    this.dataColumns = this.columns;
    this.dataTasks = this.tasks;
  },
  data() {
    return {
      dataColumns: [],
      dataTasks: [],
      drag: false
    };
  },
  computed: {
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        disabled: false,
        ghostClass: "ghost",
        draggable: ".kanban-column",
        handle: ".kanban-column-head",
      };
    }
  },
  methods: {
    columnDragStart() {
      this.drag = true;
    },
    columnDragEnd() {
      this.drag = false;
      console.log(this.dataColumns);
    },
    updateListSortOrder() {
      const newList = [...this.dataColumns].map((item, index) => {
        const newSort = index + 1;
        // also add in a new property called has changed if you want to style them / send an api call
        item.hasChanged = item.order !== newSort;
        if (item.hasChanged) {
          item.order = newSort;
        }
        return item;
      });
      
      this.dataColumns = newList;
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
