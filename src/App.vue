<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <button @click="test" >Test</button>
    <Test></Test>
    <Kanban :tasks="tasks" :columns="columns"/>
  </div>
</template>

<script>
import Test from './components/Test.vue';
import Kanban from './components/Kanban.vue';

export default {
  name: 'App',
  components: {
    Kanban,
    Test
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
      tasks: [],
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
</style>