<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="test" >Test</button>
    <Kanban :tasks="tasks" :columns="columns"/>
  </div>
</template>

<script>
import Kanban from './components/Kanban.vue';

export default {
  name: 'App',
  components: {
    Kanban
  },
  data() {
    return {
      columns: [
        {
          id: 4,
          name: 'Ready',
          order: 3,
        },
        {
          id: 1,
          name: 'Waiting',
          order: 0,
        },
        {
          id: 3,
          name: 'Testing',
          order: 2,
        },
        {
          id: 2,
          name: 'Active',
          order: 1,
        },
      ],
      tasks: [
        {
          id: 1,
          text: "lorem ipsum dollar sit amet 1",
          order: 1
        },
        {
          id: 2,
          text: "lorem ipsum dollar sit amet 2",
          order: 2
        },
        {
          id: 3,
          text: "lorem ipsum dollar sit amet 3",
          order: 3
        },
      ],
      accessToken: "123",
      apiBaseUrl: "321"
    };
  },
  methods: {
    orderColumns() {
      this.columns.sort((a, b) => (a.order === b.order ? 0 : (a.order > b.order ? 1 : -1)));
    },
    test() {
    }
  },
  computed: {
    
  },
  mounted() {
    this.orderColumns();
    // axios
    //   .get('https://api.coindesk.com/v1/bpi/currentprice.json')
    //   .then(response => (this.info = response));
  }
}
</script>

<style>
.kanban-sheet > span {
    display: flex;
    flex-direction: row;
    overflow-x: auto;
    overflow-y: hidden;
    width: 100%;
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