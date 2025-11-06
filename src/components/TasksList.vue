<script setup>

import {ref, onMounted} from 'vue';
import {taskService} from '../services/api';


const tasks = ref([]);
const newDescription = ref('');

/**
 * fetchTasks is an asynchronous function responsible for retrieving a list of tasks
 * from the task service and updating the `tasks` variable with the fetched data.
 *
 * The function makes use of a try-catch block to handle potential errors that may occur
 * during the service request. If the request is successful, the `tasks` variable is updated
 * with the response data. Any errors encountered during the process are logged to the console.
 *
 * Functionality:
 * - Calls the `taskService.getTasks()` method to fetch the task data.
 * - Updates the `tasks` variable with the fetched data upon successful response.
 * - Logs an error message to the console in case of a failure.
 */
const fetchTasks = async () => {
  try {
    const response = await taskService.getTasks();
    tasks.value = response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des tasks :', error);
  }
}

/**
 * createTask is an asynchronous function responsible for creating a new task
 * using the task service. It checks if the new description is not empty before
 * making the request. If the request is successful, the `newDescription` variable
 * is reset to an empty string and the `fetchTasks` function is called to update
 * the task list.
 * @returns {Promise<void>}
 */
const createTask = async () => {
  if (!newDescription.value) return;
  try {
    await taskService.createTask({description: newDescription.value});
    newDescription.value = '';
    fetchTasks();
  } catch (error) {
    console.error("Erreur lors de la création de la task :", error)
  }
}
onMounted(fetchTasks);

/**
 * onMounted is a lifecycle hook that is called when the component is mounted.
 * It is used to fetch the list of tasks from the task service and update the
 * `tasks` variable with the fetched data.
 * @returns {Promise<void>}
 */
onMounted(async () => {
  try {
    const response = await taskService.getTasks();
    tasks.value = response.data;
  } catch (error) {
    console.error('Erreur lors de la récupération des tâches :', error);
  }
});

/**
 * toggleStatus is a asynchronous function responsible for updating the status of a task
 * using the task service. It makes a request to the task service to update the status
 * of the task with the provided ID. If the request is successful, the `fetchTasks` function
 * is called to update the task list.
 * @param task
 * @returns {Promise<void>}
 */
const toggleStatus = async (task) => {
  try {
    await taskService.updateTaskStatus(task.id, !task.status);
    fetchTasks();
  } catch (error) {
    console.error('Erreur lors de la mise à jour du status :', error);
  }
};

/**
 * removeTask is an asynchronous function responsible for removing a task
 * using the task service. It makes a request to the task service to delete the task
 * with the provided ID. If the request is successful, the `fetchTasks` function
 * is called to update the task list.
 * @param task
 * @returns {Promise<void>}
 */
const removeTask = async (task) => {
  try{
    await taskService.deleteTask(task.id);
    fetchTasks();
  }catch(error){
    console.error('Erreur lors de la suppression de la task :', error);
  }
};

</script>

<template>
  <div>
    <h2>Liste des tâches</h2>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.id }} - {{ task.description }} -
        {{ task.status ? 'En cours' : 'Terminée' }}
        <button @click="toggleStatus(task)">
          {{ task.status ? 'Terminer' : 'Reprendre' }}
        </button>
        <button @click="removeTask(task)">Supprimer</button>
      </li>
    </ul>
  </div>

  <h3>Ajouter une tâche</h3>
  <input v-model="newDescription" placeholder="Nouvelle tâche"/>
  <button @click="createTask">Ajouter</button>

</template>

<style scoped>

</style>