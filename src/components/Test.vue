<template>
  <div>
    <draggable
      class="kanban-sheet"
      v-model="list"
      v-bind="dragOptions"
      @start="drag = true"
      @end="drag = false"
    >
      <transition-group type="transition" :name="!drag ? 'flip-list' : null">
        <div class="kanban-column" v-for="element in list" :key="element.order">
          <div class="kanban-column-head">{{ element.name }}</div>
          <div class="kanban-column-body">
            <template v-for="task in tasks">
              <div class="kanban-task" :key="task.id">
                {{ task.text }}
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

const message = [
  "vue.draggable",
  "draggable",
  "component",
  "for",
  "vue.js 2.0",
  "based",
  "on",
  "Sortablejs"
];

export default {
  name: "Test",
  display: "Transitions",
  order: 7,
  components: {
    draggable
  },
  data() {
    return {
      tasks: [
        {
          id: 1,
          text: "lorem ipsum dollar sit amet 1"
        },
        {
          id: 2,
          text: "lorem ipsum dollar sit amet 2"
        },
        {
          id: 3,
          text: "lorem ipsum dollar sit amet 3"
        },
      ],
      list: message.map((name, index) => {
        return { name, order: index + 1 };
      }),
      drag: false
    };
  },
  methods: {
    sort() {
      this.list = this.list.sort((a, b) => a.order - b.order);
    }
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
};
</script>

<style>
  .kanban-sheet > span {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
  }
  .kanban-column {
    width: 24%;
    padding: .5%;
  }

.kanban-column-head {
  padding: 3px;
  font-size: 18px;
  background-color: red;
}

.button {
  margin-top: 35px;
}

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: .15;
  background: #c8ebfb;
}

.list-group {
  min-height: 20px;
}

.kanban-column-head::active {
  cursor: move;
}

.kanban-column-head {
  cursor: pointer;
}
</style>