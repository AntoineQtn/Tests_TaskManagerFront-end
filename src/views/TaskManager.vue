<template>
  <div>
    <section aria-label="Bienvenue">
      <Hello />
    </section>

    <section aria-label="Liste des tâches">
      <TasksList />
    </section>
  </div>
</template>

<script>
import Hello from '../components/Hello.vue';
import TasksList from '../components/TasksList.vue';

export default {
  components: { Hello, TasksList: TasksList },
};
</script>
