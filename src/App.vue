<template>
  <div id="app">
    <header>
      <h1>Task Manager</h1>
    </header>
    <main>
      <TaskManager />
    </main>
  </div>
</template>

<script>
import TaskManager from './views/TaskManager.vue';

export default {
  components: { TaskManager },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 20px;
}
header h1 {
  font-size: 2rem;
}
main {
  margin-top: 20px;
}
</style>
