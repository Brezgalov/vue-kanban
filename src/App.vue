<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="test" >Test</button>
    <Kanban/>
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
      columns: [],
      tasks: [],
      accessToken: "123",
      apiBaseUrl: "321"
    };
  },
  methods: {
    init() {
      this.$store.dispatch('init');
    },
    test() {
    }
  },
  computed: {
    
  },
  mounted() {
    this.init();
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
  margin-left: .5%;
  margin-right: .5%;
  border: 1px solid black;
  height: fit-content;
}
.kanban-column-head {
  padding: 5px;
  font-size: 20px;
  background-color: red;
}
.kanban-column-body {
  padding: 5px;
}
.tasks-list > span{
  display: block;
  min-height: 20px;
}
.kanban-task {
  padding: 5px;
  margin-bottom: 10px;
}
.kanban-task-head {
  padding: 5px;
  font-size: 16px;
  background-color: black;
  color: white;
}
.kanban-task-body {
  padding: 5px;
  border: 1px solid black;
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