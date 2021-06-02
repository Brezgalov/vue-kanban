<template>
  <div>
    <draggable
      class="kanban-sheet"
      v-model="columns"
      v-bind="columnDragOptions"
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
        // Здесь сохраняем локально пересортированный список
        // order изменится в соответствии с положением в списке по событию change
        // поэтому вызов апи пойдет оттуда, тут только локальный стор
        this.$store.dispatch('columns/setItemsLocal', value);
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
    updateColumn() {      
      this.columns.map((item, index) => {
        const newSort = index + 1;

        if (item.order !== newSort) {
          this.$store.dispatch('columns/setColumn', {id: item.id, order: newSort});
        }

        return item;
      });
    },
  }
}
</script>
