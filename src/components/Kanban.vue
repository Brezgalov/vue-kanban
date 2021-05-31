<template>
  <div>
    <draggable
      class="kanban-sheet"
      v-model="columns"
      v-bind="dragOptions"
      @start="drag = true"
      @end="drag = false"
    >
      <transition-group type="transition" :name="!drag ? 'flip-list' : null">
        <div class="kanban-column" v-for="element in columns" :key="element.order">
          <div class="kanban-column-head">{{ element.name }}</div>
          <div class="kanban-column-body">
            <template v-for="task in tasks">
              <div class="kanban-task" :key="task.id">
                ({{ task.order }}) {{ task.text }}
              </div>
            </template>
          </div>
        </div>
      </transition-group>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: { draggable },
  name: 'Kanban',
  props: {
    columns: Array,
    tasks: Array,
  },
  data() {
    return {
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
        handle: ".kanban-column-head"
      };
    }
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
